import React, { useState, useEffect } from "react";
import * as actions from "../middleware/action";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
// import IconButton from "@mui/material/IconButton";
// import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
// import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
// import { bindActionCreators } from "redux";
import Slide from "@mui/material/Slide";
import MainGraphFull from "../components/Graph/MainGraphFull";
// import VSGraph from "../components/Graph/VSGraph";
import TextField from "@mui/material/TextField";
// import TableModel from "../components/Table/TableModel";
import TableVS from "../components/Table/TableVS";
import VSGraph from "../components/Graph/VSGraph";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
// import { getdailyData } from "../services/dailyData.service";
// import {
//   getRawDataMonth,
//   getIndividualProfile,
// } from "../services/rawData.service";

// const { store } = useContext(ReactReduxContext);

//

// const dataconfig = {
//   zeta: 0.015,
//   eta: 0.09,
//   omega1: 0.04,
//   omega2: 0.001,
//   epsilon1: 0.641,
//   epsilon2: 0.704,
//   mu: 3.6529e-5,
//   alpha: 0.2,
//   lambda: 0.1,
//   beta: 0.5,
// };

// const data = [
//   {
//     name: "January",
//     year:"2021",
//     "Susceptible(Real-Data)": 66162931,
//     "Susceptible(Model-Data)" : 0,
//     Vaccines1(Real-Data): 0,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 0,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 11898,
//     Infection(Model-Data): 0,
//     Recovery(Real-Data): 7375,
//     Recovery(Model-Data): 0,
//     Hospitalize(Real-Data): 4507,
//     Hospitalize(Model-Data): 0,
//     Death(Real-Data): 16,
//     Death(Model-Data): 0
//   },
//   {
//     name: "February",
//     year:"2021",
//     "Susceptible(Real-Data)": 66172389,
//     "Susceptible(Model-Data)" :0 ,
//     Vaccines1(Real-Data): 0,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 0,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 7169,
//     Infection(Model-Data): 0,
//     Recovery(Real-Data): 13513,
//     Recovery(Model-Data): 0,
//     Hospitalize(Real-Data): -6350,
//     Hospitalize(Model-Data):0,
//     Death(Real-Data): 6,
//     Death(Model-Data): 0
//   },
//   {
//     name: "March",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 66022406,
//     "Susceptible(Model-Data)" : 0,
//     Vaccines1(Real-Data): 158497,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 33248,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 2912,
//     Infection(Model-Data):0 ,
//     Recovery(Real-Data): 2298,
//     Recovery(Model-Data):0 ,
//     Hospitalize(Real-Data): 603,
//     Hospitalize(Model-Data):0,
//     Death(Real-Data): 11,
//     Death(Model-Data):0
//   },
//   {
//     name: "April",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 65177414,
//     "Susceptible(Model-Data)" :0 ,
//     Vaccines1(Real-Data): 936733,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 348600,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 36290,
//     Infection(Model-Data): 0,
//     Recovery(Real-Data): 8828,
//     Recovery(Model-Data): 0,
//     Hospitalize(Real-Data): 27353,
//     Hospitalize(Model-Data):0,
//     Death(Real-Data): 109,
//     Death(Model-Data):0
//   },
//   {
//     name: "May",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 64553188,
//     "Susceptible(Model-Data)" : 0,
//     Vaccines1(Real-Data): 1444261,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 743520,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 94639,
//     Infection(Model-Data): 0,
//     Recovery(Real-Data): 72091,
//     Recovery(Model-Data): 0,
//     Hospitalize(Real-Data): 21720,
//     Hospitalize(Model-Data):0,
//     Death(Real-Data): 828,
//     Death(Model-Data):0
//   },
//   {
//     name: "June",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 61416343,
//     "Susceptible(Model-Data)" : 0,
//     Vaccines1(Real-Data): 4571363,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 1691476,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 99509,
//     Infection(Model-Data): 0,
//     Recovery(Real-Data): 99134,
//     Recovery(Model-Data): 0,
//     Hospitalize(Real-Data): -614,
//     Hospitalize(Model-Data):0,
//     Death(Real-Data): 992,
//     Death(Model-Data):0
//   },
//   {
//     name: "July",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 58818693,
//     "Susceptible(Model-Data)" :0 ,
//     Vaccines1(Real-Data): 6692062,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 1066214,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 337986,
//     Infection(Model-Data): 0,
//     Recovery(Real-Data): 184441,
//     Recovery(Model-Data): 0,
//     Hospitalize(Real-Data): 150711,
//     Hospitalize(Model-Data):0,
//     Death(Real-Data): 2834,
//     Death(Model-Data):0
//   },
//   {
//     name: "August",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 54962377,
//     "Susceptible(Model-Data)" : 0,
//     Vaccines1(Real-Data): 10009247,
//     Vaccines1(Model-Data): 0,
//     Vaccines2(Real-Data): 4326504,
//     Vaccines2(Model-Data): 0,
//     Infection(Real-Data): 607442,
//     Infection(Model-Data): 0,
//     Recovery(Real-Data): 630071,
//     Recovery(Model-Data):0 ,
//     Hospitalize(Real-Data): -29142,
//     Hospitalize(Model-Data):0,
//     Death(Real-Data): 6732,
//     Death(Model-Data):0
//   },
//   {
//     name: "September",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 56578527,
//     "Susceptible(Model-Data)" : 56168488.867,
//     Vaccines1(Real-Data): 8810927,
//     Vaccines1(Model-Data): 9139212,
//     Vaccines2(Real-Data): 11722126,
//     Vaccines2(Model-Data): 11937355,
//     Infection(Real-Data): 398746,
//     Infection(Model-Data): 405564.8 ,
//     Recovery(Real-Data): 448682,
//     Recovery(Model-Data): 475536.2,
//     Hospitalize(Real-Data): -55293,
//     Hospitalize(Model-Data): -54660.2,
//     Death(Real-Data): 5138,
//     Death(Model-Data):52585.333
//   },
//   {
//     name: "October",
//     year: "2021" ,
//     "Susceptible(Real-Data)": 55801205,
//     "Susceptible(Model-Data)" : 55986031.291,
//     Vaccines1(Real-Data): 9768424,
//     Vaccines1(Model-Data): 9625499,
//     Vaccines2(Real-Data): 11045684,
//     Vaccines2(Model-Data): 10753419,
//     Infection(Real-Data): 308549,
//     Infection(Model-Data): 297205.9,
//     Recovery(Real-Data): 321455,
//     Recovery(Model-Data): 289291.7,
//     Hospitalize(Real-Data): -15384,
//     Hospitalize(Model-Data): -13898.9,
//     Death(Real-Data): 2478,
//     Death(Model-Data): 2598.009
//   },
// ];

