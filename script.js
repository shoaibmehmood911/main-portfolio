document.addEventListener("DOMContentLoaded", function () {
  // Options for the first instance of Typed.js
  var options = {
    strings: ["HTML5", "CSS3", "JavaScript", "Bootstrap5", "Learning Node.js"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  };

  // Initialize Typed.js with the specified options for the element with class "auto-type"
  var typed = new Typed(".auto-type", options);
});

document.addEventListener("DOMContentLoaded", function () {
  // Options for the second instance of Typed.js
  var options = {
    strings: ["Shoaib Mehmood", "Frontend Developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  };

  // Initialize Typed.js with the specified options for the element with class "fname"
  var typed = new Typed(".fname", options);
});

function send(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the email input field
  const email = document.getElementById("email").value;

  // Regular expression to validate the email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email format is valid
  if (!emailRegex.test(email)) {
    // Display an error message if the email is invalid
    document.getElementById("email-error").innerText =
      "email address should includes . and @";
    document.getElementById("email-error").style.color = "red";
  } else {
    // Display a success message if the email is valid
    document.getElementById("email-error").innerText = "Email is valid";
    document.getElementById("email-error").style.color = "green";
  }
}
