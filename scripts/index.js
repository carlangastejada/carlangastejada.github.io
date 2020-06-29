const gotop = document.getElementById('go-top')
const logo = document.getElementById('logo')

const menubtn = document.getElementById('menu-open-button')
const menuclose = document.getElementById('menu-close-button')
const menu = document.getElementById('menu')
const links = document.getElementsByClassName('links-list__link')


const showMenu = () => menu.style.visibility = 'visible'
const closeMenu = () => menu.style.visibility = 'hidden'
const enableMenu = () => {
    if (window.outerWidth < 768) {
        menu.style.visibility = "hidden"
        menubtn.addEventListener('click', showMenu)
        menuclose.addEventListener('click', closeMenu)
        for (item of links) item.addEventListener('click', closeMenu)
    } else {
        menubtn.removeEventListener('click', showMenu)
        menuclose.removeEventListener('click', closeMenu)
        for (item of links) item.removeEventListener('click', closeMenu)
        menu.style.visibility = "visible"
    }
}

window.addEventListener('load', enableMenu)
window.addEventListener('resize', enableMenu)
logo.addEventListener('click', () => scrollTo(0, 0))
gotop.addEventListener('click', () => scrollTo(0, 0))

