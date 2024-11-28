import { FC } from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experiance from "./Sections/Experiance";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";

const Home: FC = () => {
  return (
    <div className="content">
      <Hero />
      <About />
      <Experiance />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
