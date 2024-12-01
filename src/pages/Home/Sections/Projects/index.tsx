import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import Section from "@src/components/Section";
import Header from "@src/components/Header";
import ProjectCard from "@src/components/ProjectCard";
import { data } from "./data";

const Projects: FC = () => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <Section
      width="max-w-screen-lg"
      id="projects-section"
      paddingVerticle={["pt-10", "md:pt-24"]}
    >
      <Header className="mb-24">Some Things I've Built</Header>
      <div className={getSCSSSelectors("project-cards-container")}>
        {data.projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
