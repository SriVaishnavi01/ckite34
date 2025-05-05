const Result = require('../Model/ResultSchema'); // Import the Result model

 // Adjust path as needed

exports.createResult = async (req, res) => {
  try {
    const { email, subModuleName, score, maxScore, percentage, questionsAttempted, totalQuestions, timeTaken, totalTime, startTime, endTime, answers } = req.body;

    const newResult = new Result({
      email,
      subModuleName,
      score,
      maxScore,
      percentage,
      questionsAttempted,
      totalQuestions,
      timeTaken,
      totalTime,
      startTime,
      endTime,
      answers  // Answers will be passed here as an array
    });

    // Save the result to the database
    await newResult.save();

    return res.status(201).json({
      message: "Result created successfully",
      data: newResult
    });
  } catch (error) {
    console.error("Error creating result:", error);
    return res.status(400).json({
      message: "Error creating result",
      error: error.message
    });
  }
};
//cretae a new result with a email
exports.createResultWithEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const result = new Result({ ...req.body, email });
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Get all results
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find(); // Find all results in the database
    return res.status(200).json({
      message: 'Results retrieved successfully',
      data: results
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error retrieving results',
      error: error.message
    });
  }
};

// Get a result by email
exports.getResultByEmail = async (req, res) => {
  try {
    const result = await Result.findOne({ email: req.params.email }); // Find result by email
    if (!result) {
      return res.status(404).json({
        message: 'Result not found'
      });
    }
    return res.status(200).json({
      message: 'Result retrieved successfully',
      data: result
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error retrieving result',
      error: error.message
    });
  }
};

// Update result by email
exports.updateResultByEmail = async (req, res) => {
  try {
    const updatedResult = await Result.findOneAndUpdate(
      { email: req.params.email }, // Find result by email
      req.body, // Updated data
      { new: true } // Return the updated result
    );
    if (!updatedResult) {
      return res.status(404).json({
        message: 'Result not found'
      });
    }
    return res.status(200).json({
      message: 'Result updated successfully',
      data: updatedResult
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error updating result',
      error: error.message
    });
  }
};

// Delete result by email
exports.deleteResultByEmail = async (req, res) => {
  try {
    const deletedResult = await Result.findOneAndDelete({ email: req.params.email }); // Find and delete result by email
    if (!deletedResult) {
      return res.status(404).json({
        message: 'Result not found'
      });
    }
    return res.status(200).json({
      message: 'Result deleted successfully',
      data: deletedResult
    });
  } catch (error) {
    return res.status(400).json({
      message: 'Error deleting result',
      error: error.message
    });
  }
};
