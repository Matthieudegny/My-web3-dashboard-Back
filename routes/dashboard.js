const express = require("express");

const {
  createOrder,
  getOneOrder,
  getOrders,
  deleteOrder,
  updateOrder,
  loginUser,
  signupUser,
  deleteUser,
  getAllUSer,
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", getOrders);

router.get("/user", getAllUSer);

router.get("/:id", getOneOrder);

router.post("/", createOrder);

router.delete("/:id", deleteOrder);

router.patch("/:id", updateOrder);

router.post("/login", loginUser);

router.post("/signup", signupUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
