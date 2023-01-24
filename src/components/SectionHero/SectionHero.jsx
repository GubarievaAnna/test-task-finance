import sprite from '../../images/sprite.svg';
import s from './SectionHero.module.scss';

const SectionHero = () => {
  return (
    <section className={s.hero}>
      <div className="container">
        <h1 className={s.hero__title}>The Sky Is The Limit</h1>
        <h2 className={s.hero__text}>
          We provide world class financial assistance
        </h2>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className={s.button}
        >
          <svg
            className={s.button__icon}
            width="12"
            height="20"
            aria-label="Read more"
          >
            <use href={sprite + '#more'}></use>
          </svg>
          <p className={s.button__text}>Read more</p>
        </a>
      </div>
    </section>
  );
};

export default SectionHero;
