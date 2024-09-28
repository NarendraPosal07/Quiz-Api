const express = require('express');
const router = express();
const quizController = require('../controllers/quizController');

router.get('/quizzes', quizController.getQuizzes);
router.get('/quizzes/:id', quizController.getQuizById);
router.post('/quizzes/submit', quizController.submitQuiz);

module.exports = router;
