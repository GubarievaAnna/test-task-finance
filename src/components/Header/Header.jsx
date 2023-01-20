import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import s from "./Header.module.scss";

const Header = () => {
  return (
    <header style={{ backgroundColor: "red" }}>
      <div className={"container " + s.header}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
