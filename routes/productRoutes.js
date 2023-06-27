const express = require("express");
const {
  createProduct,
  GetAllProducts,
  GetProductById,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();

router.route("/").post(createProduct);
router.route("/").get(GetAllProducts);
router.route("/:id").get(GetProductById);
router.route("/:id").patch(updateProduct);

module.exports = router;
