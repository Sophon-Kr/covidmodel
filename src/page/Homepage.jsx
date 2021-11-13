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
import TextField from "@mui/material/TextField";
import { getdailyData } from "../services/dailyData.service";

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

  const handleTypeData = (event, newPeriod) => {
    setTypeData(newPeriod);
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

  useEffect(() => {
    async function fetchData() {
      let _getDailydata = await getdailyData();
      setdailyDataAPI(_getDailydata);
      console.log("_getDailydata ==", _getDailydata);
    }
    fetchData();
    // console.log("dailyDataAPI", dailyDataAPI);
  }, []);

  // const tt = props.getTest;
  // const ndt = props.testEditstate;
  // const handledata = () => {
  //   console.log("tt ==== ", props);
  // };

  // const setredux = (dispatch) => {
  //   let d = "Change new data";
  //   props.testEditstate(d);
  // };

  return (
    <Container maxWidth="xxl">
      <Container maxWidth="xxl" style={{ paddingTop: 30 }}>
        <Grid container justifyContent="center" spacing={3}>
          {setdailyDataTemplate.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Paper
                style={{
                  minHeight: 100,
                  padding: 30,
                  // borderColor: "red",
                }}
                variant="outlined"
                square
              >
                {data.data}
                {data.dataAPI}
              </Paper>
              <Divider style={{ backgroundColor: data.color, padding: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="xxl" style={{ paddingTop: 30 }}>
        <Paper variant="outlined" square style={{ padding: 35 }}>
          {/* <Button variant="contained" onClick={handledata}>
            test console-log
          </Button>
          <Button variant="contained" onClick={setredux}>
            test dispath
          </Button> */}
          {/* <Grid
            container
            style={{
              backgroundColor: "#AED6F1",
              padding: 20,
              marginBottom: 20,
            }}
          >
            real data เอาทุกตัวแปร
          </Grid> */}
          <Grid
            container
            style={{
              // backgroundColor: "#AED6F1",
              padding: 10,
              marginBottom: 35,
            }}
          >
            {/* real data model data{" "} */}
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
                  value={typeData}
                  exclusive
                  onChange={handleTypeData}
                >
                  <ToggleButton value="real">
                    &nbsp;Real Data&nbsp;
                  </ToggleButton>
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
            style={{ color: "white", backgroundColor: "#0091ea" }}
          >
            Save Config
          </Button>
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
    getTest: state.reducer.testdata,
    getMydata: state.reducer.mydata,
    mainperiod: state.reducer.period,
    maintypeData: state.reducer.typeData,
    mainSStatus: state.reducer.SStatus,
    mainV1Status: state.reducer.V1Status,
    mainV2Status: state.reducer.V2Status,
    mainIStatus: state.reducer.IStatus,
    mainRStatus: state.reducer.RStatus,
    mainHStatus: state.reducer.HStatus,
    mainDStatus: state.reducer.DStatus,
  };
};

const mapDispatchToProps = (dispatch) => {
  // return bindActionCreators(actions, dispatch);
  return {
    testEditstate: (d) => {
      return dispatch(actions.testGet(d));
    },
    configGraphDisplay: (newStatus) => {
      return dispatch(actions.configGraphLine(newStatus));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
