import SocialBlock from '../SocialBlock/SocialBlock';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer} id="contact">
      <div className="container">
        <SocialBlock />
        <p className={s.copyright}>Copyright &#169; 2021 - FinanceLedger</p>
      </div>
    </footer>
  );
};

export default Footer;
