const express = require("express");
const ApiController = require("./../../controllers");
const router = express.Router();

router.get("/products", async (req, res) => {
    let response = await ApiController.getProducts();
    res.send(response);
});

module.exports = router;