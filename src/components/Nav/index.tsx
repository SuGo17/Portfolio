/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { navLinks } from "./data";
import modules from "./index.module.scss";
import Logo from "../Logo";
import ThemeToggle from "./ThemeToggle";
import { useSelector } from "react-redux";
import { RootStateType } from "@Redux/store";
import { Themes } from "@Redux/Theme/enum";
import Menu from "./Menu";
import useGetStyleSelectors from "@Hooks/useGetStyleSelectors";

const LIGHT_ICON_FILL = "#5A23B9";
const DARK_ICON_FILL = "#fbb847";
const SCROLL_OFFSET = 300;

const Nav: FC = () => {
  const theme = useSelector<RootStateType>(
    (state) => state.themes.theme
  ) as Themes;
  const [isOpen, setIsOpen] = useState(false);
  const getSCSSSelectors = useGetStyleSelectors(modules);
  let lastScrollTop = 0;

  const handleDocumentScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    const navElement = document.querySelector(`nav.${getSCSSSelectors("nav")}`);
    if (st > 0)
      navElement?.classList.add(getSCSSSelectors("transparent-background"));
    else
      navElement?.classList.remove(getSCSSSelectors("transparent-background"));
    if (st >= SCROLL_OFFSET && st > lastScrollTop) {
      navElement?.classList.remove(getSCSSSelectors("show-nav"));
    } else if (st < lastScrollTop) {
      navElement?.classList.add(getSCSSSelectors("show-nav"));
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };
  useEffect(() => {
    document.addEventListener("scroll", handleDocumentScroll);

    return () => {
      document.removeEventListener("scroll", handleDocumentScroll);
    };
  }, []);

  return (
    <nav className={getSCSSSelectors("nav", "show-nav")}>
      <div className={getSCSSSelectors("left")}>
        <Logo
          fill={theme === Themes.LIGHT ? LIGHT_ICON_FILL : DARK_ICON_FILL}
        />
      </div>
      <div className="flex items-center gap-12">
        <div className={getSCSSSelectors("middle", isOpen ? "nav-open" : "")}>
          <ul className={getSCSSSelectors("nav-links")}>
            {navLinks.map((navLink) => (
              <li key={navLink.href} className={getSCSSSelectors("nav-link")}>
                <button onClick={() => setIsOpen(false)}>
                  <a href={navLink.href}>{navLink.title}</a>
                </button>
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
