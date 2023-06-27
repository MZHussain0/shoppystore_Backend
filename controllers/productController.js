const asyncHandler = require("express-async-handler");
const { Product } = require("../model/Product");

//@desc create new product
//@route GET /product
//@access private
const createProduct = asyncHandler(async (req, res) => {
  const body = req.body;
  const product = new Product(body);
  const response = await product.save();
  res.status(201).json(response);
});

//@desc get all products
//@route GET /products
//@access private
const GetAllProducts = asyncHandler(async (req, res) => {
  let query = Product.find({});

  if (req.query.category) {
    query = query.find({ category: req.query.category });
  }

  if (req.query.brand) {
    query = query.find({ brand: req.query.brand });
  }

  if (req.query._sort && req.query._order) {
    query = query.sort({ [req.query._sort]: req.query._order });
  }

  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
  }

  const docs = await query.exec();
  const totalDocs = docs.length;
  res.set("X-Total-Count", totalDocs);
  res.status(200).json(docs);
});

module.exports = {
  createProduct,
  GetAllProducts,
};
