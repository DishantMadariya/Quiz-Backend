const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: String,
  options: [String],
  correctAnswer: Number, // index of the correct answer
});

const quizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  questions: [questionSchema],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
