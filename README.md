# 🍔 Smart Food Delivery System (DevOps Project)

##  Project Overview

The **Smart Food Delivery System** is a full-stack web application designed to simplify online food ordering. It allows customers to browse restaurants and menu items, while restaurant owners can manage their offerings.

This project demonstrates the **complete DevOps lifecycle**, including containerization, continuous integration, testing, and deployment-ready architecture.

---

## Problem Statement

Traditional food ordering systems often face:

* Complex setup and dependency issues
* Inconsistent environments across different systems
* Limited scalability and portability

This project addresses these issues using **DevOps practices**, ensuring:

* Easy setup and deployment
* Consistent execution across environments
* Scalable and portable architecture

---

##  Tech Stack

### 🔹 Frontend

* React (Vite)
* Axios

### 🔹 Backend

* Node.js
* Express.js

### 🔹 Database

* MongoDB Atlas

### 🔹 DevOps Tools

* Docker
* Docker Compose
* Git & GitHub
* SonarCloud (Static Code Analysis)
* ESLint (Code Quality)

---

## ⚙️ Key Features

* 🔐 User Authentication using JWT
* 🍽️ Browse Restaurants and Menu Items
* 🏪 Owner Dashboard for managing data
* 🌐 Full Stack Integration
* 📦 Containerized Deployment
* 🔍 Static Code Analysis using SonarCloud

---

##  Containerization (Docker)

The application is fully containerized using Docker.

###  Achievements

* Backend containerized using Docker
* Frontend containerized using Docker
* Multi-container orchestration using Docker Compose
* Environment variables configured securely

---

##  Running the Application (Docker)

###  Build and Run

```bash
docker-compose up --build
```

---

### 🌐 Access the Application

* Frontend: http://localhost:5173
* Backend: http://localhost:5000

---

##  Benefits of Using Docker

* Eliminates dependency issues
* Ensures consistency across systems
* Enables quick setup and deployment
* Makes the application portable and scalable

---

##  Continuous Integration & Code Quality

* GitHub used for version control
* ESLint used for maintaining code quality
* SonarCloud integrated for:

  * Code analysis
  * Bug detection
  * Security vulnerability checks

---

##  Static Code Analysis (SonarCloud)

SonarCloud was used to:

* Detect bugs and vulnerabilities
* Improve code maintainability
* Ensure high-quality standards

---

## Deployment Readiness

The project is deployment-ready:

* Docker images can be built and executed on any system
* Application runs without manual setup using Docker
* Can be deployed to cloud platforms like AWS or Azure

---

##  Image Distribution (Concept)

Docker enables global sharing of applications:

```bash
docker pull <username>/smart-food-backend
docker run -p 5000:5000 <username>/smart-food-backend
```

This allows anyone to run the application without installing dependencies manually.

---

##  System Architecture

```
Frontend (React - Vite)
        ↓
Backend (Node.js + Express)
        ↓
MongoDB Atlas (Cloud Database)
```

Using Docker:

* Each service runs in its own container
* Managed using Docker Compose

---

##  Conclusion

This project successfully demonstrates:

* Implementation of DevOps principles
* Containerization using Docker
* Multi-container orchestration
* Code quality using SonarCloud
* Deployment-ready architecture

The system is fully functional, scalable, and production-ready.

---

##  Authors

* Sejal Shinde
* Vanshika Singh
* Ananya Wate
* Bhumi Bhatt
