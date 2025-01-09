window.addEventListener('load', () => {
    const loader = document.getElementById('loader-container');
    const mainContent = document.getElementById('main-content');
  
    setTimeout(() => {
      loader.classList.add('hidden'); // Hides the loader
      mainContent.classList.remove('hidden'); // Shows the main content
    }, 3000); // Adjust duration as needed
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



