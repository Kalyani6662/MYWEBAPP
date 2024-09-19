document.getElementById("registerForm")?.addEventListener("submit", async function(event) {
    event.preventDefault();
  
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
  
    if (name === "" || email === "" || password === "") {
      alert("All fields are required.");
    } else {
      // Send registration data to the backend
      try {
        let response = await fetch('http://localhost:5000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, password }),
        });
  
        if (response.ok) {
          alert('Registration successful.');
          window.location.href = "login.html";
        } else {
          let result = await response.json();
          alert(result.message);
        }
      } catch (error) {
        console.error('Error registering user:', error);
      }
    }
  });
  