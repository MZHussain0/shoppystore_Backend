const asyncHandler = require("express-async-handler");
const { Category } = require("../model/Category");

//@desc fetch categories
//@route GET /categories
//@access private
const fetchCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({}).exec();
  res.status(201).json(categories);
});

//@desc create new category
//@route GET /categories
//@access private
const createCategory = asyncHandler(async (req, res) => {
  const body = req.body;
  const category = new Category(body);
  const response = await category.save();
  res.status(201).json(response);
});

module.exports = {
  fetchCategories,
  createCategory,
};
