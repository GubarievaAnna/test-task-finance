import sprite from '../../images/sprite.svg';
import s from"./Logo.module.scss";

const Logo = () => {
    return (
      <a href="./index.html" className={s.logo}>
        <svg className={s.logo__icon} width="40" height="31" aria-label="Logo sign"><use href={sprite + "#logo"}></use></svg>
        <p className={s.logo__title}><span className={s.logo_accent}>Finance</span> Ledger</p>
      </a>
    );
  }
  
  export default Logo;