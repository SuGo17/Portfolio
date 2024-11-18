import { FC } from "react";
import { ScreenWidth } from "@src/types";
import classnames from "classnames";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  width?: ScreenWidth;
  paddingVerticle?: string[];
  paddingHorizontal?: string[];
};

const Section: FC<SectionProps> = ({
  width = "",
  paddingVerticle = ["py-6"],
  paddingHorizontal = ["md:px-20", "px-6"],
  children,
  className,
  ...rest
}) => {
  return (
    <section
      className={classnames(
        width,
        { "mx-auto": !!width },
        className,
        ...paddingVerticle,
        ...paddingHorizontal
      )}
      {...rest}
    >
      {children}
    </section>
  );
};

export default Section;
