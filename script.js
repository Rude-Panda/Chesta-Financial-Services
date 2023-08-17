document.addEventListener("DOMContentLoaded", function () {
  // FOR COPYING PHONE NUMBER
  const emailElement = document.getElementById("content-frame-button-call-id");

  emailElement.addEventListener("click", function () {
    copyToClipboard(emailElement.textContent);
    emailElement.textContent = "Number Copied!";
    setTimeout(() => {
      emailElement.textContent = "+91-8595181148";
    }, 3000);
  });

  function copyToClipboard(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  // OVERLAY MENU
  const icon = document.getElementById("header-menu-box");
  const overlay = document.getElementById("menu-container");
  const closeButton = document.getElementById("menu-icon-id");

  function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollTop}px`;
    document.body.style.left = `-${scrollLeft}px`;
  }

  function enableScroll() {
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

  // CONTACT POPUP
  const openFormButton = document.getElementById('contact-us-button');
  const formOverlay = document.getElementById('overlay-id');

  openFormButton.addEventListener('click', function () {
    formOverlay.style.display = 'flex';
  });

  document.addEventListener('click', function (event) {
    if (!formOverlay.contains(event.target) && event.target !== openFormButton) {
      formOverlay.style.display = 'none';
    }
  });

  formOverlay.addEventListener('click', function (event) {
    if (event.target === formOverlay) {
      formOverlay.style.display = 'none';
    }
  });

  formOverlay.addEventListener('click', function (event) {
    event.stopPropagation();
  });

  // DIRECT MAIL
  document.getElementById('content-frame-button-mail-cl-id').addEventListener('click', function () {
    const prefilledMessage = encodeURIComponent("Hello, I am interested in your product. Please send me more information.");
    const mailToLink = "mailto:manish@chestafin.com?subject=Regarding%20Your%20Product&body=" + prefilledMessage;
    window.location.href = mailToLink;
  });

  // MOBILE VERSION
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = 'http://m.chestafin.com/';
  }

  // SERVICES CAROUSEL
  const elementsContainer = document.querySelector('.services-elements');
  const elements = document.querySelectorAll('.services-element');
  const elementWidth = elements[0].offsetWidth + 40;
  let currentIndex = 0;

  function updateCarousel() {
    currentIndex = (currentIndex + 1) % elements.length;

    if (currentIndex === 0) {
      elementsContainer.style.transition = 'none';
      elementsContainer.style.transform = `translateX(0)`;
      elementsContainer.offsetHeight;
      elementsContainer.style.transition = '';
    } else {
      elementsContainer.style.transform = `translateX(-${currentIndex * elementWidth}px)`;
    }
  }

  let carouselInterval = setInterval(updateCarousel, 2000);

  elementsContainer.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval); // Pause carousel on hover
  });

  elementsContainer.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(updateCarousel, 2000); // Resume carousel on mouse leave
  });
});
