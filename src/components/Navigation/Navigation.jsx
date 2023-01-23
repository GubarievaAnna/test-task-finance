import { Link } from 'react-scroll';
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
          <Link
            className={s.nav__link}
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className={s.nav__item}>
          <Link
            className={s.nav__link}
            to="cases"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Cases
          </Link>
        </li>
        <li className={s.nav__item}>
          <Link
            className={s.nav__link}
            to="blog"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Blog
          </Link>
        </li>
        <li className={s.nav__item}>
          <Link
            className={s.nav__link}
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
