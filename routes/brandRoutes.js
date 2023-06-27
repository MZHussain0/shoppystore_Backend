const express = require("express");
const { fetchBrands, createBrand } = require("../controllers/brandController");
const router = express.Router();

router.route("/").get(fetchBrands);
router.route("/").post(createBrand);

module.exports = router;
