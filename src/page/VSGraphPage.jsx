import React, { useState, useEffect } from "react";
import * as actions from "../middleware/action";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import EventNoteIcon from "@mui/icons-material/EventNote";
import FullscreenRoundedIcon from "@mui/icons-material/FullscreenRounded";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import TableVS from "../components/Table/TableVS";
import VSGraph from "../components/Graph/VSGraph";
import VSFullGraph from "../components/Graph/VSFullGraph";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const VSGraphPage = (props) => {
  const [fullGraph, setFullGraph] = useState(false);
  const [period, setPeriod] = React.useState("month");

  const [dateStart, setDateStart] = React.useState(props.maindateStartMain);
  const [dateEnd, setDateEnd] = React.useState(props.maindateEndMain);
  const [monthStart, setMonthStart] = React.useState(props.initialMinDate);
  const [monthEnd, setMonthEnd] = React.useState(props.initialMaxDate);

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
      value: "H",
      label: "Hospital",
    },
    {
      value: "D",
      label: "Death",
    },
  ];

  const handlePeriod = (event, newPeriod) => {
    setPeriod(newPeriod);
    if (newPeriod === "day") {
      props.getVSDataDay();
    } else if (newPeriod === "month") {
      props.getVSDataMount();
    }
  };

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

  const handleMonthStart = (newMonth) => {
    setMonthStart(newMonth);
    props.configDateStartMonthMain(newMonth);
  };
  const handleMonthEnd = (newMonth) => {
    setMonthEnd(newMonth);
    props.configDateEndMonthMain(newMonth);
  };

  useEffect(() => {
    setDateStart(props.maindateStartMain);
    setDateEnd(props.maindateEndMain);
  }, [props.maindateEndMain, props.maindateStartMain]);

  useEffect((period) => {
    props.getVSDataMount();
    props.configTypeVS("S");
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
              ) : period === "month" ? (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <Grid item>
                    <DatePicker
                      autoOk={true}
                      views={["month", "year"]}
                      label="Start Month"
                      minDate={props.initialMinDate}
                      maxDate={props.initialMaxDate}
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
      <TableVS period={period} />

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
            <VSFullGraph period={period} />
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
