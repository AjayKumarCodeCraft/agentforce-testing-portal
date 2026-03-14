const USERS = [
    {
        name: "Ajay Kumar",
        email: "testacc1@gmail.com",
        password: "password123",
        role: "Healthcare Integration Specialist",
        org: "Surescripts Partner Network",
        workbenchId: "WB-99821-X" // New Field
    }
];

function login(email, password) {
    const user = USERS.find(u => u.email === email && u.password === password);
    if (user) {
        user.isGuest = false; // Mark as registered
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = 'index.html';
    } else {
        alert("Authentication Failed: Invalid email or password.");
    }
}

// New Guest Function
function loginAsGuest() {
    const guestUser = {
        name: "Guest User",
        isGuest: true
    };
    localStorage.setItem('currentUser', JSON.stringify(guestUser));
    window.location.href = 'index.html';
}

function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// UI Handler for Nav
document.addEventListener('DOMContentLoaded', () => {
    const sessionData = localStorage.getItem('currentUser');
    const navLinks = document.querySelector('.nav-links');

    if (sessionData && navLinks) {
        const user = JSON.parse(sessionData);
        const profileLi = document.createElement('li');
        profileLi.style.marginLeft = "15px";
        
        // Use a generic "Guest" label if they are a guest
        const displayName = user.isGuest ? "Guest Access" : `👤 ${user.name}`;
        
        profileLi.innerHTML = `
            <a href="profile.html" style="background: #007cba; color: white; padding: 8px 15px; border-radius: 5px; font-weight: bold; text-decoration: none;">
                ${displayName}
            </a>
        `;
        navLinks.appendChild(profileLi);
    }
});
