const PokemonRepository = require('../repositories/PokemonRepository');

class PokemonController {
  async index(request, response) {
    const pokemons = await PokemonRepository.findAll();
    if (pokemons.length === 0){
      return response.status(404).json({ error: 'Não há pokemons no Banco de Dados' });
    }
    response.json(pokemons);
  }

  async mostrar(request, response) {
    try {
      const { id } = request.params;
      const pokemon = await PokemonRepository.findById(id);
      
      if (!pokemon) {
        return response.status(404).json({ error: 'Pokemon não encontrado' });
      }
      response.json(pokemon);
    }catch (error) {
      return response.status(404).json({ error: 'O ID do pokemon está errado!!' });
    }

  }

  async guardar(request, response) {
    const {  nome, tipoUm, tipoDois, genero } = request.body;

    if (!nome || !tipoUm || !genero) {
      return response.status(404).json({ error: "Pokemon cadastrado sem nome, tipo um ou genero, insira para prosseguir!" })
    }
    const pokemon = await PokemonRepository.create({
       nome, tipoUm, tipoDois, genero,
    });
    response.json('Pokemon criado');
  }

  async atualizar(request, response) {
    try {
      if (request.body.nome == "") {
        return response.status(404).json({ error: 'Nome não pode estar vazio.' });
      }else if(request.body.tipoUm == ""){
        return response.status(404).json({ error: 'TipoUm não pode estar vazio.' });
      }else if(request.body.genero == ""){
        return response.status(404).json({ error: 'Genero não pode estar vazio.' });
      }
      
      const { id } = request.params;
      const pokemonExists = await PokemonRepository.update(id, request.body);

      if (!pokemonExists) {
        return response.status(404).json({ error: "Não existe um Pokemon com esse ID cadastrado." });
      }
      response.json('Pokemon atualizado');
    }catch (error) {
      return response.status(404).json({ error: 'O ID do pokemon está errado!!' });
    }
  }

  async apagar(request, response) {
    try {
      const { id } = request.params;
      const nomePokemon = await PokemonRepository.findById(id);
      const pokemon = await PokemonRepository.delete(id);

      if (!pokemon) {
        return response.status(404).json({ error: "Pokemon não encontrado!!" });
      }
      return response.status(200).json({ error: "Pokemon: "+ nomePokemon.nome +" deletado com sucesso!!" });
    } catch (error) {
      return response.status(404).json({ error: 'O ID do pokemon está errado!!' });
    }
  }
}

module.exports = new PokemonController();
