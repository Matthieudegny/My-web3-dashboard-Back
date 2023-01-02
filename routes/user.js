const express = require("express");

// controller functions
const {
  loginUser,
  signupUser,
  deleteUser,
  getAllUSer,
} = require("../controllers/dashboardController");

const router = express.Router();

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.delete("/user/:id", deleteUser);

router.get("/getAllUsers", getAllUSer);

module.exports = router;
