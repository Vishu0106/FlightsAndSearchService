const CrudService = require('./crud-service');
const {AirportRepository} = require('../repository/index');
class AirportService extends CrudService {
    constructor() {
        const airpotRepository = new AirportRepository();
        super(airpotRepository);
    }
}

module.exports = AirportService;