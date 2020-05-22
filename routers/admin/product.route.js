const express = require("express");
const router = express.Router();

const ProductController = require("../../controllers/product");



router.get("/", ProductController.getAll);



router.delete('/delete/:id', ProductController.delete);








module.exports = router;