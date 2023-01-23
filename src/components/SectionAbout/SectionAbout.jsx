import Picture from "../Picture/Picture";
import s from './SectionAbout.module.scss';

const SectionAbout = () => {
  return (
    <section id="about">
      <div className={'container-nopadding ' + s.about}>
      <Picture component="about" alt="Our office"/>
        <div className={s.about__content}>
          <p className={s.about__description}>
            What you are looking for
          </p>
          <h2 className={s.about__title}>
            We provide bespoke solutions
          </h2>
          <p className={s.about__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a href="/" className={s.about__button}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
