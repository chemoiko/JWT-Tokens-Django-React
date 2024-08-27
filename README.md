JWT Authentication with Django and React
Overview
This project demonstrates the integration of JWT (JSON Web Tokens) for authentication and authorization in a full-stack application. It utilizes Django for the backend to handle user authentication and JWT issuance, while React serves as the frontend to interact with the backend and manage user sessions.

Features
User Registration: Sign up new users.
User Login: Authenticate users and issue JWT tokens.
Token-Based Authentication: Securely access backend APIs using JWT.
Protected Routes: Ensure only authenticated users can access certain routes.
Technologies
Backend: Django, Django REST Framework, djangorestframework-simplejwt
Frontend: React, Axios
Setup
Backend Setup (Django)
Clone the Repository

bash
Copy code
git clone https://github.com/chemoiko/JWT-Tokens-Django-React.git
cd JWT-Tokens-Django-React/backend
Create a Virtual Environment

bash
Copy code
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
Install Dependencies

bash
Copy code
pip install -r requirements.txt
Apply Migrations

bash
Copy code
python manage.py migrate
Create a Superuser (optional)

bash
Copy code
python manage.py createsuperuser
Run the Development Server

bash
Copy code
python manage.py runserver
The backend server will be running at http://127.0.0.1:8000.

Frontend Setup (React)
Navigate to the Frontend Directory

bash
Copy code
cd ../frontend
Install Dependencies

bash
Copy code
npm install
Start the React Development Server

bash
Copy code
npm start
The frontend will be running at http://localhost:3000.
