import React, { useState, useEffect } from "react";
import * as actions from "../middleware/action";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import DateRangeIcon from "@mui/icons-material/DateRange";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import Slide from "@mui/material/Slide";
import MainGraphFull from "../components/Graph/MainGraphFull";
import TextField from "@mui/material/TextField";
import TableVS from "../components/Table/TableVS";
import VSGraph from "../components/Graph/VSGraph";
import VSFullGraph from "../components/Graph/VSFullGraph";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import DatePicker from "@mui/lab/DatePicker";

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
  // const [dailyDataAPI, setdailyDataAPI] = useState([]);
  // const [dialogStatus, setDialogStatus] = useState(false);
  const [fullGraph, setFullGraph] = useState(false);
  const [period, setPeriod] = React.useState("day");
  // const [VS, setVS] = React.useState(props.mainVS);
  // const [typeData, setTypeData] = React.useState(props.maintypeData);
  // const [SStatus, setSStatus] = React.useState(props.mainSStatus);
  // const [V1Status, setV1Status] = React.useState(props.mainV1Status);
  // const [V2Status, setV2Status] = React.useState(props.mainV2Status);
  // const [IStatus, setIStatus] = React.useState(props.mainIStatus);
  // const [RStatus, setRStatus] = React.useState(props.mainRStatus);
  // const [HStatus, setHStatus] = React.useState(props.mainHStatus);
  // const [DStatus, setDStatus] = React.useState(props.mainDStatus);
  const [dateStart, setDateStart] = React.useState(props.maindateStartMain);
  const [dateEnd, setDateEnd] = React.useState(props.maindateEndMain);
  const [monthStart, setMonthStart] = React.useState(props.initialMinDate);
  const [monthEnd, setMonthEnd] = React.useState(props.initialMaxDate);

  // const setdailyDataTemplate = [
  //   {
  //     id: 1,
  //     data: " Daily Confirmed Cases ",
  //     color: "red",
  //     dataAPI: dailyDataAPI,
  //   },
  //   {
  //     id: 2,
  //     data: " Daily Dathes Cases",
  //     color: "grey",
  //     dataAPI: dailyDataAPI,
  //   },
  //   {
  //     id: 3,
  //     data: " Daily Recovered Cases",
  //     color: "green",
  //     dataAPI: dailyDataAPI,
  //   },
  //   {
  //     id: 4,
  //     data: " Hospital Cases",
  //     color: "#ffd600",
  //     dataAPI: dailyDataAPI,
  //   },
  // ];

  // const listData = [
  //   {
  //     id: 1,
  //     data: "Susceptible",
  //     color: "blue",
  //     status: props.mainSStatus,
  //     handle: (e) => setSStatus(e.target.checked),
  //   },
  //   {
  //     id: 2,
  //     data: "Vaccines1",
  //     color: "#ffd600",
  //     status: props.mainV1Status,
  //     handle: (e) => setV1Status(e.target.checked),
  //   },
  //   {
  //     id: 3,
  //     data: "Vaccines2",
  //     color: "orange",
  //     status: props.mainV2Status,
  //     handle: (e) => setV2Status(e.target.checked),
  //   },
  //   {
  //     id: 4,
  //     data: "Infected",
  //     color: "red",
  //     status: props.mainIStatus,
  //     handle: (e) => setIStatus(e.target.checked),
  //   },
  //   {
  //     id: 5,
  //     data: "Recovery",
  //     color: "green",
  //     status: props.mainRStatus,
  //     handle: (e) => setRStatus(e.target.checked),
  //   },
  //   {
  //     id: 6,
  //     data: "Hospital",
  //     color: "purple",
  //     status: props.mainHStatus,
  //     handle: (e) => setHStatus(e.target.checked),
  //   },
  //   {
  //     id: 7,
  //     data: "Death",
  //     color: "black",
  //     status: props.mainDStatus,
  //     handle: (e) => setDStatus(e.target.checked),
  //   },
  // ];

  const nodeDataComparison = [
    {
      value: "S",
      label: "Susceptible",
    },
    {
      value: "V1",
      label: "Vaccines1",
    },
    {
      value: "V2",
      label: "Vaccines2",
    },
    {
      value: "I",
      label: "Infected",
    },
    {
      value: "R",
      label: "Recovery",
    },
    {
      value: "H",
      label: "Hospital",
    },
    {
      value: "D",
      label: "Death",
    },
  ];

  // const handleDialogOpen = () => {
  //   setDialogStatus(true);
  // };
  // const handleDialogClose = () => {
  //   setDialogStatus(false);
  // };

  const handlePeriod = (event, newPeriod) => {
    console.log(newPeriod);
    setPeriod(newPeriod);
    console.log("newPeriod", newPeriod);
    if (newPeriod === "day") {
      props.getVSDataDay();
    } else if (newPeriod === "month") {
      props.getVSDataMount();
    }
  };
  // const handleVS = (event, newVS) => {
  //   setVS(newVS);
  // };

  // const handleTypeData = async (event, newTypedata) => {
  //   setTypeData(newTypedata);
  //   handleDataType(newTypedata);
  // };

  // const handleCheck = () => {
  //   const newStatus = {
  //     S: SStatus,
  //     V1: V1Status,
  //     V2: V2Status,
  //     I: IStatus,
  //     R: RStatus,
  //     H: HStatus,
  //     D: DStatus,
  //   };
  //   console.log(newStatus);
  //   props.configGraphDisplay(newStatus);
  //   handleDialogClose();
  // };

  const handleFullGraphOpen = () => {
    setFullGraph(true);
  };
  const handleFullGraphClose = () => {
    setFullGraph(false);
  };

  const handleDateStart = (newDate) => {
    // bug day -1
    setDateStart(newDate);
    props.configDateStartMain(newDate);
  };

  const handleDateEnd = (newDate) => {
    setDateEnd(newDate);
    props.configDateEndMain(newDate);
  };

  const handleDataType = (newTypedata) => {
    // const newDataType = "";
    // setTypeData();
    console.log("newTypedata", newTypedata);
    props.configDataTypeGraph(newTypedata);
  };

  const handleMonthStart = (newMonth) => {
    setMonthStart(newMonth);
    console.log("newMonth Start", newMonth);
    props.configDateStartMonthMain(newMonth);
  };
  const handleMonthEnd = (newMonth) => {
    setMonthEnd(newMonth);
    console.log("newMonth End", newMonth);
    props.configDateEndMonthMain(newMonth);
  };

  useEffect(() => {
    setDateStart(props.maindateStartMain);
    setDateEnd(props.maindateEndMain);
  }, [props.maindateEndMain, props.maindateStartMain]);

  useEffect((period) => {
    props.getVSDataDay();
  }, []);

  const [nodeData, setNodeData] = React.useState("S");

  const handleNodeData = (event) => {
    setNodeData(event.target.value);
    props.configTypeVS(event.target.value);
  };

  return (
    <Container maxWidth="xxl" style={{ marginTop: 95 }}>
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
                  <ToggleButton value="month">
                    <EventNoteIcon />
                    &nbsp;Month&nbsp;
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              {period === "day" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid item>
                    <DatePicker
                      autoOk={true}
                      openTo="day"
                      //views={["day", "month", "year"]}
                      label="Start Date"
                      inputFormat="dd/MM/yyyy"
                      value={dateStart}
                      minDate={props.initialMinDate}
                      maxDate={props.initialMaxDate}
                      // maxDate={new Date("2023-06-01")}
                      onChange={handleDateStart}
                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />
                  </Grid>

                  <Grid item>
                    <DatePicker
                      autoOk={true}
                      openTo="day"
                      //views={["day", "month", "year"]}
                      minDate={props.initialMinDate}
                      maxDate={props.initialMaxDate}
                      label="End Date"
                      inputFormat="dd/MM/yyyy"
                      value={dateEnd}
                      onChange={handleDateEnd}
                      renderInput={(params) => (
                        <TextField size="small" {...params} />
                      )}
                    />
                  </Grid>
                </LocalizationProvider>
              ) : period === "month" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid item>
                    <DatePicker
                      autoOk={true}
                      //views={["month", "year"]}
                      label="Start Month"
                      minDate={props.initialMinDate}
                      maxDate={props.initialMaxDate}
                      // minDate={props.minDateMonth}
                      // maxDate={props.maxDateMonth}
                      value={monthStart}
                      onChange={handleMonthStart}
                      renderInput={(params) => (
                        <TextField size="small" {...params} helperText={null} />
                      )}
                    />
                  </Grid>

                  <Grid item>
                    <DatePicker
                      autoOk={true}
                      // views={["month", "year"]}
                      label="End Month"
                      minDate={props.initialMinDate}
                      maxDate={props.initialMaxDate}
                      value={monthEnd}
                      onChange={handleMonthEnd}
                      renderInput={(params) => (
                        <TextField size="small" {...params} helperText={null} />
                      )}
                    />
                  </Grid>
                </LocalizationProvider>
              ) : null}

              <Grid item>
                <TextField
                  select
                  label="Comparison node"
                  size="small"
                  value={nodeData}
                  onChange={handleNodeData}
                  style={{ minWidth: 130 }}
                >
                  {nodeDataComparison.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
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
          <VSGraph period={period} />
        </Paper>
      </Container>
      <TableVS period={period}/>

      {/* ======================full graph ====================== */}
      <Dialog
        fullScreen
        open={fullGraph}
        onClose={handleFullGraphClose}
        TransitionComponent={Transition}
      >
        <Container maxWidth="xxl">
          <Grid container style={{ paddingRight: 20 }}>
            <Grid item style={{ flexGrow: 1 }}></Grid>
            <Grid item>
              <Button
                color="inherit"
                variant="contained"
                onClick={handleFullGraphClose}
                style={{
                  marginTop: 20,
                  marginBottom: 20,
                  backgroundColor: "#ef5350",
                  color: "white",
                }}
              >
                Close
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <VSFullGraph />
          </Grid>
        </Container>
      </Dialog>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    initialMinDate: state.reducer.initialMinDate,
    initialMaxDate: state.reducer.initialMaxDate,
    maindateStartMain: state.reducer.dateStartMain,
    maindateEndMain: state.reducer.dateEndMain,
    mainVS: state.reducer.VS,
    mainVsData: state.reducer.vsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getVSDataDay: () => {
      return dispatch(actions.getVSDataDay());
    },
    getVSDataMount: () => {
      return dispatch(actions.getVSDataMount());
    },
    configTypeVS: (type) => {
      return dispatch(actions.configTypeVS(type));
    },
    configDateStartMain: (datatype) => {
      return dispatch(actions.dateStartMain(datatype));
    },

    configDateEndMain: (datatype) => {
      return dispatch(actions.dateEndMain(datatype));
    },
    configDateStartMonthMain: (datatype) => {
      return dispatch(actions.dateStartMonthMain(datatype));
    },

    configDateEndMonthMain: (datatype) => {
      return dispatch(actions.dateEndMonthMain(datatype));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VSGraphPage);
