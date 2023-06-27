const express = require("express");
const {
  fetchCategories,
  createCategory,
} = require("../controllers/categoriesController");
const router = express.Router();

router.route("/").get(fetchCategories);
router.route("/").post(createCategory);

module.exports = router;
