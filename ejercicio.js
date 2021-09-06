const express = require('express')
const app = express()
const port = 3000
let datos

const  modulo1= require("./modulo1");
const persona=new modulo1.persona('Jose','Gomez',28);

app.use(express.json());


app.get('/', (req, res) => {
  res.send(datos)
})

app.post('/add', (req, res) => {
    
    datos=req.body
    console.log(datos)
    const personaRecibida=new modulo1.persona(datos.nombre, datos.apellido, datos.edad);
    res.send(personaRecibida)
  })



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
