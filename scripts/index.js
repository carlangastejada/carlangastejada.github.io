const logo = document.getElementById('logo')
const menu_open_btn = document.getElementById('menu-open-button')
const menu_close_btn = document.getElementById('menu-close-button')
const menu = document.getElementById('menu')
const navbar_links = document.getElementsByClassName('links-list__link')


const showMenu = () => menu.style.visibility = 'visible'
const closeMenu = () => menu.style.visibility = 'hidden'
const enableMenu = () => {
    if (window.outerWidth < 768) {
        menu.style.visibility = "hidden"
        menu_open_btn.addEventListener('click', showMenu)
        menu_close_btn.addEventListener('click', closeMenu)
        for (item of navbar_links) item.addEventListener('click', closeMenu)
    } else {
        menu_open_btn.removeEventListener('click', showMenu)
        menu_close_btn.removeEventListener('click', closeMenu)
        for (item of navbar_links) item.removeEventListener('click', closeMenu)
        menu.style.visibility = "visible"
    }
}

window.addEventListener('load', enableMenu)
window.addEventListener('resize', enableMenu)
logo.addEventListener('click', () => scrollTo(0, 0))