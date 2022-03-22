import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Aboout from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Home />
        <Aboout />
        <Portfolio />
        <Services />
        <Contact />
      </div>
    </div>
  );
}

export default App;
