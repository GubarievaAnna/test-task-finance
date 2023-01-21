import s from './Navigation.module.scss';

const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.nav__list}>
        <li className={s.nav__item}>
          <a href="/" className={s.nav__link}>
            Home
          </a>
        </li>
        <li className={s.nav__item}>
          <a href="#about" className={s.nav__link}>
            About
          </a>
        </li>
        <li className={s.nav__item}>
          <a href="#cases" className={s.nav__link}>
            Cases
          </a>
        </li>
        <li className={s.nav__item}>
          <a href="#blog" className={s.nav__link}>
            Blog
          </a>
        </li>
        <li className={s.nav__item}>
          <a href="#contact" className={s.nav__link}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
