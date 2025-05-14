const Result = require('../Model/ResultSchema');


// CREATE
exports.createResult = async (req, res) => {
  try {
    const result = new Result(req.body);
    const saved = await result.save();
    res.status(201).json({ message: "Result saved successfully", data: saved });
  } catch (error) {
    res.status(500).json({ message: "Failed to save result", error });
  }
};
// CREATE with submodule name
exports.createResultWithSubmodule = async (req, res) => {
  try {
    const { email, subModuleName } = req.params;
    const result = new Result({ ...req.body, email, subModuleName });
    const saved = await result.save();
    res.status(201).json({ message: "Result saved successfully", data: saved });
  } catch (error) {
    res.status(500).json({ message: "Failed to save result", error });
  }
};
// CREATE with email
exports.createResultWithEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const result = new Result({ ...req.body, email });
    const saved = await result.save();
    res.status(201).json({ message: "Result saved successfully", data: saved });
  } catch (error) {
    res.status(500).json({ message: "Failed to save result", error });
  }
};

// READ ALL
exports.getAllResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch results", error });
  }
};

// READ BY ID
exports.getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);
    if (!result) return res.status(404).json({ message: "Result not found" });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch result", error });
  }
};

// READ BY SUBMODULE
exports.getResultsBySubmodule = async (req, res) => {
  try {
    const results = await Result.find({ subModuleName: req.params.subModuleName });
    if (!results.length) return res.status(404).json({ message: "No results for this submodule" });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch submodule results", error });
  }
};

// UPDATE
exports.updateResult = async (req, res) => {
  try {
    const updated = await Result.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: "Result not found to update" });
    res.status(200).json({ message: "Result updated", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Failed to update result", error });
  }
};
// GET by Email
exports.getResultsByEmail = async (req, res) => {
  try {
    const results = await Result.find({ email: req.params.email });
    if (!results.length) return res.status(404).json({ message: "No results found for this email" });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch email results", error });
  }
};



// GET by Email and Submodule
exports.getResultsByEmailAndSubmodule = async (req, res) => {
  const { email, subModuleName } = req.params;
  try {
    const results = await Result.find({ email, subModuleName });
    if (!results.length) return res.status(404).json({ message: "No results found for this email and submodule" });
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch results", error });
  }
};

// DELETE
exports.deleteResult = async (req, res) => {
  try {
    const deleted = await Result.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Result not found to delete" });
    res.status(200).json({ message: "Result deleted", data: deleted });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete result", error });
  }
};
