import Form from '../Form/Form';

import mobile_1x_webp from '../../images/contact/contact_mobile.webp';
import mobile_1x_jpg from '../../images/contact/contact_mobile.jpg';
import mobile_2x_webp from '../../images/contact/contact_mobile@2x.webp';
import mobile_2x_jpg from '../../images/contact/contact_mobile@2x.jpg';

import tablet_1x_webp from '../../images/contact/contact_tablet.webp';
import tablet_1x_jpg from '../../images/contact/contact_tablet.jpg';
import tablet_2x_webp from '../../images/contact/contact_tablet@2x.webp';
import tablet_2x_jpg from '../../images/contact/contact_tablet@2x.jpg';

import desktop_1x_webp from '../../images/contact/contact_desktop.webp';
import desktop_1x_jpg from '../../images/contact/contact_desktop.jpg';
import desktop_2x_webp from '../../images/contact/contact_desktop@2x.webp';
import desktop_2x_jpg from '../../images/contact/contact_desktop@2x.jpg';

import s from './SectionContact.module.scss';

const SectionContact = () => {
  return (
    <section id="contact">
      <div className={'container-nopadding ' + s.contact}>
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
        <div className={s.contact__content}>
          <h2 className={s.contact__title}>Request Callback</h2>
          <Form/>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
