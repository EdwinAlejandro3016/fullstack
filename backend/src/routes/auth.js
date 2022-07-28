const express = require('express');
const router = express.Router();

//import controllers
const {signup,deleteUser,login,updateUser} = require('../controllers/authController');

router.post('/register',signup);
router.post('/login',login);

router.delete('/deleteUser/:id',deleteUser);
//update user
router.post('/updateUser/:id',updateUser);

module.exports = router;