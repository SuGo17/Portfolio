import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import { FC } from "react";
import modules from "./index.module.scss";

export type TextProps = React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: "text-primary" | "text-secondary" | "text-neutral";
};

const Text: FC<TextProps> = ({
  variant = "text-neutral",
  children,
  className,
}) => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <p className={getSCSSSelectors("text", variant, className || "")}>
      {children}
    </p>
  );
};

export default Text;
