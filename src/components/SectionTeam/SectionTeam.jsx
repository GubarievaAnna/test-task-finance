import SocialBlock from '../SocialBlock/SocialBlock';

import person1_1x_webp from '../../images/team/person1.webp';
import person1_1x_jpg from '../../images/team/person1.jpg';
import person1_2x_webp from '../../images/team/person1@2x.webp';
import person1_2x_jpg from '../../images/team/person1@2x.jpg';

import person2_1x_webp from '../../images/team/person2.webp';
import person2_1x_jpg from '../../images/team/person2.jpg';
import person2_2x_webp from '../../images/team/person2@2x.webp';
import person2_2x_jpg from '../../images/team/person2@2x.jpg';

import person3_1x_webp from '../../images/team/person3.webp';
import person3_1x_jpg from '../../images/team/person3.jpg';
import person3_2x_webp from '../../images/team/person3@2x.webp';
import person3_2x_jpg from '../../images/team/person3@2x.jpg';
import s from './SectionTeam.module.scss';

const SectionTeam = () => {
  return (
    <section className={s.team}>
      <div className="container">
        <p className={s.team__description}>Who we are</p>
        <h2 className={s.team__title}>Our Professional Team</h2>
        <p className={s.team__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <ul className={s.team__list}>
          <li className={s.memberCard}>
            <div className={s.memberCard__thumb}>
              <picture className={s.memberCard__image}>
                <source
                  srcSet={`${person1_1x_webp} 1x, ${person1_2x_webp} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${person1_1x_jpg}  1x, ${person1_2x_jpg}  2x`}
                  type="image/jpg"
                />
                <img src={person1_1x_jpg} alt="John Doe" />
              </picture>
              <div className={s.memberCard__overlay}>
                <SocialBlock component="sectionTeam" />
              </div>
            </div>
            <div className={s.memberCard__content}>
              <h3 className={s.memberCard__name}>John Doe</h3>
              <p className={s.memberCard__position}>President</p>
            </div>
          </li>
          <li className={s.memberCard}>
            <div className={s.memberCard__thumb}>
              <picture className={s.memberCard__image}>
                <source
                  srcSet={`${person2_1x_webp} 1x, ${person2_2x_webp} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${person2_1x_jpg}  1x, ${person2_2x_jpg}  2x`}
                  type="image/jpg"
                />
                <img src={person2_1x_jpg} alt="Jane Doe" />
              </picture>
              <div className={s.memberCard__overlay}>
                <SocialBlock component="sectionTeam" />
              </div>
            </div>
            <div className={s.memberCard__content}>
              <h3 className={s.memberCard__name}>Jane Doe</h3>
              <p className={s.memberCard__position}>Vice President</p>
            </div>
          </li>
          <li className={s.memberCard}>
            <div className={s.memberCard__thumb}>
              <picture className={s.memberCard__image}>
                <source
                  srcSet={`${person3_1x_webp} 1x, ${person3_2x_webp} 2x`}
                  type="image/webp"
                />
                <source
                  srcSet={`${person3_1x_jpg}  1x, ${person3_2x_jpg}  2x`}
                  type="image/jpg"
                />
                <img src={person3_1x_jpg} alt="Steve Smith" />
              </picture>
              <div className={s.memberCard__overlay}>
                <SocialBlock component="sectionTeam" />
              </div>
            </div>
            <div className={s.memberCard__content}>
              <h3 className={s.memberCard__name}>Steve Smith</h3>
              <p className={s.memberCard__position}>Marketing Head</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SectionTeam;
