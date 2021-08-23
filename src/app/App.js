import { useState, useEffect } from 'react';
import './App.scss';
import About from './component/about/About';
import Brand from './component/brand/Brand';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import OurFunFact from './component/our-fun-fact/OurFunFact';
import OurPortfolio from './component/our-portfolio/OurPortfolio';
import Portfolio from './component/portfolio/Portfolio';
import Services from './component/services/Services';
import Sidebar from './component/sidebar/Sidebar';
import SkilledTeam from './component/skilled-team/SkilledTeam';
import Users from './component/users/Users';

function App() {
  const [night, setNight] = useState(false);


  const onScroll = (e) => {
    if (e.target.documentElement.scrollTop > 100) {
      document.getElementsByTagName("nav")[0].classList.add("fixed_top");
    } else {
      document.getElementsByTagName("nav")[0].classList.remove("fixed_top");
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="app" className={night ? "night" : "during"}>
      <Sidebar />
      <Header />
      <Services />
      <About />
      <Portfolio />
      <OurFunFact />
      <SkilledTeam />
      <Users />
      <OurPortfolio />
      <Contact />
      <Brand />
      <Footer />

      <div className={night ? "during_night night" : "during_night during"}>
        <button className={"btn text-success"} onClick={() => setNight(!night)}>
          {
            night ? (
              <img src="/images/during-night/during.svg" alt="during" />
            ) : (
              <img src="/images/during-night/night.svg" alt="night" />
            )
          }
        </button>
      </div>
    </div>
  );
}

export default App;
