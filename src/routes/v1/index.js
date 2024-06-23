const express = require('express');

const CityController = require('../../controllers/city-controller');
const FlightController = require('../../controllers/flight-controller');
const AirportController = require('../../controllers/airport-controller');
const FlightMiddlewares = require('../../middlewares/flight-middlewares');
const router = express.Router();

router.post('/city',CityController.create);
router.delete('/city/:id',CityController.destroy);
router.patch('/city/:id',CityController.update);
router.get('/city/:id',CityController.get);
router.get('/city',CityController.getAll);


router.post('/flights',FlightMiddlewares.validateCreateFlight,FlightController.create);
router.get('/flights',FlightController.getAllFlights);

router.post('/airport',AirportController.create);

module.exports = router;