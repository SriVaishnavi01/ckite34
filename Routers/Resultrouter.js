const express = require("express");
const router = express.Router();
const resultController = require("../Controllers/ResultControllers");

// Create a new result
router.post("/results", resultController.createResult);
// Create a new result with a email
router.post("/results/:email", resultController.createResult);

// Get all results
router.get("/result", resultController.getAllResults);


// Get a result by registered email
router.get("/results/:email", resultController.getResultByEmail);

// Update a result by registered email
router.put("/results/:email", resultController.updateResultByEmail);

// Delete a result by registered email
router.delete("/results/:email", resultController.deleteResultByEmail);

module.exports = router;
