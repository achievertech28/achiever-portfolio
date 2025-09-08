// swiper for testimonal section
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// typed.js for typing effect
var typed = new Typed(".typing", {
  strings: ["Frontend Developer", "React Enthusiast", "UI Designer"],
  typeSpeed: 70, // Speed in milliseconds per character
  backSpeed: 50, // Speed for backspacing
  loop: true, // Keeps looping
});

// AOS (Animate On Scroll) initialization
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true, // Animation happens only once
});

// whatsapp form submission
const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form values
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  let phoneNumber = "2348115850431";

  let whatsappMessage = `Full Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

  // WhatsApp API link
  let url = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Open WhatsApp chat
  window.open(url, "_blank");

  // console.log(phoneNumber, whatsappMessage);
});
