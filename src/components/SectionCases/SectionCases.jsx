import s from './SectionCases.module.scss';

const SectionCases = () => {
  return (
    <section className={s.cases} id="cases">
      <div className="container">
        <p className={s.cases__description}>This is what we do</p>
        <h2 className={s.cases__title}>Business Cases</h2>
        <p className={s.cases__text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
      </div>
    </section>
  );
};

export default SectionCases;
