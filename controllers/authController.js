const asyncHandler = require("express-async-handler");
const { User } = require("../model/User");

exports.createUser = asyncHandler(async (req, res) => {
  const user = new User(req.body);
  const doc = await user.save();
  if (!doc) {
    res.status(400).send({ message: "Error creating user" });
  }
  res.status(201).json(doc);
});

exports.loginUser = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).send({ message: "User not found" });
  }

  if (user.password === req.body.password) {
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      addresses: user.addresses,
    });
  } else {
    res.status(400).send({ message: "Invalid credentials" });
  }
});
