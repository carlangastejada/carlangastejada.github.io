const menubtn = document.getElementById('menu-open-button')
const menuclose = document.getElementById('menu-close-button')
const menu = document.getElementById('menu')
const clickeditem = document.getElementsByClassName('menu-links-list__link')
const gotop = document.getElementById('go-top')
const logo = document.getElementById('logo')

menubtn.addEventListener('click', () => menu.style.visibility = 'visible')
menuclose.addEventListener('click', () => menu.style.visibility = 'hidden')
gotop.addEventListener('click', () => window.scrollTo(0, 0))
logo.addEventListener('click', () => window.scrollTo(0, 0))
for (item of clickeditem) {
    item.addEventListener('click', () => menu.style.visibility = 'hidden')
}



