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
      covidData: props.mainTempData,
      dataFilterd: [],
      mainSStatus: props.mainSStatus,
      mainV1Status: props.mainV1Status,
      mainV2Status: props.mainV2Status,
      mainIStatus: props.mainIStatus,
      mainRStatus: props.mainRStatus,
      mainHStatus: props.mainHStatus,
      mainDStatus: props.mainDStatus,
    };
  }

  state = {
    opacity: {
      Susceptible: 1,
      Vaccine1: 1,
      Vaccine2: 1,
      Infected: 1,
      Recovery: 1,
      Hospital: 1,
      Deaths: 1,
    },
  };

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
    var startDate = new Date(this.props.maindateStartMain);
    var endDate = new Date(this.props.maindateEndMain);

    var dateAfterFilter = data.filter((a) => {
      var date = new Date(a.name);
      return date >= startDate && date <= endDate;
    });
    console.log("dateAfterFilter", dateAfterFilter);
    return dateAfterFilter;
  };

  monthFilter = (dataMonth) => {
    let startMonth = this.props.dateStartMonthMain;
    let endMonth = this.props.dateEndMonthMain;

    var dateAfterFilter = dataMonth.filter((a) => {
      var date = new Date(a.name);
      return date >= startMonth && date <= endMonth;
    });
    return dateAfterFilter;
  };

  removeProperty = (coviddata) => {
    for (let i = 0; i < coviddata.length; i++) {
      let newcoviddata = coviddata[i];
      this.props.listForRemove.forEach((e) => delete newcoviddata[e]);
    }
    return coviddata;
    // console.log("newdata : ", coviddata);
  };

  componentDidUpdate(prevProps) {
    if (prevProps.mainSStatus !== this.props.mainSStatus) {
      // const mydata = this.removeProperty(this.state.covidData);
      // console.log("mydata", mydata);
      this.setState({
        mainSStatus: this.props.mainSStatus,
        // covidData: mydata,
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
    if (prevProps.mainIStatus !== this.props.mainIStatus) {
      this.setState({
        mainIStatus: this.props.mainIStatus,
      });
    }
    if (prevProps.mainRStatus !== this.props.mainRStatus) {
      this.setState({
        mainRStatus: this.props.mainRStatus,
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
    // if (prevProps.mainTempData !== this.props.mainTempData) {
    //   // const mydata = this.removeProperty(this.state.covidData);
    //   // console.log("mydata", mydata);
    //   this.setState({
    //     covidData: this.props.mainTempData,
    //     // covidData: mydata,
    //   });
    // }
  }

  render() {
    // const { opacity } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={445}>
          <LineChart
            width={500}
            height={300}
            data={
              this.props.mainperiod === "day"
                ? this.filterRangeByDate(this.props.mainTempData)
                : this.monthFilter(this.props.mainTempData)
            }
            margin={{
              top: 5,
              right: 30,
              left: 20,
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
            {this.state.mainRStatus ? (
              <Line
                type="monotone"
                dataKey="Recovery"
                stroke="green"
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

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(MainGraph);
