const axios = require('axios');
// models
const SuperHero = require('../models/SuperHero');

exports.getAllHeroes = async(req,res)=>{
    try{
        const heroesDB = await SuperHero.find();
        res.status(200).json(
            heroesDB
        )

    }catch(error){
        res.status(400).json({
            error: error.message
        })
    }
}

// agregar un nuevo heroe a la base de datos
exports.addNewHero = async(req,res)=>{
    const tag = req.body.tag;
    try {
        const findMathHero = await SuperHero.findOne({id_Api: tag.id_Api});
        if(findMathHero){
            return res.json({
                error: 'personaje ya ha sido guardado'
            })
        }
        const newHeroDB =  new SuperHero(tag);
        await newHeroDB.save();
        res.status(200).json({
            message: 'heroe guardado correctamente'
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// encontrar y devolver el heroe mediante el string que nos pasan

exports.findHero = async(req,res)=>{
    const {tag} = req.params;
    try {
        const response = await axios.get(`${process.env.API}/v1/public/characters?ts=${process.env.TS}&apikey=${process.env.API_KEY}&hash=${process.env.HASH}&name=${tag}`)
        const data = await response.data.data.results;
        const newHero = {};
        data.forEach(e=>{
            newHero.id_Api = e.id;
            newHero.name = e.name;
            newHero.description = e.description;
            newHero.thumbnail = e.thumbnail;
            newHero.img = `${e.thumbnail.path}/standard_small.${e.thumbnail.extension}`;
        })
        res.status(200).json({
            ...newHero
        })
    } catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

// eliminar el heroe desde la base de datos
exports.deleteHero = async(req,res)=>{
    const {id} = req.params;
    try{
        await SuperHero.findByIdAndDelete({_id: id});
        res.status(200).json({
            message: 'registro eliminado correctamente'
        })
    }catch(e){
        res.status(400).json({
            error: e.message
        })
    }
}