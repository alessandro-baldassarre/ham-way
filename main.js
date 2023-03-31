
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

// ~~~~~~~~~~~~~~~~~~~~ CHANGE HEADER BG ~~~~~~~~~~~~~~~~~~~
const scrollHeader = () => {
    const header = document.getElementById("header")

    this.scrollY >= 50
        ? header.classList.add("bg-header")
        : header.classList.remove("bg-header")
}

window.addEventListener("scroll", scrollHeader)

// ~~~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~~~~~~~~
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")

    this.scrollY >= 350
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollUp)


