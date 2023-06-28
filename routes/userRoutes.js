const express = require("express");
const { fetchUserById, updateUser } = require("../controllers/userController");
const router = express.Router();

router.route("/:id").get(fetchUserById);
router.route("/:id").patch(updateUser);

module.exports = router;
