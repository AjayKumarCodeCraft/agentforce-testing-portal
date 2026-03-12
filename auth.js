/**
 * Surescripts Partner Portal - Authentication & Session Management
 */

// 1. Mock Database - Sample User Details
const USERS = [
    {
        name: "John Doe",
        email: "john@example.com",
        password: "password123",
        role: "Healthcare Integration Specialist",
        org: "Surescripts Partner Network"
    }
];

// 2. Login Function
function login(email, password) {
    // Find user in our "database"
    const user = USERS.find(u => u.email === email && u.password === password);

    if (user) {
        // Store user object in localStorage (Session starts)
        localStorage.setItem('currentUser', JSON.stringify(user));
        
        // Redirect to the index page
        window.location.href = 'index.html';
    } else {
        // Show error if details don't match
        alert("Authentication Failed: Invalid email or password.");
    }
}

// 3. Logout Function
function logout() {
    // Clear user session
    localStorage.removeItem('currentUser');
    
    // Redirect to login page
    window.location.href = 'login.html';
}

// 4. Navigation UI Handler 
// This runs on every page to show the Profile Logo/Name if logged in
document.addEventListener('DOMContentLoaded', () => {
    const sessionData = localStorage.getItem('currentUser');
    const navLinks = document.querySelector('.nav-links');

    if (sessionData && navLinks) {
        const user = JSON.parse(sessionData);
        
        // Create the Profile List Item
        const profileLi = document.createElement('li');
        profileLi.style.marginLeft = "15px"; // Add some spacing
        
        // Add the Profile Link with an Icon
        profileLi.innerHTML = `
            <a href="profile.html" style="
                background: #007cba; 
                color: white; 
                padding: 8px 15px; 
                border-radius: 5px; 
                font-weight: bold;
                text-decoration: none;
            ">
                👤 ${user.name}
            </a>
        `;
        
        // Append to the existing navigation list
        navLinks.appendChild(profileLi);
        
        // If there was a "Login" link in the original HTML, hide it
        const existingLoginLink = document.getElementById('nav-login');
        if (existingLoginLink) {
            existingLoginLink.style.display = 'none';
        }
    }
});
