import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import SocialLink from "../SocialLink";

export type ProjectDetailsType = {
  title: string;
  description: string;
  techStack: string[];
  image: {
    src: string;
    alt: string;
  };
  links?: {
    github?: string;
    live?: string;
  };
};

type ProjectCardProps = React.HTMLAttributes<HTMLDivElement> &
  ProjectDetailsType;

const ProjectCard: FC<ProjectCardProps> = ({
  title,
  description,
  techStack = [],
  links,
  image,
}) => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <div className={getSCSSSelectors("card-container")}>
      <div className={getSCSSSelectors("left")}>
        <img src={image.src} alt={image.alt} />
        <div className={getSCSSSelectors("overlay")} />
      </div>
      <div className={getSCSSSelectors("right")}>
        <p className={getSCSSSelectors("project-overline")}>Featured Project</p>
        <h3 className={getSCSSSelectors("project-title")}>{title}</h3>
        <p className={getSCSSSelectors("project-description")}>{description}</p>
        <ul className={getSCSSSelectors("tech-list")}>
          {techStack.map((ele, index) => (
            <li key={index}>{ele}</li>
          ))}
        </ul>
        <div className={getSCSSSelectors("cta-links")}>
          {links?.github && (
            <SocialLink
              href={links.github}
              name="github"
              className={getSCSSSelectors("link")}
            >
              Github
            </SocialLink>
          )}
          {links?.live && (
            <SocialLink href={links.live} className={getSCSSSelectors("link")}>
              Live
            </SocialLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
