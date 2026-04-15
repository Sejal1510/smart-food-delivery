# 🍔 Smart Food Delivery System

## 📌 Project Overview

The Smart Food Delivery System is a full-stack web application built using modern DevOps practices.
It enables customers to browse restaurants, view menus, and place orders, while allowing administrators (restaurant owners) to manage restaurant menus efficiently.

This project demonstrates the complete DevOps lifecycle including version control, CI/CD, testing, containerization, and cloud deployment.

---

## 🎯 Problem Statement

Traditional food ordering systems lack automation, scalability, and centralized management.
This project solves that by providing a role-based platform where:

* Customers can easily order food
* Admins can manage menus dynamically

---

## 🚀 Features

### 👤 Customer

* Register and Login
* Browse restaurants
* View menu items
* Add items to cart
* Place orders

### 🏪 Admin (Restaurant Owner)

* Login
* View all restaurants
* Select a restaurant
* Add menu items

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas (Cloud)

### DevOps Tools

* GitHub (Version Control)
* GitHub Actions (CI/CD)
* Jest (Testing)
* Docker (Containerization)
* Render (Cloud Deployment)

---

## 🔁 DevOps Lifecycle Implementation

### 1. Version Control (GitHub)

* Repository maintained with proper commits
* Branching strategy used (main & develop)

### 2. Continuous Integration (CI)

* GitHub Actions pipeline triggers on push
* Automatically installs dependencies and runs tests

### 3. Automated Testing

* Backend tested using Jest
* Tests executed in CI pipeline

### 4. Containerization (Docker)

* Backend containerized using Docker
* Ensures consistent environment across systems

### 5. Deployment

* Backend deployed on Render
* MongoDB Atlas used as cloud database

---

## 🐳 Docker Setup

### Build Docker Image

```bash
docker build -t smart-food-backend .
```

### Run Container

```bash
docker run -p 5000:5000 smart-food-backend
```

---

## 🚀 Deployment Links

* Backend: https://smart-food-delivery-backend.onrender.com
* Database: MongoDB Atlas

---

## 📂 Project Structure

```
smart-food-delivery/
├── backend/
│   ├── src/
│   ├── routes/
│   ├── models/
│   └── tests/
├── frontend/
│   ├── src/
│   └── pages/
├── .github/workflows/
└── README.md
```

---

## 🧪 Testing

* Jest is used for backend testing
* Test cases ensure API reliability
* Tests run automatically via CI pipeline

---

## 🔄 Application Flow

### Customer Flow

1. User registers and logs in
2. Views list of restaurants
3. Selects a restaurant
4. Adds items to cart
5. Places an order

### Admin Flow

1. Admin logs in
2. Opens Owner Dashboard
3. Selects a restaurant
4. Adds new menu items

---

## 🎯 Learning Outcomes

* Understanding of DevOps lifecycle
* Hands-on experience with CI/CD pipelines
* Practical implementation of Docker
* Cloud deployment using Render
* Full-stack application development

---

## 👩‍💻 Author

Sejal Shinde
