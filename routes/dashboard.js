const express = require("express");

const {
  createOrder,
  getOneOrder,
  getOrders,
} = require("../controllers/dashboardController");

const router = express.Router();

router.get("/", getOrders);

router.get("/:id", getOneOrder);

router.post("/", createOrder);

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new workout" });
});

router.get("/hello", () => {});

module.exports = router;
