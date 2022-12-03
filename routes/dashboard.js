const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ mssg: "GET all the orders" });
});

router.get("/:id", (req, res) => {
  res.json({ mssg: "GET a single order" });
});

router.post("/", (req, res) => {
  res.json({ mssg: "POST a new workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new workout" });
});

router.get("/hello", () => {});

module.exports = router;
