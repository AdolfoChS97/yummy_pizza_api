const database = require('./../tools/database');
const Crypto = require('./../tools/crypto');

class ApiModel {

    static async getUserById(id) {
        let query = 'SELECT * FROM users WHERE id = $1';
        let value = [id];
        try {
            const res = await database.query(query, value);
            return res.rows[0];
        } catch (err) {
            console.log(err.stack)
        }
    }

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

    static async getProductById(id) {
        let query = 'SELECT * FROM products WHERE id = $1';
        let value = [id];
        try {
            const res = await database.query(query, value);
            return res.rows[0];
        } catch (err) {
            console.log(err.stack)
        }
    }

    static async getOrders() {
        let query = `
        select 
            users."name",
            (orders.order_quantity * products.product_price ) as total, 
            products.product_name,
            date(orders.created_at) as order_date
        from orders
            inner join products on products.id = orders.product_id 
            inner join users on users.id = orders.user_id`;
        let result = await database.query(query);
        return result.rows;
    }

    static async getOrderById(id) {
        let query = 'SELECT * FROM orders WHERE id = $1';
        let value = [id];
        try {
            const res = await database.query(query, value);
            return res.rows[0];
        } catch (err) {
            console.log(err.stack)

        }
    }

    static async addOrders(params) {
        let User = await this.getUserById(params.user_id);
        if (User !== undefined) {
            const product = await this.getProductById(params.product_id);
            if (product !== undefined) {
                let query = 'INSERT INTO orders(product_id, user_id, order_quantity, created_at, updated_at) VALUES($1,$2,$3,now(),now())';
                let values = [];
                Object.keys(params).forEach(key => {
                    values.push(params[key]);
                });
                try {
                    await database.query(query, values);
                    return 'order taken correctly';
                } catch (err) {
                    console.log(err.stack)
                }
            }

            return 'product not exists';

        }

        return 'not exists';
    }

    static async addDeliveries(params) {
        let Order = await this.getOrderById(params.order_id);
        if (Order !== undefined) {
            let query = 'INSERT INTO deliveries(order_id, street, zone, parish, city, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, now(), now())';
            let values = [];
            Object.keys(params).forEach(key => {
                values.push(params[key]);
            });
            try {
                await database.query(query, values);
                return 'delivery saved correctly';
            } catch (err) {
                console.log(err.stack)
            }
        }
        return 'delivery doesnt exists';
    }
}

module.exports = ApiModel;