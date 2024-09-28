const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    choices: [{ type: String, required: true }],
    correctAnswer: { type: String, required: true }
});

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    questions: [questionSchema]
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
