import mail from "../assets/icons/mail.svg";
import fb from "../assets/icons/fb.svg";
import instagram from "../assets/icons/instagram.svg";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const title = document.getElementById("title");
    const icons = document.querySelectorAll(".header__socials__link__icon");
    if (window.scrollY > 50) {
      header?.classList.add("shrink");
      title?.classList.add("shrink-title");
      icons.forEach((icon) => {
        icon.classList.add("shrink-icon");
      });
    } else {
      header?.classList.remove("shrink");
      title?.classList.remove("shrink-title");
      icons.forEach((icon) => {
        icon.classList.remove("shrink-icon");
      });
    }
  });

  return (
    <header className="header shrink" id="header">
      <div className="header__socials">
        <a
          href="mailto:louis@louisvanbaar.com"
          className="header__socials__link"
          target="_blank"
        >
          <img className="header__socials__link__icon" src={mail}></img>
        </a>
        <a
          href="https://www.instagram.com/louisvanbaar/"
          className="header__socials__link"
          target="_blank"
        >
          <img className="header__socials__link__icon" src={instagram}></img>
        </a>
        <a
          href="https://www.facebook.com/louis.vanbaar/"
          className="header__socials__link"
          target="_blank"
        >
          <img className="header__socials__link__icon" src={fb}></img>
        </a>
      </div>
      <div className="header__title">
        <h1 className="header__title__name" id="title">
          LOUIS VAN BAAR
        </h1>
      </div>
    </header>
  );
};

export default Header;
