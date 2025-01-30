const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_container h2", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
    ...scrollRevealOption,
    delay: 500,
  });

ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".steps_card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".explore_card", {
    duration: 1000,
    interval: 500,
  });

  ScrollReveal().reveal(".job_card", {
    ...scrollRevealOption,
    interval: 500,
  });

  ScrollReveal().reveal(".offer_card", {
    ...scrollRevealOption,
    interval: 500,
  });

  const swiper = new Swiper(".swiper", {
  loop: true,
  });