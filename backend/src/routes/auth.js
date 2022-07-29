const express = require('express');
const router = express.Router();

//import controllers
const {signup,login,test} = require('../controllers/userController');

//middleware
const { verifyToken } = require('../middlewares/validate-token');

router.post('/register',signup);
router.post('/login',login);

//auth para el perfil
router.get('/profile',verifyToken,(req,res)=>{
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            user: req.user
        }
    })
})



module.exports = router;