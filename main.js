let header = document.querySelector(".header");
let navbar = document.querySelector(".header .navbar");
let searchForm = document.querySelector(".search-from-container");
let cart = document.querySelector(".shopping-cart-container");
let loginForm = document.querySelector(".login-form");
let goUp = document.querySelector(".up-down");

//  Change The page Theme and localstorage
let toggleBtn = document.querySelector("#toggle-btn");
const moodIcon = document.querySelector(".mood");

function toggleMode() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    moodIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("mode", "light"); // Save mode preference to localStorage
  } else {
    document.body.classList.add("dark");
    moodIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("mode", "dark"); // Save mode preference to localStorage
  }
}
toggleBtn.addEventListener("click", toggleMode);
const mode = localStorage.getItem("mode");
if (mode === "dark") {
  toggleMode();
}

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
  navbar.classList.remove("active");
  cart.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#cart-btn").onclick = () => {
  cart.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  loginForm.classList.remove("active");
};

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
  navbar.classList.remove("active");
  searchForm.classList.remove("active");
  cart.classList.remove("active");
};

// Ripples Form

const btns = document.querySelectorAll("[data-target-tab]");
const form = document.querySelectorAll(".form");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    form.forEach((botn) => botn.classList.remove("open"));

    document.querySelector(btn.dataset.targetTab).classList.add("open");
  });
});

// Show And Hide The Password
const eyes = document.querySelectorAll(".eye");

eyes.forEach((eye) => {
  eye.addEventListener("click", () => {
    const pass_field = eye.previousElementSibling;
    if (pass_field.type === "password") {
      pass_field.setAttribute("type", "text");
      eye.classList.replace("fa-eye-slash", "fa-eye");
    } else {
      pass_field.setAttribute("type", "password");
      eye.classList.replace("fa-eye", "fa-eye-slash");
    }
  });
});

// Add And Remove Class Active Frome The List Header

let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

function removeAdd() {
  let sections = document.querySelectorAll("section[id]");
  let passedSections = Array.from(sections)
    .map((sct, i) => {
      return {
        y: sct.getBoundingClientRect().top - header.offsetHeight,
        id: i,
      };
    })
    .filter((sct) => sct.y <= 0);

  let currSectionId = passedSections.at(-1).id;

  list.forEach((l) => l.classList.remove("active"));
  list[currSectionId].classList.add("active");
}

// Window Scroll

window.onscroll = function () {
  removeAdd();
  // Remove Class Active From Navbar
  navbar.classList.remove("active");

  // Scroll To Top Button .
  // Site And Remove Class Name
  if (this.scrollY >= 1000) {
    goUp.classList.add("show");
  } else {
    goUp.classList.remove("show");
  }
};
goUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// fivoret page

let iHeart = document.querySelectorAll(".i-heart");
let getcolor = localStorage.getItem("color");

iHeart.forEach(function (ele) {
  ele.onclick = function () {
    if (this.style.color === "red") {
      this.style.color = "grey";
      localStorage.setItem("color", "grey");
    } else {
      this.style.color = "red";
      localStorage.setItem("color", "red");
    }
  };
});

// Creat The Big Mape
let popep = document.querySelector(".order .map-imag img");

popep.addEventListener("click", (e) => {
  let overlay = document.createElement("div");

  overlay.className = "popup-overlay";

  document.body.appendChild(overlay);

  let popuopBox = document.createElement("div");
  popuopBox.className = "popup-box";

  let popuopImage = document.createElement("img");
  popuopImage.className = "imgmap";
  popuopImage.src = popep.src;

  popuopBox.appendChild(popuopImage);
  document.body.appendChild(popuopBox);
});

document.addEventListener("click", function (e) {
  if (e.target.className == "imgmap") {
    // Remove image
    e.target.remove();
    // Remove Popup Box
    document.querySelector(".popup-box").remove();
    // Remove Overlay
    document.querySelector(".popup-overlay").remove();
  }
});
