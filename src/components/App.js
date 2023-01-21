import Header from './Header/Header';
import Footer from './Footer/Footer';
import SectionHero from './SectionHero/SectionHero';
import SectionCases from './SectionCases/SectionCases';
import SectionTeam from './SectionTeam/SectionTeam';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionCases/>
        <SectionTeam/>
      </main>
      <Footer />
    </>
  );
};

export default App;
