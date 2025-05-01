// signup.js
document.addEventListener("DOMContentLoaded", function () {
    const validEmails = [
      "user@example.com",
      "admin@example.com",
      "test@example.org"
    ];
  
    const form = document.getElementById("signupForm");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop actual submission
  
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const repassword = document.getElementById("repassword").value;
  
      // First, check if passwords match
      if (password !== repassword) {
        alert("Passwords do not match!");
        return;
      }
  
      // Then, check if email is in the allowed list
      if (!validEmails.includes(email)) {
        alert("Email not recognized.");
        return;
      }
  
      // All validations passed
      alert("Successfully signed up!");
    });
  });
  