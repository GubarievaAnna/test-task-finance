import PropTypes from 'prop-types';

const Picture = ({ component, alt }) => {
  return (
    <picture>
      <source
        srcSet={`${require(`../../images/${component}/${component}_desktop.webp`)} 1x, ${require(`../../images/${component}/${component}_desktop@2x.webp`)} 2x`}
        media="(min-width: 1360px)"
        type="image/webp"
      />
      <source
        srcSet={`${require(`../../images/${component}/${component}_desktop.jpg`)} 1x, ${require(`../../images/${component}/${component}_desktop@2x.jpg`)} 2x`}
        media="(min-width: 1360px)"
        type="image/jpg"
      />
      <source
        srcSet={`${require(`../../images/${component}/${component}_tablet.webp`)} 1x, ${require(`../../images/${component}/${component}_tablet@2x.webp`)} 2x`}
        media="(min-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet={`${require(`../../images/${component}/${component}_tablet.jpg`)} 1x, ${require(`../../images/${component}/${component}_tablet@2x.jpg`)} 2x`}
        media="(min-width: 768px)"
        type="image/jpg"
      />
      <source
        srcSet={`${require(`../../images/${component}/${component}_mobile.webp`)} 1x, ${require(`../../images/${component}/${component}_mobile@2x.webp`)} 2x`}
        media="(max-width: 768px)"
        type="image/webp"
      />
      <source
        srcSet={`${require(`../../images/${component}/${component}_mobile.jpg`)} 1x, ${require(`../../images/${component}/${component}_mobile@2x.jpg`)} 2x`}
        media="(max-width: 768px)"
        type="image/jpg"
      />
      <img
        src={`${require(`../../images/${component}/${component}_desktop.jpg`)}`}
        alt={alt}
      />
    </picture>
  );
};

Picture.propTypes = {
    component: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

export default Picture;
