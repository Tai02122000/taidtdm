const router = require("express").Router();
const productRoute = require("../controllers/product");

router.use("/product", productRoute);
module.exports = router;
