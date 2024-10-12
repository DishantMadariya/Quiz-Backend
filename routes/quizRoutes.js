const express = require('express');
const { getQuizzes, getQuizById, submitQuiz } = require('../controllers/quizController');
const router = express.Router();

// Route to get all quizzes
router.get('/quizzes', getQuizzes);

// Route to get a quiz by ID
router.get('/quizzes/:id', getQuizById);

// Route to submit quiz answers
router.post('/quizzes/:id/submit', submitQuiz);

module.exports = router;
