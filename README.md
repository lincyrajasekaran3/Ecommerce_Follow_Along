# Ecommerce_Follow_Along
# Milestone 1 Project Overview: Building an E-commerce App with the MERN Stack

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

---

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

# MILESTONE 3: Project Setup for Backend

### Objectives
In this milestone, we focused on setting up the backend structure, initializing a Node.js server, connecting the application to MongoDB, and implementing basic error handling.

### Achievements

#### 1. Backend Folder Structure
We created a structured hierarchy for organizing backend code effectively:
- *routes/*: Contains route files to define API endpoints.
- *controllers/*: Handles the business logic for API requests.
- *models/*: Contains MongoDB schemas and models.
- *middleware/*: Includes middleware functions for tasks like authentication or logging.
- *utils/*: Stores utility functions for reusable logic (to be expanded later).
- *config/*: Contains configuration files like database connection settings.
- *app.js*: Main application file for configuring the server.
- *server.js*: Entry point for starting the Node.js server.

#### 2. Server Setup
- Initialized a Node.js server using Express.
- Configured the server to listen on a designated port (e.g., http://localhost:5000).

#### 3. Database Connection
- Connected the server to MongoDB using the Mongoose library.
- Verified the connection between the server and MongoDB.

#### 4. Basic Error Handling
- Implemented middleware to handle errors and provide clear error messages for better debugging.
- Ensured the server does not crash on unexpected errors.

---

# MILESTONE 4: Creating User Model and Controller

- Designed the User model with fields such as name, email, password, and role.
- Implemented user authentication and authorization mechanisms.
- Used bcrypt for password hashing and JWT for authentication.
- Integrated Multer for handling file uploads (e.g., profile images).
- Updated API routes for user management.
- Improved error handling and validation for user-related operations.


---

# MILESTONE 5: Creating the Signup Page

- Developed a user-friendly signup page using React.
- Integrated form validation to ensure valid user input.
- Connected the frontend with the backend API for user registration.
- Displayed appropriate error and success messages.
- Styled the page using modern UI components for a seamless user experience.


---

# MILESTONE 6: What Was Achieved

In this milestone, we completed the following:

- Implemented advanced product filtering and search functionality.
- Optimized backend API endpoints for better performance.
- Integrated payment processing using Stripe.
- Enhanced user authentication with JWT expiration handling.
- Improved UI/UX by refining product pages and checkout flows.
- Fixed bugs from previous milestones and improved error handling.

---

# MILESTONE 7: User Login

This milestone focused on implementing a secure user login endpoint. Key achievements include:

* **Secure Password Handling:** Implemented bcrypt hashing for passwords, ensuring they are never stored in plain text.  This protects user credentials even in the event of a database breach.
* **Credential Validation:**  Developed a login endpoint that validates user credentials by comparing the bcrypt hash of the entered password with the stored hash.
* **User Authentication:** Successfully implemented user authentication based on validated credentials.  This allows the system to identify and authorize users.
* **Improved Security:**  Enhanced overall application security by implementing secure password handling practices

---

# Milestone 8: Product Card Component

## Overview

In this milestone, I have implemented a reusable card component to showcase products dynamically on the homepage. The card component is designed to display product details such as name, image, and price in a structured layout.

## Features

*   **Reusable Card Component:** A dynamic component that accepts product details as props.
*   **Dynamic Rendering:** Uses array mapping to render multiple product cards.
*   **Responsive Layout:** Designed using Flexbox/Grid for a clean and structured display.
*   **Improved User Experience:** Ensures a consistent and visually appealing product showcase.


---

# Milestone 9: Creating the Product Form
In this milestone, we focused on building a form that allows users to add products, including support for multiple product images. Key achievements include:

* Product Form Implementation: Designed and developed a form to capture essential product details, such as: Product Name Description Price Category Multiple Product Images (file upload support)
* Image Upload Handling: Implemented functionality to allow multiple product images to be uploaded. Ensured proper validation for image formats and file sizes.
* Data Management: Configured state management to handle form inputs efficiently. Validated user inputs before submission to ensure accurate product data.


---

# Milestone 10: Product Schema and Endpoint

This milestone focuses on creating a Mongoose schema for products and building a POST endpoint to store product details in MongoDB.


## Implementation

*   **Product Schema:** The `product.js` file (or similar) defines the structure of product data (name, description, price, image URL, etc.) using Mongoose, with appropriate validation rules.
*   **Endpoint:** A POST endpoint (`/products` or similar) handles incoming product data, validates it, and saves it to the MongoDB database.

---

# Milestone 11: Dynamic Product Display on Home Page

## Overview

This milestone focuses on making the home page display products dynamically by fetching data from the MongoDB database.  We will create a backend endpoint to retrieve product data and then use that data on the frontend to populate product cards.

## Implementation Details

*   The backend endpoint should use the appropriate MongoDB driver methods to retrieve all product documents.
*   The frontend fetchProducts function should use fetch or a similar library to make the API call.
*   The product card component should be designed to receive product data as props and display it accordingly.











