import * as splashScreen from "./modules/splash-screen.js";
import NavMenu from "./modules/menu.js";

splashScreen.injectHTML();
const navbarMmenu = new NavMenu("menu");

window.addEventListener("load", splashScreen.quit);
window.addEventListener("load", navbarMmenu.enable);
window.addEventListener("resize", navbarMmenu.enable);

import "./modules/testimonial-card.js";
