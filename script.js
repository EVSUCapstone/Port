$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
$(".menu-btn").click(function () {
    // Only toggle if it's the menu button, not other menu-btn elements
    if ($(this).hasClass('navbar-toggle')) {
        $(".navbar .menu").toggleClass("active");
        $(".menu-btn i").toggleClass("active");
    }
});

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: [
      "Freelancer",
      "Web Developer",
      "GIS Specialist",
      "Graphic Artist",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Freelancer",
      "Web Developer",
      "GIS Specialist",
      "Graphic Artist",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Create fullscreen overlay element
  const fullscreenOverlay = document.createElement("div");
  fullscreenOverlay.classList.add("portfolio-fullscreen-overlay");

  // Create close button
  const closeBtn = document.createElement("span");
  closeBtn.classList.add("close-btn");
  closeBtn.innerHTML = "&times;";
  closeBtn.addEventListener("click", () => {
    fullscreenOverlay.classList.remove("active");
  });

  // Create image element for overlay
  const fullscreenImg = document.createElement("img");

  // Add close button and image to overlay
  fullscreenOverlay.appendChild(closeBtn);
  fullscreenOverlay.appendChild(fullscreenImg);

  // Add overlay to body
  document.body.appendChild(fullscreenOverlay);

  // Add click event to all project images
  const projectImages = document.querySelectorAll(
    ".portfolio .project-image img"
  );
  projectImages.forEach((img) => {
    img.addEventListener("click", () => {
      // Set the source of the fullscreen image to the clicked image
      fullscreenImg.src = img.src;

      // Show the fullscreen overlay
      fullscreenOverlay.classList.add("active");
    });
  });

  // Close overlay when clicking outside the image
  fullscreenOverlay.addEventListener("click", (e) => {
    if (e.target === fullscreenOverlay) {
      fullscreenOverlay.classList.remove("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalDescription = document.getElementById("modalDescription");
  const closeBtn = document.querySelector(".image-modal-close");

  // Add click event to all project images
  document.querySelectorAll(".project-image").forEach((image) => {
    image.addEventListener("click", function () {
      const src = this.dataset.src;
      const description = this.dataset.description;

      modalImage.src = src;
      modalDescription.textContent = description;
      modal.style.display = "block";
    });
  });

  // Close modal when clicking on close button
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const closeButton = document.querySelector(".image-modal-close");

  // Close modal when close button is clicked
  closeButton.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Optional: Close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
    }
  });
});
