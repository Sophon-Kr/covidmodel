import "./App.css";
import React from "react";
import GraphPage from "./page/GraphPage";
import Contactpage from "./page/Contactpage";
import Modelpage from "./page/Modelpage";
import VSGraphPage from "./page/VSGraphPage";
import Navbar from "./components/Navbar";
import Fab from "@mui/material/Fab";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./middleware/store";
import { getUserID } from "../src/services/initialData.service";
import { SET_USERID } from "../src/middleware/action";

function App() {
  const store = configureStore();
  async function fetchID() {
    const id = sessionStorage.getItem("id");
    // console.log("id : sessionStorage: ", id);
    if (!id) {
      const newID = await getUserID();
      // console.log("newid : : ", newID);
      store.dispatch({
        type: SET_USERID,
        payload: newID,
      });
    }
  }
  React.useEffect(() => {
    // console.log("getUserID");
    fetchID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <Route exact path="/graphpage" component={GraphPage} />
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
