// FOR COPYING PHONE NUMBER
document.addEventListener("DOMContentLoaded", function () {
    const emailElement = document.getElementById("content-frame-button-call-id");
  
    emailElement.addEventListener("click", function () {
      copyToClipboard(emailElement.textContent);
      emailElement.textContent = "Number Copied!";
      setTimeout(() => {
        emailElement.textContent = "+91-8595181148"; // Replace this with the original email
      }, 3000); // Replace '3000' with the duration in milliseconds you want "Copied!" to be displayed
    });
  
    // Function to copy the text to the clipboard
    function copyToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
});
  


  
// CAROSEL BUTTONS
// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector(".carousel");
//   const elementsContainer = document.querySelector(".elements-container");
//   const elements = document.querySelectorAll(".element");
//   const prevButton = document.querySelector(".prev-button");
//   const nextButton = document.querySelector(".next-button");
//   const gap = 20; // Adjust the gap value as needed

//   let currentIndex = 0;

//   function updateCarouselPosition() {
//     const elementWidth = elements[0].offsetWidth + gap;
//     const distanceToCurrent = currentIndex * -elementWidth;
//     elementsContainer.style.transform = `translateX(${distanceToCurrent}px)`;
//   }

//   prevButton.addEventListener("click", function () {
//     currentIndex = (currentIndex - 1 + elements.length) % elements.length;
//     updateCarouselPosition();
//   });

//   nextButton.addEventListener("click", function () {
//     currentIndex = (currentIndex + 1) % elements.length;
//     updateCarouselPosition();
//   });

//   // Initially show the first element
//   updateCarouselPosition();
// });




// NEW CAROUSEL
window.addEventListener("load", function () {
  const carousel = document.querySelector(".carousel");
  const elementsContainer = document.querySelector(".elements-container");
  const elements = document.querySelectorAll(".element");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const gap = 20; // Adjust the gap value as needed

  let currentIndex = 0;

  function updateCarouselPosition() {
    const carouselWidth = carousel.offsetWidth;
    const elementsInView = Math.floor(carouselWidth / (elements[0].offsetWidth + gap));
    const maxIndex = elements.length - elementsInView;
    currentIndex = Math.max(0, Math.min(currentIndex, maxIndex));

    const elementWidth = elements[0].offsetWidth + gap;
    const distanceToCurrent = currentIndex * -elementWidth;
    elementsContainer.style.transform = `translateX(${distanceToCurrent}px)`;
  }

  prevButton.addEventListener("click", function () {
    currentIndex = Math.max(0, currentIndex - 1);
    updateCarouselPosition();
  });

  nextButton.addEventListener("click", function () {
    currentIndex = Math.min(currentIndex + 1, elements.length - 1);
    updateCarouselPosition();
  });

  // Initially show the first element
  updateCarouselPosition();
});






// OVER LAY MENU
document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("header-menu-box");
  const overlay = document.getElementById("menu-container");
  const closeButton = document.getElementById("menu-icon-id");

  function disableScroll() {
    // Get the current scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // Save the current scroll position in the body style
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = `-${scrollLeft}px`;
  }

  function enableScroll() {
    // Restore the original scroll position
    const scrollTop = parseFloat(document.body.style.top) || 0;
    const scrollLeft = parseFloat(document.body.style.left) || 0;

    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";

    window.scrollTo(scrollLeft, scrollTop);
  }

  icon.addEventListener("click", function () {
    overlay.classList.add("show");
    disableScroll();
  });

  closeButton.addEventListener("click", function () {
    overlay.classList.remove("show");
    enableScroll();
  });
});


// CONTACT POPUP
const openFormButton = document.getElementById('contact-us-button');
const formOverlay = document.getElementById('overlay-id');

// Show or hide the form overlay when the button is clicked
openFormButton.addEventListener('click', function() {
  formOverlay.style.display = 'flex';
});

// Hide the form overlay when clicking anywhere outside the form or the button
document.addEventListener('click', function(event) {
  if (!formOverlay.contains(event.target) && event.target !== openFormButton) {
    formOverlay.style.display = 'none';
  }
});

// Close the form overlay when clicking on the overlay itself
formOverlay.addEventListener('click', function(event) {
  if (event.target === formOverlay) {
    formOverlay.style.display = 'none';
  }
});

// Prevent the form overlay from closing when clicking inside it
formOverlay.addEventListener('click', function(event) {
  event.stopPropagation();
});



// DIRECT MAIL
document.getElementById('content-frame-button-mail-cl-id').addEventListener('click', function() {
  const prefilledMessage = encodeURIComponent("Hello, I am interested in your product. Please send me more information.");
  const mailToLink = "mailto:manish@chestafin.com?subject=Regarding%20Your%20Product&body=" + prefilledMessage;
  window.location.href = mailToLink;
});
