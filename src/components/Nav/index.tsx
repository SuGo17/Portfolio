import { FC, useState } from "react";
import { navLinks } from "./data";
import modules from "./index.module.scss";
import Logo from "../Logo";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { RootStateType } from "@Redux/store";
import { Themes } from "@Redux/Theme/enum";
import Menu from "./Menu";
import useGetStyleSelectors from "@Hooks/useGetStyleSelectors";

const LIGHT_ICON_FILL = "#6A6868";
const DARK_ICON_FILL = "#fbb847";

const Nav: FC = () => {
  const theme = useSelector<RootStateType>(
    (state) => state.themes.theme
  ) as Themes;
  const [isOpen, setIsOpen] = useState(false);
  const getSCSSSelectors = useGetStyleSelectors(modules);

  return (
    <nav className={modules["nav"]}>
      <div className={modules["left"]}>
        <Logo
          fill={theme === Themes.LIGHT ? LIGHT_ICON_FILL : DARK_ICON_FILL}
        />
      </div>
      <div className="flex items-center gap-12">
        <div className={getSCSSSelectors("middle", isOpen ? "active" : "")}>
          <ul className={getSCSSSelectors("nav-links")}>
            {navLinks.map((navLink) => (
              <li key={navLink.href} className={getSCSSSelectors("nav-link")}>
                <a href={navLink.href}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className={getSCSSSelectors("right")}>
          <ThemeToggle />
          <Menu
            isOpen={isOpen}
            className={getSCSSSelectors("menu")}
            setIsOpen={setIsOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
