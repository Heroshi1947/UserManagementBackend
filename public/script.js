document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');
  
    // Handle user registration form submission
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username,email, password })
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
          registrationForm.reset();
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  
    // Handle user login form submission
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const username = document.getElementById('loginUsername').value;
      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;
  
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, password })
      })
        .then((response) => {
          if (response.ok) {
            alert('Login successful');
            loginForm.reset();
          } else {
            alert('Invalid credentials');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    });
  });