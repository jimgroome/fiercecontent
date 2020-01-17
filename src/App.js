import React from "react";
import Header from "./sections/Header";
import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import Section3 from "./sections/Section3";
import Section4 from "./sections/Section4";
import Footer from "./sections/Footer";

import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('UA-142839175-4');
  ReactGA.pageview(window.location.pathname + window.location.search);
    return (
    <div className="App">
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
