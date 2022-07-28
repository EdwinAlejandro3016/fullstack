const express = require('express');
const router = express.Router();

//import controllers
const {getAllHeroes,addNewHero,findHero,deleteHero} = require('../controllers/superHeroController');

// obtener todos los heroes de la base de datos
router.get('/all',getAllHeroes);
// encontrar heroe
router.get('/find/:tag',findHero);
//agregar un nuevo heroe
router.post('/add',addNewHero);
// eliminar un registro de heroe
router.delete('/delete/:id',deleteHero);


module.exports = router;