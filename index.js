const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const swaggerDocs = require('./swagger');
const config = require('./config');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Conectar a la base de datos
mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB', err));

// Rutas
app.use('/api', userRoutes);

// Swagger
swaggerDocs(app);

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('¡Algo salió mal!');
});

app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
