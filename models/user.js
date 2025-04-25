const mongoose = require('mongoose');
const { Schema } = mongoose;
const mongoosePaginate = require('mongoose-paginate-v2');
const ResultSchema = new Schema({
  subModuleName: { type: String, required: true },
  score: { type: Number, required: true },
  maxScore: { type: Number, required: true },
  percentage: { type: Number, required: true },
  questionsAttempted: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  timeTaken: { type: Number, required: true },
});


const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, primary:true }, // Ensure email is unique
  instituteName: { type: String, required: true },
  stream: { type: String, required: true },
  phonenumber: { type: String, required: true },
 results: [ResultSchema],
});
UserSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('User', UserSchema);