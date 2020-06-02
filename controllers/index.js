let sequalize = require('./../tools/database');

class ApiController {

    constructor() {

    }

    static async login(req) {
        return 'login';
    }

    static async register(req) {
        return 'register';
    }

    static async getProducts(req) {
        return 'get products';
    }

    static async getOrders(req) {
        return 'get orders';
    }

    static async addOrders(req) {
        return 'add orders';
    }

    static async addDeliveries(req) {
        return 'add delivery';
    }
}

module.exports = ApiController