const express = require("express");
const router = express.Router();
const recipeController = require("../../server/controllers/recipeController");

/**
 * App Routes
 */
router.get("/", recipeController.homepage);
router.get("/products", recipeController.productsPage);
router.get("/products/:search", recipeController.productsPage);
router.get("/manage/product", recipeController.addproducts);
router.get("/manage/inputproduct", recipeController.inputproducts);
module.exports = router;
