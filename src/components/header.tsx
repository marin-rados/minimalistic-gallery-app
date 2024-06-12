import mail from "../assets/icons/mail.svg";
import fb from "../assets/icons/fb.svg";
import instagram from "../assets/icons/instagram.svg";
import info from "../assets/icons/info.svg";

const Header = () => {
  window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    const title = document.getElementById("title");
    const icons = document.querySelectorAll(".header__socials__link__icon");
    const info = document.getElementById("info");
    if (window.scrollY > 50) {
      header?.classList.add("shrink");
      title?.classList.add("shrink-title");
      info?.classList.remove("show");
      icons.forEach((icon) => {
        icon.classList.add("shrink-icon");
      });
    } else {
      header?.classList.remove("shrink");
      title?.classList.remove("shrink-title");
      // info?.classList.add("show");
      icons.forEach((icon) => {
        icon.classList.remove("shrink-icon");
      });
    }
  });

  const toggleInfo = () => {
    const info = document.getElementById("info");
    info?.classList.toggle("show");
  };

  return (
    <header className="header" id="header">
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
        <img onClick={toggleInfo} src={info} alt="Info Icon" className="info" />
      </div>
      <div className="header__title">
        <h1 className="header__title__name" id="title">
          LOUIS VAN BAAR
        </h1>
      </div>
      <div className="header__info hide" id="info">
        <a href="mailto:louis@louisvanbaar.com" className="header__info__link">
          EMAIL
        </a>
        <a
          href="https://www.instagram.com/louisvanbaar/"
          className="header__info__link"
        >
          INSTAGRAM
        </a>
        <a
          href="https://www.facebook.com/louisvanbaar/"
          className="header__info__link"
        >
          FACEBOOK
        </a>
      </div>
    </header>
  );
};

export default Header;
