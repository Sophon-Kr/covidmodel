import { createStore, combineReducers, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// const rootReducer = combineReducers({
//   reducer,
//   composeWithDevTools,
// });

// const configureStore = () => {
//   return createStore(rootReducer, applyMiddleware(thunk));
// };

const middleware = [thunk];

const configureStore = createStore(
  reducer,
  // initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default configureStore;
