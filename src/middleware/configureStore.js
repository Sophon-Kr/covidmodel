import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./store";
const configureStore = () => {
  let store = createStore(composeWithDevTools(applyMiddleware(thunk)));

  return store;
};

export default configureStore;
