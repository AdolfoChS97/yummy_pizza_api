const express = require('express');
const ApiController = require('./../controllers');
let router = express.Router();

router.use(async (req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.get('/', async (req, res) => {
    res.send('Hello World by API');
});

router.post('/login', async (req, res) => {
    let response = await ApiController.login(req);
    res.send(response);
});

router.post('/register', async (req, res) => {
    let response = await ApiController.register(req);
    res.send(response);
});

router.get('/products', async (req, res) => {
    let response = await ApiController.getProducts(req);
    res.send(response);
})

router.get('/orders', async (req, res) => {
    let response = await ApiController.getOrders(req);
    res.send(response);
});

router.post('/orders', async (req, res) => {
    let response = await ApiController.addOrders(req);
    res.send(response);
});

router.post('/deliveries', async (req, res) => {
    let response = await ApiController.addDeliveries(req);
    res.send(response);
});

module.exports = router;