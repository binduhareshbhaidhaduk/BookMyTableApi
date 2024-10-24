# 🍽️ Restaurant Management System ERD

## 📝 Project Description
This project defines an ERD for a restaurant management system to organize staff, customers, tables, orders, and menu items, improving database efficiency and system functionality.

## 📊 Key Entities
- **👨‍🍳 Staff**: Restaurant employees.
- **📋 StaffRole**: Defines staff roles.
- **👥 Customer**: Customers making bookings and orders.
- **🍽️ Table**: Tables available for booking.
- **📝 Booking**: Customer reservations.
- **🛒 Order**: Orders placed by customers.
- **🍔 Menu**: Available food and beverages.
- **📦 OrderMenuItem**: Items in an order.
- **🌿 Ingredient**: Ingredients for menu items.
- **🥘 IngredientType**: Categories of ingredients.

## 🔗 Relationships
- **StaffRole** → **Staff**: One-to-Many
- **Customer** → **Booking**, **Order**: One-to-Many
- **Booking** → **Table**: One-to-One
- **Order** → **OrderMenuItem**: One-to-Many
- **MenuItem** ↔ **Ingredient**: Many-to-Many

## 🛠️ Tools
- **Design**: ERDPlus, Draw.io
- **Technologies**: Data Modeling, Database Design

## 📈 ERD Diagram
![Screenshot 2024-10-19 191640](https://github.com/user-attachments/assets/e17148a0-ef97-4d7b-95c2-bdf32fd214a0)

## 🚀 Outcome
The ERD ensures a well-organized database structure, improving overall system performance for managing restaurant operations.
