import mobile_1x_webp from '../../images/blog/blog_mobile.webp';
import mobile_1x_jpg from '../../images/blog/blog_mobile.jpg';
import mobile_2x_webp from '../../images/blog/blog_mobile@2x.webp';
import mobile_2x_jpg from '../../images/blog/blog_mobile@2x.jpg';

import tablet_1x_webp from '../../images/blog/blog_tablet.webp';
import tablet_1x_jpg from '../../images/blog/blog_tablet.jpg';
import tablet_2x_webp from '../../images/blog/blog_tablet@2x.webp';
import tablet_2x_jpg from '../../images/blog/blog_tablet@2x.jpg';

import desktop_1x_webp from '../../images/blog/blog_desktop.webp';
import desktop_1x_jpg from '../../images/blog/blog_desktop.jpg';
import desktop_2x_webp from '../../images/blog/blog_desktop@2x.webp';
import desktop_2x_jpg from '../../images/blog/blog_desktop@2x.jpg';

import s from './SectionBlog.module.scss';

const SectionBlog = () => {
  return (
    <section id="blog">
      <div className={"container-nopadding " + s.blog}>
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
          <img src={desktop_1x_jpg} alt="Desktop" />
        </picture>
        <div className={s.blog__content}>
          <p className={s.blog__date}>April 16 2020</p>
          <h2 className={s.blog__title}>Blog Post One</h2>
          <p className={s.blog__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a href="/" className={s.blog__button}>
            Read Our Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
