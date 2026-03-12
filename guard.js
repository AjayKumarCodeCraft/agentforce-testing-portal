// guard.js
(function() {
    const currentUser = localStorage.getItem('currentUser');
    
    // If no user is found in storage, redirect to login immediately
    if (!currentUser) {
        // Change 'login.html' to the actual path if it's in a subfolder
        window.location.href = 'login.html';
    }
})();
