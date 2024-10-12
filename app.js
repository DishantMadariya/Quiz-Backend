const express = require('express');
const quizRoutes = require('./routes/quizRoutes');
const connectDB = require('./config/db');

const app = express();
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', quizRoutes);

module.exports = app;
