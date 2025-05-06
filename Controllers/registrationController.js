const { Registration, User } = require('../models/Registration'); // Adjust path as needed

// Register a new user
exports.registerUser = async (req, res) => {
  try {
    const registration = new Registration(req.body);
    await registration.save();

    const user = new User({
      firstName: registration.firstName,
      lastName: registration.lastName,
      email: registration.email,
      instituteName: registration.instituteName,
      stream: registration.stream,
      phonenumber: registration.phoneNumber,
    });

    await user.save();

    res.status(201).json({ message: 'Registration successful', user, registration });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all registrations
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find();
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get registration by email
exports.getUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const user = await User.findOne({ email });

    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update user by email
exports.updateUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;
    const updatedUser = await User.findOneAndUpdate({ email }, req.body, { new: true });

    if (!updatedUser) return res.status(404).json({ error: 'User not found' });

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete user by email
exports.deleteUserByEmail = async (req, res) => {
  try {
    const email = req.params.email;

    const deletedUser = await User.findOneAndDelete({ email });
    const deletedRegistration = await Registration.findOneAndDelete({ email });

    if (!deletedUser) return res.status(404).json({ error: 'User not found' });

    res.json({ message: 'User and registration deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
