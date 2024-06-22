const {FlightService} = require('../services/index');

const flightService = new FlightService();

const create = async(req,res)=>{
    try {
        const flight = await flightService.createFlight(req.body);
        res.status(201).json({
            data: flight,
            message: "Sucessfully Created Flight",
            success:true,
            err:{}
        });   
    } catch (error) {
       console.log(error);
       return res.status(500).json({
        data:{},
        success:false,
        message: "Unable to create flight",
        err:error
       }) 
    }
}

const getAllFlights = async(req,res) => {
    try {
        const response = await flightService.getAllFlights(req.query);
        return res.status(200).json({
            data:response,
            success:true,
            message:"Successfully got all flights",
            err:{}
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            data:{},
            success:false,
            message:"Unable to get all flights",
            err:error
        })
    }
}

module.exports = {
    create,
    getAllFlights
}