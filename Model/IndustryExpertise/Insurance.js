const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const InsuranceSchema = new Schema({
  id: { type: String, required: true, unique: true },
  question: { type: String, required: true },
  options: [
    {
      id: { type: String, required: true },
      text: { type: String, required: true },
      isCorrect: { type: Boolean, required: true },
    },
  ],
  hint: { type: String }, // Optional hint
  answerDescription: { type: String }, // Optional explanation
});


InsuranceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Insurance",InsuranceSchema );
