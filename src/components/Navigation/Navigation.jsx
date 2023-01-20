import s from"./Navigation.module.scss";

const Navigation = () => {
    return (
      <nav className={s.nav}>
          <ul className={s.navList}>
            <li className={s.navItem}>
              <a
                href="./index.html"
                className={s.navLink}
              >
                Home
              </a>
            </li>
            <li className={s.navItem}>
              <a
                href="#about"
                className={s.navLink}
              >
                About
              </a>
            </li>
            <li className={s.navItem}>
              <a
                href="#cases"
                className={s.navLink}
              >
                Cases
              </a>
            </li>
            <li className={s.navItem}>
              <a
                href="#blog"
                className={s.navLink}
              >
                Blog
              </a>
            </li>
            <li className={s.navItem}>
              <a
                href="#contact"
                className={s.navLink}
              >
                Contact
              </a>
            </li>
          </ul>
      </nav>
    );
  }
  
  export default Navigation;