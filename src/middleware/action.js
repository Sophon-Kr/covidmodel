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
export const SET_LOADING_SKELETON = "SET_LOADING_SKELETON";

const maxAndMinDate = (data, type) => {
  const newDates = [];
  if (data) {
    if (type === "month") {
      for (let i = 0; i < data.length; i++) {
        newDates.push(new Date("1-" + data[i].name.split("-").join(" ")));
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        newDates.push(new Date(data[i].name.split("-").join("/")));
      }
    }
  }
  const maxDate = new Date(Math.max.apply(null, newDates));
  const minDate = new Date(Math.min.apply(null, newDates));

  return [maxDate, minDate];
};

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}

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
    dispatch({
      type: "SET_LOADING_SKELETON",
      payload: true,
    });
    return axios
      .get(`https://covidmodelproject.software/coviddata/month`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_REAL_MONTH",
            payload: res.data.data,
          });
          let findDate = maxAndMinDate(res.data.data, "month");
          let maxDate = findDate[0];
          let minDate = findDate[1];

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
          if (isValidDate(maxDate) && isValidDate(minDate)) {
            dispatch({
              type: "SET_LOADING_SKELETON",
              payload: false,
            });
          }
        }
      });
  };
};

export const getRealDataDay = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING_SKELETON",
      payload: true,
    });
    return axios
      .get(`https://covidmodelproject.software/coviddata/day`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_REAL_DAY",
            payload: res.data.data,
          });

          let findDate = maxAndMinDate(res.data.data, "day");
          let maxDate = findDate[0];
          let minDate = findDate[1];

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
          if (isValidDate(maxDate) && isValidDate(minDate)) {
            dispatch({
              type: "SET_LOADING_SKELETON",
              payload: false,
            });
          }
        }
      });
  };
};

export const getModelDataMount = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING_SKELETON",
      payload: true,
    });
    return axios
      .get(`https://covidmodelproject.software/covidmodel/month/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_MODEL_MONTH",
            payload: res.data.data,
          });
          let findDate = maxAndMinDate(res.data.data, "month");
          let maxDate = findDate[0];
          let minDate = findDate[1];

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });

          if (isValidDate(maxDate) && isValidDate(minDate)) {
            dispatch({
              type: "SET_LOADING_SKELETON",
              payload: false,
            });
          }
        }
      });
  };
};

export const getModelDataDay = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING_SKELETON",
      payload: true,
    });

    return axios
      .get(`https://covidmodelproject.software/covidmodel/day/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_MODEL_DAY",
            payload: res.data.data,
          });
          let findDate = maxAndMinDate(res.data.data, "day");
          let maxDate = findDate[0];
          let minDate = findDate[1];

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });

          if (isValidDate(maxDate) && isValidDate(minDate)) {
            dispatch({
              type: "SET_LOADING_SKELETON",
              payload: false,
            });
          }
        }
      });
  };
};
export const getVSDataMount = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING_SKELETON",
      payload: true,
    });
    return axios
      .get(`https://covidmodelproject.software/vsdata/month/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_VS_MONTH",

            payload: res.data.data,
          });

          let findDate = maxAndMinDate(res.data.data, "month");
          let maxDate = findDate[0];
          let minDate = findDate[1];

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
          if (isValidDate(maxDate) && isValidDate(minDate)) {
            dispatch({
              type: "SET_LOADING_SKELETON",
              payload: false,
            });
          }
        }
      });
  };
};

export const getVSDataDay = (id) => {
  return async (dispatch) => {
    dispatch({
      type: "SET_LOADING_SKELETON",
      payload: true,
    });
    return axios
      .get(`https://covidmodelproject.software/vsdata/day/${id}`)
      .then((res) => {
        if (res !== false || res !== "false") {
          dispatch({
            type: "GET_DATA_VS_DAY",
            payload: res.data.data,
          });
          let findDate = maxAndMinDate(res.data.data, "day");
          let maxDate = findDate[0];
          let minDate = findDate[1];

          dispatch({
            type: "SET_DATE_MAX_MIN",
            payload: [maxDate, minDate],
          });
          if (isValidDate(maxDate) && isValidDate(minDate)) {
            dispatch({
              type: "SET_LOADING_SKELETON",
              payload: false,
            });
          }
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

export const setListForRemove = (payload) => ({
  type: "SET_LIST_FOR_REMOVE",
  payload,
});
export const replaceNewID = (payload) => ({
  type: "SET_USERID",
  payload,
});

