class NavMenu {
  constructor(id) {
    this._menu = document.getElementById(id);
    this._menu_links = document.getElementsByClassName("menu__link");
    this._menu_open_btn = document.getElementById("header__menu-button");
    this._menu_close_btn = document.getElementById("menu__close-button");
  }

  show = () => {
    this._menu.style.transform = "translateX(0)";
  };

  close = () => {
    this._menu.style.transform = "translateX(100%)";
  };

  enable = () => {
    if (window.outerWidth < 768) {
      this._menu.style.transform = "translateX(100%)";
      this._menu.addEventListener("click", this.close);
      this._menu_open_btn.addEventListener("click", this.show);
      this._menu_close_btn.addEventListener("click", this.close);
      for (let i = 0; i < this._menu_links.length; i++)
        this._menu_links[i].addEventListener("click", this.close);
    } else {
      this._menu.removeEventListener("click", this.close);
      this._menu_open_btn.removeEventListener("click", this.show);
      this._menu_close_btn.removeEventListener("click", this.close);
      for (let i = 0; i < this._menu_links.length; i++)
        this._menu_links[i].removeEventListener("click", this.close);
      this._menu.style.transform = "translateX(0)";
    }
  };
}

export default NavMenu;
