import { createStore, combineReducers, applyMiddleware } from "redux";
// import checkPropTypes from "check-prop-types";
import reducer from "./reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  reducer,
});

const configureStore = () => {
  return createStore(rootReducer, applyMiddleware(thunk));
};

// export const findByTestAtrr = (component, attr) => {
//   const wrapper = component.find(`[data-test='${attr}']`);
//   return wrapper;
// };

// export const checkProps = (component, expectedProps) => {
//   const propsErr = checkPropTypes(
//     component.propTypes,
//     expectedProps,
//     "props",
//     component.name
//   );
//   return propsErr;
// };

export default configureStore;
