import * as SplashScreen from "./modules/splash-screen.js";
import NavMenu from "./modules/menu.js";
import "./modules/testimonial-card.js";
import "./modules/welcome-slogan.js"

const navbarMenu = new NavMenu("menu");

window.addEventListener("load", SplashScreen.quit);
window.addEventListener("load", navbarMenu.enable);
window.addEventListener("resize", navbarMenu.enable);
