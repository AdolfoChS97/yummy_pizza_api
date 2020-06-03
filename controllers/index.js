const ModelController = require("./../models");
const Crypto = require('./../tools/crypto');

class ApiController {
    static async login(req) {
        let result = true;
        let error = [];
        let params = {
            email: req.body.email,
            password: req.body.password
        };
        try {
            let data = await ModelController.login(params);
            return {
                result: result,
                data: data,
                error: [],
            };
        } catch (e) {
            error.push(e);
            return {
                result: !result,
                errors: error,
            };
        }
    }

    static async register(req) {
        let result = true;
        let error = [];
        let params = {
            name: req.body.name,
            email: req.body.email,
            password: Crypto.encrypt(req.body.password),
        };

        try {
            let data = await ModelController.register(params);
            return {
                result: result,
                data: data,
                error: [],
            };
        } catch (e) {
            error.push(e);
            return {
                result: !result,
                errors: error,
            };
        }
    }

    static async getProducts() {
        let result = true;
        let error = [];

        try {
            let data = await ModelController.getProducts();
            return {
                result: result,
                data: data,
                error: [],
            };
        } catch (e) {
            error.push(e);
            return {
                result: !result,
                errors: error,
            };
        }
    }

    static async getOrders(req) {
        return "orders";
    }

    static async addOrders(req) {
        return "add orders";
    }

    static async addDeliveries(req) {
        return "add delivery";
    }
}

module.exports = ApiController;