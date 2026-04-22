# VillageConnect - Node.js/Express + MySQL Demo (Deployment-ready)

## Overview
This is a simple VillageConnect demo application built with Node.js, Express, and MySQL.
It is designed for quick deployment to AWS (EC2 + RDS). The app allows adding/listing/deleting
community services or announcements (title, description, contact).

## Files
- app.js - main Express app
- views/ - EJS templates (index, add)
- public/ - static assets (CSS)
- create_table.sql - SQL to create database and table
- .env.example - environment variables example
- README.md - this file

## Quick Local Run (optional)
1. Install Node.js 18+ and MySQL.
2. Create a database using `create_table.sql`.
3. Copy `.env.example` to `.env` and update DB credentials.
4. Install deps and start:
   ```bash
   npm install
   npm start
   ```
5. Open http://localhost:3000

## Deploy to AWS EC2 + RDS (simple steps)
1. Create an RDS MySQL instance. Note endpoint, username, password.
2. Create an EC2 instance (Ubuntu 22.04) and open ports 22 and 80 in its security group.
3. SSH to EC2 and run:
   ```bash
   sudo apt update
   sudo apt install -y git nodejs npm build-essential
   # install MySQL client if needed
   sudo apt install -y mysql-client
   git clone https://github.com/YOUR-USERNAME/villageconnect.git
   cd villageconnect
   npm install
   cp .env.example .env
   # edit .env to set DB_HOST, DB_USER, DB_PASS, DB_NAME
   npm start
   ```
4. Import DB schema from EC2 (or locally):
   ```bash
   mysql -h <RDS_HOST> -u <user> -p < create_table.sql
   ```
5. Visit `http://EC2_PUBLIC_IP:3000` (or set up nginx reverse proxy on port 80).

## Screenshots and Submission
- Take screenshots of app running, RDS instance details, and EC2 console.
- Create a short screen recording showing app + AWS console.
- Add README, screenshots, and architecture diagram to GitHub repo for submission.

## Notes for Internship Submission
- Prepare a 150-word summary and a 5-min pitch as required.
- Optionally add Lambda and CodePipeline for advanced tasks.
