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
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import MenuItem from "@mui/material/MenuItem";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import Backdrop from "@mui/material/Backdrop";

import MainGraphFull from "../components/Graph/MainGraphFull";
import TableModel from "../components/Table/TableModel";
import covid from "../assets/virusicon.png";
import lung from "../assets/lungicon.png";
import flight from "../assets/airplaneicon.png";
import vaccine from "../assets/maskicon.png";
import {
  getAllInitial,
  resetInitial,
  editInitialByDate,
} from "../services/initialData.service";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const GraphPage = (props) => {
  //const [tempDataService, setTempData] = useState([]);
  const [dialogStatus, setDialogStatus] = useState(false);
  const [fullGraph, setFullGraph] = useState(false);
  const [period, setPeriod] = React.useState(props.mainperiod);
  const [typeData, setTypeData] = React.useState(props.maintypeData);
  const [SStatus, setSStatus] = React.useState(props.mainSStatus);
  const [V1Status, setV1Status] = React.useState(props.mainV1Status);
  const [V2Status, setV2Status] = React.useState(props.mainV2Status);
  const [IStatus, setIStatus] = React.useState(props.mainIStatus);
  const [HStatus, setHStatus] = React.useState(props.mainHStatus);
  const [DStatus, setDStatus] = React.useState(props.mainDStatus);
  const [MStatus, setMStatus] = React.useState(props.mainMStatus);
  const [alpha, setAlpha] = React.useState(0);
  const [beta, setBeta] = React.useState(0);
  const [epsilon1, setEpsilon1] = React.useState(0);
  const [epsilon2, setEpsilon2] = React.useState(0);
  const [lambdaH, setLambdaH] = React.useState(0);
  const [lambdaS, setLambdaS] = React.useState(0);
  const [mu, setMu] = React.useState(0);
  const [omega1, setOmega1] = React.useState(0);
  const [omega2, setOmega2] = React.useState(0);
  const [omega3, setOmega3] = React.useState(0);
  const [zetaH, setZetaH] = React.useState(0);
  const [zetaS, setZetaS] = React.useState(0);

  const [dateStart, setDateStart] = React.useState(
    new Date(props.maindateStartMain)
  );
  const [dateEnd, setDateEnd] = React.useState(new Date(props.maindateEndMain));
  const [monthStart, setMonthStart] = React.useState(
    new Date(props.dateStartMonthMain)
  );
  const [monthEnd, setMonthEnd] = React.useState(
    new Date(props.dateEndMonthMain)
  );
  const [initialDateForSet, setInitialDateForSet] = useState("");
  const [listInitialDate, setListInitialDate] = useState([]);
  const [listAllInitialDate, setListAllInitialDate] = useState([]);
  const [resettingStatus, setResettingStatus] = useState(false);
  const [edittingStatus, setEdittingStatus] = useState(false);
  const [checkFetchStatus, setCheckFetchStatus] = useState(false);

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
      data: "Maintenance",
      color: "#1a237e",
      status: props.mainMStatus,
      handle: (e) => setMStatus(e.target.checked),
    },
    {
      id: 5,
      data: "Infected",
      color: "red",
      status: props.mainIStatus,
      handle: (e) => setIStatus(e.target.checked),
    },
    {
      id: 7,
      data: "Hospital",
      color: "purple",
      status: props.mainHStatus,
      handle: (e) => setHStatus(e.target.checked),
    },
    {
      id: 8,
      data: "Death",
      color: "black",
      status: props.mainDStatus,
      handle: (e) => setDStatus(e.target.checked),
    },
  ];
  const listData2 = [
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

  async function fetchDataMonth() {
    const getNewID = sessionStorage.getItem("id");
    if (props.mainperiod === "month" && props.maintypeData === "real") {
      await props.getAllRealDataMount(getNewID);
    } else if (props.mainperiod === "day" && props.maintypeData === "real") {
      await props.getAllRealDataDay(getNewID);
    } else if (props.mainperiod === "month" && props.maintypeData === "model") {
      await props.getAllModelDataMount(getNewID);
    } else if (props.mainperiod === "day" && props.maintypeData === "model") {
      await props.getAllModelDataDay(getNewID);
    }
  }

  function filterInitialValue(listAll, InitialDate) {
    //console.log("listAll, InitialDate", listAll, InitialDate);
    var tempfillter = [];
    if (listAll && InitialDate) {
      for (let i = 0; i < listAll.length; i++) {
        if (listAll[i].name === InitialDate) {
          tempfillter = listAll[i];
        }
      }
    }
    return tempfillter;
  }

  function listForSelectInitialValue(listAll) {
    var tempListInitialSelect = [];
    var tempListInitialSelectReturn = [];
    if (listAll) {
      for (let i = 0; i < listAll.length; i++) {
        tempListInitialSelect.push(listAll[i].name);
      }
      let data = tempListInitialSelect.sort();
      for (let i = 0; i < data.length; i++) {
        tempListInitialSelectReturn.push({
          label: data[i],
          value: data[i],
        });
      }
    }

    return tempListInitialSelectReturn;
  }

  let initialValueDataConfig = [
    {
      name: "zeta2",
      des: "The covid-19 dissese mortality rate for individuals in the infected rate",
      symbol: <span>&#950;2</span>,
      value: zetaH,
      setValue: (event) => setZetaH(event.target.value),
    },
    {
      name: "zeta1",
      des: "The covid-19 dissese mortality rate for individuals in the infected rate",
      symbol: <span>&#950;1</span>,
      value: zetaS,
      setValue: (event) => setZetaS(event.target.value),
    },
    {
      name: "omega1",
      des: "The performance of vacination first doses",
      symbol: <span>&#969;1</span>,
      value: omega1,
      setValue: (event) => setOmega1(event.target.value),
    },
    {
      name: "omega2",
      des: "The performance of vacination second doses",
      symbol: <span>&#969;2</span>,
      value: omega2,
      setValue: (event) => setOmega2(event.target.value),
    },
    {
      name: "omega3",
      des: "The performance of vacination second doses",
      symbol: <span>&#969;3</span>,
      value: omega3,
      setValue: (event) => setOmega3(event.target.value),
    },
    {
      name: "epsilon1",
      des: "The effective of covid-19 vacine rate first doses",
      symbol: <span>&#949;1</span>,
      value: epsilon1,
      setValue: (event) => setEpsilon1(event.target.value),
    },
    {
      name: "epsilon2",
      des: "The effective of covid-19 vacine rate second doses",
      symbol: <span>&#949;2</span>,
      value: epsilon2,
      setValue: (event) => setEpsilon2(event.target.value),
    },
    {
      name: "mu",
      des: "The natural death rate of all individual",
      symbol: <span>&#956;</span>,
      value: mu,
      setValue: (event) => setMu(event.target.value),
    },
    {
      name: "alpha",
      des: "The hospital rate for infected",
      symbol: <span>&#945;</span>,
      value: alpha,
      setValue: (event) => setAlpha(event.target.value),
    },
    {
      name: "lambda2",
      des: "The recovery rate of infected",
      symbol: <span>&#955;2</span>,
      value: lambdaH,
      setValue: (event) => setLambdaH(event.target.value),
    },
    {
      name: "lambda1",
      des: "The recovery rate of infected",
      symbol: <span>&#955;1</span>,
      value: lambdaS,
      setValue: (event) => setLambdaS(event.target.value),
    },
    {
      name: "beta",
      des: "The effective contact rate",
      symbol: <span>&#946;</span>,
      value: beta,
      setValue: (event) => setBeta(event.target.value),
    },
  ];

  async function getAllIntialValue() {
    const getNewID = sessionStorage.getItem("id");
    let initialTemp = await getAllInitial(getNewID);
    // console.log("initialTemp", initialTemp);
    setListAllInitialDate(initialTemp);

    const tempListInitialDate = listForSelectInitialValue(initialTemp);
    // console.log("tempListInitialDate", tempListInitialDate);
    setListInitialDate(tempListInitialDate);
    setInitialDateForSet(tempListInitialDate[0].value);
  }

  useEffect(() => {
    const getNewID = sessionStorage.getItem("id");
    if (getNewID) {
      getAllIntialValue();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkFetchStatus, props.userID]);
  // useEffect(() => {
  //   const getNewID = sessionStorage.getItem("id");
  //   if (getNewID) {
  //     getAllIntialValue();
  //   }

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  async function parameterChange() {
    const tempConfig = filterInitialValue(
      listAllInitialDate,
      initialDateForSet
    );
    // console.log("tempConfig", tempConfig);
    setAlpha(tempConfig.alpha);
    setBeta(tempConfig.beta);
    setEpsilon1(tempConfig.epsilon1);
    setEpsilon2(tempConfig.epsilon2);
    setLambdaH(tempConfig.lambdah);
    setLambdaS(tempConfig.lambdas);
    setMu(tempConfig.mu);
    setOmega1(tempConfig.omega1);
    setOmega2(tempConfig.omega2);
    setOmega3(tempConfig.omega3);
    setZetaH(tempConfig.zetah);
    setZetaS(tempConfig.zetas);
  }

  useEffect(() => {
    parameterChange();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialDateForSet, listAllInitialDate, checkFetchStatus]);

  const handleInitialDateForSet = (event) => {
    setInitialDateForSet(event.target.value);
  };

  const handleDialogOpen = () => {
    setDialogStatus(true);
  };

  const handleResetDefault = async () => {
    const getNewID = sessionStorage.getItem("id");
    setDialogStatus(false);
    setResettingStatus(true);
    await resetInitial(getNewID);
    await getAllIntialValue();
    await parameterChange();
    await setCheckFetchStatus(!checkFetchStatus);
    await fetchDataMonth();
    await setResettingStatus(false);
  };

  const handleDialogClose = () => {
    const tempConfig = filterInitialValue(
      listAllInitialDate,
      initialDateForSet
    );
    // console.log("tempConfig", tempConfig);
    setAlpha(tempConfig.alpha);
    setBeta(tempConfig.beta);
    setEpsilon1(tempConfig.epsilon1);
    setEpsilon2(tempConfig.epsilon2);
    setLambdaH(tempConfig.lambdah);
    setLambdaS(tempConfig.lambdas);
    setMu(tempConfig.mu);
    setOmega1(tempConfig.omega1);
    setOmega2(tempConfig.omega2);
    setOmega3(tempConfig.omega3);
    setZetaH(tempConfig.zetah);
    setZetaS(tempConfig.zetas);
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

  const handleDateStart = (newDate) => {
    setDateStart(newDate);

    props.configDateStartMain(newDate);
  };

  const handleDateEnd = (newDate) => {
    setDateEnd(newDate);

    props.configDateEndMain(newDate);
  };
  const handleMonthStart = (newMonth) => {
    // console.log("newMonth", newMonth);
    setMonthStart(newMonth);

    props.configDateStartMonthMain(newMonth);
  };
  const handleMonthEnd = (newMonth) => {
    // console.log("newMonth", newMonth);
    setMonthEnd(newMonth);

    props.configDateEndMonthMain(newMonth);
  };

  const handleTypeData = async (event, newTypedata) => {
    console.log("newPeriod ++", newTypedata);
    setTypeData(newTypedata);
    props.configDataTypeGraph(newTypedata);
  };

  function checkValueChange(alldata, currentdata) {
    var checkDataInitialChange = "";
    const tempConfig = {
      alpha: alpha,
      beta: beta,
      epsilon1: epsilon1,
      epsilon2: epsilon2,
      lambdah: lambdaH,
      lambdas: lambdaS,
      mu: mu,
      name: initialDateForSet,
      omega1: omega1,
      omega2: omega2,
      omega3: omega3,
      zetah: zetaH,
      zetas: zetaS,
    };

    for (let i = 0; i < alldata.length; i++) {
      if (alldata[i].name === currentdata) {
        checkDataInitialChange = alldata[i];
      }
    }

    var checkDataInitialChangeReturn =
      JSON.stringify(checkDataInitialChange) === JSON.stringify(tempConfig);
    // console.log("checkDataInitialChangeReturn", checkDataInitialChangeReturn);
    return checkDataInitialChangeReturn;
  }

  async function editInitialValueByDate() {
    const getNewID = sessionStorage.getItem("id");
    editInitialByDate({
      start_date: initialDateForSet,
      alpha: alpha,
      beta: beta,
      epsilon1: epsilon1,
      epsilon2: epsilon2,
      lambdah: lambdaH,
      lambdas: lambdaS,
      mu: mu,
      omega1: omega1,
      omega2: omega2,
      omega3: omega3,
      zetah: zetaH,
      zetas: zetaS,
      id: getNewID,
    });
  }

  const handleCheck = async () => {
    const newStatus = {
      S: SStatus,
      V1: V1Status,
      V2: V2Status,
      M: MStatus,
      I: IStatus,
      //R: RStatus,
      H: HStatus,
      D: DStatus,
    };

    props.configGraphDisplay(newStatus);
    handleDialogClose();
    let checkChange = await checkValueChange(
      listAllInitialDate,
      initialDateForSet
    );
    //const getNewID = sessionStorage.getItem("id");
    if (!checkChange) {
      setEdittingStatus(true);
      await editInitialValueByDate();
      await getAllIntialValue();
      await parameterChange();
      // await setCheckFetchStatus(!checkFetchStatus);
      // const fetchDataAfterEdit =
      await fetchDataMonth();
      // await console.log("edit fetchDataMonth", fetchDataAfterEdit);
      await setEdittingStatus(false);
      // await setCheckFetchStatus(!checkFetchStatus);
    }
  };

  useEffect(() => {
    fetchDataMonth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // typeData,
    props.maintypeData,
    props.mainperiod,
    checkFetchStatus,
    listAllInitialDate,
    props.userID,
  ]);

  // useEffect(() => {
  //   fetchDataMonth();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    setDateStart(new Date(props.maindateStartMain));
    setDateEnd(new Date(props.maindateEndMain));
    setMonthStart(new Date(props.dateStartMonthMain));
    setMonthEnd(new Date(props.dateEndMonthMain));
    // console.log("check dateEndMonthMain+++", new Date(props.dateEndMonthMain));
  }, [
    props.maindateEndMain,
    props.maindateStartMain,
    props.dateEndMonthMain,
    props.dateStartMonthMain,
  ]);

  // useEffect(() => {
  //   setDateStart(props.maindateStartMain);
  //   setDateEnd(props.maindateEndMain);
  //   setMonthStart(props.dateStartMonthMain);
  //   setMonthEnd(props.dateEndMonthMain);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  useEffect(() => {
    async function fetchDailyData() {
      await props.getAllDailyData();
    }
    fetchDailyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container maxWidth="xxl" style={{ marginTop: 65 }}>
      <Container maxWidth="xxl" style={{ paddingTop: 30 }}>
        <Grid container justifyContent="center" spacing={3}>
          {setdailyDataTemplate.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Paper
                style={{
                  //minHeight: 230,
                  padding: 30,
                  height: "100%",
                }}
                variant="outlined"
                square
                sx={{
                  display: {
                    xs: "none",
                    sm: "none",
                    md: "block",
                    lg: "none",
                    xl: "none",
                  },
                }}
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
                    xs={9}
                    sm={9}
                    md={9}
                    lg={9}
                    xl={9}
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
                    xs={3}
                    sm={3}
                    md={3}
                    lg={3}
                    xl={3}
                    style={{ textAlign: "center" }}
                  >
                    <img
                      width="100%"
                      height="auto"
                      src={data.icon}
                      alt="icon"
                    />
                  </Grid>
                </Grid>
              </Paper>
              <Paper
                style={{
                  minHeight: 100,
                  padding: 30,
                }}
                variant="outlined"
                square
                sx={{
                  display: {
                    xs: "block",
                    sm: "block",
                    md: "none",
                    lg: "block",
                    xl: "block",
                  },
                }}
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
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={3}
            >
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
                      minDate={new Date(props.initialMinDate)}
                      maxDate={new Date(props.initialMaxDate)}
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
                      minDate={new Date(props.initialMinDate)}
                      maxDate={new Date(props.initialMaxDate)}
                      value={monthEnd}
                      // todayText="Today"
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
          <MainGraph
          // tempDataService={tempDataService}
          />
        </Paper>
      </Container>
      <TableModel />

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
          {typeData === "model" ? (
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {listData.map((data) => (
                <Grid item key={data.key}>
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
          ) : (
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              {listData2.map((data) => (
                <Grid item key={data.name}>
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
          )}

          {typeData === "model" ? (
            <Divider style={{ marginTop: 10, marginBottom: 10 }} />
          ) : null}
          {typeData === "model" ? (
            <Grid container spacing={3}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="subtitle1">
                    Input values to generate a new graph
                  </Typography>
                  <TextField
                    select
                    label="Select Date"
                    size="small"
                    value={initialDateForSet}
                    onChange={handleInitialDateForSet}
                    style={{ minWidth: 160 }}
                  >
                    {listInitialDate.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
              {initialValueDataConfig.map((item) => (
                <Grid item key={item.name} xs={4} sm={4} md={4} lg={4} xl={4}>
                  <TextField
                    label={
                      <span>
                        {item.symbol} ({item.name})
                      </span>
                    }
                    value={item.value}
                    onChange={item.setValue}
                    type="number"
                    variant="outlined"
                    maxWidth
                  />
                </Grid>
              ))}
            </Grid>
          ) : null}
        </DialogContent>
        <DialogActions>
          {typeData === "model" ? (
            <Grid item style={{ flexGrow: 1 }}>
              <Button
                onClick={handleResetDefault}
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: "grey",
                }}
              >
                Reset Default Value
              </Button>
            </Grid>
          ) : null}

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
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 100 }}
        open={resettingStatus}
        //onClick={handleCloseBackdrop}
      >
        <Box sx={{ width: "30%" }}>
          <div
            style={{
              //color: "#0091ea",
              textAlign: "center",
              fontSize: "2vw",
              fontFamily: "IBM Plex Sans Thai Looped",
              fontWeight: "400",
            }}
          >
            Reseting...
          </div>
          <LinearProgress />
        </Box>
      </Backdrop>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 100 }}
        open={edittingStatus}
      >
        <Box sx={{ width: "30%" }}>
          <div
            style={{
              //color: "#0091ea",
              textAlign: "center",
              fontSize: "2vw",
              fontFamily: "IBM Plex Sans Thai Looped",
              fontWeight: "400",
            }}
          >
            Editing...
          </div>
          <LinearProgress />
        </Box>
      </Backdrop>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userID: state.reducer.userID,
    mainperiod: state.reducer.periodMain,
    maintypeData: state.reducer.typeData,
    mainSStatus: state.reducer.SStatus,
    mainV1Status: state.reducer.V1Status,
    mainV2Status: state.reducer.V2Status,
    mainIStatus: state.reducer.IStatus,
    mainRStatus: state.reducer.RStatus,
    mainHStatus: state.reducer.HStatus,
    mainDStatus: state.reducer.DStatus,
    mainMStatus: state.reducer.MStatus,
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

    dateStartMonthMain: state.reducer.dateStartMonthMain,
    dateEndMonthMain: state.reducer.dateEndMonthMain,
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

    getAllRealDataMount: (id) => {
      return dispatch(actions.getRealDataMount(id));
    },
    getAllRealDataDay: (id) => {
      return dispatch(actions.getRealDataDay(id));
    },
    getAllModelDataMount: (id) => {
      return dispatch(actions.getModelDataMount(id));
    },
    getAllModelDataDay: (id) => {
      return dispatch(actions.getModelDataDay(id));
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

export default connect(mapStateToProps, mapDispatchToProps)(GraphPage);
