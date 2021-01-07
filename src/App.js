import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter  } from "react-router-dom";
import SideBar from "./components/LandingPage/SideBar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
      <SideBar/>
        <LandingPage path="./" />
      </BrowserRouter>
    </div>
  );
};

export default App;
