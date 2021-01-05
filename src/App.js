import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter  } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPage path="./" />
      </BrowserRouter>
    </div>
  );
};

export default App;
