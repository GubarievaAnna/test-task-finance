import SocialBlock from '../SocialBlock/SocialBlock';
import array from '../../utils/team.json';

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
          {array.map(({ id, name, position }) => (
            <li className={s.memberCard} key={id}>
              <div className={s.memberCard__thumb}>
                <picture className={s.memberCard__image}>
                  <source
                    srcSet={`${require(`../../images/team/person${id}.webp`)} 1x, ${require(`../../images/team/person${id}@2x.webp`)} 2x`}
                    type="image/webp"
                  />
                  <source
                    srcSet={`${require(`../../images/team/person${id}.jpg`)} 1x, ${require(`../../images/team/person${id}@2x.jpg`)} 2x`}
                    type="image/jpg"
                  />
                  <img
                    src={require(`../../images/team/person${id}.jpg`)}
                    alt={name}
                  />
                </picture>
                <div className={s.memberCard__overlay}>
                  <SocialBlock component="sectionTeam" />
                </div>
              </div>
              <div className={s.memberCard__content}>
                <h3 className={s.memberCard__name}>{name}</h3>
                <p className={s.memberCard__position}>{position}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionTeam;
