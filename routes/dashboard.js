const express = require("express");

const {
  createOrder,
  getOneOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", getOrders);

router.get("/:id", getOneOrder);

router.post("/", createOrder);

router.delete("/:id", deleteOrder);

router.patch("/:id", updateOrder);

router.get("/hello", () => {});

module.exports = router;
