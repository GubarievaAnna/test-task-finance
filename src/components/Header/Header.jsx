import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={"container " + s.header__container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
