// Importing dependencies
const express = require("express");
//const db = require("../config/config");
//const Customer = db.customers;

// Creating a Router
const router = express.Router();

// Get the signup Form
router.get("/signup", (req, res) => {
  res.render("signupForm")
})
/*
// Record customer details (name, address, contact...)
router.post("/signup", async (req, res) => {
  try {
    const newCustomer = new Customer(req.body);
    await newCustomer.save()
    res.send('We have received your details; go-ahead to Login.');
  }
  catch (error) {
    console.error(error)
    res.send('Sorry, we have not received your details; please try again.')
  }
})
*/
//
module.exports = router;