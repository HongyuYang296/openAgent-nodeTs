# Node.js (TypeScript) Backend - Contacts API

This repository contains a **Node.js** backend built with **TypeScript**. The backend implements a **CRUD (Create, Read, Update, Delete)** API for managing a contacts list, using **SQLite** as the database. The project is structured with **Model**, **DAL (Data Access Layer)**, **Service**, and **Routes** for better code management. Additionally, the project uses **ESLint** with the latest flat config for code quality.

## Features

- **CRUD Endpoints** for managing contacts:
  - **Create** a contact
  - **Read** contacts
  - **Update** contact details
  - **Delete** a contact
- **SQLite** used for data persistence
- Structured following best practices:
  - **Model**: Defines the data structure
  - **DAL (Data Access Layer)**: Manages database interactions
  - **Service**: Contains business logic
  - **Routes**: Handles API requests
- **ESLint** configured with the latest flat config for code linting and quality
- **Prettier** for code formatting

## Libraries and Tools Used

The following libraries and tools are used in this project:

- **nodemon**: For live reloading during development
- **prettier**: For code formatting
- **express**: Web framework to create the API
- **cors**: Middleware to enable Cross-Origin Resource Sharing
- **eslint**: For linting and enforcing code quality with the latest flat config
- **dotenv**: For environment variable management
- **sqlite**: Lightweight SQL database for data storage
- **globals**: Type definitions for global variables

## Project Structure

```bash
├── src
│   ├── dal         # Data Access Layer for database operations
│   ├── models      # Data models (e.g., Contact model)
│   ├── services    # Business logic services
│   ├── routes      # Express routes to handle API requests
│   ├── database.ts # Manage the SQLite
│   └── server.ts   # Entry point of the application
├── eslint.config.js# ESLint configuration with flat config
├── package.json    # Dependencies and scripts
├── tsconfig.json   # TypeScript configuration
└── .env            # Environment variables (not included in version control)
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

1. **Node.js** (version 16 or higher)
2. **npm** (comes with Node.js)
3. **SQLite** (for managing the SQLite database)

### Step 1: Clone the Repository

Clone the repository from GitHub:

```bash
git clone https://github.com/HongyuYang296/openAgent-nodeTs.git
cd openAgent-nodeTs
```
### Step 2: Install Dependencies

Install the required dependencies by running:

```bash
npm install
```

###  Step 3: Set Up Environment Variables (optionnal)
Create a .env file in the root directory and configure your environment variables. Here’s an example of what your .env file should contain:

```bash
PORT=8001
DATABASE_URL=./data/contacts.db
```

Step 4: Build the Project
Compile the TypeScript code into JavaScript using the following command:

```bash
npm run build
```
### Step 5: Start the Development Server
To start the server in development mode with live reloading using nodemon, run:

```bash
npm run dev
```
This will start the server on the port specified in the .env file (default: 8001).

### Step 6: Access the API
Once the server is running, you can access the CRUD endpoints at http://localhost:<PORT>, where <PORT> is the port you set in the .env file (default: 8001).

Example Endpoints:
- GET /api/contacts - Get all contacts
- POST /api/contacts - Create a new contact
- PUT /api/contacts/:id - Update a contact by ID (not use in this case)
- DELETE /api/contacts/:id - Delete a contact by ID
- PUT /api/contacts/:id/status - Update contact status
  
Available Scripts
Here are some useful scripts available in the project:

```bash
npm run build: Compile the TypeScript code into JavaScript.
npm run dev: Run the server in development mode using nodemon.
npm run lint: Run ESLint to lint the codebase.
npm run prettier: Format the code using Prettier.
```
Running the Server in Production Mode
To run the server in production mode, ensure you have built the project and then run:


```bash
npm start
```
This will run the compiled JavaScript code.

### Troubleshooting
If you encounter any issues:

Ensure that all dependencies are installed correctly by running npm install.
Double-check your .env file to make sure all required environment variables are set.
Make sure SQLite is properly installed and the database path is correctly configured in the .env file.
