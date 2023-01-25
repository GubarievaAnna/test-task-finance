import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import loader from '../../images/buttons/loading.gif';

import s from './LightBox.module.scss';

const portalModal = document.querySelector('#modal-root');

const LightBox = ({ setIsOpen, curImg, setCurImg, totalImg }) => {
  const [isLoading, setIsLoading] = useState(false);

  const closeLightBox = () => {
    setIsOpen(false);
    document.body.classList.remove('no-scroll');
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') closeLightBox();
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line
  }, []);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) closeLightBox();
  };

  const changeImage = number => {
    setIsLoading(true);
    setTimeout(() => {
      setCurImg(number);
      setIsLoading(false);
    }, 500);
  };

  return createPortal(
    <div className={s.backdrop} onClick={onBackdropClick}>
      <div className={s.modal}>
        {curImg !== 1 && (
          <button
            type="button"
            aria-label="previous"
            className={`${s.button} ${s['button--prev']}`}
            onClick={() => {
              changeImage(curImg - 1);
            }}
          ></button>
        )}
        <picture
          className={!isLoading ? s.modal__image : s['modal__image--hidden']}
        >
          <source
            srcSet={`${require(`../../images/cases/cases${curImg}.webp`)} 1x, ${require(`../../images/cases/cases${curImg}@2x.webp`)} 2x`}
            type="image/webp"
          />
          <source
            srcSet={`${require(`../../images/cases/cases${curImg}.jpg`)} 1x, ${require(`../../images/cases/cases${curImg}@2x.jpg`)} 2x`}
            type="image/jpeg"
          />
          <img
            src={require(`../../images/cases/cases${curImg}.jpg`)}
            alt={'Case ' + curImg}
          />
        </picture>
        {curImg !== totalImg && (
          <button
            type="button"
            aria-label="next"
            className={`${s.button} ${s['button--next']}`}
            onClick={() => {
              changeImage(curImg + 1);
            }}
          ></button>
        )}
        {isLoading && (
          <div className={s.modal_overlay}>
            <img src={loader} className={s.modal_loader} alt="loader" />
          </div>
        )}
        {!isLoading && (
          <div className={s.modal__card}>
            <p className={s.modal__description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, sapiente!
            </p>
            <p className={s.modal__number}>{`Page ${curImg} of ${totalImg}`}</p>
            <button
              type="button"
              aria-label="close"
              className={s.modal__close}
              onClick={closeLightBox}
            ></button>
          </div>
        )}
      </div>
    </div>,
    portalModal
  );
};

LightBox.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  setCurImg: PropTypes.func.isRequired,
  curImg: PropTypes.number.isRequired,
  totalImg: PropTypes.number.isRequired,
};

export default LightBox;
