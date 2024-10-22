# Restaurant Booking API

A RESTful API designed to manage restaurant customer, staff,  bookings, orders, staff, tables, menu, menu items, ingredients and types. The API enables you to handle day-to-day 
operations such as creating and managing bookings, staff roles, orders, menus, ingredients and table assignments.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Customer Endpoints](#customer-endpoints)
  - [Staff Endpoints](#staff-endpoints)
  - [StaffRole Endpoints](#staffRole-endpoints)
  - [Table Endpoints](#table-endpoints)
  - [Booking Endpoints](#booking-endpoints)
  - [Order Endpoints](#order-endpoints)
  - [OrderMenuItem Endpoints](#orderMenuItem-endpoints)
  - [Menu Endpoints](#menu-endpoints)
  - [MenuItem Endpoints](#menuItem-endpoints)
  - [MenuItemIngredients Endpoints](#menuItemIngredients-endpoints)
  - [Ingredient Endpoints](#ingredient-endpoints)
  - [IngredientType Endpoints](#ingredientType-endpoints)


- [Data Models](#data-models)
  - [Customer Model](#customer-model)
  - [Staff Model](#staff-model)
  - [StaffRole Model](#staffRole-model)
  - [Table Model](#table-model)
  - [Booking Model](#booking-model)
  - [Order Model](#order-model)
  - [OrderMenuItem Model](#orderMenuItem-model)
  - [Menu Model](#menu-model)
  - [MenuItem Model](#menuItem-model)
  - [MenuItemIngredients Model](#menuItemIngredients-model)
  - [Ingredient Model](#ingredient-model)
  - [IngredientType Model](#ingredientType-model)

---

## Features

- **Staff Management**: Manage staff members and their roles in the restaurant.
- **Table Management**: Keep track of table availability and assign tables to bookings.
- **Booking System**: Create and modify customer reservations (no cancellation).
- **Order Management**: Handle orders, assign staff to orders, and link them to tables.
- **Menu Management**: Add, update, and delete menu items, including managing ingredients for each menu item.

## Technologies Used

- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework for Node.js)
- **MongoDB** (NoSQL database using Mongoose for data modeling)
- **Multer** (For handling file uploads)
- **Body-parser** (For parsing incoming request bodies)

---

## Getting Started

### Prerequisites

Before setting up this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14.x or higher)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- A package manager like npm or yarn.

### Installation

1. Clone the repository:

   ```bash
    git clone https://github.com/binduhareshbhaidhaduk/BookMyTableApi.git
   
2. Nevigation

  ```bash
    cd BOOKMYTABLE
  ```

3.Install the required dependencies:

  ```bash
    npm install
  ```

### Environment Variables

    PORT=1312
    MONGO_URI=your_mongodb_uri

### Running the Application

```bash
  npm start

