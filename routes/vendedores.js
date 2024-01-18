const express = require('express');
const router = express.Router();

const Vendedor = require("../models/vendedor");

// Ruta para obtener los vendedores 
router.get('/', async(req, res) => {
    try {
        const vendedores = await Vendedor.find();
        res.json(vendedores);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los vendedores" });
    }
});

// ruta para crear un nuevo vendedor
router.post("/", async(req, res) => {
    try {
        const nuevoVendedor = new Vendedor(req.body);
        await nuevoVendedor.save();
        res.json(nuevoVendedor);
    } catch (error) {
        res.status(500).json({ error: ' Error al crear el vendedor' });
    }
});

// Ruta para actualizar un vendedor existente 
router.put("/:id", async(req, res) => {
    try {
        const vendedor = await Vendedor.findByIdAndUpdate(req.params.id, req.body, {
            new: true //devuelve el documento resultante de la actualización
        });
        res.json(Vendedor);
    } catch (error) {
        res.status(500).json({ error: "error al actualizar el vendedor" });
    }
});

// Ruta para eliminar un vendedor 
router.delete("/:id", async(req, res) => {
    try {
        await Vendedor.findByIdAndDelete(req.params.id, );
        res.json({ message: "Vendedor eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar el vendedor" });
    }
});
module.exports = router;