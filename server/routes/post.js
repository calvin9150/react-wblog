const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  res.json("hi hi");
});

router.post("/", (req, res) => {});

module.exports = router;
