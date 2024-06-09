const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`¡Hola, ${nombre}!`);
});

app.post('/usuarios', (req, res) => {
  const usuario = req.body;
  res.status(201).send(`Usuario ${usuario.nombre} creado con éxito`);
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
