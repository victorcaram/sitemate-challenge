# Sitemate Challenge

A simple Issue application made for the Sitemate Full Stack Engineer Challenge. The backend uses Django REST framework, and the frontend is built using React with TypeScript, following the Atomic Design pattern.

## Project Structure

```
client/    # React frontend
server/    # Django backend
Makefile   # Several commands to help the User
```

## Prerequisites

- Python 3.x
- Yarn
- Node.js

## Setup Instructions

### Backend (Django)

1. Create and activate a virtual environment:
   ```bash
   python3 -m venv env
   source env/bin/activate
   ```

2. Make sure you are on the root of the directory, then install the backend dependencies:
   ```bash
   make setup-server
   ```

3. Run migrations:
   ```bash
   make server-migrate
   ```

4. (OPTIONAL) You can start only the Django development server:
   ```bash
   make run-server
   ```

### Frontend (React)

1. Make sure you are on the root of the directory, then install the frontend dependencies:
   ```bash
   make setup-client
   ```

2. (OPTIONAL) You can start only the client React App:
   ```bash
   make run-client
   ```

### Execution

After the dependencies are installed, you can execute both client and server by using the command:

```bash
make run
```

## Makefile

The `Makefile` has several commands to help you. Make sure to check all the commands by using:

```bash
make help
```

## API Endpoints

| Method | Endpoint         | Description               |
|--------|------------------|---------------------------|
| GET    | `/api/issues/`    | List all issues           |
| POST   | `/api/issues/`    | Create a new issue        |
| PUT    | `/api/issues/:id` | Update an existing issue  |
| DELETE | `/api/issues/:id` | Delete an issue           |