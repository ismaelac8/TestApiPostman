const { register, login } = require('../services/userService');
const { validationResult } = require('express-validator');

async function registerUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const user = await register(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
}

async function loginUser(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const token = await login(req.body);
    res.status(200).json(token);
  } catch (err) {
    next(err);
  }
}

module.exports = { registerUser, loginUser };
