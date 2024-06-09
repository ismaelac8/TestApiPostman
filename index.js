const express = require('express');
const { body, validationResult } = require('express-validator');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const usuarios = [];

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}!`);
});

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', [
  body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
  body('email').isEmail().withMessage('Debe ser un email válido')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const usuario = req.body;
  usuarios.push(usuario);
  res.status(201).send(`Usuario ${usuario.nombre} creado con éxito`);
});

app.delete('/usuarios/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  const index = usuarios.findIndex(user => user.nombre === nombre);
  if (index !== -1) {
    usuarios.splice(index, 1);
    res.send(`Usuario ${nombre} eliminado con éxito`);
  } else {
    res.status(404).send(`Usuario ${nombre} no encontrado`);
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
