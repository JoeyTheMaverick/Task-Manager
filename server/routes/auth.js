const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const verifyJWT = require('../middleware/auth');


router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({
      $or: [{ username}, { email }]
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Registration failed' });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { identifier, password } = req.body;
    
    const user = await User.findOne({ $or: [{username: identifier }, { email: identifier }] });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(400).json({ error: 'Login failed' });
  }
});

router.get('/protected', verifyJWT, (req, res) => {
  res.json({ message: "You have accessed a protected route!" });
});


module.exports = router;
