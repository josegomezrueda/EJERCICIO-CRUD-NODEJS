const mongoose  = require('mongoose');
const { Schema } = mongoose;

const Persona = new Schema({
  name:  String, // String is shorthand for {type: String}
  surname: String
});

module.exports  = mongoose.model('Persona', Persona);