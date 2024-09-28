const Quiz = require('../models/quizModel');

const getQuizzes = async (req, res) => {
    try {
        const quizzes = await Quiz.find();
        res.json(quizzes);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id);
        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const submitQuiz = async (req, res) => {
    try {
        const { quizId, answers } = req.body;
        const quiz = await Quiz.findById(quizId);

        if (!quiz) return res.status(404).json({ message: 'Quiz not found' });

        let score = 0;
        quiz.questions.forEach((question, index) => {
            if (question.correctAnswer === answers[index]) {
                score++;
            }
        });

        res.json({ score, total: quiz.questions.length });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getQuizzes,
    getQuizById,
    submitQuiz
}