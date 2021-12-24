import React from "react";
import "../Css/sectionContainer.css";

function SectionContainer(props) {
  return (
    <section className={`section-container ${props.classNameVar}`}>
      {props.children}
    </section>
  );
}

export default SectionContainer;
