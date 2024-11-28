import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import SocialLink, { IconNameType } from "@src/components/SocialLink";
import Text from "@src/components/Text";
import { FaRegCopyright } from "react-icons/fa";

type SocialType = {
  name: IconNameType;
  href: string;
};

const socials: SocialType[] = [
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/sugo17/",
  },
  {
    name: "github",
    href: "https://github.com/sugo17",
  },
  {
    name: "facebook",
    href: "https://www.facebook.com/SuryaaaGowdaaa",
  },
  {
    name: "instagram",
    href: "https://www.instagram.com/https.surya.dev/",
  },
  {
    name: "email",
    href: "mailto:kotisurya6@gmail.com",
  },
];

const Footer: FC = () => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <footer className={getSCSSSelectors("footer")}>
      <div className={getSCSSSelectors("social-links")}>
        {socials.map(({ name, href }, index) => (
          <SocialLink name={name} href={href} key={index} />
        ))}
      </div>
      <Text className={getSCSSSelectors("copy-rights")}>
        <FaRegCopyright className={getSCSSSelectors("icon")} />
        <span>Suryakotikiran M S {new Date().getFullYear()}</span>
      </Text>
    </footer>
  );
};

export default Footer;
