// importa y configura mongoose
const mongoose = require("mongoose");



mongoose.connect("mongodb://localhost:27017/empresa", {
    useUnifiedTopology: true,
    useNewUrlParser: true,

});



// Define el esquema y modelo de la tabla clientes
const vendedorSchema = new mongoose.Schema({
    nombre: String,
    producto: String,
    email: String,
}, { collection: 'vendedores' });

const Vendedor = mongoose.model("Vendedor", vendedorSchema);

module.exports = Vendedor;