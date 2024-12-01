import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";

import Button from "../Button";

export type IconNameType =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "github"
  | "email"
  | "copy";

type SocialLinkProps = React.HTMLAttributes<HTMLDivElement> & {
  name?: IconNameType;
  href?: string;
};

const Icon = ({ name, className }: SocialLinkProps): JSX.Element => {
  switch (name) {
    case "instagram":
      return <FaInstagram className={className} />;
    case "facebook":
      return <FaFacebook className={className} />;
    case "linkedin":
      return <FaLinkedin className={className} />;
    case "github":
      return <FaGitAlt className={className} />;
    case "email":
      return <FaPaperPlane className={className} />;
    default:
      return <LuExternalLink className={className} />;
  }
};

const SocialLink: FC<SocialLinkProps> = (props) => {
  const { name, className = "", href = "", children, ...rest } = props;
  const getSCSSSelectors = useGetStyleSelectors(modules);

  if (!children)
    return (
      <div className={getSCSSSelectors("social-link", className)}>
        <a href={href} target="_blank">
          <Icon
            name={name}
            className={getSCSSSelectors(
              "social-icon",
              children ? "primary" : ""
            )}
            {...rest}
          />
        </a>
      </div>
    );
  return (
    <div className={getSCSSSelectors("social-link", className)}>
      <Icon
        name={name}
        className={getSCSSSelectors("social-icon", children ? "primary" : "")}
        {...rest}
      />
      <Button as="a" variant="ghost-primary" href={href} target="_blank">
        {children}
      </Button>
    </div>
  );
};

export default SocialLink;
