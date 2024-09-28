const express = require('express');
const connectDB = require('./db/db');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const quizRoutes = require('./routes/quizRoute');

dotenv.config();
const app = express();
app.use(bodyParser.json());
connectDB

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

app.use('/api', quizRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
