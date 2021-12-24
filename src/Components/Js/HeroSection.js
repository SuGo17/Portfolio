import React from "react";
import "../Css/heroSection.css";
import NavBar from "./NavBar";
import TopBar from "./TopBar";
import SectionContainer from "./SectionContainer.js";

function HeroSection() {
  return (
    <header id="hero-section">
      <TopBar />
      <NavBar />
      <SectionContainer classNameVar="hero">
        <p className="greet">Hello, I am</p>
        <h1 className="name">SURYA KOTI KIRAN</h1>
        <h2 className="subtitle">Interactive Front-End Developer</h2>
        {/* prettier-ignore */}
        <a href="/" className="hero-cta cta">KNOW MORE</a>
        <img src="./images/Logo.svg" alt="LoGo" className="back-logo" />
      </SectionContainer>
    </header>
  );
}

export default HeroSection;
