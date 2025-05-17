# AI-Integrated Interview Preparation App

An advanced **AI-Integrated Interview Preparation** platform built with the **MERN Stack** (MongoDB, Express, React, Node.js) and powered by **Gemini API** for intelligent interview simulations. This application is designed to help users practice interviews effectively by generating relevant questions and providing model answers to help users gauge their preparation level.

## Features

* **User Authentication:** Secure login and registration with JWT and bcrypt.
* **Interview Simulation:** Real-time interview simulations with AI-driven questions and model answers.
* **Practice Sessions:** Users can practice with a wide variety of questions covering technical, HR, and behavioral aspects.
* **Dashboard Analysis:** Track your progress and revisit past sessions for self-analysis.
* **Real-time Updates:** Smooth updates during practice sessions.
* **Responsive Design:** Fully responsive across all devices.

## Technologies Used

* **Frontend:** React, Axios
* **Backend:** Node.js, Express.js, MongoDB
* **Authentication:** JWT (JSON Web Token), bcrypt
* **AI Integration:** Gemini API

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/prjn2702/interviewPrepAI.git
```

2. Navigate to the project folder:

```bash
   cd interviewPrepAI
```

3. Install dependencies for both frontend and backend:

```bash
   cd frontend/interview-prep-ai && npm install
   cd backend && npm install
```

4. Configure environment variables:

Create a `.env` file in the `backend` directory with the following:

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
PORT=5000
GEMINI_API_KEY=your-api-key
```

5. Run the application:

```bash
   cd backend && npm start
   cd frontend/interview-prep-ai && npm start
```

The application should be running at [http://localhost:8000](http://localhost:8000)

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

---

Feel free to explore, contribute, and improve this application!
