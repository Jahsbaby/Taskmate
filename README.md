📝 Taskmate – Fullstack Task Management App

Taskmate is a fullstack MERN (MongoDB, Express, React, Node.js) application for managing tasks efficiently.
It includes user authentication (JWT), task CRUD operations, category filtering, and a responsive Tailwind CSS UI.

🚀 Project Overview

Register/Login securely using JWT authentication

Create, update, delete, and mark tasks as completed

Filter tasks by categories (e.g., Work, Study, Personal)

Fully responsive UI optimized for desktop and mobile

Backend built with Express + MongoDB, frontend with React (Vite)

🛠 Tech Stack

Frontend:

React (Vite) ⚡

React Router DOM

Tailwind CSS

Fetch API / Axios

Backend:

Node.js

Express.js

MongoDB with Mongoose

JSON Web Token (JWT)

bcrypt.js (for password hashing)

Dev Tools:

ESLint + Prettier

Nodemon

dotenv

⚙️ Setup Instructions
1. Clone the repo
git clone https://github.com/your-username/taskmate.git
cd taskmate

2. Backend Setup
cd backend
npm install


Create a .env file in backend/ with:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start backend server:

npm run dev


Backend runs at → http://localhost:5000

3. Frontend Setup
cd ../frontend
npm install


Create .env in frontend/ with:

VITE_API_URL=http://localhost:5000/api


Run Vite dev server:

npm run dev


Frontend runs at → http://localhost:5173

🔗 API Endpoints
Auth Routes (/api/auth)
Method	Endpoint	Description
POST	/register	Register new user
POST	/login	Login user & get JWT token
Task Routes (/api/tasks) – Protected (JWT required)
Method	Endpoint	Description
GET	/	Get all tasks (by user)
POST	/	Create new task
PUT	/:id	Update task by ID
DELETE	/:id	Delete task by ID
PATCH	/:id/complete	Mark task as completed

🔮 Future Improvements

 Task due date reminders with notifications

 Drag & Drop task reordering (React Beautiful DnD)

 Team collaboration (shared boards)

 OAuth login (Google/GitHub)

 Deploy backend (Render/Heroku) + frontend (Vercel/Netlify)
