import "./App.css";
import React from "react";
import Homepage from "./page/Homepage";
import Contactpage from "./page/Contactpage";
import Modelpage from "./page/Modelpage";
import VSGraphPage from "./page/VSGraphPage";
import Navbar from "./components/Navbar";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./middleware/store";

function App() {
  // const [store, setStore] = useState(
  //   createStore(rootReducer, applyMiddleware(thunk))
  // );
  // const [store, setStore] = useState(configureStore());
  const store = configureStore();
  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/graphpage" component={Homepage} />
          <Route exact path="/vsgraphpage" component={VSGraphPage} />
          <Route exact path="/contactpage" component={Contactpage} />
          <Route exact path="/" component={Modelpage} />
          <Route component={Modelpage} />
        </Switch>
        <Fab
          onClick={ScrollToTop}
          size="large"
          sx={{
            position: "fixed",
            bottom: 20,
            top: "auto",
            right: 20,
          }}
          style={{ color: "black", backgroundColor: "#AED6F1" }}
        >
          <UpIcon />
        </Fab>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
