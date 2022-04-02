import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

class MainGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //covidData: props.tempDataService,
      covidData: props.mainTempData,
      dataFilterd: [],
      mainSStatus: props.mainSStatus,
      mainV1Status: props.mainV1Status,
      mainV2Status: props.mainV2Status,
      mainIStatus: props.mainIStatus,
      mainRStatus: props.mainRStatus,
      mainHStatus: props.mainHStatus,
      mainDStatus: props.mainDStatus,
      mainMStatus: props.mainMStatus,
    };
  }

  handleMouseEnter = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 0.5 },
    });
  };

  handleMouseLeave = (o) => {
    const { dataKey } = o;
    const { opacity } = this.state;

    this.setState({
      opacity: { ...opacity, [dataKey]: 1 },
    });
  };

  filterRangeByDate = (data) => {
    var returndata = [];
    if (data) {
      var startDate = new Date(this.props.maindateStartMain);
      var endDate = new Date(this.props.maindateEndMain);
      var endDateNext = endDate.setDate(endDate.getDate() + 1);
      var dateAfterFilter = data.filter((a) => {
        var date = new Date(a.name);
        return date >= startDate && date <= endDateNext;
      });
      returndata = dateAfterFilter;
    } else {
      returndata.push({
        Deaths: 0,
        Hospital: 0,
        Infected: 0,
        Maintenance: 0,
        Susceptible: 0,
        Vaccine1: 0,
        Vaccine2: 0,
        name: "nodata",
      });
    }
    return returndata;
  };

  monthFilter = (dataMonth) => {
    var returndata = [];
    if (dataMonth) {
      let startMonth = this.props.dateStartMonthMain;
      let endMonth = this.props.dateEndMonthMain;

      var dateAfterFilter = dataMonth.filter((a) => {
        var date = new Date("1-" + a.name.split("-").join(" "));
        return date >= startMonth && date <= endMonth;
      });

      returndata = dateAfterFilter;
    } else {
      returndata.push({
        Deaths: 0,
        Hospital: 0,
        Infected: 0,
        Maintenance: 0,
        Susceptible: 0,
        Vaccine1: 0,
        Vaccine2: 0,
        name: "nodata",
      });
    }
    return returndata;
  };

  componentDidUpdate(prevProps) {
    if (prevProps.mainSStatus !== this.props.mainSStatus) {
      this.setState({
        mainSStatus: this.props.mainSStatus,
      });
    }

    if (prevProps.mainV1Status !== this.props.mainV1Status) {
      this.setState({
        mainV1Status: this.props.mainV1Status,
      });
    }
    if (prevProps.mainV2Status !== this.props.mainV2Status) {
      this.setState({
        mainV2Status: this.props.mainV2Status,
      });
    }
    if (prevProps.mainMStatus !== this.props.mainMStatus) {
      this.setState({
        mainMStatus: this.props.mainMStatus,
      });
    }
    if (prevProps.mainIStatus !== this.props.mainIStatus) {
      this.setState({
        mainIStatus: this.props.mainIStatus,
      });
    }

    if (prevProps.mainHStatus !== this.props.mainHStatus) {
      this.setState({
        mainHStatus: this.props.mainHStatus,
      });
    }
    if (prevProps.mainDStatus !== this.props.mainDStatus) {
      this.setState({
        mainDStatus: this.props.mainDStatus,
      });
    }
    if (prevProps.mainTempData !== this.props.mainTempData) {
      this.setState({
        covidData: this.props.mainTempData,
      });
    }
    // if (prevProps.tempDataService !== this.props.tempDataService) {
    //   this.setState({
    //     covidData: this.props.tempDataService,
    //   });
    // }
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="98%" height={445}>
          <LineChart
            width={500}
            height={300}
            data={
              this.props.mainperiod === "day"
                ? this.filterRangeByDate(this.state.covidData)
                : this.monthFilter(this.state.covidData)
            }
            margin={{
              top: 5,
              right: 30,
              left: 38,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {this.state.mainSStatus ? (
              <Line
                type="monotone"
                dataKey="Susceptible"
                stroke="#039be5"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainV1Status ? (
              <Line
                type="monotone"
                dataKey="Vaccine1"
                stroke="#ffd600"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainV2Status ? (
              <Line
                type="monotone"
                dataKey="Vaccine2"
                stroke="orange"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainMStatus ? (
              <Line
                type="monotone"
                dataKey="Maintenance"
                stroke="#1a237e"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainIStatus ? (
              <Line
                type="monotone"
                dataKey="Infected"
                stroke="#f44336
              "
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}

            {this.state.mainHStatus ? (
              <Line
                type="monotone"
                dataKey="Hospital"
                stroke="purple"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainDStatus ? (
              <Line
                type="monotone"
                dataKey="Deaths"
                stroke="black"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

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
    mainMStatus: state.reducer.MStatus,
    maindateStartMain: state.reducer.dateStartMain,
    maindateEndMain: state.reducer.dateEndMain,

    mainTempData: state.reducer.tempData,
    mainRealDataMonth: state.reducer.realDataMonth,
    mainRealDataDay: state.reducer.realDataDay,
    mainModelDataMonth: state.reducer.modelDataMonth,
    mainModelDataDay: state.reducer.modelDataDay,

    minDateMonth: state.reducer.minDateMonth,
    maxDateMonth: state.reducer.maxDateMonth,

    dateStartMonthMain: state.reducer.dateStartMonthMain,
    dateEndMonthMain: state.reducer.dateEndMonthMain,
    listForRemove: state.reducer.listForRemove,
  };
};

export default connect(mapStateToProps, null)(MainGraph);
