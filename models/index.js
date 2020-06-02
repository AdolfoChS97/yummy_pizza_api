let database = require('./../tools/database');

class ApiModel {
    static async login(params) {
        return 'login';
    }

    static async register(params) {
        return 'register';
    }

    static async getProducts() {
        await database.connect();
        let resultQuery = await database.query('SELECT * FROM products');
        await database.end();
        return resultQuery.rows;
    }

    static async getOrders(params) {
        return 'get orders';
    }

    static async addOrders(params) {
        return 'add orders';
    }

    static async addDeliveries(params) {
        return 'add delivery';
    }
}

module.exports = ApiModel;