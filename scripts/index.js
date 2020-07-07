const menu_open_btn = document.getElementById('header__menu-button')
const menu_close_btn = document.getElementById('menu__close-button')
const menu = document.getElementById('menu')
const menu_links = document.getElementsByClassName('menu__link')

const showMenu = () => menu.style.transform = 'translateX(0)'
const closeMenu = () => menu.style.transform = 'translateX(100%)'
const enableMenu = () => {
    if (window.outerWidth < 768) {
        menu.style.transform = 'translateX(100%)'
        menu.addEventListener('click', closeMenu)
        menu_open_btn.addEventListener('click', showMenu)
        menu_close_btn.addEventListener('click', closeMenu)
        for (item of menu_links) item.addEventListener('click', closeMenu)
    } else {
        menu.removeEventListener('click', closeMenu)
        menu_open_btn.removeEventListener('click', showMenu)
        menu_close_btn.removeEventListener('click', closeMenu)
        for (item of menu_links) item.removeEventListener('click', closeMenu)
        menu.style.transform = 'translateX(0)'
    }
}

window.addEventListener('load', enableMenu)
window.addEventListener('resize', enableMenu)