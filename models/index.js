const database = require('./../tools/database');
const Crypto = require('./../tools/crypto');

class ApiModel {

    static async getUserByEmail(email) {
        let query = 'SELECT * FROM users WHERE email = $1';
        let value = [email];
        try {
            const res = await database.query(query, value);
            return res.rows[0];
        } catch (err) {
            console.log(err.stack)
        }
    }

    static async login(params) {
        let User = await this.getUserByEmail(params.email);
        if (User !== undefined) {
            if (Crypto.decrypt(User.password) !== params.password) {
                return 'wrong password';
            }
            return User;
        }

        return 'not exists';
    }

    static async register(params) {
        let query = 'INSERT INTO users(name, email, password, created_at, updated_at) VALUES($1,$2,$3,now(), now())RETURNING *';
        let values = [];
        // Here i used Object.keys for iterate transform the object params to an associative array
        Object.keys(params).forEach(key => {
            values.push(params[key]);
        });
        try {
            const res = await database.query(query, values);
            return res.rows[0];
        } catch (err) {
            console.log(err.stack)
        }
    }

    static async getProducts() {
        let resultQuery = await database.query('SELECT * FROM products');
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