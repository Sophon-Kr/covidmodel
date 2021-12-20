import { CONFIG_GRAPH_DISPLAY } from "./action";
import { CONFIG_DATA_TYPE } from "./action";
import { GET_DATA_REAL_MONTH } from "./action";
import { GET_DATA_REAL_DAY } from "./action";
import { GET_DATA_MODEL_MONTH } from "./action";
import { GET_DATA_MODEL_DAY } from "./action";
import { CONFIG_PERIOD_MAIN } from "./action";
import { CONFIG_PERIOD_VS } from "./action";
import { CONFIG_DATE_START_MAIN } from "./action";
import { CONFIG_DATE_END_MAIN } from "./action";
import { CONFIG_DATE_START_VS } from "./action";
import { CONFIG_DATE_END_VS } from "./action";
import { GET_DATA_DAILY } from "./action";
import { CONFIG_DATE_START_MONTH__MAIN } from "./action";
import { CONFIG_DATE_END_MONTH_MAIN } from "./action";

const initialState = {
  periodMain: "month",
  periodVS: "month",
  typeData: "model",
  VS: "S",
  //status for config display or hide line graph
  SStatus: true,
  V1Status: true,
  V2Status: true,
  IStatus: true,
  RStatus: true,
  HStatus: true,
  DStatus: true,

  dateStartMain: new Date("2021-06-01T00:00:00"),
  dateEndMain: new Date("2021-08-31T00:00:00"),
  dateStartMonthMain: new Date("2021-01-01T00:00:00"),
  dateEndMonthMain: new Date("2021-05-21T00:00:00"),
  dateStartVS: new Date("2021-01-01T00:00:00"),
  dateEndVS: new Date("2021-05-21T00:00:00"),
  minDateMonth: new Date("January-2020"),
  maxDateMonth: new Date("November-2021"),

  tempData: [],
  realDataMonth: [],
  realDataDay: [],
  modelDataMonth: [],
  modelDataDay: [],
  dailyData: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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

    case CONFIG_DATA_TYPE:
      console.log(type, payload);
      return {
        ...state,
        typeData: payload,
      };

    case GET_DATA_REAL_MONTH:
      console.log(type, payload);
      var max = payload.reduce(function (a, b) {
        return a > b ? a : b;
      });
      console.log("max ==== ", max.name);
      var min = payload.reduce(function (a, b) {
        return a < b ? b : a;
      });
      console.log("min ==== ", min.name);

      return {
        ...state,
        realDataMonth: payload,
        tempData: payload,
        minDateMonth: new Date(min),
        maxDateMonth: new Date(max),
      };

    case GET_DATA_REAL_DAY:
      console.log(type, payload);
      return {
        ...state,
        realDataDay: payload,
        tempData: payload,
      };
    case GET_DATA_MODEL_MONTH:
      console.log(type, payload);
      var max = payload.reduce(function (a, b) {
        return a > b ? a : b;
      });
      console.log("max ==== ", new Date(max.name));
      var min = payload.reduce(function (a, b) {
        return a < b ? b : a;
      });
      console.log("min ==== ", new Date(min.name));

      return {
        ...state,
        modelDataMonth: payload,
        tempData: payload,
        minDateMonth: new Date(min.name),
        maxDateMonth: new Date(max.name),
      };

    case GET_DATA_MODEL_DAY:
      console.log(type, payload);
      return {
        ...state,
        modelDataDay: payload,
        tempData: payload,
      };
    case GET_DATA_DAILY:
      console.log(type, payload);
      return {
        ...state,
        dailyData: payload,
      };

    case CONFIG_DATE_START_MONTH__MAIN:
      console.log(type, payload);
      return {
        ...state,
        dateStartMonthMain: payload,
      };

    case CONFIG_DATE_END_MONTH_MAIN:
      console.log(type, payload);
      return {
        ...state,
        dateEndMonthMain: payload,
      };

    case CONFIG_PERIOD_MAIN:
      console.log(type, payload);
      return {
        ...state,
        periodMain: payload,
      };

    case CONFIG_PERIOD_VS:
      console.log(type, payload);
      return {
        ...state,
        periodVS: payload,
      };

    case CONFIG_DATE_START_MAIN:
      console.log(type, payload);
      return {
        ...state,
        dateStartMain: payload,
      };

    case CONFIG_DATE_END_MAIN:
      console.log(type, payload);
      return {
        ...state,
        dateEndMain: payload,
      };

    case CONFIG_DATE_START_VS:
      console.log(type, payload);
      return {
        ...state,
        dateStartVS: payload,
      };

    case CONFIG_DATE_END_VS:
      console.log(type, payload);
      return {
        ...state,
        dateEndVS: payload,
      };

    default:
      return state;
  }
};

export default reducer;
