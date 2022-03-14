import axios from "axios";
export const CONFIG_GRAPH_DISPLAY = "CONFIG_GRAPH_DISPLAY";
export const CONFIG_DATA_TYPE = "CONFIG_DATA_TYPE";
export const GET_DATA_REAL_MONTH = "GET_DATA_REAL_MONTH";
export const GET_DATA_REAL_DAY = "GET_DATA_REAL_DAY";
export const GET_DATA_MODEL_MONTH = "GET_DATA_MODEL_MONTH";
export const GET_DATA_MODEL_DAY = "GET_DATA_MODEL_DAY";
export const CONFIG_PERIOD_MAIN = "CONFIG_PERIOD_MAIN";
export const CONFIG_PERIOD_VS = "CONFIG_PERIOD_VS";
export const CONFIG_DATE_START_MAIN = "CONFIG_DATE_START_MAIN";
export const CONFIG_DATE_END_MAIN = "CONFIG_DATE_END_MAIN";
export const CONFIG_DATE_START_VS = "CONFIG_DATE_START_VS";
export const CONFIG_DATE_END_VS = "CONFIG_DATE_END_VS";
export const GET_DATA_DAILY = "GET_DATA_DAILY";
export const CONFIG_DATE_START_MONTH_MAIN = "CONFIG_DATE_START_MONTH_MAIN";
export const CONFIG_DATE_END_MONTH_MAIN = "CONFIG_DATE_END_MONTH_MAIN";
export const SET_DATE_MAX_MIN = "SET_DATE_MAX_MIN";
export const SET_LIST_FOR_REMOVE = "SET_LIST_FOR_REMOVE";
export const GET_DATA_VS_MONTH = "GET_DATA_VS_MONTH";
export const GET_DATA_VS_DAY = "GET_DATA_VS_DAY";
export const CONFIG_TYPE_VS = "CONFIG_TYPE_VS";
export const SET_USERID = "SET_USERID";

const maxAndMinDate = (data) => {
  const newDates = [];
  if (data) {
    for (let i = 0; i < data.length; i++) {
      newDates.push(new Date(data[i].name.split("-").join(" ")));
    }
  }
  const maxDate = new Date(Math.max.apply(null, newDates));
  const minDate = new Date(Math.min.apply(null, newDates));
  // ====================================================
  // function getMax(dateArray, filler) {
  //   filler = filler ? filler : "";
  //   if (!dateArray.length) {
  //     return filler;
  //   }
  //   var max = "";
  //   dateArray.forEach(function (date) {
  //     if (date) {
  //       var d = new Date(date);
  //       if (max && d.valueOf() > max.valueOf()) {
  //         max = d;
  //       } else if (!max) {
  //         max = d;
  //       }
  //     }
  //   });
  //   return max;
  // }
  // console.log(getMax([], "NA"));
  // console.log(getMax(newDates, "NA"));
  // console.log(getMax(newDates));

  // function getMin(dateArray, filler) {
  //   filler = filler ? filler : "";
  //   if (!dateArray.length) {
  //     return filler;
  //   }
  //   var min = "";
  //   dateArray.forEach(function (date) {
  //     if (date) {
  //       var d = new Date(date);
  //       if (min && d.valueOf() < min.valueOf()) {
  //         min = d;
  //       } else if (!min) {
  //         min = d;
  //       }
  //     }
  //   });
  //   return min;
  // }

  // console.log(getMin([], "NA"));
  // console.log(getMin(newDates, "NA"));
  // console.log(getMin(newDates));
  // // ========================================
  console.log("maxDate:", maxDate, "minDate:", minDate);
  return [maxDate, minDate];
};

export const configGraphLine = (payload) => ({
  type: "CONFIG_GRAPH_DISPLAY",
  payload,
});

//real data or model data
export const configDatatype = (payload) => ({
  type: "CONFIG_DATA_TYPE",
  payload,
});

export const configPeriodMain = (payload) => ({
  type: "CONFIG_PERIOD_MAIN",
  payload,
});

export const configPeriodVS = (payload) => ({
  type: "CONFIG_PERIOD_VS",
  payload,
});

export const dateStartMain = (payload) => ({
  type: "CONFIG_DATE_START_MAIN",
  payload,
});

export const dateEndMain = (payload) => ({
  type: "CONFIG_DATE_END_MAIN",
  payload,
});

export const dateStartMonthMain = (payload) => ({
  type: "CONFIG_DATE_START_MONTH_MAIN",
  payload,
});

export const dateEndMonthMain = (payload) => ({
  type: "CONFIG_DATE_END_MONTH_MAIN",
  payload,
});

export const dateStartVS = (payload) => ({
  type: "CONFIG_DATE_START_VS",
  payload,
});

