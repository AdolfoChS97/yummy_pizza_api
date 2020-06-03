let database = require('./../tools/database');

class ApiModel {
    static async login(params) {
        return 'login';
    }

    static async register(params) {
        let query = 'INSERT INTO users(name, email, password, created_at, updated_at) VALUES($1,$2,$3,now(), now())RETURNING *';
        let values = [];
        // Here i used Object.keys for iterate transform the object params to an associative array
        Object.keys(params).forEach(key => {
            values.push(params[key]);
        });
        try {
            await database.connect();
            const res = await database.query(query, values)
            await database.end();
            return res.rows[0];
        } catch (err) {
            console.log(err.stack)
        }
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