console.log("En mod2");
const mod1= require("./mod1")

// module.exports solo puede haber uno por fichero.
module.exports= {
    f_adios:adios,
    f_hastaluego:hastaluego
}
// Pero podemos poner module.exports.XX y sera equivalente a:
// module.exports= {xx: "Soy la variable xx"} 
//pero entonces el anterior module.exports desaparece
 module.exports.xx="Soy la variable xx"
function adios()
{
    console.log("Mod2.... Function adios");
}

function hastaluego()
{
    console.log("Mod2.... Function hastaluego");
}