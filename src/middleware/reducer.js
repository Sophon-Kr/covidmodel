import { TEST_GET } from "./action";
const initialState = {
  testdata: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEST_GET:
      return { ...state, testdata: payload };
    //   case TEST_GET:
    //     return { ...state, ...payload };
    default:
      return state;
  }
};

export default reducer;
