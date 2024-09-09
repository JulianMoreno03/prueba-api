const express = require('express');
const app = express();
const port = 3000;

// Definir la ruta principal "/"
app.get('/', (req, res) => {
    res.json({ mensaje: 'Hola Mundo' });
});

app.get('/prueba', (req, res) => {
    res.json(
        { "books": [{ "id": 1, "name": "Los 7 hábitos de la gente altamente efectiva", "author": "Stephen R. Covey", "year": 1989 }, { "id": 2, "name": "Padre rico, padre pobre", "author": "Robert Kiyosaki", "year": 1997 }] }
    );
});


// Escuchar en el puerto 3000
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
