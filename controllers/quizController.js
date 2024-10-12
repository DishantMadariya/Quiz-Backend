const Quiz = require('../models/quizModel');

// Fetch all quizzes
const getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch a quiz by ID
const getQuizById = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Submit a quiz and calculate score
const submitQuiz = async (req, res) => {
  try {
    const { answers } = req.body;
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

    let score = 0;
    quiz.questions.forEach((question, index) => {
      if (question.correctAnswer === answers[index]) score++;
    });

    res.json({ score });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getQuizzes, getQuizById, submitQuiz };
