import { FC, useEffect } from "react";
import { IoIosMoon, IoIosSunny } from "react-icons/io";
import { THEME, Themes } from "@Redux/Theme/enum";
import modules from "./index.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootStateType, AppDispatchType } from "@Redux/store";
import { updateTheme } from "@Redux/Theme";
import useGetStyleSelectors from "@Hooks/useGetStyleSelectors";

const ThemeToggle: FC = () => {
  const theme = useSelector<RootStateType>(
    (state) => state.themes.theme
  ) as Themes;
  const dispatch = useDispatch<AppDispatchType>();
  const getSCSSSelectors = useGetStyleSelectors(modules);

  useEffect(() => {
    const root = document.querySelector(":root");
    root?.setAttribute("color-scheme", `${theme}`);
  }, [theme]);

  const handleThemeToggle = (): void => {
    const updatedTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
    dispatch(updateTheme(updatedTheme));
    localStorage.setItem(THEME, updatedTheme);
  };
  return (
    <button
      className={getSCSSSelectors("theme-icon-button", theme)}
      onClick={handleThemeToggle}
    >
      <IoIosMoon className={getSCSSSelectors("theme-icon", "moon")} />
      <IoIosSunny className={getSCSSSelectors("theme-icon", "sun")} />
    </button>
  );
};

export default ThemeToggle;
