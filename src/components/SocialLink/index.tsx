import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa6";

export type IconNameType =
  | "instagram"
  | "facebook"
  | "linkedin"
  | "github"
  | "email"
  | "copy";

type SocialLinkProps = React.HTMLAttributes<HTMLOrSVGElement> & {
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
      return <></>;
  }
};

const SocialLink: FC<SocialLinkProps> = (props) => {
  const { name = "facebook", className = "", href = "", ...rest } = props;
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <a href={href}>
      <Icon
        name={name}
        className={getSCSSSelectors("social-icon", className)}
        {...rest}
      />
    </a>
  );
};

export default SocialLink;
