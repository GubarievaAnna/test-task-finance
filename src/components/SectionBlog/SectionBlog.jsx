import Picture from '../Picture/Picture';
import s from './SectionBlog.module.scss';

const SectionBlog = () => {
  return (
    <section id="blog">
      <div className={'container-nopadding ' + s.blog}>
        <Picture component="blog" alt="Desktop" />
        <div className={s.blog__content}>
          <p className={s.blog__date}>April 16 2020</p>
          <h2 className={s.blog__title}>Blog Post One</h2>
          <p className={s.blog__text}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
            ipsum dignissimos quae laudantium asperiores nam aliquid impedit
            harum illum dolore explicabo ab dolores itaque rerum temporibus
            doloribus iste maiores deleniti?
          </p>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={s.blog__button}
          >
            Read Our Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionBlog;
