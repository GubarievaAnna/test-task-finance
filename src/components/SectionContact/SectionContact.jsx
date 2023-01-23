import Picture from "../Picture/Picture"
import Form from '../Form/Form';

import s from './SectionContact.module.scss';

const SectionContact = () => {
  return (
    <section id="contact">
      <div className={'container-nopadding ' + s.contact}>
      <Picture component="contact" alt="Marketing head Steve Smith"/>
        <div className={s.contact__content}>
          <h2 className={s.contact__title}>Request Callback</h2>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
