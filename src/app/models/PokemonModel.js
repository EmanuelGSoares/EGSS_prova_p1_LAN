const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ObjectId = Schema.ObjectId;

const PokemonSchema = new Schema({
  id: ObjectId,
  nome: String,
  tipoUm: String,
  tipoDois: String,
  genero: String,
});

const PokemonModel = mongoose.model('pokemons', PokemonSchema);

module.exports = PokemonModel;