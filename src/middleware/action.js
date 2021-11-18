import axios from "axios";
export const TEST_GET = "TEST_GET";
export const CONFIG_GRAPH_DISPLAY = "CONFIG_GRAPH_DISPLAY";
export const CONFIG_DATA_TYPE = "CONFIG_DATA_TYPE";
export const GET_DATA_MODEL_MONTH = "GET_DATA_MODEL_MONTH";

export const testGet = (payload) => ({
  type: "TEST_GET",
  payload,
});

export const configGraphLine = (payload) => ({
  type: "CONFIG_GRAPH_DISPLAY",
  payload,
});

export const configDatatype = (payload) => ({
  type: "CONFIG_DATA_TYPE",
  payload,
});

export const getDataModelMount = () => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/coviddata/month`)
      .then((res) => {
        dispatch({
          type: "GET_DATA_MODEL_MONTH",
          payload: res.data.data,
        });
      });
    // .then((res) => console.log(res));
  };
};

// export const getDataModelMount = () => {
//   return async (dispatch) => {
//     return axios
//       .get(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`)
//       .then((res) => {
//         dispatch({
//           type: "GET_DATA_MODEL_MONTH",
//           payload: res.data,
//         });
//       });
//   };
// };

// .get(`https://jsonplaceholder.typicode.com/posts`)
