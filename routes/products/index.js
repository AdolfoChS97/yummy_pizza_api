const express = require("express");
const ApiController = require("./../../controllers");
const router = express.Router();

router.use(async (req, res, next) => {
    let d = new Date();
    console.log(`Time:${d}`);
    let result = await Jwt.validToken(req.headers.authorization.split(" ")[1]);
    if (!result) {
        res.send({
            result: false,
            data: null,
            errors: {
                message: 'token provided is not valid'
            },
        });
    }
    next();
});

router.get("/products", async (req, res) => {
    let response = await ApiController.getProducts();
    res.send(response);
});

module.exports = router;