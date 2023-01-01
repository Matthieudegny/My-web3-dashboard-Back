const express = require("express");

const {
  createOrder,
  getOneOrder,
  getOrders,
  deleteOrder,
  updateOrder,
} = require("../controllers/dashboardController");

//require for all routes
const requireAuth = require("../middleware/requireauth");

const router = express.Router();

// router.use(requireAuth);

router.get("/", getOrders);

router.get("/:id", requireAuth, getOneOrder);

router.post("/", requireAuth, createOrder);

router.delete("/:id", requireAuth, deleteOrder);

router.patch("/:id", requireAuth, updateOrder);

module.exports = router;
