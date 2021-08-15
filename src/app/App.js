import { useState, useEffect } from 'react';
import './App.scss';
import LandingPage from './screen/LandingPage';

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
      <LandingPage />

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
