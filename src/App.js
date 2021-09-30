import "./App.css";
import React, { useState } from "react";
import Homepage from "./page/Homepage";
import Contactpage from "./page/Contactpage";
import Modelpage from "./page/Modelpage";
import Datapage from "./page/Datapage";
import Navbar from "./components/Navbar";

// import reducer from "./middleware/reducer";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
// import thunk from "redux-thunk";
import configureStore from "./middleware/store";

function App() {
  const [store, setStore] = useState(configureStore());
  return (
    <Provider store={store} >
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/modelpage" component={Modelpage} />
          <Route exact path="/contactpage" component={Contactpage} />
          <Route exact path="/datapage" component={Datapage} />
          <Route exact path="/" component={Homepage} />
          <Route component={Homepage} />
        </Switch>
       
      </BrowserRouter>
    </Provider>
  );
}

export default App;
