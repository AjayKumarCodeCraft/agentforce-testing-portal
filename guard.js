// guard.js
(function() {
    const currentUser = localStorage.getItem('currentUser');
    
    // If no user session (Guest or Registered) exists, redirect to login
    if (!currentUser) {
        window.location.href = 'login.html';
    }
})();
