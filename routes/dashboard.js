const express = require("express");

const {
  createOrder,
  getOneOrder,
  getOrders,
  deleteOrder,
  updateOrder,
  loginUser,
  signupUser,
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", getOrders);

router.get("/:id", getOneOrder);

router.post("/", createOrder);

router.delete("/:id", deleteOrder);

router.patch("/:id", updateOrder);

router.post("/login", loginUser);

router.post("/signup", signupUser);

module.exports = router;
