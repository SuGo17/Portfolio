import { CSSProperties, FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  listItems: React.ReactNode[];
  isGrid?: boolean;
  gridColumns?: number;
  minWidth?: string;
  maxWidth?: string;
};

const List: FC<ListProps> = ({
  listItems = [],
  className,
  gridColumns = 2,
  isGrid = false,
  minWidth = "140px",
  maxWidth = "200px",
  ...rest
}) => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  const styleProps = {
    "--grid-columns": gridColumns,
    "--grid-min-width": minWidth,
    "--grid-max-width": maxWidth,
  } as CSSProperties;
  return (
    <ul
      className={getSCSSSelectors(
        "list-container",
        isGrid ? "display-grid" : "",
        className || ""
      )}
      {...rest}
      style={styleProps}
    >
      {listItems.map((item, index) => (
        <li className={getSCSSSelectors("list-item")} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
