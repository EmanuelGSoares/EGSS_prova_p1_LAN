const PokemonModel = require('../models/PokemonModel');

class PokemonRepository {
  async findAll() {
    const pokemons = await PokemonModel.find()
    return pokemons;
  }

  async findById(id) {
    const pokemons = await PokemonModel.findById(id);
    return pokemons;
  }
  
  async create({ nome, tipoUm, tipoDois, genero }) {
    const newPokemon = await PokemonModel.create({
      nome,
      tipoUm,
      tipoDois,
      genero
    });
    return newPokemon;
 
  }
  
  async update(id, nome, tipoUm, tipoDois, genero) {
    const updatedPokemon = await PokemonModel.findByIdAndUpdate(
      id,
      nome,
      tipoUm,
      tipoDois,
      genero
    );
    return updatedPokemon;
  }

  async delete(id) {
      const deletedPokemon = await PokemonModel.findByIdAndDelete(id);
      return deletedPokemon;

  }
}
  
module.exports = new PokemonRepository();
