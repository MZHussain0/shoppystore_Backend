const asyncHandler = require("express-async-handler");
const { Brand } = require("../model/Brand");

//@desc fetch brands
//@route GET /brands
//@access private
const fetchBrands = asyncHandler(async (req, res) => {
  const brands = await Brand.find({}).exec();
  res.status(201).json(brands);
});

//@desc create new brands
//@route GET /brands
//@access private
const createBrand = asyncHandler(async (req, res) => {
  const body = req.body;
  const brand = new Brand(body);
  const response = await brand.save();
  res.status(201).json(response);
});

module.exports = {
  fetchBrands,
  createBrand,
};
