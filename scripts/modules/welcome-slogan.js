const slogan = document.getElementById("welcome__slogan");

window.setInterval(() => {
  slogan.style.opacity = "0";
  slogan.addEventListener("transitionend", () => {
    slogan.innerHTML = `Diseña tu presencia web conmigo`;
    slogan.style.opacity = "1";
  });
  if (slogan.innerHTML == "Diseña tu presencia web conmigo") {
    slogan.style.opacity = "0";
    slogan.addEventListener("transitionend", () => {
      slogan.innerHTML = `¿Necesitas a un diseñador web?`;
      slogan.style.opacity = "1";
    });
  }
}, 3000);
