const {Flights} = require("../models/index");
const {Op} = require("sequelize");

class FlightReposiotry  {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId)  {
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }
        if(data.minPrice && data.maxPrice) {
            Object.assign(filter,{
                [Op.and]:[
                    {price:{[Op.gte]:data.minPrice}},
                    {price:{[Op.lte]:data.maxPrice}}
                ]
            })
        } else {
            if(data.maxPrice) {
                Object.assign(filter,{price:{[Op.lte]:data.maxPrice}});
            }
            if(data.minPrice) {
                Object.assign(filter,{price:{[Op.gte]:data.minPrice}});
            }
        }
        
    return filter;
    }
    async createFLight(data) {
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }

    async getFlight(id) {  
        
        try {
            const flight = Flights.findByPk(id);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
        
    }

    async getAllFlights(filters) {
        try {
            const filterObject = this.#createFilter(filters);
            const flights = Flights.findAll({
                where: filterObject
            });
            return flights;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw {error};
        }
    }
}

module.exports = FlightReposiotry;

// raw sql qury looks like this
/*{
    where :{
        arrivalAirportId: 1,
        departureAirportId: 2,
        price: {
            [Op.gte]: 1000
        }
    }
}*/