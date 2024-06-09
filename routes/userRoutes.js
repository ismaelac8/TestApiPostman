const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const { body } = require('express-validator');

const router = express.Router();

router.post('/register', [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('email').isEmail().withMessage('Debe ser un email válido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres')
], registerUser);

router.post('/login', [
  body('email').isEmail().withMessage('Debe ser un email válido'),
  body('password').notEmpty().withMessage('La contraseña es obligatoria')
], loginUser);

module.exports = router;
