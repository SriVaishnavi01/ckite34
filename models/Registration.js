const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, required: true, unique: true },
  instituteName: String,
  stream: String,
  phonenumber: String,
  degree: String,
  password: { type: String, required: true },
}, { timestamps: true });

// Registration Schema
const registerSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  instituteName: { type: String, required: true },
  stream: { type: String, required: true },
  degree: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });

registerSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

registerSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model('User', userSchema);
const Registration = mongoose.model('Registration', registerSchema);

module.exports = { User, Registration };
