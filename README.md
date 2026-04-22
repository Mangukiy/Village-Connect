# 🚀 VillageConnect – Full Stack Community Platform

> A deployment-ready full-stack web application to connect communities by managing local services and announcements.

---

## 📌 Overview

VillageConnect is a lightweight and efficient web application built using **Node.js, Express, and MySQL**. It enables users to add, view, and manage community services or announcements.
The project is designed for quick and scalable deployment on **AWS EC2 and RDS**, making it suitable for real-world cloud environments.

---

## ✨ Features

* 📢 Add and manage community services/announcements
* 📋 View all services in a structured format
* ❌ Delete outdated entries
* ⚡ Fast and lightweight performance
* ☁️ Cloud-ready deployment

---

## 🛠️ Tech Stack

### 🎨 Frontend

* HTML
* CSS
* EJS Templates

### ⚙️ Backend

* Node.js
* Express.js (REST API)

### 🗄️ Database

* MySQL (AWS RDS)

### ☁️ Cloud & Deployment

* AWS EC2 (Backend Hosting)
* AWS RDS (Database)
* AWS CloudWatch (Monitoring & Logs)

---

## 📁 Project Structure

VillageConnect/
├── app.js
├── views/
│ ├── index.ejs
│ └── add.ejs
├── public/
│ └── css/
├── create_table.sql
├── .env.example
└── README.md

---

## ⚙️ Local Setup (Optional)

### 1️⃣ Prerequisites

* Node.js (v18+)
* MySQL

### 2️⃣ Setup Database

mysql -u root -p < create_table.sql

### 3️⃣ Configure Environment

cp .env.example .env
Update `.env` with your database credentials.

### 4️⃣ Install & Run

npm install
npm start

👉 Open: http://localhost:3000

---

## ☁️ AWS Deployment (EC2 + RDS)

### 🔹 Step 1: Setup AWS

* Create RDS MySQL instance
* Create EC2 (Ubuntu 22.04)
* Open ports: 22, 80, 3000

---

### 🔹 Step 2: Connect & Setup EC2

sudo apt update
sudo apt install -y git nodejs npm build-essential mysql-client

---

### 🔹 Step 3: Clone & Setup Project

git clone https://github.com/YOUR-USERNAME/villageconnect.git
cd villageconnect
npm install
cp .env.example .env

Update `.env`:
DB_HOST=<RDS_ENDPOINT>
DB_USER=<USERNAME>
DB_PASS=<PASSWORD>
DB_NAME=<DATABASE_NAME>

---

### 🔹 Step 4: Start Application

npm start

---

### 🔹 Step 5: Import Database

mysql -h <RDS_HOST> -u <user> -p < create_table.sql

---

### 🌐 Access Application

http://<EC2_PUBLIC_IP>:3000

(Optional: Configure NGINX for port 80)

---

## 📊 Monitoring

* AWS CloudWatch for logs and performance monitoring

---

## 🧠 Future Enhancements

* 🔐 User Authentication (Login/Signup)
* 🌍 Custom Domain & HTTPS
* ⚡ CI/CD Integration
* 📊 Advanced Monitoring (Prometheus & Grafana)

---

## 💼 Use Case

This project demonstrates:

* Full-stack web development
* Cloud deployment using AWS
* Database integration
* Practical DevOps concepts

---

## 👨‍💻 Author

Krish Mangukiya
DevOps & Cloud Enthusiast 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
