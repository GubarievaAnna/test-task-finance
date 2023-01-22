import Header from './Header/Header';
import Footer from './Footer/Footer';
import SectionHero from './SectionHero/SectionHero';
import SectionAbout from './SectionAbout/SectionAbout';
import SectionCases from './SectionCases/SectionCases';
import SectionBlog from './SectionBlog/SectionBlog';
import SectionTeam from './SectionTeam/SectionTeam';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <SectionHero />
        <SectionAbout/>
        <SectionCases/>
        <SectionBlog/>
        <SectionTeam/>
      </main>
      <Footer />
    </>
  );
};

export default App;
