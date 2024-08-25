document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
   
    
    // Check if username and password are not empty
    if (username.trim() === '' || password.trim() === '') {
        document.getElementById('errorMessage').textContent = 'Username and password are required.';
        return;
    }
    
    
    if (username === 'admin' && password === 'password') {
        // Redirect to dashboard or any other page after successful login
        window.location.href = 'dashboard.html';
    } else {
        // Display error message for invalid credentials
        document.getElementById('errorMessage').textContent = 'Invalid username or password. Please try again.';
    }
});
