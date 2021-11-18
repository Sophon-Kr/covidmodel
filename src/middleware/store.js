import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  reducer,
  composeWithDevTools,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;
