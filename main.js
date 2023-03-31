
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

// ~~~~~~~~~~~~~~~ DARK LIGHT THEME TOOGLE ~~~~~~~~~~~~~~ 
const themeButton = document.getElementById("theme-button")

if (localStorage.getItem("mode") === "dark") {
    darkMode()
} else {
    lightMode()
}

themeButton.addEventListener("click", () => {
    if (localStorage.getItem("mode") === "light") {
        darkMode()
    } else {
        lightMode()
    }
})

function darkMode() {
    document.body.classList.add("dark-theme")
    themeButton.classList.replace("fa-moon", "fa-sun")
    localStorage.setItem("mode", "dark")
}

function lightMode() {
    document.body.classList.remove("dark-theme")
    themeButton.classList.replace("fa-sun", "fa-moon")
    localStorage.setItem("mode", "light")
}
