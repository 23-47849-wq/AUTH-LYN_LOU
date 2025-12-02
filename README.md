A modern, responsive web application that combines user authentication with an interactive clothing e-commerce interface.

📋 Overview
This project features a sleek login system with both traditional and Google OAuth authentication, transitioning to a beautifully designed clothing collection showcase after successful login. The application includes interactive shopping features like wishlists and shopping carts.

✨ Features
🔐 Authentication System
Traditional username/password login with validation

Google OAuth integration

Password visibility toggle

Secure logout with confirmation

👗 Clothing Collection
Four distinct clothing items with product cards

Responsive grid layout using Bootstrap

Hover effects and animations

Product details including:

Brand names

Descriptions

Original & discounted prices

Discount percentages

🛍️ Shopping Features
Add to Wishlist: Save items for later

Add to Cart: Quick shopping functionality

Interactive counters for wishlist and cart

Modal popups to view wishlist and cart contents

🎨 Design Elements
Modern glassmorphism design with transparency effects

Gradient backgrounds and hover animations

Responsive layout for all screen sizes

Custom typography using Montserrat font

Color scheme centered around purple/pink gradients

🛠️ Technologies Used
HTML5 - Structure and content

CSS3 - Styling with custom animations and glassmorphism effects

JavaScript - Interactive functionality

Bootstrap 5.3.2 - Responsive grid system and components

Font Awesome 6.4.0 - Icons

Google Fonts - Montserrat typography

Google Identity Services - OAuth authentication

📁 File Structure
text
index.html        # Main HTML file containing all code
                   (HTML, CSS, JavaScript combined in one file)
🚀 Quick Start
Clone or download the HTML file

Open index.html in any modern web browser

Use the following test credentials or Google login:

Username: any

Password: minimum 4 characters

💻 Usage Instructions
Login Process
Enter username and password (minimum 4 characters)

Or click "Sign In Using Google" for OAuth login

Click "LOGIN" button

Shopping Features
Add to Bag: Adds item to shopping cart

Wishlist: Saves item to wishlist

View Counters: See number of items in wishlist/cart

View Details: Click wishlist/cart buttons to see contents

Navigation
Log Out: Returns to login screen (with confirmation)

Wishlist/Cart Buttons: View saved items in modals

🎯 Key Functions
Authentication
loginUser(): Validates and processes traditional login

handleGoogleResponse(): Processes Google OAuth response

logoutUser(): Handles user logout

confirmLogout(): Shows logout confirmation modal

UI Interactions
togglePassword(): Shows/hides password text

showClothingSection(): Transitions to main app after login

addToWishlist() / addToCart(): Manages shopping items

showWishlist() / showCart(): Displays modal views

State Management
currentUser: Stores logged-in user info (name, avatar)

wishlist: Array of wishlist items

cart: Array of cart items

🎨 Design Features
Glassmorphism: Frosted glass effect on cards and containers

Animations: Smooth fade-in and hover animations

Responsive: Adapts to mobile, tablet, and desktop screens

Color Scheme: Purple/pink gradients with complementary accents

Typography: Clean, modern font with proper hierarchy

📱 Responsive Design
The application is fully responsive with:

Adjustable card layouts for different screen sizes

Mobile-optimized login form

Flexible user info bar on mobile

Proper spacing and sizing for all devices

🔧 Customization
To customize this application, you can modify:

Clothing Items: Add/remove product cards in the HTML

Colors: Adjust CSS color variables for different themes

Authentication: Replace Google OAuth client ID with your own

Styling: Modify CSS properties in the <style> section

⚠️ Note on Google OAuth
The current Google OAuth client ID is for demonstration purposes. For production use:

Replace the client ID in the script tag with your own

Register your application in the Google Cloud Console

Configure authorized redirect URIs

📝 License
This project is for educational and demonstration purposes. Feel free to modify and use as needed.

🤝 Contributing
Feel free to fork and improve this project. Some potential enhancements:

Backend integration for persistent data

More comprehensive product catalog

Payment gateway integration

User registration system

Product filtering and search
