console.log("Empiezo el programa");
// mod1 es una referencia a todo el fichero mod1.
// Para acceder a los diferentes metodos/variables tendremos que usar mod1.METODO()
const  mod1= require("./mod1");
mod1.pepehola('folaholita');
mod1.love("mod1 .... llamando a mod1.love desde el server.js")
mod1.love()
const m=new mod1.miclase();
m.dentrodeMiclase();

console.log(mod1.var1)

const {f_adios,f_hastaluego,xx} = require ("./mod2"); 

f_adios();
f_hastaluego();

console.log(xx)

mod3 = require("./mod3")
console.log("Valor de mod3 -> "+mod3)

mod1.eleccion(true);

const  mod4= require("./mod4");
console.log(mod4);