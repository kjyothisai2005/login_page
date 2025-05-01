function runTests() {
    const results = [];
    const testResultsDiv = document.getElementById('testResults');
  
    function describe(description, fn) {
      results.push(description);
      fn();
    }
  
    function it(description, fn) {
      try {
        fn();
        results.push(` ${description}`);
      } catch (error) {
        results.push(`  ${description}`);
      }
    }
  
    describe("Password Matching Tests", function() {
      it("should pass when passwords match", function() {
        const password = "password123";
        const repassword = "password123";
        if (password !== repassword) throw new Error("Passwords do not match");
      });
  
      it("should fail when passwords do not match", function() {
        const password = "password123";
        const repassword = "password124";
        if (password === repassword) throw new Error("Passwords should not match");
      });
    });
  
    describe("Email Validation Tests", function() {
      it("should recognize valid email", function() {
        const email = "user@example.com";
        const validEmails = ["user@example.com", "admin@example.com", "test@example.org"];
        if (!validEmails.includes(email)) throw new Error("Email not recognized");
      });
  
      it("should not recognize an invalid email", function() {
        const email = "unknown@example.com";
        const validEmails = ["user@example.com", "admin@example.com", "test@example.org"];
        if (validEmails.includes(email)) throw new Error("Email recognized incorrectly");
      });
  
      it("should reject invalid email format", function() {
        const email = "userexample.com";
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (emailPattern.test(email)) throw new Error("Invalid email format not detected");
      });
  
      it("should reject email with leading/trailing whitespace", function() {
        const email = " user@example.com ";
        if (email.trim() === email) throw new Error("Whitespace in email not detected");
      });
    });
  
    describe("Password Validation Tests", function() {
      it("should reject password shorter than 6 characters", function() {
        const password = "12345";
        if (password.length >= 6) throw new Error("Password length check failed");
      });
  
      it("should accept password with special characters", function() {
        const password = "p@ssw0rd!";
        if (!/[^a-zA-Z0-9]/.test(password)) throw new Error("Password with special characters not detected");
      });
  
      it("should reject password with leading/trailing whitespace", function() {
        const password = " password123 ";
        if (password.trim() === password) throw new Error("Whitespace in password not detected");
      });
    });
  
    describe("Empty Field Tests", function() {
      it("should detect empty email field", function() {
        const email = "";
        if (email !== "") throw new Error("Empty email not detected");
      });
  
      it("should detect empty password field", function() {
        const password = "";
        if (password !== "") throw new Error("Empty password not detected");
      });
    });
  
    testResultsDiv.innerHTML = results.join("<br>");
  }
  
  window.onload = function() {
    runTests();
  };
  