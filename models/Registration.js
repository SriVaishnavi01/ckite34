const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Unique email
  instituteName: { type: String, required: true },
  stream: { type: String, required: true },
  phonenumber: { type: String, required: true },
}, { timestamps: true });
// Define Registration schema (user schema)
const registerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: false },
  instituteName: { type: String, required: true },
  stream: { type: String, required: true },
  degree: { type: String, required: true },
  password: { type: String, required: true },
  // Array of results, linking results to the user
}, { timestamps: true });

// Pre-save middleware to hash the password before saving
registerSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// Method to compare entered password with the stored hash
registerSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Export the Registration model
module.exports = mongoose.model('Registration', registerSchema);
