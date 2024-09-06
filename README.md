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
│   ├── app.ts      # Main app configuration
│   └── server.ts   # Entry point of the application
├── .eslintrc.json  # ESLint configuration with flat config
├── package.json    # Dependencies and scripts
├── tsconfig.json   # TypeScript configuration
└── .env            # Environment variables (not included in version control)
