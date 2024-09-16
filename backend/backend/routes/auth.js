import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js'; // Your Sequelize user model

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });
    res.status(201).json({ message: "User registered", user: newUser });
  } catch (error) {
    res.status(500).json({ error: "Error registering user", details: error.message });
  }
});


export default router;
