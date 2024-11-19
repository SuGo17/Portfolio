import { cloneElement, FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import Text, { TextProps } from "../Text";
import Button, { ButtonProps } from "@components/Button";

export type ComponentType =
  | {
      type: "link" | "button";
      children?: string;
      props: ButtonProps;
    }
  | {
      type: "text";
      children?: string;
      props: TextProps;
    };

type RichTextProps = TextProps & {
  template?: string;
  components?: ComponentType[];
  getParentCSSSelectors: (...selectors: (string | number)[]) => string;
};

const getComponent = ({
  type,
  props,
  children,
}: ComponentType): JSX.Element => {
  switch (type) {
    case "text":
      return <Text {...props}>{children}</Text>;
    default:
      return <Button {...props}>{children || props.title}</Button>;
  }
};

const compileTemplateStringToRichText = (
  template: string,
  components: ComponentType[],
  getSCSSSelectors: (...selectors: (string | number)[]) => string
): JSX.Element => {
  const markersTemplate = template.replace(/\{\{(\d+)\}\}/g, "@@$1@@");
  const parts = markersTemplate.split(/(@@\d+@@)/);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/@@(\d+)@@/);
        if (match) {
          const componentIndex = parseInt(match[1], 10) - 1;
          const component = components[componentIndex];
          return cloneElement(
            getComponent(component),
            {
              key: index,
              ...component.props,
              className: getSCSSSelectors(
                ...(component.props.className as string).split(" ")
              ),
            },
            component.children
          );
        }
        return part;
      })}
    </>
  );
};

const RichText: FC<RichTextProps> = ({
  template = "",
  components = [],
  className,
  getParentCSSSelectors,
}) => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <Text className={getSCSSSelectors(className || "")}>
      {compileTemplateStringToRichText(
        template,
        components,
        getParentCSSSelectors
      )}
    </Text>
  );
};

export default RichText;