const dataconfig = [
  {
    name: "rho",
    des: "Total Population",
    symbol: <span>&#961;</span>,
    value: "0.015",
  },
  {
    name: "zeta",
    des: "The covid-19 dissese mortality rate for individuals in the infected rate",
    symbol: <span>&#950;</span>,
    value: "0.015",
  },
  {
    name: "eta",
    des: "The recurrent infections rate for who was recovery",
    symbol: <span>&eta;</span>,
    value: "0.09",
  },
  {
    name: "omega1",
    des: "The performance of vacination first doses",
    symbol: <span>&#969;1</span>,
    value: "0.04",
  },
  {
    name: "omega1",
    des: "The performance of vacination second doses",
    symbol: <span>&#969;2</span>,
    value: " 0.001",
  },
  {
    name: "epsilon1",
    des: "The effective of covid-19 vacine rate first doses",
    symbol: <span>&#949;1</span>,
    value: "0.641",
  },
  {
    name: "epsilon2",
    des: "The effective of covid-19 vacine rate second doses",
    symbol: <span>&#949;2</span>,
    value: "0.704",
  },
  {
    name: "mu",
    des: "The natural death rate of all individual",
    symbol: <span>&#956;</span>,
    value: "3.6529e-5",
  },
  {
    name: "alpha",
    des: "The hospital rate for infected",
    symbol: <span>&#945;</span>,
    value: "0.2",
  },
  {
    name: "lambda",
    des: "The recovery rate of infected",
    symbol: <span>&#955;</span>,
    value: "0.1",
  },
  {
    name: "beta",
    des: "The effective contact rate",
    symbol: <span>&#946;</span>,
    value: "0.5",
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const VSGraphPage = (props) => {
  const [dailyDataAPI, setdailyDataAPI] = useState([]);
  const [dialogStatus, setDialogStatus] = useState(false);
  const [fullGraph, setFullGraph] = useState(false);
  const [period, setPeriod] = React.useState(props.mainperiod);
  const [VS, setVS] = React.useState(props.mainVS);
  const [typeData, setTypeData] = React.useState(props.maintypeData);
  const [SStatus, setSStatus] = React.useState(props.mainSStatus);
  const [V1Status, setV1Status] = React.useState(props.mainV1Status);
  const [V2Status, setV2Status] = React.useState(props.mainV2Status);
  const [IStatus, setIStatus] = React.useState(props.mainIStatus);
  const [RStatus, setRStatus] = React.useState(props.mainRStatus);
  const [HStatus, setHStatus] = React.useState(props.mainHStatus);
  const [DStatus, setDStatus] = React.useState(props.mainDStatus);
  const [dateStart, setDateStart] = React.useState(props.initialMinDate);
  const [dateEnd, setDateEnd] = React.useState(props.initialMaxDate);

  const setdailyDataTemplate = [
    {
      id: 1,
      data: " Daily Confirmed Cases ",
      color: "red",
      dataAPI: dailyDataAPI,
    },
    {
      id: 2,
      data: " Daily Dathes Cases",
      color: "grey",
      dataAPI: dailyDataAPI,
    },
    {
      id: 3,
      data: " Daily Recovered Cases",
      color: "green",
      dataAPI: dailyDataAPI,
    },
    {
      id: 4,
      data: " Hospital Cases",
      color: "#ffd600",
      dataAPI: dailyDataAPI,
    },
  ];

  const listData = [
    {
      id: 1,
      data: "Susceptible",
      color: "blue",
      status: props.mainSStatus,
      handle: (e) => setSStatus(e.target.checked),
    },
    {
      id: 2,
      data: "Vaccines1",
      color: "#ffd600",
      status: props.mainV1Status,
      handle: (e) => setV1Status(e.target.checked),
    },
    {
      id: 3,
      data: "Vaccines2",
      color: "orange",
      status: props.mainV2Status,
      handle: (e) => setV2Status(e.target.checked),
    },
    {
      id: 4,
      data: "Infected",
      color: "red",
      status: props.mainIStatus,
      handle: (e) => setIStatus(e.target.checked),
    },
    {
      id: 5,
      data: "Recovery",
      color: "green",
      status: props.mainRStatus,
      handle: (e) => setRStatus(e.target.checked),
    },
    {
      id: 6,
      data: "Hospital",
      color: "purple",
      status: props.mainHStatus,
      handle: (e) => setHStatus(e.target.checked),
    },
    {
      id: 7,
      data: "Death",
      color: "black",
      status: props.mainDStatus,
      handle: (e) => setDStatus(e.target.checked),
    },
  ];

  const handleDialogOpen = () => {
    setDialogStatus(true);
  };
  const handleDialogClose = () => {
    setDialogStatus(false);
  };

  const handleFullGraphOpen = () => {
    setFullGraph(true);
  };
  const handleFullGraphClose = () => {
    setFullGraph(false);
  };

  const handlePeriod = (event, newPeriod) => {
    setPeriod(newPeriod);
  };
  const handleVS = (event, newVS) => {
    setVS(newVS);
  };

  const handleTypeData = async (event, newTypedata) => {
    // console.log(newTypedata);
    setTypeData(newTypedata);
    handleDataType(newTypedata);
  };

  const handleCheck = () => {
    const newStatus = {
      S: SStatus,
      V1: V1Status,
      V2: V2Status,
      I: IStatus,
      R: RStatus,
      H: HStatus,
      D: DStatus,
    };
    console.log(newStatus);
    props.configGraphDisplay(newStatus);
    handleDialogClose();
    // console.log("SStatus :", SStatus);
    // console.log("V1Status :", V1Status);
    // console.log("V2Status :", V2Status);
    // console.log("IStatus :", IStatus);
    // console.log("RStatus :", RStatus);
    // console.log("HStatus :", HStatus);
    // console.log("DStatus :", DStatus);
  };

  // const handleFullGraphOpen = () => {
  //   setFullGraph(true);
  // };
  // const handleFullGraphClose = () => {
  //   setFullGraph(false);
  // };
  const handleDateStart = (newDate) => {
    setDateStart(newDate);
    props.configDateStartMain(newDate.toISOString());
  };
  const handleDateEnd = (newDate) => {
    setDateEnd(newDate);
    props.configDateEndMain(newDate.toISOString());
  };

  const handleDataType = (newTypedata) => {
    // const newDataType = "";
    // setTypeData();
    console.log("newTypedata", newTypedata);
    props.configDataTypeGraph(newTypedata);
  };

  return (
    <Container maxWidth="xxl" style={{ marginTop: 105 }}>
      {/* <Container maxWidth="xxl" style={{ paddingTop: 30 }}>
      
      </Container> */}
      <Container maxWidth="xxl" style={{ marginTop: 30, paddingBottom: 30 }}>
        <Paper variant="outlined" square style={{ padding: 35 }}>
          <Grid
            container
            style={{
              padding: 10,
              marginBottom: 35,
            }}
          >
            <Grid container justifyContent="end" spacing={3}>
              <Grid item style={{ flexGrow: 1, paddingLeft: 35 }}>
                <Typography variant="h5" color="initial">
                  Comparison Graph
                </Typography>
              </Grid>

              <Grid item>
                <ToggleButtonGroup
                  size="small"
                  color="primary"
                  value={period}
                  exclusive
                  onChange={handlePeriod}
                >
                  <ToggleButton value="day">
                    <CalendarTodayIcon /> &nbsp; Day &nbsp;
                  </ToggleButton>
                  {/* <ToggleButton value="week">
                    <DateRangeIcon />
                    &nbsp;Week&nbsp;
                  </ToggleButton> */}
                  <ToggleButton value="month">
                    <EventNoteIcon />
                    &nbsp;Month&nbsp;
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Grid item>
                  <DesktopDatePicker
                    label="Start Date"
                    inputFormat="dd/MM/yyyy"
                    minDate={props.minDateMonth}
                    maxDate={props.maxDateMonth}
                    value={dateStart}
                    // onChange={handleDateStart}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </Grid>

                <Grid item>
                  <DesktopDatePicker
                    size="small"
                    label="End Date"
                    minDate={props.minDateMonth}
                    maxDate={props.maxDateMonth}
                    inputFormat="dd/MM/yyyy"
                    value={dateEnd}
                    // onChange={handleDateEnd}
                    renderInput={(params) => (
                      <TextField size="small" {...params} />
                    )}
                  />
                </Grid>
              </LocalizationProvider>

              <Grid item>
                <ToggleButtonGroup
                  size="small"
                  color="error"
                  value={VS}
                  exclusive
                  onChange={handleVS}
                >
                  <ToggleButton value="S">&nbsp;Susceptible&nbsp;</ToggleButton>
                  <ToggleButton value="V1">&nbsp;Vaccines1&nbsp;</ToggleButton>
                  <ToggleButton value="V2">&nbsp;Vaccines2&nbsp;</ToggleButton>
                  <ToggleButton value="I">&nbsp;Infected&nbsp;</ToggleButton>
                  <ToggleButton value="R">&nbsp;Recovery&nbsp;</ToggleButton>
                  <ToggleButton value="H">&nbsp;Hospital&nbsp;</ToggleButton>
                  <ToggleButton value="D">&nbsp;Death&nbsp;</ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#AED6F1", color: "black" }}
                  onClick={handleFullGraphOpen}
                >
                  <FullscreenRoundedIcon />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <VSGraph />
        </Paper>
      </Container>
      <TableVS />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    initialMinDate: state.reducer.initialMinDate,
    initialMaxDate: state.reducer.initialMaxDate,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(VSGraphPage);
