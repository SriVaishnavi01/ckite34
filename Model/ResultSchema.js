const mongoose = require("mongoose");
const { Schema } = mongoose;




const resultSchema = new Schema({
    email: { type: String, required: true },  // <-- Add this line
    subModuleName: { type: String, required: true },
    score: { type: Number, required: true },
    maxScore: { type: Number, required: true },
    percentage: { type: String, required: true },
    questionsAttempted: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    timeTaken: { type: String, required: true },
    totalTime: { type: String, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    answers: [
      {
        question: { type: String, required: true },
        selectedOption: { type: Number },
        correctOption: { type: Number, required: true }
      }
    ]
});

  module.exports = mongoose.model("result",resultSchema );






  




// const resultSchema = new Schema({
//     subModuleName: { type: String, required: true },
//     score: { type: Number, required: true },
//     maxScore: { type: Number, required: true },
//     percentage: { type: String, required: true },
//     questionsAttempted: { type: Number, required: true },
//     totalQuestions: { type: Number, required: true },
//     timeTaken: { type: String, required: true },
//     totalTime: { type: String, required: true },
//     startTime: { type: Date, required: true },
//     endTime: { type: Date, required: true },
//     answers: [
//       {
//         question: { type: String, required: true },
//         selectedOption: { type: Number },
//         correctOption: { type: Number, required: true }
//       },
//     ],
//   });
