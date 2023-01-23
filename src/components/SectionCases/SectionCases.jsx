import { useState } from 'react';
import FsLightbox from 'fslightbox-react';

import s from './SectionCases.module.scss';

const SectionCases = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const openSlider = id => {
    setToggler(!toggler);
    setSlide(id);
  };

  const createArray = number => {
    const newArray = Array(6)
      .fill(0)
      .map((el, index) => index + 1);
    return newArray;
  };

  const array = createArray(6);

  return (
    <section className={s.cases} id="cases">
      <div className="container">
        <p className={s.cases__description}>This is what we do</p>
        <h2 className={s.cases__title}>Business Cases</h2>
        <p className={s.cases__text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
          sapiente!
        </p>
        <div className={s.cases__wrapper}>
          {array.map(el => (
            <picture
              key={el}
              className={s.cases__image}
              onClick={() => openSlider(el)}
            >
              <source
                srcSet={`${require(`../../images/cases/cases${el}.webp`)} 1x, ${require(`../../images/cases/cases${el}@2x.webp`)} 2x`}
                type="image/webp"
              />
              <source
                srcSet={`${require(`../../images/cases/cases${el}.jpg`)} 1x, ${require(`../../images/cases/cases${el}@2x.jpg`)} 2x`}
                type="image/jpeg"
              />
              <img
                src={require(`../../images/cases/cases${el}.jpg`)}
                alt={'Case ' + el}
              />
            </picture>
          ))}
        </div>
        <FsLightbox
          toggler={toggler}
          sources={array.map(
            el => `${require(`../../images/cases/cases${el}.jpg`)}`
          )}
          slide={slide}
        />
      </div>
    </section>
  );
};

export default SectionCases;
