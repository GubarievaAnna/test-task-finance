import mobile_1x_webp from '../../images/about/about_mobile.webp';
import mobile_1x_jpg from '../../images/about/about_mobile.jpg';
import mobile_2x_webp from '../../images/about/about_mobile@2x.webp';
import mobile_2x_jpg from '../../images/about/about_mobile@2x.jpg';

import tablet_1x_webp from '../../images/about/about_tablet.webp';
import tablet_1x_jpg from '../../images/about/about_tablet.jpg';
import tablet_2x_webp from '../../images/about/about_tablet@2x.webp';
import tablet_2x_jpg from '../../images/about/about_tablet@2x.jpg';

import desktop_1x_webp from '../../images/about/about_desktop.webp';
import desktop_1x_jpg from '../../images/about/about_desktop.jpg';
import desktop_2x_webp from '../../images/about/about_desktop@2x.webp';
import desktop_2x_jpg from '../../images/about/about_desktop@2x.jpg';

import s from './SectionAbout.module.scss';

const SectionAbout = () => {
  return (
    <section id="about">
      <div className={'container-nopadding ' + s.sectionAbout}>
        <picture>
          <source
            srcSet={`${desktop_1x_webp} 1x, ${desktop_2x_webp} 2x`}
            media="(min-width: 1360px)"
            type="image/webp"
          />
          <source
            srcSet={`${desktop_1x_jpg} 1x, ${desktop_2x_jpg} 2x`}
            media="(min-width: 1360px)"
            type="image/jpg"
          />
          <source
            srcSet={`${tablet_1x_webp} 1x, ${tablet_2x_webp} 2x`}
            media="(min-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={`${tablet_1x_jpg} 1x, ${tablet_2x_jpg} 2x`}
            media="(min-width: 768px)"
            type="image/jpg"
          />
          <source
            srcSet={`${mobile_1x_webp} 1x, ${mobile_2x_webp} 2x`}
            media="(max-width: 768px)"
            type="image/webp"
          />
          <source
            srcSet={`${mobile_1x_jpg} 1x, ${mobile_2x_jpg} 2x`}
            media="(max-width: 768px)"
            type="image/jpg"
          />
          <img src={desktop_1x_jpg} alt="Office" />
        </picture>
        <div className={s.sectionAbout__content}>
          <p className={s.sectionAbout__description}>
            What you are looking for
          </p>
          <h2 className={s.sectionAbout__title}>
            We provide bespoke solutions
          </h2>
          <p className={s.sectionAbout__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a href="/" className={s.sectionAbout__button}>
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
