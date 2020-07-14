const splash_screen = document.getElementById("splash-screen");

window.addEventListener("load", () => {
  splash_screen.style.opacity = "0";
});

splash_screen.addEventListener("transitionend", () => {
  splash_screen.style.display = "none";
});
