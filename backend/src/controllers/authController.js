//Schema
const User = require('../models/User');
//validacion
const Joi = require('joi');
//contraseña
const bcrypt = require('bcryptjs')
//jwt
const jwt = require('jsonwebtoken');

const schemaRegister = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(6).max(1024).required()
}) 

const schemaLogin = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).max(1024).required()
})

exports.signup = async(req,res)=>{
    const {name,email,password} = req.body;
        //validate user
        const {error} = schemaRegister.validate(req.body);
         
        if(error){
            return res.status(400).json(
                {error: error.details[0].message}
            )
        }

        const isEmailExist = await User.findOne({
            email
        }) 

        if(isEmailExist){
            return res.status(400).json(
                {error: 'Email ya registrado'}
            )
        }

        // hash password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password,salt);

        const user = new User({
            name,
            email,
            password: passwordHash,
            role: 'user',
            usersRegistered: 0,
            heroes: []
        })
        res.status(200).json(
            {message: 'user creado sactifactoriamente',user}
        )
    try{
        const savedUser = await user.save();
        res.status(200).json({
            error: null,
            data: savedUser
        })
    }catch(error){
        res.status(400).json({error: error.message}) 
    }
    
}

exports.deleteUser = async(req,res)=>{
    const {id} = req.params;
    try{
        await User.findByIdAndDelete({_id: id});
        res.status(200).json({
            error: null,
            message: 'user eliminado correctamente'
        })
    }catch(error){
        res.status(400).json({error: error.message})
    }
}

exports.updateUser = async(req,res)=>{
    const {id} = req.params;
    try{
        const userDB = await User.findOne({_id:id});
        const {name=userDB.name,role=userDB.role,lastTimeSystem=userDB.lastTimeSystem} = req.body;
        const userUpdated = await User.findByIdAndUpdate({_id: id},{name,role,lastTimeSystem}); 
        res.status(200).json({
            message: 'usuario actualizado correctamente'
        })
    }catch(e){
        res.status(400).json({
            error: e.message
        })
    }
}

exports.login = async(req,res)=>{
    const {email,password} = req.body;
    console.log(req.body);
    //validations
    const {error} = schemaLogin.validate(req.body);
    if(error){
        return res.status(400).json(
            {error: error.details[0].message}
        )
    }
    const user = await User.findOne({
        email 
    });

    if(!user){
        return res.status(400).json({
            error: "Email o contraseña no valida"
        })
    }
    const validPassword = await bcrypt.compare(password,user.password);

    if(!validPassword){
        console.log('contraseña')
        return res.status(400).json({
            error: "Email o contraseña no valida"
        })
    }

    // //create token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    },process.env.TOKEN_SECRET)

    res.header('auth-token',token).json({
        error: null,
        data: {token}
    })
}