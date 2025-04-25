const mongoose = require("mongoose");
const { Schema } = mongoose;
const mongoosePaginate = require("mongoose-paginate-v2");

const DigitalMarketingSchema = new Schema({
  id: { type: Number, required: true, unique: true },
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
// Add pagination to the schema
DigitalMarketingSchema.plugin(mongoosePaginate);
// Define the model
module.exports = mongoose.model("DigitalMarketing", DigitalMarketingSchema);

