const express = require('express');
const router = express.Router();

const {signup,deleteUser,login} = require('../controllers/authController');

router.post('/register',signup);
router.post('/login',login);

router.delete('/deleteUser/:id',deleteUser);

module.exports = router;