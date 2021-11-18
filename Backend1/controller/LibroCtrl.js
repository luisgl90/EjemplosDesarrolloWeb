const libroDAO = require("../model/libroDAO");

const LibroCtrl = {};



LibroCtrl.listar = async() => {
    let libros = libroDAO.find();
    return libros;
};

LibroCtrl.insertar = async(libro) => {
    return await libroDAO.create(libro);
};

LibroCtrl.actualizar = async(libro) => {
    return await libroDAO.findByIdAndUpdate(libro._id, libro);
};

LibroCtrl.eliminar = async(id) => {
    return await libroDAO.deleteOne({ _id: id });
};

module.exports = LibroCtrl;