import { FC } from "react";
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experiance from "./Sections/Experiance";

const Home: FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Experiance />
    </div>
  );
};

export default Home;
