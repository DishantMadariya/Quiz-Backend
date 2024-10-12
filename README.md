# Quiz Application Backend

This project is a backend API for managing quizzes and storing user responses. It provides endpoints to fetch quizzes, get quiz details by ID, and submit answers to a quiz to calculate the user's score. The application follows the MVC architecture and uses MongoDB as the database, with `Express.js` as the server framework and `Nodemon` for automatic server restarts during development.

## Features

- **Get Quizzes**: Fetch a list of all available quizzes.
- **Get Quiz by ID**: Fetch a specific quiz along with its questions.
- **Submit Quiz**: Submit answers to a quiz and get the user's score based on correct answers.

## Table of Contents

- [Technologies](#technologies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Database Model](#database-model)
- [Running the Project](#running-the-project)

## Technologies

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose** (for database operations)
- **Nodemon** (for development auto-restarts)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/quiz-app-backend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd quiz-app-backend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up a local MongoDB instance. Alternatively, use a cloud service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

5. Create a `.env` file (if using environment variables) and add the MongoDB connection string, or configure it directly in the `/config/db.js` file.

6. Start the server:

   ```bash
   npm start
   ```

   The server will run on `http://localhost:5000/` by default.

## API Endpoints

### 1. Get All Quizzes

- **Endpoint**: `GET /api/quizzes`
- **Description**: Fetches a list of all available quizzes.
- **Response**:
  ```json
  [
    {
      "_id": "quizId",
      "title": "Quiz Title",
      "description": "Quiz description",
      "questions": [
        {
          "text": "Question 1",
          "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
          "correctAnswer": 2
        }
      ]
    }
  ]
  ```

### 2. Get Quiz by ID

- **Endpoint**: `GET /api/quizzes/:id`
- **Description**: Fetches a specific quiz by its ID.
- **Response**:
  ```json
  {
    "_id": "quizId",
    "title": "Quiz Title",
    "description": "Quiz description",
    "questions": [
      {
        "text": "Question 1",
        "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "correctAnswer": 2
      }
    ]
  }
  ```

### 3. Submit Quiz

- **Endpoint**: `POST /api/quizzes/:id/submit`
- **Description**: Submits the user's answers to the quiz and calculates the score.
- **Request Body**:
  ```json
  {
    "answers": [0, 1, 2] // Index of selected options for each question
  }
  ```
- **Response**:
  ```json
  {
    "score": 2 // Number of correct answers
  }
  ```

## Database Model

The **Quiz** model consists of the following fields:

- `title`: A string representing the title of the quiz.
- `description`: A string providing additional details about the quiz.
- `questions`: An array of objects representing the quiz questions. Each question has:
  - `text`: The question text.
  - `options`: An array of answer choices.
  - `correctAnswer`: An integer representing the index of the correct answer.

Example Schema:

```json
{
  "title": "Math Quiz",
  "description": "A basic math quiz",
  "questions": [
    {
      "text": "What is 2 + 2?",
      "options": ["3", "4", "5", "6"],
      "correctAnswer": 1
    }
  ]
}
```

## Running the Project

1. Ensure MongoDB is running locally or set up a cloud MongoDB instance.

2. Start the server using the following command:

   ```bash
   npm start
   ```

   Nodemon will automatically restart the server if there are any changes in the source code.

3. You can access the API endpoints via Postman, CURL, or any other API testing tool.
