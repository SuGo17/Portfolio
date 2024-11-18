import { cloneElement, FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";
import Text, { TextProps } from "../Text";
import Button from "@components/Button";

type ComponentType = {
  type: "link";
  children?: string;
  props: Record<string, string | number | boolean>;
};

type RichTextProps = TextProps & {
  template?: string;
  components?: ComponentType[];
};

const getComponent = ({ type, props }: ComponentType): JSX.Element => {
  switch (type) {
    default:
      return <Button {...props}>{props.title}</Button>;
  }
};

const compileTemplateStringToRichText = (
  template: string,
  components: ComponentType[]
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
}) => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <Text className={getSCSSSelectors(className || "")}>
      {compileTemplateStringToRichText(template, components)}
    </Text>
  );
};

export default RichText;
