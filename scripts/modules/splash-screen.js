const injectHTML = () => {
  const body = document.getElementsByTagName("body");

  body[0].insertAdjacentHTML(
    "afterbegin",
    `
<div class="splash-screen" id="splash-screen">
      <img src="./img/favicon.svg" class="splash-screen__logo">
      <div class="splash-screen__loader"></div>
    </div>
`
  );
};

const quit = () => {
  const splash_screen = document.getElementById("splash-screen");
  splash_screen.style.opacity = "0";
  splash_screen.addEventListener(
    "transitionend",
    () => (splash_screen.style.display = "none")
  );
};

export { injectHTML, quit };
