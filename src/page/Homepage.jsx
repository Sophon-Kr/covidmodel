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
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventNoteIcon from "@mui/icons-material/EventNote";
import SettingsIcon from "@mui/icons-material/Settings";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import Slide from "@mui/material/Slide";
import MainGraphFull from "../components/Graph/MainGraphFull";
import TextField from "@mui/material/TextField";
import TableModel from "../components/Table/TableModel";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import covid from "../assets/icons8-covid-19-64.png";
import lung from "../assets/icons8-infected-lungs-64.png";
import flight from "../assets/icons8-no-flight-64.png";
import vaccine from "../assets/icons8-vaccine-64.png";
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

export const Homepage = (props) => {
  const [dailyDataAPI, setdailyDataAPI] = useState([]);
  const [dialogStatus, setDialogStatus] = useState(false);
  const [fullGraph, setFullGraph] = useState(false);
  const [period, setPeriod] = React.useState(props.mainperiod);
  const [typeData, setTypeData] = React.useState(props.maintypeData);
  const [SStatus, setSStatus] = React.useState(props.mainSStatus);
  const [V1Status, setV1Status] = React.useState(props.mainV1Status);
  const [V2Status, setV2Status] = React.useState(props.mainV2Status);
  const [IStatus, setIStatus] = React.useState(props.mainIStatus);
  const [RStatus, setRStatus] = React.useState(props.mainRStatus);
  const [HStatus, setHStatus] = React.useState(props.mainHStatus);
  const [DStatus, setDStatus] = React.useState(props.mainDStatus);

  const [dateStart, setDateStart] = React.useState(props.maindateStartMain);
  const [dateEnd, setDateEnd] = React.useState(props.maindateEndMain);
  const [monthStart, setMonthStart] = React.useState(props.initialMinDate);
  const [monthEnd, setMonthEnd] = React.useState(props.initialMaxDate);

  const setdailyDataTemplate = [
    {
      id: 1,
      data: "Confirmed Cases ",
      color: "red",
      total: props.mainDailyData.total_case,
      new: props.mainDailyData.new_case,
      icon: covid,
    },

    {
      id: 2,
      data: "Recovered Cases",
      color: "green",
      total: props.mainDailyData.total_recovered,
      new: props.mainDailyData.new_recovered,
      icon: vaccine,
    },
    {
      id: 3,
      data: "Death Cases",
      color: "black",
      total: props.mainDailyData.total_death,
      new: props.mainDailyData.new_death,
      icon: lung,
    },
    {
      id: 4,
      data: "Abroad Cases",
      color: "blue",
      total:
        props.mainDailyData.total_case -
        props.mainDailyData.total_case_excludeabroad,
      new:
        props.mainDailyData.new_case -
        props.mainDailyData.new_case_excludeabroad,
      icon: flight,
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
      data: "Vaccine1",
      color: "#ffd600",
      status: props.mainV1Status,
      handle: (e) => setV1Status(e.target.checked),
    },
    {
      id: 3,
      data: "Vaccine2",
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

  const handlePeriod = async (event, newPeriod) => {
    await setPeriod(newPeriod);
    await props.configPeriodMainData(newPeriod);
  };

  const handleDateTime = (date) => {
    let dateWithoutTime = date.toISOString();
    let _dateWithoutTime = dateWithoutTime.split("T");
    return _dateWithoutTime[0];
  };

  const handleDateStart = (newDate) => {
    // bug day -1
    setDateStart(newDate);
    // console.log("newDate :: ", newDate);
    // let newTypeDate = handleDateTime(newDate);
    // console.log("newTypeDate", newDate, newTypeDate);
    props.configDateStartMain(newDate);
  };

  const handleDateEnd = (newDate) => {
    setDateEnd(newDate);
    // let newTypeDate = handleDateTime(newDate);
    // console.log("newTypeDate", newDate, newTypeDate);
    props.configDateEndMain(newDate);
  };
  const handleMonthStart = (newMonth) => {
    setMonthStart(newMonth);
    console.log("newMonth Start", newMonth);
    props.configDateStartMonthMain(newMonth);
    // let newTypeDate = handleDateTime(newMonth);
    // console.log("newTypeDate", newMonth, newTypeDate);
    // props.configDateStartMain(newTypeDate);
  };
  const handleMonthEnd = (newMonth) => {
    setMonthEnd(newMonth);
    console.log("newMonth End", newMonth);
    props.configDateEndMonthMain(newMonth);
    // let newTypeDate = handleDateTime(newMonth);
    // console.log("newTypeDate", newMonth, newTypeDate);
    // props.configDateEndMain(newTypeDate);
  };

  const handleTypeData = async (event, newTypedata) => {
    setTypeData(newTypedata);
    props.configDataTypeGraph(newTypedata);
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
  };

  useEffect(() => {
    async function fetchDataMonth() {
      if (props.mainperiod === "month" && props.maintypeData === "real") {
        await props.getAllRealDataMount();
        console.log("month real");
      } else if (props.mainperiod === "day" && props.maintypeData === "real") {
        await props.getAllRealDataDay();
        console.log("day real");
        console.log("max/min", props.initialMaxDate);
      } else if (
        props.mainperiod === "month" &&
        props.maintypeData === "model"
      ) {
        await props.getAllModelDataMount();
        console.log("month model");
      } else if (props.mainperiod === "day" && props.maintypeData === "model") {
        await props.getAllModelDataDay();
        console.log("day model");
        console.log("max/min", props.initialMaxDate);
      }
    }

    fetchDataMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.maintypeData, props.mainperiod]);

  useEffect(() => {
    async function fetchDailyData() {
      await props.getAllDailyData();
    }
    fetchDailyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDateStart(props.maindateStartMain);
    setDateEnd(props.maindateEndMain);
  }, [props.maindateEndMain, props.maindateStartMain]);

  // useEffect(() => {
  //   let listForRemove = [];
  //   if (props.mainSStatus === false) {
  //     listForRemove.push("Susceptible");
  //   }
  //   if (props.mainV1Status === false) {
  //     listForRemove.push("Vaccine1");
  //   }
  //   if (props.mainV2Status === false) {
  //     listForRemove.push("Vaccine2");
  //   }
  //   if (props.mainIStatus === false) {
  //     listForRemove.push("Infected");
  //   }
  //   if (props.mainRStatus === false) {
  //     listForRemove.push("Recovery");
  //   }
  //   if (props.mainHStatus === false) {
  //     listForRemove.push("Hospital");
  //   }
  //   if (props.mainDStatus === false) {
  //     listForRemove.push("Deaths");
  //   }
  //   console.log("listForRemove", listForRemove);
  //   props.setListForRemove(listForRemove);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [
  //   props.mainDStatus,
  //   props.mainHStatus,
  //   props.mainIStatus,
  //   props.mainRStatus,
  //   props.mainSStatus,
  //   props.mainV1Status,
  //   props.mainV2Status,
  // ]);

  // const monthFilter = (dataMonth) => {
  //   let startMonth = props.minDateMonth;
  //   let endMonth = props.maxDateMonth;
  //   var dateAfterFilter = dataMonth.filter((a) => {
  //     var date = new Date(a.name);
  //     return date >= startMonth && date <= endMonth;
  //   });
  //   console.log("dateAfterFilter M :", dateAfterFilter);
  // };

  // useEffect(() => {
  //   // async function fetchData() {}
  //   // fetchData();
  //   // console.log("dailyDataAPI", dailyDataAPI);

  //   monthFilter(dataSV);
  // }, []);

  // const filterRangeByDate = (data) => {
  //   var startDate = new Date("2021-02-01");
  //   var endDate = new Date("2021-02-15");
  //   var dateAfterFilter = data.filter((a) => {
  //     var date = new Date(a.name);
  //     return date >= startDate && date <= endDate;
  //   });
  //   console.log("dateAfterFilter", dateAfterFilter);
  //   return dateAfterFilter;
  // };

  return (
    <Container maxWidth="xxl" style={{ marginTop: 65 }}>
      <Container maxWidth="xxl" style={{ paddingTop: 30 }}>
        <Grid container justifyContent="center" spacing={3}>
          {/* <Button onClick={() => filterRangeByDate(props.mainModelDataDay)}>
            Test data filter
          </Button> */}
          {setdailyDataTemplate.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Paper
                style={{
                  minHeight: 100,
                  padding: 30,
                }}
                variant="outlined"
                square
              >
                <Grid container>
                  <Typography
                    variant="h5"
                    color="initial"
                    style={{ marginBottom: 8, fontSize: 28, color: data.color }}
                  >
                    {data.data}
                  </Typography>
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    lg={8}
                    xl={8}
                    style={{ flexGrow: 1 }}
                  >
                    <Typography
                      variant="h5"
                      color="initial"
                      style={{ marginBottom: 5, fontSize: 20 }}
                    >
                      New Case : {data.new}
                    </Typography>
                    <Typography variant="subtitle1" color="initial">
                      Total Case : {data.total}
                    </Typography>
                    <Typography
                      variant="body1"
                      // color="initial"
                      style={{ paddingTop: 8, color: "grey" }}
                    >
                      Date :{props.mainDailyData.txn_date}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    style={{ textAlign: "center" }}
                  >
                    <img width="75" height="75" src={data.icon} alt="icon" />
                  </Grid>
                </Grid>
                {/* {data.data}
                {data.dataAPI} */}
              </Paper>
              <Divider style={{ backgroundColor: data.color, padding: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* =================Main Graph Arear============= */}
      <Container maxWidth="xxl" style={{ paddingTop: 30 }}>
        <Paper variant="outlined" square style={{ padding: 35 }}>
          <Grid
            container
            style={{
              padding: 10,
              marginBottom: 35,
            }}
          >
            <Grid container spacing={3}>
              <Grid item style={{ flexGrow: 1, paddingLeft: 35 }}>
                <Typography variant="h5" color="initial">
                  COVID-19 Graph
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
              {props.mainperiod === "day" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid item>
                    <DatePicker
                      autoOk={true}
                      openTo="day"
                      views={["day", "month", "year"]}
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
                      views={["day", "month", "year"]}
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
              ) : props.mainperiod === "month" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid item>
                    <DatePicker
                      autoOk={true}
                      views={["month", "year"]}
                      label="Start Month"
                      minDate={props.minDateMonth}
                      maxDate={props.maxDateMonth}
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
                      views={["month", "year"]}
                      label="End Month"
                      minDate={props.minDateMonth}
                      maxDate={props.maxDateMonth}
                      // minDate={new Date("2020-03-01")}
                      // maxDate={new Date("2022-06-01")}
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
                <ToggleButtonGroup
                  size="small"
                  color="error"
                  value={typeData}
                  exclusive
                  onChange={handleTypeData}
                >
                  <ToggleButton value="real">&nbsp;Raw Data&nbsp;</ToggleButton>
                  <ToggleButton value="model">
                    &nbsp;Model Data&nbsp;
                  </ToggleButton>
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
              <Grid item>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#AED6F1", color: "black" }}
                  onClick={handleDialogOpen}
                  startIcon={<SettingsIcon />}
                >
                  Config Graph
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <MainGraph />
        </Paper>
      </Container>
      <TableModel />

      {/* =================VS Graph Arear============= */}
      {/* <Container maxWidth="xxl" style={{ marginTop: 30, paddingBottom: 30 }}>
        <Paper variant="outlined" square style={{ padding: 35 }}>
          <Grid
            container
            style={{
              padding: 10,
              marginBottom: 35,
            }}
          >
            <Grid container spacing={3}>
              <Grid item style={{ flexGrow: 1, paddingLeft: 35 }}>
                <Typography variant="h5" color="initial">
                  COVID-19 Comparison Graph
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
                  <ToggleButton value="week">
                    <DateRangeIcon />
                    &nbsp;Week&nbsp;
                  </ToggleButton>
                  <ToggleButton value="month">
                    <EventNoteIcon />
                    &nbsp;Month&nbsp;
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

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
      </Container> */}
      {/* ==================== dialog setting =========================== */}
      <Dialog maxWidth="md" onClose={handleDialogClose} open={dialogStatus}>
        <DialogTitle onClose={handleDialogClose}>
          <Typography variant="h6" color="initial">
            Config Graph
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom variant="subtitle1">
            Select options for display on the graph.
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {listData.map((data) => (
              <Grid item>
                <FormControlLabel
                  value="end"
                  control={
                    <Checkbox
                      defaultChecked={data.status}
                      sx={{
                        "& .MuiSvgIcon-root": {
                          fontSize: 30,
                          color: data.color,
                        },
                      }}
                      onChange={data.handle}
                    />
                  }
                  label={data.data}
                  labelPlacement="end"
                />
              </Grid>
            ))}
          </Grid>
          {typeData === "model" ? (
            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          ) : null}
          {typeData === "model" ? (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Typography gutterBottom variant="subtitle1">
                  Input values to generate a new graph
                </Typography>
              </Grid>
              {dataconfig.map((item) => (
                <Grid item key={item.name} xs={4} sm={4} md={4} lg={4} xl={4}>
                  <TextField
                    label={
                      <span>
                        {item.symbol} ({item.name})
                      </span>
                    }
                    defaultValue={item.value}
                    variant="outlined"
                    maxWidth
                  />
                </Grid>
              ))}
              <Grid item>
                <Button
                  onClick={handleDialogClose}
                  variant="contained"
                  style={{
                    color: "white",
                    backgroundColor: "grey",
                    marginLeft: 10,
                    marginTop: 10,
                  }}
                >
                  Reset Default Value
                </Button>
              </Grid>
            </Grid>
          ) : null}
          {typeData === "model" ? (
            <Divider style={{ marginTop: 20, marginBottom: 20 }} />
          ) : null}
          {typeData === "model" ? (
            <Grid container>
              Note**
              {dataconfig.map((item) => (
                <Grid
                  item
                  key={item.name}
                  xs={12}
                  sm={12}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <Typography variant="body1" color="initial">
                    {item.symbol} ({item.name}): {item.des}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          ) : null}
        </DialogContent>
        <DialogActions>
          {/* <Grid item style={{ flexGrow: 1 }}>
            {" "}
            <Button
              onClick={handleDialogClose}
              variant="contained"
              style={{ color: "white", backgroundColor: "grey" }}
            >
              Reset Default Value
            </Button>
          </Grid> */}
          <Grid item>
            <Button
              onClick={handleDialogClose}
              variant="contained"
              style={{ color: "white", backgroundColor: "#ef5350" }}
            >
              Cancel Config
            </Button>
            <Button
              onClick={handleCheck}
              variant="contained"
              style={{
                color: "white",
                backgroundColor: "#0091ea",
                marginLeft: 10,
              }}
            >
              Save Config
            </Button>
          </Grid>
        </DialogActions>
      </Dialog>
      {/* =========== Full screen graph================= */}
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
            <MainGraphFull />
          </Grid>
        </Container>
      </Dialog>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    mainperiod: state.reducer.periodMain,
    maintypeData: state.reducer.typeData,
    mainSStatus: state.reducer.SStatus,
    mainV1Status: state.reducer.V1Status,
    mainV2Status: state.reducer.V2Status,
    mainIStatus: state.reducer.IStatus,
    mainRStatus: state.reducer.RStatus,
    mainHStatus: state.reducer.HStatus,
    mainDStatus: state.reducer.DStatus,
    maindateStartMain: state.reducer.dateStartMain,
    maindateEndMain: state.reducer.dateEndMain,

    mainRealDataMonth: state.reducer.realDataMonth,
    mainRealDataDay: state.reducer.realDataDay,
    mainModelDataMonth: state.reducer.modelDataMonth,
    mainModelDataDay: state.reducer.modelDataDay,
    mainDailyData: state.reducer.dailyData,

    minDateMonth: state.reducer.minDateMonth,
    maxDateMonth: state.reducer.maxDateMonth,

    initialMinDate: state.reducer.initialMinDate,
    initialMaxDate: state.reducer.initialMaxDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    configGraphDisplay: (newStatus) => {
      return dispatch(actions.configGraphLine(newStatus));
    },

    configDataTypeGraph: (datatype) => {
      return dispatch(actions.configDatatype(datatype));
    },
    configPeriodMainData: (datatype) => {
      return dispatch(actions.configPeriodMain(datatype));
    },

    getAllRealDataMount: () => {
      return dispatch(actions.getRealDataMount());
    },
    getAllRealDataDay: () => {
      return dispatch(actions.getRealDataDay());
    },
    getAllModelDataMount: () => {
      return dispatch(actions.getModelDataMount());
    },
    getAllModelDataDay: () => {
      return dispatch(actions.getModelDataDay());
    },
    getAllDailyData: () => {
      return dispatch(actions.getDailyData());
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
    setListForRemove: (list) => {
      return dispatch(actions.setListForRemove(list));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
