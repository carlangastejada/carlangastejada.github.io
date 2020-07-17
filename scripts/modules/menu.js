class NavMenu {
  constructor(id) {
    this.menu = document.getElementById(id);
    this.menu_links = document.getElementsByClassName("menu__link");
    this.menu_open_btn = document.getElementById("header__menu-button");
    this.menu_close_btn = document.getElementById("menu__close-button");
  }

  show = () => {
    this.menu.style.transform = "translateX(0)";
  };

  close = () => {
    this.menu.style.transform = "translateX(100%)";
  };

  enable = () => {
    if (window.outerWidth < 768) {
      this.menu.style.transform = "translateX(100%)";
      this.menu.addEventListener("click", this.close);
      this.menu_open_btn.addEventListener("click", this.show);
      this.menu_close_btn.addEventListener("click", this.close);
      for (let i = 0; i < this.menu_links.length; i++)
        this.menu_links[i].addEventListener("click", this.close);
    } else {
      this.menu.removeEventListener("click", this.close);
      this.menu_open_btn.removeEventListener("click", this.show);
      this.menu_close_btn.removeEventListener("click", this.close);
      for (let i = 0; i < this.menu_links.length; i++)
        this.menu_links[i].removeEventListener("click", this.close);
      this.menu.style.transform = "translateX(0)";
    }
  };
}

export default NavMenu;
