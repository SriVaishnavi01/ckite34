const express = require('express');
const router = express.Router();
const registrationController = require('../Controllers/registrationController');

router.post('/register', registrationController.createUser);
router.get('/', registrationController.getAllUsers);
router.get('/:id', registrationController.getUserById);
router.get('/email/:email', registrationController.getUserByEmail); // route to get user by email
router.put('/:id', registrationController.updateUser);
router.delete('/:id', registrationController.deleteUser);

module.exports = router;
