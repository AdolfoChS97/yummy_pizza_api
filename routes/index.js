const express = require('express');
const app = express();
let router = express.Router();

router.use(async (req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

router.post('/login', async (req, res) => {
    res.send('HELLO');
});

router.post('/register', async (req, res) => {
    res.send('HELLO');
});

router.get('/products', async (req, res) => {
    res.send('HELLO');
})

router.get('/orders', async (req, res) => {
    res.send('HELLO');
});

router.post('/orders', async (req, res) => {
    res.send('HELLO');
});

router.post('/deliveries', async (req, res) => {
    res.send('HELLO');
});

module.exports = router;