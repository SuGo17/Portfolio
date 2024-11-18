import { FC } from "react";
import { routes } from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "@components/Nav";

const RouterComponent: FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        {routes.map(({ path, Element }, index) => (
          <Route path={path} element={<Element />} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;
