
# JWT Authentication with Django and React

## Overview

This project demonstrates the integration of JWT (JSON Web Tokens) for authentication and authorization in a full-stack application. It utilizes Django for the backend to handle user authentication and JWT issuance, while React serves as the frontend to interact with the backend and manage user sessions.

## Features


- **User Login**: Authenticate users and issue JWT tokens.
- **Token-Based Authentication**: Securely access backend APIs using JWT.
- **Protected Routes**: Ensure only authenticated users can access certain routes.

## Technologies

- **Backend**: Django, Django REST Framework, `djangorestframework-simplejwt`
- **Frontend**: React, Axios

## Setup

### Backend Setup (Django)

1. **Clone the Repository**

   ```bash
   git clone https://github.com/chemoiko/JWT-Tokens-Django-React.git
   cd JWT-Tokens-Django-React/backend
   Create a virtual environment and install the dependencies:

2. **Create a virtual environment and install the dependencies:**
   
   ```python -m venv venv
   source venv/bin/activate  # For Windows: venv\Scripts\activate
   pip install -r requirements.txt
   Apply migrations and create the database:

4. **migrate**
   
   ```python manage.py migrate
   Create a superuser for Django Admin (optional but recommended):

6. **Create a user**
   ```python manage.py createsuperuser
   Start the Django development server:

7. **Run the server**
   ```python manage.py runserver
   The Django backend should now be running on http://127.0.0.1:8000/.

## Backend JWT Configuration
   In settings.py, configure djangorestframework-simplejwt by adding the following:
   
   ```python
   Copy code
   INSTALLED_APPS = [
       ...
       'rest_framework',
       'rest_framework_simplejwt',
   ]
   
   REST_FRAMEWORK = {
       'DEFAULT_AUTHENTICATION_CLASSES': (
           'rest_framework_simplejwt.authentication.JWTAuthentication',
       ),
   }
   Ensure that your API endpoints are protected using the @permission_classes decorator where needed.
```
## Frontend Setup (React)
   
1. **Navigate to the frontend directory:**
   ```cd ../frontend**

2. **Install the dependencies**
   ```npm install
   Start the React development server:

3. **Start the Server**
   ```npm start
   The React app should now be running on http://localhost:3000/.



## Usage
1. **Register a new user: Go to the registration page in the React app and create a new account. Upon successful registration, you will be redirected to the    login page.**
   
2. **Login: Use your credentials to log in. The application will obtain a JWT token from the backend and store it in the browser's local storage.**
   
3. **View Notes: Once authenticated, the notes page will display a list of notes fetched from the backend. You can only access this page if you are logged in.**
   
4. **Logout: Log out from the application, which clears the JWT token from local storage and redirects you to the login page.**

## API Endpoints
   Authentication
   ```POST /api/token/ - Obtain JWT token (login)
   POST /api/token/refresh/ - Refresh expired JWT token
   POST /api/register/ - Register a new user
   Notes
   GET /api/notes/ - Fetch notes (requires authentication)
   Troubleshooting
   Invalid Token: If you receive an "Invalid token" error, try refreshing your token or logging in again.
   
   CORS Issues: Ensure that CORS is properly configured in your Django settings for development:
```
## Cors headers setup in settings.py
```
   INSTALLED_APPS += ['corsheaders']
   
   MIDDLEWARE += ['corsheaders.middleware.CorsMiddleware']
   
   CORS_ALLOW_ALL_ORIGINS = True
