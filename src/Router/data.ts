import Home from "@pages/Home";

type RouteConfig = {
  path: string;
  Element: React.FC;
};

export const routes: RouteConfig[] = [{ path: "/", Element: Home }];
