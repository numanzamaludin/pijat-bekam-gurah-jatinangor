// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika humberger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// cardslider
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".cs-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".cs-next",
    prevEl: ".cs-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// about content
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: false,
  pagination: {
    el: ".sw-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".sw-next",
    prevEl: ".sw-prev",
  },
  // breakpoints: {
  //   0: {
  //     slidesPerView: 1,
  //   },
  //   520: {
  //     slidesPerView: 2,
  //   },
  //   950: {
  //     slidesPerView: 3,
  //   },
  // },
});
