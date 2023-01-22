import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import SectionHero from './SectionHero/SectionHero';
import SectionAbout from './SectionAbout/SectionAbout';
import SectionCases from './SectionCases/SectionCases';
import SectionBlog from './SectionBlog/SectionBlog';
import SectionTeam from './SectionTeam/SectionTeam';
import SectionContact from './SectionContact/SectionContact';

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
        <SectionContact/>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
