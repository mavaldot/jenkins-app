const express = require('express');
const app = express();

const PORT = 12345;

app.get('/hola', (req, res) => {
    res.send('Hola');
});



app.listen(PORT, () => {
    console.log(`Started on port: ${PORT}`);
});