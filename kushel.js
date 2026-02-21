const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, select");
  let valid = true;

  inputs.forEach(input => {
    if (!input.value) {
      valid = false;
      input.style.border = "2px solid red";
    } else {
      input.style.border = "none";
    }
  });

  if (valid) {
    alert("Form Submitted Successfully!");
    form.reset();
  } else {
    alert("Please fill all fields!");
  }
});



