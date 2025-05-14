const express = require("express");
const router = express.Router();
const resultController = require("../Controllers/ResultControllers");


// CREATE
router.post('/results', resultController.createResult);

// CREATE with email
router.post('/results/email/:email', resultController.createResultWithEmail);
// CREATE with submodule name
router.post('/results/submodule/:subModuleName', resultController.createResultWithSubmodule);

// CREATE with email and submodule
router.post('/results/email/:email/submodule/:subModuleName', resultController.createResultWithSubmodule);

// READ ALL
router.get('/results', resultController.getAllResults);

// READ BY ID
router.get('/results/:id', resultController.getResultById);

// READ BY EMAIL
router.get('/results/email/:email', resultController.getResultsByEmail);

// READ BY SUBMODULE
router.get('/results/submodule/:subModuleName', resultController.getResultsBySubmodule);

// READ BY EMAIL & SUBMODULE
router.get('/results/email/:email/submodule/:subModuleName', resultController.getResultsByEmailAndSubmodule);

// UPDATE
router.put('/results/:id', resultController.updateResult);

// DELETE
router.delete('/results/:id', resultController.deleteResult);

module.exports = router;

