const express = require("express");
const ApiController = require("./../../controllers");
const router = express.Router();


router.get("/", async (req, res) => {
    res.send("Hello World by API");
});

router.post("/login", async (req, res) => {
    let response = await ApiController.login(req);
    res.send(response);
});

router.post("/register", async (req, res) => {
    let response = await ApiController.register(req);
    res.send(response);
});

module.exports = router;