const express = require("express");
const cors = require("cors");
const personasCtrl = require("./controller/PersonaCtrl");
const libroCtrl = require("./controller/LibroCtrl");

const app = express();
app.use(express.json());
app.use(cors());

//*******************************Libros*******************************/
app.get("/api/libros", async(request, response) => { //Esperando respuesta
    try {
        const libros = await libroCtrl.listar(); //Espera hasta crear el objeto en la DB
        response.status(200).json(libros);
    } catch (error) {
        console.log("Get libros error: " + error);
        response.status(400).send("Get libros error: " + error);
    }
});

//async y await se usan para conexión asíncrona, 
app.post("/api/libros", async(request, response) => { //Esperando respuesta
    const libro = request.body;
    try {
        await libroCtrl.insertar(libro); //Espera hasta crear el objeto en la DB
        response.status(201).send("Libro registrado exitosamente!");
    } catch (error) {
        console.log("Insert libros error: " + error);
        response.status(400).send("Insert libros error: " + error);
    }
});

app.put("/api/libros", async(request, response) => { //Esperando respuesta
    const libro = request.body;
    try {
        await libroCtrl.actualizar(libro); //Espera hasta crear el objeto en la DB
        response.status(200).send("Libro actualizado exitosamente!");
    } catch (error) {
        console.log("Update libro error: " + error);
        response.status(400).send("Update libro error: " + error);
    }
});


app.delete("/api/libros/:id", async(request, response) => { //Esperando respuesta
    const id = request.params.id;
    try {
        await libroCtrl.eliminar(id); //Espera hasta crear el objeto en la DB
        response.status(201).send("Libro eliminado exitosamente!");
    } catch (error) {
        console.log("Delete libro error: " + error);
        response.status(400).send("Delete libro error: " + error);
    }
});

//*******************************Libros*******************************/

//******************************Personas******************************/
app.get("/api/personas", async(request, response) => { //Esperando respuesta
    const personas = await personasCtrl.listar(); //Espera hasta crear el objeto en la DB
    response.status(200).json(personas);
});

//async y await se usan para conexión asíncrona, 
app.post("/api/personas", async(request, response) => { //Esperando respuesta
    const persona = request.body;
    try {
        await personasCtrl.insertar(persona); //Espera hasta crear el objeto en la DB
        response.status(201).json("Persona registrada exitosamente!");
    } catch (error) {
        console.log("Insert error: " + error);
        response.status(204).json("Insert error: " + error);
    }
});

app.put("/api/personas", async(request, response) => { //Esperando respuesta
    const persona = request.body;
    try {
        await personasCtrl.actualizar(persona); //Espera hasta crear el objeto en la DB
        response.status(200).json("Persona actualizada exitosamente!");
    } catch (error) {
        console.log("Update error: " + error);
        response.status(204).json("Update error: " + error);
    }
});


app.delete("/api/personas/:id", async(request, response) => { //Esperando respuesta
    const id = request.params.id;
    try {
        await personasCtrl.eliminar(id); //Espera hasta crear el objeto en la DB
        response.status(201).json("Persona eliminada exitosamente!");
    } catch (error) {
        console.log("Delete error: " + error);
        response.status(400).json("Delete error: " + error);
    }
});

//******************************Personas******************************/

app.listen(1600, () => {
    console.log("Conectado al servidor!");
});