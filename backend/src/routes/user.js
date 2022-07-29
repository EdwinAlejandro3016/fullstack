const express = require('express');
const router = express.Router();

//import controllers
const {deleteUser,updateUser,getAllUsers} = require('../controllers/userController');

router.get('/all',getAllUsers);
router.delete('/deleteUser/:id',deleteUser);
//update user
router.post('/updateUser/:id',updateUser);

module.exports = router;