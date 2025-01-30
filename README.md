# Ecommerce_Follow_Along
Milestone 1 Project Overview: Building an E-commerce App with the MERN Stack

This project is a mentor-guided session focused on creating a complete e-commerce web application using the MERN stack. The goal is to gain practical experience in developing real-world web applications with features that are secure and scalable.

What is the MERN Stack?

The MERN stack is a popular technology set used to build full-stack web applications. It includes:
MongoDB – A database for storing data.
Express.js – A framework for building the backend.
React.js – A frontend library for creating user interfaces.
Node.js – A runtime environment for running JavaScript on the server.

The biggest advantage of the MERN stack is that it uses JavaScript for both the frontend and backend, making development easier and more beginner-friendly.

What is a REST API?

A REST API (Representational State Transfer) is a way for applications to communicate with each other over the web using standard HTTP methods such as:

GET – Retrieve data.
POST – Add new data.
PUT – Update existing data.
DELETE – Remove data.

Key Features of the Project

User Authentication:
> Allow new users to sign up.
> Enable existing users to log in securely.

Product Management:
> Add new products.
> Update product details.
> Get product information.

Order Handling:
> Manage customer orders.
> Provide well-structured data (usually in JSON format).

Basics of Database Schema Design:
Schema design in MongoDB involves organizing how data is stored and linked. This includes:
> Identifying important data types (e.g., Users, Products, Orders).
> Defining fields (e.g., name, price, email) and their data types.
> Linking data, such as connecting orders to specific users.

A well-designed schema ensures:
> Fast and efficient data retrieval.
> Easy scalability as the app grows.

Why is Authentication Important?

Authentication verifies a user's identity before allowing access to certain parts of the application. In our e-commerce app:
> Users log in securely.
> Only logged-in users can make purchases or view personal data like order history.

Key Benefits of Authentication:
> Keeps user information safe.
> Prevents unauthorized access.
> Offers a personalized experience for users.


By following these steps, we aim to build a reliable and secure e-commerce platform using the MERN stack.

# MILESTONE 2

This is a full-stack e-commerce application with a frontend built using Vite, Tailwind CSS, and React, and a backend for handling API requests.

## Project Setup and Login Page

In this milestone, we focused on setting up the initial front-end structure and implementing the login page for the application. Key achievements include:

Front-End Framework: Set up the React framework with Vite for a fast and modern development experience. Folder Structure: Organized the src folder to include separate directories for components, pages, and assets to improve scalability and maintainability. Login Page Implementation: Developed a basic login page (Login.jsx) that includes a user interface for email and password input. Incorporated validation logic to ensure proper user input. Routing: Implemented React Router for navigation and created routes for the login and signup pages. Styling: Added basic styling using CSS (App.css) to ensure a clean and user-friendly design. Git Integration: Added the new files to version control and committed progress to the GitHub repository. This milestone lays the groundwork for creating the front-end interface and interaction logic for the application.

## Project Structure

## Features
- **Frontend**:
  - Built with [Vite](https://vitejs.dev/) for fast development.
  - Styled using [Tailwind CSS](https://tailwindcss.com/).
  - Configured with ESLint and Stylelint for code quality.

## Setup and Installation
```bash
git clone <repository_url>
cd Ecommerce_FollowAlong
cd frontend
npx tailwindcss init
npm init -y
npm install
git branch milestone2
git checkout milestone2
git add .
git commit "commit message"
git push -u origin milestone2
```
and pull the request from your github account.

# Milestone 3: Project Setup for Backend

In this milestone, the foundational backend structure for the e-commerce application was successfully established. Key achievements include:

Backend Folder Structure:
Organized the project into clearly defined folders (config, controller, db, middleware, model, and utility) to ensure scalability and maintainability.
Database Integration:
Set up a connection to MongoDB using Mongoose, enabling seamless interaction with the database.
Environment Configuration
Implemented a .env file to securely manage sensitive data such as database credentials, ensuring better security practices.
Middleware Implementation
Created essential middleware for authentication, error handling, and asynchronous error management to streamline request processing and ensure robust error handling.
Utility Functions
-Added reusable utility components like a custom error handler to improve consistency and simplify debugging.

Git Integration
Configured version control with Git and included a .gitignore file to exclude sensitive files and unnecessary folders like node_modules.
This milestone sets up a solid backend foundation for further development, including API implementation, user authentication, and business logic handling. It ensures that the project is structured, secure, and ready for future expansion.


# Milestone 4: Creating User Model and Controller

In this milestone, the focus was on implementing the user model and controller for managing user data and operations in the backend. Key achievements include:

User Model:
Created a User schema using Mongoose to define the structure for storing user information in the MongoDB database.
Fields include essential user details such as name, email, password, and timestamps.
Added validation for required fields and unique constraints for the email field.
Password Hashing:
Implemented password hashing using bcrypt to securely store user passwords in the database.
User Controller:
Developed a user controller to handle user-related backend operations such as registration and login.
Added methods for creating new users and retrieving user details.
API Endpoints:
Set up API routes for user-related operations, including:
/api/users/register: Endpoint to register a new user.
/api/users/login: Endpoint to authenticate a user.
Error Handling:
Added error handling for scenarios such as duplicate email registration and invalid login credentials.
Git Integration:
Committed progress to version control, ensuring proper documentation of changes and updates.
This milestone provides the necessary backend infrastructure to manage user data, supporting future features like user authentication and authorization.

# Milestone 5: Creating the Signup Page

In this milestone, we focused on developing the signup page to enable users to create an account within the application. Key achievements include:
Signup Page Implementation:
Developed the Signup.jsx component with a user-friendly interface for account registration.
Included form fields for user details such as name, email, and password.
Form Validation:
Added client-side validation logic to ensure proper input formatting and error messages for invalid entries.
Integration with Routing:
Configured navigation to and from the signup page using React Router for seamless user flow.
Styling:
Enhanced the design of the signup page to align with the application's overall styling for a consistent user experience.
Code Organization:
Refactored the code into reusable components where possible to promote cleaner and more maintainable code.
This milestone enhances the user experience by allowing new users to register, paving the way for further integration with back-end user authentication systems.









