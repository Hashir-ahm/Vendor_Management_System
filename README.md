# Corporate Vendor Management System

A web app for managing a company's vendors, contracts, departments, budgets and purchase orders — built with **Node.js / Express** and **MySQL** (Database Systems course project).

## Features

- **Sign up / log in** with role-based menus: **Admin**, **Vendor**, **Finance**, **Department**
- **Vendors** — registration and vendor list
- **Contracts** — create and manage vendor contracts
- **Vendor performance** — record and review ratings
- **Departments & budgets** — add/remove departments, assign and monitor budgets
- **Purchase orders** — create and track orders
- **User management** — admins can change user roles

## Tech stack

Node.js · Express · MySQL (`mysql2`) · bcrypt · HTML/CSS front end (`public/`)

## Project structure

```
index.js          Express server and all routes / API endpoints
public/           HTML pages (login, menus, vendors, contracts, budgets, ...)
style/            CSS
SQL/Table.sql     Database schema (userinfo, vendor, contract, department, budget, performance, purchaseorder)
*.pdf             Project report, ERD and relational schema
```

## Setup

1. Install [Node.js](https://nodejs.org) and MySQL.
2. Create the database and tables:
   ```bash
   mysql -u root -p -e "CREATE DATABASE vendormanagementsystem"
   mysql -u root -p vendormanagementsystem < SQL/Table.sql
   ```
3. Configure your database login:
   ```bash
   cp .env.example .env    # then put your MySQL password and admin details in .env
   ```
4. Install, create the admin account and run:
   ```bash
   npm install
   npm run create-admin
   npm start
   ```
5. Open http://localhost:8080 and log in with the admin details from `.env`.

## Security

- Passwords are hashed with **bcrypt** before they are stored; accounts created before hashing was added are upgraded automatically on their next login.
- Database and admin credentials are read from `.env`, which is never committed.
