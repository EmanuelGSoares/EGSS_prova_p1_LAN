const { Router } = require('express');

const PokemonController = require('./app/controllers/PokemonController');

const router = Router();

router.get('/pokemon', PokemonController.index);
router.post('/pokemon', PokemonController.guardar);
router.get('/pokemon-info/:id', PokemonController.mostrar);
router.delete('/pokemon-delete/:id', PokemonController.apagar);
router.put('/pokemon-update/:id', PokemonController.atualizar);

module.exports = router;
