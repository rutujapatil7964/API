User Authentication API - Project Documentation
Overview
This project is a User Authentication API built using Node.js, Express.js, and MongoDB. It provides functionalities for user registration, authentication, password reset, and authorization using JWT (JSON Web Token). The API securely connects to a MongoDB database for storing user credentials.
________________________________________
Features
1. User Registration
•	Users can register by providing their name, email, password, and terms agreement (tc).
•	Passwords are hashed using bcrypt before storing them in the database.
2. User Login
•	Users can log in using their email and password.
•	Upon successful authentication, a JWT token is generated.
3. Password Reset
•	Users can request a password reset via email.
•	A token-based verification system is used to securely reset the password.
4. User Authorization (Protected Routes)
•	Certain routes require JWT authentication.
•	Users must provide a valid token to access protected endpoints, such as changing their password.
________________________________________
Project Structure
1. Configuration Files
•	.env - Stores environment variables like: 
o	PORT: API server port (default: 8000)
o	DATABASE_URL: MongoDB connection string
o	JWT_SECRET_KEY: Secret key for JWT authentication
o	Email service credentials (optional)
2. Core Files
•	app.js - Main entry point of the API. 
o	Sets up Express.js, CORS policy, JSON parsing, and routes.
•	connectdb.js - Handles MongoDB database connection.
•	authmiddleware.js - Middleware for JWT verification and securing protected routes.
•	emailConfig.js - Configures Nodemailer for sending password reset emails.
3. Models
•	User.js - Defines the User model (Schema) with fields: 
o	name: User's full name
o	email: User's email (must be unique)
o	password: Hashed password
o	tc: Terms and conditions agreement (Boolean)
4. Controllers
•	usercontroller.js - Contains business logic for user operations: 
o	User Registration
o	User Login
o	Password Change
o	Password Reset Email
o	Password Reset Token Verification
5. Routes
•	userRoutes.js - Defines API endpoints: 
o	Public Routes: 
	POST /api/user/register - Register a new user
	POST /api/user/login - Authenticate and log in
	POST /api/user/send-reset-password-email - Request password reset email
	POST /api/user/reset-password/:id/:token - Reset password
o	Protected Routes: (Require JWT authentication) 
	POST /api/user/changePassword - Change password
	GET /api/user/loggeduser - Fetch logged-in user details
________________________________________
Dependencies
The project uses the following dependencies:
•	Express.js - Web framework for handling API requests.
•	MongoDB (Mongoose) - Database for storing user credentials.
•	JWT (jsonwebtoken) - Used for generating and verifying authentication tokens.
•	Bcrypt - For hashing passwords securely.
•	Nodemailer - For sending password reset emails.
•	dotenv - For managing environment variables.
________________________________________
Setup & Installation
1.	Clone the repository: 
2.	git clone <repository-url>
3.	cd user-authentication-api
4.	Install dependencies: 
5.	npm install
6.	Create a .env file and configure environment variables.
7.	Start the server: 
8.	npm start
o	For development mode with auto-restart: 
o	npm run dev
9.	API is now running on http://localhost:8000 (or the specified port).
________________________________________


Conclusion
This project serves as a foundation for secure user authentication in any Node.js application. It ensures safe login, registration, and password management with JWT-based authentication and bcrypt password hashing.

