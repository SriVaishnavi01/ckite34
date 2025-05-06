const express = require('express');
const router = express.Router();
const registrationController = require('../Controllers/registrationController');

router.post('/register', registrationController.registerUser);
router.get('/users', registrationController.getAllRegistrations);
router.get('/user/:email', registrationController.getUserByEmail);
router.put('/:email', registrationController.updateUserByEmail);
router.delete('/:email', registrationController.deleteUserByEmail);

module.exports = router;
