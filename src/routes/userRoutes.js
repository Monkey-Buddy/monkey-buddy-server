const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const checkJwt = require('../middleware/auth');

router.post('/', userController.createUser);

router.get('/:userId', userController.getUserById);

router.post('/:userId', userController.updateUser);

router.delete('/:userId', userController.deleteUser);



module.exports = router;