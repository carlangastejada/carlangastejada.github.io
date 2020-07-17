const quit = () => {
  const splash_screen = document.getElementById("splash-screen");
  splash_screen.style.opacity = "0";
  splash_screen.addEventListener(
    "transitionend",
    () => (splash_screen.style.display = "none")
  );
};

export { quit };
