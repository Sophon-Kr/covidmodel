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
export const CONFIG_DATE_START_MONTH__MAIN = "CONFIG_DATE_START_MONTH__MAIN";
export const CONFIG_DATE_END_MONTH_MAIN = "CONFIG_DATE_END_MONTH_MAIN";

const maxAndMinDate = (data) => {
  // const dates = [];
  // dates.push(new Date("2011/06/25"));
  // dates.push(new Date("2011/06/26"));
  // dates.push(new Date("2011/06/27"));
  // dates.push(new Date("2011/06/28"));

  // const testDate = ["2011-06-28", "2011-06-28", "2011-06-28", "2011-06-28"];
  const newDates = [];
  for (let i = 0; i < data.length; i++) {
    newDates.push(new Date(data[i].name.split("-").join(" ")));
  }
  console.log("newDates", newDates);

  const maxDate = new Date(Math.max.apply(null, newDates));
  const minDate = new Date(Math.min.apply(null, newDates));
  // var maxDate = new Date(Math.max.apply(null, data.name));
  // var minDate = new Date(Math.min.apply(null, data.name));
  console.log("maxDate:", maxDate, "minDate:", minDate);
  // console.log("maxDate:minDate", data);

  // var startDate = new Date(this.props.maindateStartMain);
  // var endDate = new Date(this.props.maindateEndMain);
  // maindateStartMain
  // maindateEndMain
  // this.props.maindateStartMain
  // var dateAfterFilter = data.filter((a) => {
  //   var date = new Date(a.name);
  //   return date >= startDate && date <= endDate;
  // });
  // console.log("dateAfterFilter", dateAfterFilter);
  // return dateAfterFilter;
  // // this.setState({ dataFilterd: dateAfterFilter });
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
  type: "CONFIG_DATE_START_MONTH__MAIN",
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

export const getRealDataMount = () => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/coviddata/month`)
      .then((res) => {
        dispatch({
          type: "GET_DATA_REAL_MONTH",
          payload: res.data.data,
        });
      });
  };
};
export const getRealDataDay = () => {
  return async (dispatch) => {
    return axios
      .get(`https://covid-data-123.herokuapp.com/coviddata/day`)
      .then((res) => {
        dispatch({
          type: "GET_DATA_REAL_DAY",
          payload: res.data.data,
        });
        maxAndMinDate(res.data.data);
      });
  };
};

export const getModelDataMount = () => {
  return async (dispatch) => {
    return (
      axios
        //for change Model link
        .get(`https://covid-data-123.herokuapp.com/coviddata/month`)
        .then((res) => {
          dispatch({
            type: "GET_DATA_MODEL_MONTH",
            payload: res.data.data,
          });
        })
    );
  };
};

export const getModelDataDay = () => {
  return async (dispatch) => {
    return (
      axios
        //for change Model link
        .get(`https://covid-data-123.herokuapp.com/coviddata/day`)
        .then((res) => {
          dispatch({
            type: "GET_DATA_MODEL_DAY",
            payload: res.data.data,
          });
        })
    );
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
