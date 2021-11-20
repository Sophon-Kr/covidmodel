import "./App.css";
import React, { useState } from "react";
import Homepage from "./page/Homepage";
import Contactpage from "./page/Contactpage";
import Modelpage from "./page/Modelpage";
import VSGraphPage from "./page/VSGraphPage";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./middleware/store";

function App() {
  const [store, setStore] = useState(configureStore());
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/modelpage" component={Modelpage} />
          <Route exact path="/contactpage" component={Contactpage} />
          <Route exact path="/vsgraphpage" component={VSGraphPage} />
          <Route exact path="/" component={Homepage} />
          <Route component={Homepage} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
