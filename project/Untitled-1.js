<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Werlyn Perfumes - Luxury Fragrances</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'werlyn-purple': '#8B5CF6',
                        'werlyn-dark': '#6D28D9',
                        'werlyn-light': '#A78BFA'
                    }
                }
            }
        }
    </script>
    <style>
        .fade-in {
            animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .perfume-bottle {
            background: linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%);
            border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        }
    </style>
</head>
<body class="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg sticky top-0 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <div class="flex items-center">
                    <h1 class="text-2xl font-bold text-werlyn-purple">✨ Werlyn</h1>
                </div>
                <div class="hidden md:flex space-x-8">
                    <button onclick="showPage('home')" class="nav-link text-gray-700 hover:text-werlyn-purple transition-colors">Home</button>
                    <button onclick="showPage('catalog')" class="nav-link text-gray-700 hover:text-werlyn-purple transition-colors">Catalog</button>
                    <button onclick="showPage('cart')" class="nav-link text-gray-700 hover:text-werlyn-purple transition-colors relative">
                        Cart <span id="cart-count" class="absolute -top-2 -right-2 bg-werlyn-purple text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
                    </button>
                </div>
                <div class="flex items-center space-x-4">
                    <div id="auth-buttons">
                        <button onclick="showPage('login')" class="text-werlyn-purple hover:text-werlyn-dark transition-colors">Login</button>
                        <button onclick="showPage('register')" class="bg-werlyn-purple text-white px-4 py-2 rounded-lg hover:bg-werlyn-dark transition-colors">Register</button>
                    </div>
                    <div id="user-menu" class="hidden">
                        <span id="username" class="text-gray-700 mr-4"></span>
                        <button onclick="logout()" class="text-werlyn-purple hover:text-werlyn-dark transition-colors">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Home Page -->
    <div id="home-page" class="page">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">Welcome to Werlyn</h2>
                <p class="text-xl text-gray-600 mb-8">Discover the art of luxury fragrances</p>
                <button onclick="showPage('catalog')" class="bg-werlyn-purple text-white px-8 py-4 rounded-lg text-lg hover:bg-werlyn-dark transition-colors transform hover:scale-105">
                    Explore Collection
                </button>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 mb-16">
                <div class="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div class="perfume-bottle w-16 h-20 mx-auto mb-4"></div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
                    <p class="text-gray-600">Crafted with the finest ingredients from around the world</p>
                </div>
                <div class="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div class="text-4xl mb-4">🌸</div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Unique Scents</h3>
                    <p class="text-gray-600">Exclusive fragrances designed by master perfumers</p>
                </div>
                <div class="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div class="text-4xl mb-4">💜</div>
                    <h3 class="text-xl font-semibold text-gray-900 mb-2">Luxury Experience</h3>
                    <p class="text-gray-600">Indulge in the ultimate fragrance journey</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Product Catalog -->
    <div id="catalog-page" class="page hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Our Collection</h2>
            <div id="products-grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Products will be loaded here -->
            </div>
        </div>
    </div>

    <!-- Shopping Cart -->
    <div id="cart-page" class="page hidden">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 class="text-4xl font-bold text-center text-gray-900 mb-12">Shopping Cart</h2>
            <div id="cart-items" class="space-y-4 mb-8">
                <!-- Cart items will be loaded here -->
            </div>
            <div id="cart-empty" class="text-center py-12 hidden">
                <div class="text-6xl mb-4">🛒</div>
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">Your cart is empty</h3>
                <button onclick="showPage('catalog')" class="bg-werlyn-purple text-white px-6 py-3 rounded-lg hover:bg-werlyn-dark transition-colors">
                    Continue Shopping
                </button>
            </div>
            <div id="cart-summary" class="bg-white p-6 rounded-xl shadow-lg hidden">
                <div class="flex justify-between items-center text-xl font-semibold mb-4">
                    <span>Total: $<span id="cart-total">0.00</span></span>
                </div>
                <button onclick="proceedToCheckout()" class="w-full bg-werlyn-purple text-white py-3 rounded-lg hover:bg-werlyn-dark transition-colors">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    </div>

    <!-- Login Page -->
    <div id="login-page" class="page hidden">
        <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white p-8 rounded-xl shadow-lg">
                <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Login</h2>
                <form onsubmit="handleLogin(event)">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="login-email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="login-password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                    </div>
                    <button type="submit" class="w-full bg-werlyn-purple text-white py-3 rounded-lg hover:bg-werlyn-dark transition-colors">
                        Login
                    </button>
                </form>
                <p class="text-center mt-4 text-gray-600">
                    Don't have an account? 
                    <button onclick="showPage('register')" class="text-werlyn-purple hover:text-werlyn-dark">Register here</button>
                </p>
            </div>
        </div>
    </div>

    <!-- Register Page -->
    <div id="register-page" class="page hidden">
        <div class="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white p-8 rounded-xl shadow-lg">
                <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Register</h2>
                <form onsubmit="handleRegister(event)">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
                        <input type="text" id="register-name" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input type="email" id="register-email" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Password</label>
                        <input type="password" id="register-password" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                    </div>
                    <button type="submit" class="w-full bg-werlyn-purple text-white py-3 rounded-lg hover:bg-werlyn-dark transition-colors">
                        Register
                    </button>
                </form>
                <p class="text-center mt-4 text-gray-600">
                    Already have an account? 
                    <button onclick="showPage('login')" class="text-werlyn-purple hover:text-werlyn-dark">Login here</button>
                </p>
            </div>
        </div>
    </div>

    <!-- Checkout Page -->
    <div id="checkout-page" class="page hidden">
        <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="bg-white p-8 rounded-xl shadow-lg">
                <h2 class="text-3xl font-bold text-center text-gray-900 mb-8">Checkout - Demo</h2>
                <div class="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
                    <p class="text-purple-800 text-sm">
                        <strong>Demo Notice:</strong> This is a sample checkout form. No real payment will be processed.
                    </p>
                </div>
                <form onsubmit="handleCheckout(event)">
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Card Number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-6">
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">Expiry Date</label>
                            <input type="text" placeholder="MM/YY" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                        </div>
                        <div>
                            <label class="block text-gray-700 text-sm font-bold mb-2">CVV</label>
                            <input type="text" placeholder="123" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple">
                        </div>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700 text-sm font-bold mb-2">Billing Address</label>
                        <textarea placeholder="Enter your billing address" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-werlyn-purple h-20"></textarea>
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg mb-6">
                        <div class="flex justify-between items-center text-xl font-semibold">
                            <span>Total: $<span id="checkout-total">0.00</span></span>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-werlyn-purple text-white py-3 rounded-lg hover:bg-werlyn-dark transition-colors">
                        Place Order (Demo)
                    </button>
                </form>
            </div>
        </div>
    </div>

    <script>
        // Global state
        let currentUser = null;
        let cart = [];
        let products = [
            {
                id: 1,
                name: "Werlyn Mystique",
                price: 89.99,
                description: "A mysterious blend of jasmine and sandalwood",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='grad1' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23A78BFA;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='30' y='20' width='40' height='80' rx='20' fill='url(%23grad1)'/%3E%3Crect x='35' y='15' width='30' height='10' rx='5' fill='%23D1D5DB'/%3E%3Ccircle cx='50' cy='20' r='3' fill='%23F3F4F6'/%3E%3C/svg%3E"
            },
            {
                id: 2,
                name: "Werlyn Elegance",
                price: 129.99,
                description: "Sophisticated rose and vanilla notes",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='grad2' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%236D28D9;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='25' y='25' width='50' height='70' rx='25' fill='url(%23grad2)'/%3E%3Crect x='35' y='15' width='30' height='15' rx='7' fill='%23D1D5DB'/%3E%3Ccircle cx='50' cy='22' r='4' fill='%23F3F4F6'/%3E%3C/svg%3E"
            },
            {
                id: 3,
                name: "Werlyn Passion",
                price: 99.99,
                description: "Bold amber and musk combination",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='grad3' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23A78BFA;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236D28D9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='50' cy='60' rx='20' ry='35' fill='url(%23grad3)'/%3E%3Crect x='40' y='15' width='20' height='12' rx='6' fill='%23D1D5DB'/%3E%3Ccircle cx='50' cy='21' r='3' fill='%23F3F4F6'/%3E%3C/svg%3E"
            },
            {
                id: 4,
                name: "Werlyn Dreams",
                price: 79.99,
                description: "Light floral with citrus undertones",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='grad4' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%23C4B5FD;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='32' y='30' width='36' height='60' rx='18' fill='url(%23grad4)'/%3E%3Crect x='38' y='20' width='24' height='15' rx='8' fill='%23D1D5DB'/%3E%3Ccircle cx='50' cy='27' r='3' fill='%23F3F4F6'/%3E%3C/svg%3E"
            },
            {
                id: 5,
                name: "Werlyn Royal",
                price: 159.99,
                description: "Premium oud and bergamot blend",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='grad5' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%235B21B6;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%238B5CF6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect x='28' y='20' width='44' height='75' rx='22' fill='url(%23grad5)'/%3E%3Crect x='33' y='10' width='34' height='18' rx='9' fill='%23D1D5DB'/%3E%3Ccircle cx='50' cy='19' r='4' fill='%23F3F4F6'/%3E%3C/svg%3E"
            },
            {
                id: 6,
                name: "Werlyn Serenity",
                price: 109.99,
                description: "Calming lavender and white tea",
                image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 120'%3E%3Cdefs%3E%3ClinearGradient id='grad6' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23C4B5FD;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%236D28D9;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Cellipse cx='50' cy='55' rx='18' ry='40' fill='url(%23grad6)'/%3E%3Crect x='42' y='12' width='16' height='10' rx='5' fill='%23D1D5DB'/%3E%3Ccircle cx='50' cy='17' r='2' fill='%23F3F4F6'/%3E%3C/svg%3E"
            }
        ];

        // Initialize app
        document.addEventListener('DOMContentLoaded', function() {
            loadProducts();
            updateCartDisplay();
            checkAuthStatus();
        });

        // Page navigation
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('hidden');
            });
            document.getElementById(pageId + '-page').classList.remove('hidden');
            document.getElementById(pageId + '-page').classList.add('fade-in');
        }

        // Load products
        function loadProducts() {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = products.map(product => `
                <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div class="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                        <img src="${product.image}" alt="${product.name}" class="w-20 h-24 object-contain">
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-semibold text-gray-900 mb-2">${product.name}</h3>
                        <p class="text-gray-600 mb-4">${product.description}</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold text-werlyn-purple">$${product.price}</span>
                            <button onclick="addToCart(${product.id})" class="bg-werlyn-purple text-white px-4 py-2 rounded-lg hover:bg-werlyn-dark transition-colors">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Cart functions
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...product, quantity: 1 });
            }
            
            updateCartDisplay();
            showNotification(`${product.name} added to cart!`);
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCartDisplay();
            loadCartItems();
        }

        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(productId);
                } else {
                    updateCartDisplay();
                    loadCartItems();
                }
            }
        }

        function updateCartDisplay() {
            const cartCount = document.getElementById('cart-count');
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
        }

        function loadCartItems() {
            const cartItems = document.getElementById('cart-items');
            const cartEmpty = document.getElementById('cart-empty');
            const cartSummary = document.getElementById('cart-summary');
            
            if (cart.length === 0) {
                cartItems.innerHTML = '';
                cartEmpty.classList.remove('hidden');
                cartSummary.classList.add('hidden');
            } else {
                cartEmpty.classList.add('hidden');
                cartSummary.classList.remove('hidden');
                
                cartItems.innerHTML = cart.map(item => `
                    <div class="bg-white p-4 rounded-lg shadow flex items-center justify-between">
                        <div class="flex items-center space-x-4">
                            <img src="${item.image}" alt="${item.name}" class="w-12 h-15 object-contain">
                            <div>
                                <h4 class="font-semibold">${item.name}</h4>
                                <p class="text-gray-600">$${item.price}</p>
                            </div>
                        </div>
                        <div class="flex items-center space-x-4">
                            <div class="flex items-center space-x-2">
                                <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300">-</button>
                                <span class="w-8 text-center">${item.quantity}</span>
                                <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 text-gray-700 w-8 h-8 rounded-full hover:bg-gray-300">+</button>
                            </div>
                            <span class="font-semibold w-20 text-right">$${(item.price * item.quantity).toFixed(2)}</span>
                            <button onclick="removeFromCart(${item.id})" class="text-red-500 hover:text-red-700">Remove</button>
                        </div>
                    </div>
                `).join('');
                
                const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                document.getElementById('cart-total').textContent = total.toFixed(2);
            }
        }

        // Authentication functions
        function handleLogin(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            
            // Demo login - any email/password works
            currentUser = { email: email, name: email.split('@')[0] };
            updateAuthDisplay();
            showNotification('Login successful!');
            showPage('home');
        }

        function handleRegister(event) {
            event.preventDefault();
            const name = document.getElementById('register-name').value;
            const email = document.getElementById('register-email').value;
            
            // Demo registration
            currentUser = { email: email, name: name };
            updateAuthDisplay();
            showNotification('Registration successful!');
            showPage('home');
        }

        function logout() {
            currentUser = null;
            cart = [];
            updateAuthDisplay();
            updateCartDisplay();
            showNotification('Logged out successfully!');
            showPage('home');
        }

        function updateAuthDisplay() {
            const authButtons = document.getElementById('auth-buttons');
            const userMenu = document.getElementById('user-menu');
            const username = document.getElementById('username');
            
            if (currentUser) {
                authButtons.classList.add('hidden');
                userMenu.classList.remove('hidden');
                username.textContent = `Hello, ${currentUser.name}`;
            } else {
                authButtons.classList.remove('hidden');
                userMenu.classList.add('hidden');
            }
        }

        function checkAuthStatus() {
            // Check if user is logged in (demo purposes)
            updateAuthDisplay();
        }

        // Checkout functions
        function proceedToCheckout() {
            if (!currentUser) {
                showNotification('Please login before checkout');
                showPage('login');
                return;
            }
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            document.getElementById('checkout-total').textContent = total.toFixed(2);
            showPage('checkout');
        }

        function handleCheckout(event) {
            event.preventDefault();
            showNotification('Order placed successfully! (Demo)');
            cart = [];
            updateCartDisplay();
            showPage('home');
        }

        // Utility functions
        function showNotification(message) {
            const notification = document.createElement('div');
            notification.className = 'fixed top-20 right-4 bg-werlyn-purple text-white px-6 py-3 rounded-lg shadow-lg z-50 fade-in';
            notification.textContent = message;
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 3000);
        }

        // Show cart items when cart page is loaded
        document.addEventListener('DOMContentLoaded', function() {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.target.id === 'cart-page' && !mutation.target.classList.contains('hidden')) {
                        loadCartItems();
                    }
                });
            });
            
            observer.observe(document.getElementById('cart-page'), {
                attributes: true,
                attributeFilter: ['class']
            });
        });
    </script>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97def65ce642db22',t:'MTc1NzY3NTQ2OC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
