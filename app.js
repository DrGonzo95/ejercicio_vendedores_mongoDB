const express = require('express');
const app = express();
const routeVendedores = require('./routes/vendedores')



app.use(express.json());

app.use('/vendedores', routeVendedores)

// Iniciar el servidor 
app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});