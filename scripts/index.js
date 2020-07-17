import * as splashscreen from "./modules/splash-screen.js";
import NavMenu from "./modules/menu.js";

splashscreen.injectHTML();
const navbar_menu = new NavMenu("menu");

window.addEventListener("load", splashscreen.quit);
window.addEventListener("load", navbar_menu.enable);
window.addEventListener("resize", navbar_menu.enable);

import "./modules/testimonial-card.js";
