import sprite from '../../images/sprite.svg';
import s from"./Logo.module.scss";

const Logo = () => {
    return (
      <a href="./index.html" className={s.logo}>
        <svg className={s.logoIcon} width="40" height="31"><use href={sprite + "#logo"}></use></svg>
        <p className={s.logoText}><span className={s.logoAccent}>Finance</span> Ledger</p>
      </a>
    );
  }
  
  export default Logo;