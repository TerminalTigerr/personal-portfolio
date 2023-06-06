/*************SHOW MENU HIDDEN****************************/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/************Show Menu*****************/
showMenu()
function showMenu() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/**************Hide Menu****************/
hideMenu() 
function hideMenu() {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/************Remove Menu Mobile**************/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // remove show-menu when you click on any link
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))