import { FC } from "react";
import modules from "./index.module.scss";
import useGetStyleSelectors from "@src/Hooks/useGetStyleSelectors";

export type ListProps = React.HTMLAttributes<HTMLUListElement> & {
  listItems: string[];
};

const List: FC<ListProps> = ({ listItems = [], className, ...rest }) => {
  const getSCSSSelectors = useGetStyleSelectors(modules);
  return (
    <ul
      className={getSCSSSelectors("list-container", className || "")}
      {...rest}
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
