/**
 * Surescripts Partner Portal - Authentication & Session Management
 */

// 1. Mock Database - Added Workbench Account ID
const USERS = [
    {
        name: "Ajay Kumar",
        email: "testacc1@gmail.com",
        password: "password123",
        role: "Healthcare Integration Specialist",
        org: "Surescripts Partner Network",
        workbenchId: "WB-PRD-2026-099" 
    }
];

// 2. Standard Login Function
function login(email, password) {
    const user = USERS.find(u => u.email === email && u.password === password);

    if (user) {
        const sessionUser = { ...user, isGuest: false };
        localStorage.setItem('currentUser', JSON.stringify(sessionUser));
        window.location.href = 'index.html';
    } else {
        alert("Authentication Failed: Invalid email or password.");
    }
}

// 3. New Guest Login Function
function loginAsGuest() {
    const guestUser = {
        name: "Guest",
        isGuest: true
    };
    localStorage.setItem('currentUser', JSON.stringify(guestUser));
    window.location.href = 'index.html';
}

// 4. Logout Function
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// 5. Navigation UI Handler 
document.addEventListener('DOMContentLoaded', () => {
    const sessionData = localStorage.getItem('currentUser');
    const navLinks = document.querySelector('.nav-links');

    if (sessionData && navLinks) {
        const user = JSON.parse(sessionData);
        const profileLi = document.createElement('li');
        profileLi.style.marginLeft = "15px";
        
        // Show "Guest Access" or the User's Name
        const label = user.isGuest ? "Guest Access" : `👤 ${user.name}`;
        
        profileLi.innerHTML = `
            <a href="profile.html" style="
                background: #007cba; 
                color: white; 
                padding: 8px 15px; 
                border-radius: 5px; 
                font-weight: bold;
                text-decoration: none;
            ">
                ${label}
            </a>
        `;
        navLinks.appendChild(profileLi);
    }
});
