const {ClientErrorCodes} = require('../utils/error-codes')
const validateCreateFlight = (req , res , next) => {
    if(
        !req.body.flightNumber ||
        !req.body.airplaneId ||
        !req.body.departureAirportId ||
        !req.body.arrivalAirportId ||
        !req.body.arravilTime ||
        !req.body.departureTime ||
        !req.body.price
    ) {
        return res.status(ClientErrorCodes.BAD_REQUEST).json({
            data:{},
            success:false,
            message:"Invalid request body for create flight",
            err: 'missing mandatory propertires to create a flight'
        });
    }
    next();
} 

module.exports = {
    validateCreateFlight
}