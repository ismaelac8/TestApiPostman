const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

async function register(userData) {
  const { nombre, email, password } = userData;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ nombre, email, password: hashedPassword });
  return await newUser.save();
}

async function login(userData) {
  const { email, password } = userData;
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error('User not found');
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: '1h' });
  return { token };
}

module.exports = { register, login };
