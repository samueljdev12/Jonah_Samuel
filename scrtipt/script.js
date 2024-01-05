$(document).ready(function() {

  // Function to hide the welcome message
function hideWelcomeMessage() {
  $('#welcome-message').fadeOut(1000, function () {
    // Remove the welcome message container from the DOM
    $(this).fadeOut(1000);
  });
}

// hide message

// show message
// Function to show the welcome message with typing animation
function showWelcomeMessage() {
  var $welcomeMessage = $('#welcome-message h2 span');

  $welcomeMessage.each(function (index) {
    var $character = $(this);
    setTimeout(function () {
      $character.css({
        opacity: 1,
        transform: 'translateY(0)',
      });
    }, 100 * index);
  });

  // Set a timeout to hide the welcome message after 5 seconds (adjust as needed)
  setTimeout(hideWelcomeMessage, 8000);
}

// Call the showWelcomeMessage function when the document is ready
showWelcomeMessage();

 // Show the welcome message
 $('#welcome-message').fadeIn(1000);

 // Set a timeout to hide the welcome message after 5 seconds (adjust as needed)
 setTimeout(hideWelcomeMessage, 5000);

  //toggle navbar begining
  let side_nav = document.getElementById('side-nav')
  const screenWidth = window.innerWidth;
  
  $('#toggle').on('click', ()=>{
    if(side_nav.style.width === "100%"){
      side_nav.style.width = "0";
      $('.openbtn').text("Menu");
    }else{
      side_nav.style.width = "100%";
     $('.openbtn').text('Close');
     } 
  })
  
  //toggle navbar ending


  // close side nav whe  screen size reduces
  $(window).on('resize', function() {
  
    if (screenWidth > 900) {
      // Screen width is greater than 900 pixels
      // Perform actions for large screens
      side_nav.style.width = "15%"
    } else {
      // Screen width is less than or equal to 900 pixels
      // Perform actions for small screens
      side_nav.style.width = "0"
    }
  });

   // close side nav whe  screen size reduces end

// determine and set active section on menu
  const navLinks = document.querySelectorAll('.sid-nav a');
  const sections = document.querySelectorAll('section');

  function activateNavLink(link) {
    navLinks.forEach((navLink) => {
      navLink.classList.remove('active');
    });
   
    link.classList.add('active');
  }

  function handleScroll() {
    const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScrollPos >= sectionTop && currentScrollPos < sectionBottom) {
        const targetLink = document.querySelector(`.sid-nav a[href="#${section.id}"]`);
        activateNavLink(targetLink);
        if (screenWidth > 900) {
          // Screen width is greater than 900 pixels
          // Perform actions for large screens
          side_nav.style.width = "15%";
        } else {
          // Screen width is less than or equal to 900 pixels
          // Perform actions for small screens
          side_nav.style.width = "0";
          $('.openbtn').text("Menu");
        }
    
    }});
  }

  navLinks.forEach((navLink) => {
    navLink.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = document.querySelector(navLink.getAttribute('href'));
      activateNavLink(navLink);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', handleScroll);

  // Set the active link on page load
  activateNavLink(navLinks[0]);


const currentDate = new Date();
const currentYear = currentDate.getFullYear();
$('#year').text(currentYear)
 
});






  


