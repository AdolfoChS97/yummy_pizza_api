const ModelController = require('./../models');

class ApiController {

    static async login(req) {
        return 'login';
    }

    static async register(req) {
        return 'register';
    }

    static async getProducts() {
        let result = true;
        let error = []

        try {

            let data = await ModelController.getProducts();
            return {
                result: result,
                data: data,
                error: []
            };

        } catch (e) {
            error.push(e);
            return {
                result: !result,
                errors: error
            }
        }
    }

    static async getOrders(req) {
        return 'orders'
    }

    static async addOrders(req) {
        return 'add orders';
    }

    static async addDeliveries(req) {
        return 'add delivery';
    }
}

module.exports = ApiController