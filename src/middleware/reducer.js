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

  dateStartMain: new Date("2021-01-01T00:00:00"),
  dateEndMain: new Date("2021-05-21T00:00:00"),
  dateStartVS: new Date("2021-01-01T00:00:00"),
  dateEndVS: new Date("2021-05-21T00:00:00"),

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
      return {
        ...state,
        realDataMonth: payload,
      };

    case GET_DATA_REAL_DAY:
      console.log(type, payload);
      return {
        ...state,
        realDataDay: payload,
      };
    case GET_DATA_MODEL_MONTH:
      console.log(type, payload);
      return {
        ...state,
        modelDataMonth: payload,
      };

    case GET_DATA_MODEL_DAY:
      console.log(type, payload);
      return {
        ...state,
        modelDataDay: payload,
      };
    case GET_DATA_DAILY:
      console.log(type, payload);
      return {
        ...state,
        dailyData: payload,
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
