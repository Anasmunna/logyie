// Function to show Signup form and hide Login form
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Function to show Login form and hide Signup form
function showLogin() {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}

// Mock database for storing user info (in a real scenario, use backend)
let users = {};

// Login function
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Check if email exists and password matches
    if (users[email] && users[email] === password) {
        alert("Login successful!");
    } else {
        alert("Incorrect email or password!");
    }
}

// Signup function
function signup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check if passwords match and meet criteria
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Save user info to "database" and show login form
    users[email] = password;
    alert("Signup successful! Please login.");
    showLogin();
}
