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

Node.js · Express · MySQL (`mysql2`) · HTML/CSS front end (`public/`)

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
   cp .env.example .env    # then put your MySQL password in .env
   ```
4. Install and run:
   ```bash
   npm install
   node index.js
   ```
5. Open http://localhost:8080.

> ⚠️ Student project: passwords are stored in plain text. Do not use with real credentials — hash passwords (e.g. bcrypt) before any real deployment.
