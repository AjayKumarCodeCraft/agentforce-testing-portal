// Sample User Data
const USERS = [
    {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        role: "Healthcare Provider"
    }
];

// Check if user is logged in on page load
function checkAuth() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    const navLinks = document.querySelector('.nav-links');
    
    if (user && navLinks) {
        // If logged in, add Profile link/icon
        if (!document.getElementById('profile-link')) {
            const profileLi = document.createElement('li');
            profileLi.id = "profile-link";
            profileLi.innerHTML = `<a href="profile.html" class="profile-icon">👤 ${user.name}</a>`;
            navLinks.appendChild(profileLi);
            
            // Optionally hide login link if it exists
            const loginBtn = document.getElementById('nav-login');
            if(loginBtn) loginBtn.style.display = 'none';
        }
    }
}

// Login Function
function login(email, password) {
    const user = USERS.find(u => u.email === email && u.password === password);
    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html'; // Redirect to home
    } else {
        alert("Invalid email or password!");
    }
}

// Logout Function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// Initialize auth check on every page
document.addEventListener('DOMContentLoaded', checkAuth);
