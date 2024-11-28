import { FC } from "react";
import { ButtonVariant } from "@src/types";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@Hooks/useGetStyleSelectors";

type AnchorType = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>;

type ButtonOrAnchorProps =
  | (ButtonType & { as?: "button" })
  | (AnchorType & { as: "a" });

export type ButtonProps = ButtonOrAnchorProps & {
  variant?: ButtonVariant;
};

const buttonClassNames: Record<ButtonVariant, string> = {
  "ghost-primary": "ghost",
  "ghost-neutral-hover-contained": "ghost",
  "ghost-secondary": "ghost",
  "contained-primary": "contained",
  "contained-secondary": "contained",
};

const CommonButton = ({ as, children, ...rest }: ButtonProps): JSX.Element => {
  return as === "a" ? (
    <a {...(rest as AnchorType)}>{children}</a>
  ) : (
    <button {...(rest as ButtonType)}>{children}</button>
  );
};

const Button: FC<ButtonProps> = ({
  variant = "contained-primary",
  children,
  className,
  ...rest
}) => {
  const getStyleSelectors = useGetStyleSelectors(modules);
  return (
    <CommonButton
      className={getStyleSelectors(
        "btn",
        buttonClassNames[variant],
        variant,
        className || ""
      )}
      {...rest}
    >
      {children}
    </CommonButton>
  );
};

export default Button;
