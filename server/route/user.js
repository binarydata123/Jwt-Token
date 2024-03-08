// routes/users.js

const express = require('express');
const User = require('../modal/user');

const router = express.Router();

// Route for user registration
router.post('/r', async (req, res) => {
  
  try {
    const { email, password } = req.body;
    console.log("in backend")

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({
      email,
      password,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
