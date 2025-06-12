document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all the fields.");
    return;
  }

  if (!email.includes("@")) {
    alert(`${email} is missing '@'. Please include a valid email address.`);
    return;
  }

  const parts = email.split("@");
  if (parts.length < 2 || parts[1].trim() === "") {
    alert(`Please enter the part after '@' in your email address.`);
    return;
  }

  // All validations passed
  alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
});

document.getElementById('waitlist-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validate empty fields
  if (!name || !email) {
    alert("Please fill out all fields.");
    return;
  }

  // Email validation
  if (!email.includes("@")) {
    alert(`${email} is missing an '@'`);
    return;
  }

  const [local, domain] = email.split("@");
  if (!domain) {
    alert(`Please enter the part following '@' for ${email}`);
    return;
  }

  // Show confirmation
  alert(`This page says:\nName: ${name}\nEmail: ${email}`);
});


document.getElementById("waitlistForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const agree = document.getElementById("agree").checked;

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  if (!email.includes("@")) {
    alert(`${email} is missing '@'. Please include a valid email address.`);
    return;
  }

  const parts = email.split("@");
  if (parts.length < 2 || parts[1].trim() === "") {
    alert("Please enter the part after '@' in your email address.");
    return;
  }

  if (!agree) {
    alert("You must agree to receive updates.");
    return;
  }

  alert(`Email: ${email}\nConsent: Yes, you agreed to receive updates.`);
});
