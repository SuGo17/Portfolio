import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import Section from "@src/components/Section";
import Header from "@src/components/Header";
import ProjectCard, { ProjectDetailsType } from "@src/components/ProjectCard";

const data: { projects: ProjectDetailsType[] } = {
  projects: [
    {
      title: "Macros Counter",
      description:
        "A full-stack web application to track daily macro nutrient intake with role-based access controls. The app provides a user-friendly interface for logging and managing dietary data while ensuring accuracy and secure handling of user inputs.",
      techStack: [
        "React",
        "Redux",
        "Javascript",
        "Express",
        "MongoDB",
        "Mongoose",
      ],
      image: { src: "./project_one.png", alt: "project-one" },
      links: {
        github: "https://github.com/SuGo17/MacrosCounter",
        live: "https://macros-counter-sugo17.netlify.app/",
      },
    },
    {
      title: "Omnifood",
      description:
        "Omnifood is a sleek and responsive static website built for a food chain business. It effectively showcases the brand's offerings, menu, and services while delivering a seamless browsing experience across all devices. The design emphasizes accessibility and user engagement, perfect for expanding the business's online presence.",
      techStack: ["HTML", "CSS", "Javascript", "Netlify", "Git"],
      image: { src: "./project_two.png", alt: "project-two" },
      links: {
        github: "https://github.com/SuGo17/Omnifood",
        live: "https://omnifood-sugo17.netlify.app/",
      },
    },
    {
      title: "Photon",
      description:
        "A responsive and cross-browser compatible image search engine built using the Pixabay API. This project allows users to search for high-quality images from a wide variety of categories. The website is designed to provide an intuitive and seamless user experience across different devices and browsers.",
      techStack: ["HTML", "CSS", "Javascript", "Netlify", "Git"],
      image: { src: "./project_three.png", alt: "project-three" },
      links: {
        github: "https://github.com/SuGo17/photon",
        live: "https://photon-sugo17.netlify.app/",
      },
    },
  ],
};

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
