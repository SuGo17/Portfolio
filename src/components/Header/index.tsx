import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";

type HeaderProps = React.HTMLAttributes<HTMLHeadingElement> & {
  numberedHeading?: boolean;
};

const Header: FC<HeaderProps> = ({
  children,
  numberedHeading = true,
  className,
}) => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <h3
      className={getSCSSSelectors(
        "heading",
        `${numberedHeading ? "numbered-heading" : ""}`,
        className || ""
      )}
    >
      {children}
    </h3>
  );
};

export default Header;
