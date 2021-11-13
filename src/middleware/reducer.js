import { TEST_GET } from "./action";
import { CONFIG_GRAPH_DISPLAY } from "./action";

const initialState = {
  testdata: "testdata",
  mydata: "this is my data",
  period: "month",
  typeData: "model",
  SStatus: true,
  V1Status: true,
  V2Status: true,
  IStatus: true,
  RStatus: true,
  HStatus: true,
  DStatus: true,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEST_GET:
      console.log(type, payload);
      return { ...state, testdata: payload };
    case CONFIG_GRAPH_DISPLAY:
      console.log(type, payload);
      return {
        ...state,
        SStatus: payload.S,
        V1Status: payload.V1,
        V2Status: payload.V2,
        IStatus: payload.I,
        RStatus: payload.R,
        HStatus: payload.H,
        DStatus: payload.D,
      };
    default:
      return state;
  }
};

export default reducer;
