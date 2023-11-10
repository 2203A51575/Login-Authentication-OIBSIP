function validateLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Simple validation (you should implement more secure methods)
    if (email === 'a1@gmail.com' && password === 'oasis') {
        alert('Login successful!');
	window.location.href = 'https://oasisinfobyte.com/';
    } else {
        alert('Login failed. Please check your email and password.');
    }
}
