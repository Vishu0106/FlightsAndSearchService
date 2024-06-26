class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const response = await this.repository.create(data )
        } catch (error) {
            console.log("Somthing went wrong in Service layer");
            throw {error}
        }
    }

    async destroy(id) {
        try {
            const response = await this.repository.destroy(id);
            return response;
        } catch (error) {
            console.log("Somthing went wrong in Service layer");
            throw {error}
        }
    }

    async get(id) {
        try {
            const response = await this.repository.get(id);
            return response;
        } catch (error) {
            console.log("Somthing went wrong in Service layer");
            throw {error}
        }
    }

    async getAll() {
        try {
            const response = await this.repository.getAll(id);
            return response;
        } catch (error) {
            console.log("Somthing went wrong in Service layer");
            throw {error}
        }
    }

    async update(id,data) {
        try {
            const response = await this.repository.upddate(id,data);
            return response;
        } catch (error) {
            console.log("Somthing went wrong in Service layer");
            throw {error}
        }
    }
}

module.exports = CrudService;