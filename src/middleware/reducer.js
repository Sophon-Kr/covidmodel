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
import { CONFIG_DATE_START_MONTH_MAIN } from "./action";
import { CONFIG_DATE_END_MONTH_MAIN } from "./action";
import { SET_DATE_MAX_MIN } from "./action";
import { SET_LIST_FOR_REMOVE } from "./action";
import { GET_DATA_VS_MONTH } from "./action";
import { GET_DATA_VS_DAY } from "./action";
import { CONFIG_TYPE_VS } from "./action";
import { SET_USERID } from "./action";
import { SET_LOADING_SKELETON } from "./action";

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
  MStatus: true,

  dateStartMain: new Date("2021-03-01T00:00:00"),
  dateEndMain: new Date("2021-12-01T00:00:00"),
  dateStartMonthMain: new Date("2021-03-01T00:00:00"),
  dateEndMonthMain: new Date("2021-12-01T00:00:00"),
  dateStartVS: new Date("2021-03-01T00:00:00"),
  dateEndVS: new Date("2021-12-01T00:00:00"),

  minDateMonth: new Date("2021-03-01T00:00:00"),
  maxDateMonth: new Date("2021-12-01T00:00:00"),

  initialMinDate: new Date("2021-03-01T00:00:00"),
  initialMaxDate: new Date("2021-12-01T00:00:00"),

  tempData: [],
  realDataMonth: [],
  realDataDay: [],
  modelDataMonth: [],
  modelDataDay: [],
  dailyData: [],
  listForRemove: [],
  vsData: [],
  userID: 1000000,
  loadSkeleton: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONFIG_GRAPH_DISPLAY:
      // //  console.log(type, payload);
      return {
        ...state,
        SStatus: payload.S,
        V1Status: payload.V1,
        V2Status: payload.V2,
        IStatus: payload.I,
        RStatus: payload.R,
        HStatus: payload.H,
        DStatus: payload.D,
        MStatus: payload.M,
      };

    case CONFIG_DATA_TYPE:
      //  console.log(type, payload);
      return {
        ...state,
        typeData: payload,
      };

    case GET_DATA_REAL_MONTH:
      //  console.log(type, payload);

      return {
        ...state,
        realDataMonth: payload,
        tempData: payload,
      };

    case GET_DATA_REAL_DAY:
      //  console.log(type, payload);
      return {
        ...state,
        realDataDay: payload,
        tempData: payload,
      };

    case GET_DATA_MODEL_MONTH:
      //  console.log(type, payload);

      return {
        ...state,
        modelDataMonth: payload,
        tempData: payload,
      };

    case GET_DATA_MODEL_DAY:
      //  console.log(type, payload);
      return {
        ...state,
        modelDataDay: payload,
        tempData: payload,
      };

    case GET_DATA_VS_MONTH:
      //  console.log(type, payload);

      return {
        ...state,
        vsData: payload,
      };

    case GET_DATA_VS_DAY:
      //  console.log(type, payload);
      return {
        ...state,
        vsData: payload,
      };

    case GET_DATA_DAILY:
      //  console.log(type, payload);
      return {
        ...state,
        dailyData: payload,
      };

    case CONFIG_DATE_START_MONTH_MAIN:
      //  console.log(type, payload);
      return {
        ...state,
        dateStartMonthMain: payload,
      };

    case CONFIG_DATE_END_MONTH_MAIN:
      //  console.log(type, payload);
      return {
        ...state,
        dateEndMonthMain: payload,
      };

    case CONFIG_PERIOD_MAIN:
      //  console.log(type, payload);
      return {
        ...state,
        periodMain: payload,
      };

    case CONFIG_PERIOD_VS:
      //  console.log(type, payload);
      return {
        ...state,
        periodVS: payload,
      };
    case CONFIG_TYPE_VS:
      //  console.log(type, payload);
      return {
        ...state,
        VS: payload,
      };

    case CONFIG_DATE_START_MAIN:
      //  console.log(type, payload);
      return {
        ...state,
        dateStartMain: payload,
      };

    case CONFIG_DATE_END_MAIN:
      //  console.log(type, payload);
      return {
        ...state,
        dateEndMain: payload,
      };

    case CONFIG_DATE_START_VS:
      //  console.log(type, payload);
      return {
        ...state,
        dateStartVS: payload,
      };

    case CONFIG_DATE_END_VS:
      //  console.log(type, payload);
      return {
        ...state,
        dateEndVS: payload,
      };

    case SET_DATE_MAX_MIN:
      //  console.log(type, payload);
      return {
        ...state,
        initialMaxDate: payload[0],
        initialMinDate: payload[1],

        dateEndMain: payload[0],
        dateStartMain: payload[1],

        dateStartMonthMain: payload[1],
        dateEndMonthMain: payload[0],

        dateStartVS: payload[1],
        dateEndVS: payload[0],
      };
    case SET_LIST_FOR_REMOVE:
      //  console.log(type, payload);
      return {
        ...state,
        listForRemove: payload,
      };
    case SET_USERID:
      //  console.log(type, payload);
      return {
        ...state,
        userID: payload,
      };
    case SET_LOADING_SKELETON:
      //  console.log(type, payload);
      return {
        ...state,
        loadSkeleton: payload,
      };

    default:
      return state;
  }
};

export default reducer;
