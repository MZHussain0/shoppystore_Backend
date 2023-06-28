const asyncHandler = require("express-async-handler");
const { User } = require("../model/User");

exports.createUser = asyncHandler(async (req, res) => {
  const user = new User(req.body);
  const doc = await user.save();
  if (!doc) {
    res.status(400).send("Error creating user");
  }
  res.status(201).json(doc);
});

exports.fetchUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404).send("User not found");
  }
  res.status(201).json(user);
});

exports.updateUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) {
    res.status(404).send("User not found");
  }
  res.status(201).json(user);
});
