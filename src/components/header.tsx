import mail from "../assets/icons/mail.svg";
import fb from "../assets/icons/fb.svg";
import instagram from "../assets/icons/instagram.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__socials">
        <img src={mail} className="header__socials__icon"></img>
        <img src={instagram} className="header__socials__icon"></img>
        <img src={fb} className="header__socials__icon"></img>
      </div>
      <div className="header__title">
        <h1 className="header__title__name">LOUIS VAN BAAR</h1>
      </div>
    </header>
  );
};

export default Header;
