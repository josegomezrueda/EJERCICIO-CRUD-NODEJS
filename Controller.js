
const moduloPersona = require("./moduloPersona");

async function crearPersonas(req, res) {
    datos = req.body
    if (datos.name && datos.surname) {
        const nuevaPersona = new moduloPersona(datos);
        try {
            const datosPersona = await nuevaPersona.save();
            res.status(201).send(datosPersona);
        } catch {
            res.status(501).send(exception.message);
        }
    } else {
        res.send('Uno de los campos o todos estan vacios')
    }
}

async function buscarPersonas(req, res) {
    try {
        const datosPersonas = await moduloPersona.find();
        res.status(200).send(datosPersonas);

    } catch (exception) {
        res.status(501).send(exception.message);
    }
}

async function buscarPersona(req, res) {

    id = req.params.id

    try {
        const datoPersona = await moduloPersona.findById(id);
        if (datoPersona) {
            res.status(200).send(datoPersona);
        } else {
            res.status(404).send("id no encontrado");
        }

    } catch (exception) {
        res.status(501).send(exception.message);
    }
}

async function editarPersona(req, res) {

    datosPersona = req.body
    id = req.params.id
    try {
        const datosEdit = await moduloPersona.findByIdAndUpdate(id, datosPersona, { new: true })
        if (datosEdit) {
            res.status(200).send(datosEdit);
        } else {
            res.status(404).send("id no encontrado");
        }
    } catch (exception) {
        res.status(501).send(exception.message);
    }
}

async function deletePersona(req, res) {
    id = req.params.id
    try {
        const datosBorrar = await moduloPersona.deleteOne({ "_id": id })
        if (datosBorrar.deletedCount == 1) {
            res.status(200).send("borrado");
        } else {
            res.status(404).send("id no encontrado");
        }

    } catch (exception) {
        res.status(501).send(exception.message);
    }
}

exports.Controller = (app) => {
    app.post('/add', crearPersonas)
    app.get('/getAll', buscarPersonas)
    app.get('/get/:id', buscarPersona)
    app.put('/editar/:id', editarPersona)
    app.delete('/delete/:id', deletePersona)
}

