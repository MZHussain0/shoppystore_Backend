const express = require("express");
const {
  createProduct,
  GetAllProducts,
} = require("../controllers/productController");
const router = express.Router();

router.route("/").post(createProduct);
router.route("/").get(GetAllProducts);

module.exports = router;
