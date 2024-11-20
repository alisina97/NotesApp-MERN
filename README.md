# MERN Notes App

A simple MERN (MongoDB, Express.js, React, Node.js) notes app for managing your notes.

![Project Screenshot](/frontend/notes-app/src/assets/images/Screenshot%202024-11-20%20at%2011-05-43%20Vite%20React.png)

## Introduction

This MERN Notes App is designed to help you manage and organize your notes efficiently. It uses a modern tech stack to provide a seamless user experience.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

- MongoDB: You will need a MongoDB instance. You can set up one locally or use a cloud-hosted solution like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alisina97/NotesApp-MERN.git
   ```

2. Navigate to the repository

   ```bash
   cd NotesApp-MERN
   ```

3. Install server dependencies
   ```bash
   cd backend
   npm i
   ```
4. Install frontend dependencies
   ```bash
   cd ../frontend
   npm i
   ```

## Configuration

### Backend Setup

1. In the `backend` directory, create a `.env` file with the following content:

   ```env
   ACCESS_TOKEN_SECRET=your-secret-key
   ```

2. Replace `your-secret-key` with a secure, random string of your choice.

3. Update the `config.js` file located in the `backend` directory with your MongoDB connection string:

   ```javascript
   {
       "connectionString": "your link to mongo db"
   }
   ```

4. Ensure the username, password, and cluster details match your MongoDB instance.

---

### Frontend Setup

No additional configuration is needed for the frontend.

---

## Usage

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. The backend server will start on `http://localhost:5000`.

3. Start the frontend server:

   ```bash
   cd ../frontend
   npm start
   ```

4. The frontend application will start on `http://localhost:3000`.

5. Open your browser and navigate to `http://localhost:3000` to use the Notes App.

---

## Features

- Add, update, and delete notes.
- Store notes securely in MongoDB.
- Simple, user-friendly interface.

---

## Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Context API

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for review.

---

## Acknowledgements

Special thanks to the open-source community for providing tools and resources that made this project possible.
