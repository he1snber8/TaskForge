# TaskForge

Description
Create a web-based task management app where users can add, edit, and delete tasks. The app supports user authentication with JWT, categorizes tasks by project, and displays tasks with priority sorting. The front-end is built with React and the back-end is powered by Node.js.

## Tech Stack
- React
- Node.js

## Requirements
- Use JWT for user authentication in backend routes (Protect routes with middleware that verifies the Authorization header)
- Categorize tasks by project ID and fetch accordingly (Use URL params to specify project)
- Display tasks sorted by priority on the client (Use Array.sort in React before rendering)

## Installation

1. Clone the repository
   bash
   git clone https://github.com/your-username/TaskForge.git
   cd TaskForge
   

2. Backend Setup
   bash
   cd server
   npm install
   
   - Create a `.env` file in `server/`:
     env
     JWT_SECRET=your_jwt_secret_key
     PORT=4000
     

3. Frontend Setup
   bash
   cd ../client
   npm install
   
   - Create a `.env` file in `client/`:
     env
     REACT_APP_API_URL=http://localhost:4000/api
     

## Usage

1. Start the backend server:
   bash
   cd server
   npm run start
   

2. Start the React development server:
   bash
   cd client
   npm run start
   

3. Open your browser and navigate to `http://localhost:3000`.

## Implementation Steps

1. Initialize the Node.js backend:
   - Run `npm init -y`
   - Install `express`, `jsonwebtoken`, `cors`, and `dotenv`.
2. Configure Express server (`server/index.js`):
   - Load environment variables with `dotenv`.
   - Enable CORS and JSON parsing.
3. Implement JWT middleware (`server/middleware/auth.js`):
   - Verify the `Authorization` header.
   - Attach user info to `req.user`.
4. Create authentication routes (`server/routes/auth.js`):
   - `POST /api/auth/register`
   - `POST /api/auth/login`
   - Generate and return JWT on login.
5. Create task routes (`server/routes/tasks.js`):
   - Protect routes with JWT middleware.
   - `GET /api/tasks/:projectId` to fetch tasks by project.
   - `POST /api/tasks` to add a task.
   - `PUT /api/tasks/:taskId` to edit a task.
   - `DELETE /api/tasks/:taskId` to remove a task.
6. Build the React client:
   - Scaffold with `create-react-app`.
   - Create authentication context and hooks.
   - Implement login, register, and protected pages.
7. Fetch and display tasks:
   - Call `GET /api/tasks/:projectId`.
   - Sort tasks by `priority` using `Array.sort` before rendering.
   - Provide UI to add, edit, and delete tasks.
8. Test the full workflow:
   - Register and login users.
   - Create multiple projects and tasks.
   - Verify JWT protection and priority sorting.

## API Endpoints

- POST   /api/auth/register      Register a new user
- POST   /api/auth/login         Authenticate and receive a JWT
- GET    /api/tasks/:projectId   Get tasks by project (protected)
- POST   /api/tasks              Create a new task (protected)
- PUT    /api/tasks/:taskId      Update a task (protected)
- DELETE /api/tasks/:taskId      Delete a task (protected)