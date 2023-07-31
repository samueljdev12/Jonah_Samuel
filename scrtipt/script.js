$(document).ready(function() {

  //toggle navbar begining
  let side_nav = document.getElementById('side-nav')
  
  $('#toggle').on('click', ()=>{
    if(side_nav.style.width === "80%"){
      side_nav.style.width = "0";
      $('.openbtn').text("Menu");
    }else{
      side_nav.style.width = "80%";
     $('.openbtn').text('Close');
     } 
  })
  
  //toggle navbar ending


//chnage paragraph
  let textParagraph = $('#change');
  let initialText = textParagraph.text();
  let alternateText = 'PROGRAMMER';

  setInterval(function() {
      textParagraph.fadeOut(1000, function() {
          if (textParagraph.text() === initialText) {
              textParagraph.text(alternateText);
          } else {
              textParagraph.text(initialText);
          }
          textParagraph.fadeIn(1000);
      });
  }, 3000);
  //chnage paragraph end


  // close side nav whe  screen size reduces
  $(window).on('resize', function() {
    const screenWidth = window.innerWidth;
  
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
      }
    });
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






  


