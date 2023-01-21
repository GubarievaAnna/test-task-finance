import s from './SectionCases.module.scss';

const SectionCases = () => {
  return (
    <section className={s.sectionCases} id="cases">
      <div className="container">
        <p className={s.sectionCases__description}>This is what we do</p>
        <h2 className={s.sectionCases__title}>Business Cases</h2>
        <p className={s.sectionCases__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      </div>
    </section>
  );
};

export default SectionCases;
