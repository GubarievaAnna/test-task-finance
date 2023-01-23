import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import s from './Header.module.scss';

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const isMobile = useMediaQuery({ query: '(max-width: 767.99px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });


  const handleScroll = () => {
    if (isMobile && window.scrollY > 120 && !isActive) {
      setIsActive(true);
      return;
    }
    if (isTablet && window.scrollY > 80 && !isActive) {
      setIsActive(true);
      return;
    }
    setIsActive(false);
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);

    // eslint-disable-next-line
  }, []);

  return (
    <header className={isActive === true ? s['header--active'] : s.header}>
      <div className={'container ' + s.header__container}>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