export const dateEndVS = (payload) => ({
  type: "CONFIG_DATE_END_VS",
  payload,
});
export const configTypeVS = (payload) => ({
  type: "CONFIG_TYPE_VS",
  payload,
});

export const getRealDataMount = (id) => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/coviddata/month/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_REAL_MONTH",
            payload: res.data.data,
          });
          // let findDate = maxAndMinDate(res.data.data);
          // let maxDate = findDate[0];
          // let minDate = findDate[1];

          let maxDate = new Date("02 / 01 / 2022");
          let minDate = new Date("01 / 01 / 2021");
          console.log("findDate +++", maxDate, minDate);

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
        }
      });
  };
};

export const getRealDataDay = (id) => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/coviddata/day/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_REAL_DAY",
            payload: res.data.data,
          });

          let findDate = maxAndMinDate(res.data.data);
          let maxDate = findDate[0];
          let minDate = findDate[1];
          // console.log("findDate", maxDate, minDate);

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
        }
      });
  };
};

export const getModelDataMount = (id) => {
  return async (dispatch) => {
    // var tempdata = getMonth();
    // console.log("tempdata getMonth", tempdata);

    // dispatch({
    //   type: "GET_DATA_MODEL_MONTH",
    //   payload: tempdata,
    // });
    // let findDate = maxAndMinDate(tempdata);
    // let maxDate = findDate[0];
    // let minDate = findDate[1];
    // dispatch({
    //   type: "SET_DATE_MAX_MIN",
    //   payload: [maxDate, minDate],
    // });

    return axios
      .get(`https://covid-data-123.herokuapp.com/covidmodel/month/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_MODEL_MONTH",
            payload: res.data.data,
          });
          // let findDate = maxAndMinDate(res.data.data);
          // let maxDate = findDate[0];
          // let minDate = findDate[1];
          // console.log("findDate", maxDate, minDate);

          let maxDate = new Date("02 / 01 / 2022");
          let minDate = new Date("01 / 01 / 2021");
          console.log("findDate +++", maxDate, minDate);

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
        }
      });
  };
};

export const getModelDataDay = (id) => {
  return async (dispatch) => {
    // var tempdata = getDay();
    // //  return tempdata;
    // dispatch({
    //   type: "GET_DATA_MODEL_DAY",
    //   payload: tempdata,
    // });
    // let findDate = maxAndMinDate(tempdata);
    // let maxDate = findDate[0];
    // let minDate = findDate[1];
    // // console.log("findDate", maxDate, minDate);

    // dispatch({
    //   type: "SET_DATE_MAX_MIN",
    //   payload: [maxDate, minDate],
    // });

    return axios
      .get(`https://covid-data-123.herokuapp.com/covidmodel/day/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_MODEL_DAY",
            payload: res.data.data,
          });
          let findDate = maxAndMinDate(res.data.data);
          let maxDate = findDate[0];
          let minDate = findDate[1];
          // console.log("findDate", maxDate, minDate);

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
        }
      });
  };
};
export const getVSDataMount = (id) => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/vsdata/month/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          console.log("fdsdsdsadad");
          dispatch({
            type: "GET_DATA_VS_MONTH",

            payload: res.data.data,
          });

          // let findDate = maxAndMinDate(res.data.data);
          // let maxDate = findDate[0];
          // let minDate = findDate[1];
          // console.log("findDate", maxDate, minDate);
          let maxDate = new Date("02 / 01 / 2022");
          let minDate = new Date("01 / 01 / 2021");
          console.log("findDate +++", maxDate, minDate);

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
        }
      });
  };
};

export const getVSDataDay = (id) => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/vsdata/day/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_VS_DAY",
            payload: res.data.data,
          });
          let findDate = maxAndMinDate(res.data.data);
          let maxDate = findDate[0];
          let minDate = findDate[1];
          // console.log("findDate", maxDate, minDate);

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
        }
      });
  };
};

export const getDailyData = () => {
  return async (dispatch) => {
    return axios
      .get(`https://covid19.ddc.moph.go.th/api/Cases/today-cases-all`)
      .then((res) => {
        dispatch({
          type: "GET_DATA_DAILY",
          payload: res.data[0],
        });
      });
  };
};
// export const getUserID = () => {
//   return async (dispatch) => {
//     console.log("getUserID first : ");
//     return axios
//       .get(`https://covid-data-123.herokuapp.com/createuserid`)
//       .then((res) => {
//         console.log("getUserID return : ", res);
//         sessionStorage.setItem("id", res.id);
//         // dispatch({
//         //   type: "GET_USERID",
//         //   payload: res.data.id,
//         // });
//       });
//   };
// };

export const setListForRemove = (payload) => ({
  type: "SET_LIST_FOR_REMOVE",
  payload,
});
