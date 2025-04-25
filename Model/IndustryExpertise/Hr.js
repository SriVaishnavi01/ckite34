const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const HRSchema = new Schema({
  id: { type: Number, required: true ,unique:true},
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



HRSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("HR",HRSchema );
