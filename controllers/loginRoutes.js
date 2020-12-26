// Importing dependencies
const express = require("express");

// Creating a Router
const router = express.Router();

// Get the login Form
router.get("/", (req, res) => {
  res.render("loginForm")
})

// Post login Form


//
module.exports = router;