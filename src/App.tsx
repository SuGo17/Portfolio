import { useSelector } from "react-redux";
import "./App.scss";
import RouterComponent from "@Router/index";
import { RootStateType } from "@Redux/store";
import { Themes } from "@Redux/Theme/enum";

function App() {
  const theme = useSelector<RootStateType>(
    (state) => state.themes.theme
  ) as Themes;

  return (
    <main className={`${theme} px-[25px] md:px-[50px] lg:px-[100px]`}>
      <RouterComponent />
    </main>
  );
}

export default App;
