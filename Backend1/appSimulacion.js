const express = require("express");

const app = express();

app.use(express.json());

let personas = [{ id: 10, nombre: "Zacarías", apellido: "Piedras del Río", edad: "31" },
    { id: 20, nombre: "Benito", apellido: "Camelo", edad: "15" },
    { id: 30, nombre: "Ana Lisa", apellido: "Melano", edad: "21" },
    { id: 40, nombre: "Juancho", apellido: "Polo", edad: "25" },
    { id: 50, nombre: "Elver", apellido: "González Parado", edad: "18" }
];

//app.get(ruta_que_devuelve_el_enlace,funcion_tipo_flecha)
//      '/' es raiz
app.get('/', (request, response) => {
    response.send("<h1>Hola mundo</h1>")
})


app.get('/api/personas', (request, response) => {
    response.status(200).json(personas);
})

app.post('/api/personas', (request, response) => {
    let persona = request.body;
    let exists = false;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].id == persona.id) {
            personas[i] = persona;
            response.status(200).json(personas);
            exists = true;
            break;
        }
    }
    if (!exists) {
        personas.push(persona)
        response.status(201).json(personas);
    }

})

app.delete('/api/personas', (request, response) => {
    let persona = request.body;
    let exists = false;

    for (let i = 0; i < personas.length; i++) {
        if (personas[i].id == persona.id) {
            personas.splice(i, 1);
            //response.status(200).send("Registro eliminado");
            response.status(200).json(personas);
            exists = true;
            break;
        }
    }
    if (!exists) {
        response.status(404).send("Registro no encontrado, no se ha eliminado.");
    }

})


//app.listen(puerto,metodo_tipo_flecha)
app.listen(1600, () => {
    console.log("El servidor está corriendo!")
})