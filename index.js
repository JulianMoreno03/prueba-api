const express = require('express');
const app = express();
const port = 3000;

// Definir la ruta principal "/"
app.get('/', (req, res) => {
  res.json({ mensaje: 'Hola Mundo' });
});

// Escuchar en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
