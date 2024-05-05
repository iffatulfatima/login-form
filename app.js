document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Example of simple validation, you can replace it with your own logic
    if (username === "admin" && password === "password") {
      // Successful login
      alert("Login successful!");
      // Redirect to a new page or perform any other action
    } else {
      // Display error message
      var errorMessage = document.getElementById("error-message");
      errorMessage.style.display = "block";
      errorMessage.textContent = "Invalid username or password. Please try again.";
    }
  });