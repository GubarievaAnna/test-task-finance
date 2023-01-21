import sprite from '../../images/sprite.svg';
import s from './SocialBlock.module.scss';

const SocialBlock = ({component}) => {
  return (
    <ul className={s.socList}>
      <li>
        <a href="/" className={component==="footer" ? s.socList__link : s.socList__linkage}>
          <svg
            width="35"
            height="35"
            className={s.socList__icon}
            aria-label="Facebook"
          >
            <use href={sprite + '#facebook'}></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="/" className={component==="footer" ? s.socList__link : s.socList__linkage}>
          <svg
            width="35"
            height="35"
            className={s.socList__icon}
            aria-label="Twitter"
          >
            <use href={sprite + '#twitter'}></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="/" className={component==="footer" ? s.socList__link : s.socList__linkage}>
          <svg
            width="40"
            height="35"
            className={s.socList__icon}
            aria-label="YouTube"
          >
            <use href={sprite + '#youtube'}></use>
          </svg>
        </a>
      </li>
      <li>
        <a href="/" className={component==="footer" ? s.socList__link : s.socList__linkage}>
          <svg
            width="31"
            height="35"
            className={s.socList__icon}
            aria-label="Linkedin"
          >
            <use href={sprite + '#linkedin'}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocialBlock;
