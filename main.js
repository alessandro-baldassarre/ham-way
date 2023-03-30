
const navMenu = document.getElementById("nav-menu");
const navToogle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav__link")

// ~~~~~~~~~~~~~~~~~~~ TOOGLE MENU ~~~~~~~~~~~~~~~~~~~~

// MENU SHOW
if (navToogle) {
    navToogle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// REMOVE MENU MOBILE
navLinks.forEach(navLink => navLink.addEventListener('click', () => navMenu.classList.remove('show-menu')))



