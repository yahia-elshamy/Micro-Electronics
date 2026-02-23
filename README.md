# Micro Electronics - E-Commerce Backend API

## 📌 Project Overview
[cite_start]Micro Electronics is a backend API developed for a new e-commerce platform specializing in tech gadgets[cite: 4, 5]. [cite_start]The primary focus of this project is to build a secure, scalable, and logic-driven system to handle data flow without the need to rebuild from scratch as the platform grows[cite: 6, 18]. 

Currently in Phase 1, this API handles user authentication, role-based access control, and product inventory management.

## 🚀 Technologies Used
* **Runtime:** Node.js
* **Framework:** Express.js (v5.2.1)
* **Database:** MongoDB & Mongoose (v9.2.1)
* **Security:** Bcrypt (v6.0.0) for password hashing

## ✨ Current Features
* [cite_start]**Secure User Authentication:** Users can register and log in securely, with passwords hashed via Bcrypt[cite: 7, 8].
* [cite_start]**Role-Based Access Control:** Clear distinction between standard users and store admins[cite: 9].
* [cite_start]**Product Management:** Admins have exclusive authorization to add new products to the inventory database[cite: 10].
* [cite_start]**Product Discovery:** Users can browse all available products or search for specific items by name to view details and availability[cite: 11].

## 🗺️ Roadmap (Upcoming Features)
The following features are currently in development to complete the initial proposal:
* [cite_start]**Shopping Cart System:** Allowing users to add products to a cart, specify quantities, review contents, and adjust or remove items[cite: 12, 14].
* [cite_start]**Inventory Validation:** System logic to prevent logical errors, such as users requesting a quantity larger than what is available in stock[cite: 13].
* [cite_start]**Order Processing:** Recording official orders linked to the user upon checkout, containing the selected products and total amount[cite: 15].
* [cite_start]**Session Management:** Automatically clearing the shopping cart once a purchase is successfully completed to prevent conflicts in future sessions[cite: 16].

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/yahia-elshamy/Micro-Electronics.git](https://github.com/yahia-elshamy/Micro-Electronics.git)
   cd Micro-Electronics
