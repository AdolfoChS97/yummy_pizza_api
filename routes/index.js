const express = require("express");
const deliveriesRoutes = require('./deliveries');
const ordersRoutes = require('./orders');
const productsRoutes = require('./products');
const sharedRoutes = require('./shared');
let router = express.Router();

router.use([sharedRoutes, ordersRoutes, productsRoutes, deliveriesRoutes]);

module.exports = router;