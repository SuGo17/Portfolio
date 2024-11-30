import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import SocialLink, { IconNameType } from "@src/components/SocialLink";
import Text from "@src/components/Text";
import { FaRegCopyright } from "react-icons/fa";
import Logo from "@src/components/Logo";
import { useSelector } from "react-redux";
import { RootStateType } from "@src/Redux/store";
import { Themes } from "@src/Redux/Theme/enum";
// import { DARK_ICON_FILL, LIGHT_ICON_FILL } from "@src/components/Nav";

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

const LIGHT_ICON_FILL = "#070c18";
const DARK_ICON_FILL = "#999493";

const Footer: FC = () => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  const theme = useSelector<RootStateType>(
    (state) => state.themes.theme
  ) as Themes;
  return (
    <footer className={getSCSSSelectors("footer")}>
      <Logo
        className="mb-10"
        fill={theme === Themes.LIGHT ? LIGHT_ICON_FILL : DARK_ICON_FILL}
      />
      <Text className="mb-8 max-w-[320px] text-center">
        Learning, enjoying & leveling up one day at a time.
      </Text>
      <div className={getSCSSSelectors("social-links")}>
        {socials.map(({ name, href }, index) => (
          <SocialLink name={name} href={href} key={index} />
        ))}
      </div>
      <Text className={getSCSSSelectors("copy-rights")}>
        <FaRegCopyright className={getSCSSSelectors("icon")} />
        <span>{new Date().getFullYear()} Suryakotikiran M S</span>
      </Text>
    </footer>
  );
};

export default Footer;
