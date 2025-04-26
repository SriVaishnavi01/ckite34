const Result = require("../Model/ResultSchema");

// Create a new result
exports.createResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    await result.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
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
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single result by registered email
exports.getResultByEmail = async (req, res) => {
  try {
    const result = await Result.findOne({ email: req.params.email });
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a result by registered email
exports.updateResultByEmail = async (req, res) => {
  try {
    const result = await Result.findOneAndUpdate({ email: req.params.email }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a result by registered email
exports.deleteResultByEmail = async (req, res) => {
  try {
    const result = await Result.findOneAndDelete({ email: req.params.email });
    if (!result) {
      return res.status(404).json({ message: "Result not found" });
    }
    res.status(200).json({ message: "Result deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
