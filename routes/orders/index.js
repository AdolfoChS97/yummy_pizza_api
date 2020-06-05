const express = require("express");
const ApiController = require("./../../controllers");
const router = express.Router();

router.get("/orders", async (req, res) => {
    let response = await ApiController.getOrders();
    res.send(response);
});

router.post("/orders", async (req, res) => {
    let response = await ApiController.addOrders(req);
    res.send(response);
});

module.exports = router;