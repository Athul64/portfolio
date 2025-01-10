window.addEventListener('load', () => {
    const loader = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');
  
    setTimeout(() => {
      loader.classList.add('hidden'); // Hides the loader
      mainContent.classList.remove('hidden'); // Shows the main content
    }, 2000); // Adjust duration as needed
  });
  ;

// Get the navbar element
const navbar = document.querySelector('nav');

// Get the height of the home section to trigger the navbar appearance after scrolling
const homeSection = document.getElementById('home');
const homeSectionHeight = homeSection.offsetHeight;

// Initially hide the navbar until the user scrolls past the first section
navbar.classList.remove('show');

// Listen for scroll events
window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > homeSectionHeight) {
        // After scrolling past the home section, show the navbar
        navbar.classList.add('show');
    } else {
        // When on the home section, hide the navbar
        navbar.classList.remove('show');
    }
});



// Initialize EmailJS
(function () {
  emailjs.init("athulsylesh23@gmail.com"); // Replace with your EmailJS user ID
})();

// Get the form element
const form = document.getElementById('contact-form');

// Form submission handler
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Send email via EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: name,
      from_email: email,
      message: message
  })
  .then(function(response) {
      console.log("Success", response);
      alert('Your message has been sent!');
      form.reset(); // Reset the form after submission
  }, function(error) {
      console.log("Error", error);
      alert('Something went wrong. Please try again.');
  });
});


