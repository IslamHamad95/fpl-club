import LandingPage from "./components/LandingPage/LandingPage";
import { BrowserRouter  } from "react-router-dom";
import SideBar from "./components/LandingPage/SideBar";
import {Provider} from "react-redux"
import store from "./redux/store"

const App = () => {
  return (
   <Provider store={store}>
    <div className="App">
      <BrowserRouter>
      <SideBar/>
        <LandingPage path="./" />
      </BrowserRouter>
    </div>
    </Provider>
  );
};

export default App;
