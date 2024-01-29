// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");

// Bila click menu
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Bila click tempat lain lepas click menu
const menu = document.querySelector("#menu");

document.addEventListener('click', function (e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active");
    }
})