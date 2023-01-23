import { useState } from 'react';
import LightBox from '../LightBox/LightBox';

import s from './SectionCases.module.scss';

const SectionCases = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [curImg, setCurImg] = useState(1);

  const openLightBox = number => {
    setIsOpen(true);
    setCurImg(number);
    document.body.classList.add('no-scroll');
  };

  const createArray = number => {
    const newArray = Array(number)
      .fill('')
      .map((el, index) => index + 1);
    return newArray;
  };

  const images = createArray(6);

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
          {images.map(el => (
            <picture
              key={el}
              className={s.cases__image}
              onClick={() => openLightBox(el)}
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
        {isOpen && (
          <LightBox
            setIsOpen={setIsOpen}
            curImg={curImg}
            setCurImg={setCurImg}
            totalImg={images.length}
          />
        )}
      </div>
    </section>
  );
};

export default SectionCases;
