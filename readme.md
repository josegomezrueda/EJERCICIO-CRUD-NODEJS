Ejemplos de diferentes importaciones y exportaciones en Node 14

### Modo estandard - CommonJS
En el directorio require_js se utiliza el estandard con require y la exports.

Ejecutar con: `node server.js`

### Modo Modules (ES6) cambiando extension ficheros
En el directorio import_mjs se ponen los ficheros con extension mjs y se utiliza import y export

Ejecutar con: `node server.mjs`

### Modo modules (ES6) con configuracionen package.json

En el directorio import_json se ponen los ficheros con extension js pero se añade la directiva "type": "module" al fichero package.json

Ejecutar con: `node server.js`


Observerse que aunque `mod1`  siempre es importado en `server` y en `mod2` el fichero solo es procesado una vez. Es decir la linea `console.log("En mod1")` solo es ejecutada una vez en `server` que es donde es invocado por primera vez.

