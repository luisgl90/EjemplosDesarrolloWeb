const personaDAO = require("../model/PersonaDAO")

const PersonasCtrl = {};



PersonasCtrl.listar = async() => {
    let personas = personaDAO.find();
    return personas;
};

PersonasCtrl.insertar = async(persona) => {
    delete persona._id;
    return await personaDAO.create(persona);
};

PersonasCtrl.actualizar = async(persona) => {
    let id = persona._id;
    delete persona._id;
    return await personaDAO.findByIdAndUpdate(id, persona);
};

PersonasCtrl.eliminar = async(id) => {
    return await personaDAO.deleteOne({ _id: id });
};

module.exports = PersonasCtrl;