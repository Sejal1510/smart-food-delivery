# 🍔 Smart Food Delivery System (DevOps Project)

---

##  Project Overview

The **Smart Food Delivery System** is a full-stack web application designed to simplify online food ordering. It enables customers to browse restaurants and menus, while allowing restaurant owners to manage their offerings efficiently.

This project demonstrates the **complete DevOps lifecycle**, including containerization, continuous integration, automated testing, and continuous deployment using modern tools.

---

##  Problem Statement

Traditional food delivery systems often suffer from:

* Complex setup and dependency management
* Inconsistent execution across different environments
* Limited scalability and deployment challenges

This project addresses these issues by implementing **DevOps practices**, ensuring:

* Easy and automated setup
* Consistent execution across environments
* Scalable and portable architecture

---

## 🧩 Tech Stack

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
* GitHub Actions (CI/CD automation)
* Docker Hub (Image hosting)
* Render (Cloud deployment)
* SonarCloud (Static Code Analysis)
* ESLint (Code Quality)

---

## ⚙️ Key Features

* 🔐 User Authentication using JWT
* 🍽️ Restaurant and Menu Browsing
* 🏪 Owner Dashboard
* 🌐 Full Stack Integration
* 📦 Containerized Deployment
* 🔍 Code Quality Analysis (SonarCloud)
* 🔁 Automated CI/CD Pipeline

---

## 🐳 Containerization (Docker)

The application is fully containerized using Docker.

###  Achievements

* Backend containerized using Docker
* Frontend containerized using Docker
* Multi-container setup using Docker Compose
* Environment variables securely managed using `.env`

---

## ▶ Running the Application (Docker)

### 🔧 Build and Run

```bash
docker-compose up --build
```

---

### 🌐 Access

* Frontend: http://localhost:5173
* Backend: http://localhost:5000

---

##  Benefits of Using Docker

* Eliminates dependency conflicts
* Ensures consistent environments
* Enables quick setup and execution
* Makes the system portable and scalable

---

## 🔁 CI/CD Pipeline

The project implements a **complete CI/CD pipeline using GitHub Actions**.

### 🔹 Continuous Integration (CI)

* Automatically installs dependencies
* Executes Jest test cases
* Performs code validation using ESLint
* Ensures code quality through SonarCloud

### 🔹 Continuous Deployment (CD)

* Builds Docker image automatically
* Pushes image to Docker Hub
* Triggers deployment on Render using deploy hooks

###  Workflow

```
Code Push → GitHub Actions → Testing (Jest) → Docker Build → Docker Hub Push → Render Deployment
```

This ensures **fully automated build, test, and deployment process**.

---

##  Testing

* Jest used as the testing framework
* Supertest used for API testing
* Test cases implemented for authentication module
* Automated test execution integrated into CI pipeline

---

##  Static Code Analysis (SonarCloud)

SonarCloud is used to:

* Detect bugs and vulnerabilities
* Identify code smells
* Improve maintainability
* Ensure secure coding practices

---

##  Deployment

The backend is deployed on **Render**:

* Environment variables securely configured
* Automatic deployment triggered via CI/CD pipeline
* Application accessible globally

---

##  Image Distribution

Docker enables global sharing of the application:

```bash
docker pull <username>/smart-food-backend
docker run -p 5000:5000 <username>/smart-food-backend
```

This allows the application to run **without manual setup**.

---

##  System Architecture

```
Frontend (React - Vite)
        ↓
Backend (Node.js + Express API)
        ↓
MongoDB Atlas (Cloud Database)
```

Using Docker:

* Each service runs in an isolated container
* Managed using Docker Compose

---

##  Conclusion

This project successfully demonstrates:

* Real-world implementation of DevOps lifecycle
* Containerization using Docker
* Multi-container orchestration
* Automated CI/CD pipeline
* Code quality and security analysis
* Cloud deployment

The system is **fully functional, scalable, portable, and production-ready**.

---

##  Authors

* Sejal Shinde
* Vanshika Singh
* Ananya Wate
* Bhumi Bhatt
