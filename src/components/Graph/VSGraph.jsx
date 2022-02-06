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

class VSGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      covidData: props.mainTempData,
      mainVS: props.mainVS,
      mainVsData: props.mainVsData,
    };
  }
  state = {
    opacity: {
      Susceptible: 1,
      Vaccines1: 1,
      Vaccines2: 1,
      Infected: 1,
      Recovery: 1,
      Hospital: 1,
      Death: 1,
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
    var startMonth = new Date(this.props.maindateStartMain);
    var endMonth = new Date(this.props.maindateEndMain);
    var dateAfterFilter = dataMonth.filter((a) => {
      var date = new Date(a.name);
      return date >= startMonth && date <= endMonth;
    });

    return dateAfterFilter;
  };

  componentDidUpdate(prevProps) {
    console.log("props.mainVsData,", this.state.mainVsData);
    if (prevProps.c !== this.props.mainVS) {
      this.setState({
        mainVS: this.props.mainVS,
      });
    }
    if (prevProps.mainVsData !== this.props.mainVsData) {
      this.setState({
        mainVsData: this.props.mainVsData,
      });
    }
  }

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={445}>
          <LineChart
            width={500}
            height={300}
            data={
              this.props.period === "day"
                ? this.filterRangeByDate(this.state.mainVsData)
                : this.monthFilter(this.state.mainVsData)
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
            {this.state.mainVS === "S" ? (
              <Line
                type="monotone"
                dataKey="SusceptibleRawData"
                stroke="#1565c0"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "S" ? (
              <Line
                type="monotone"
                dataKey="SusceptibleModelData"
                stroke="#2196f3"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "V1" ? (
              <Line
                type="monotone"
                dataKey="Vaccines1RawData"
                stroke="#ffd600"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "V1" ? (
              <Line
                type="monotone"
                dataKey="Vaccines1ModelData"
                stroke="#ffff00"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "V2" ? (
              <Line
                type="monotone"
                dataKey="Vaccines2RawData"
                stroke="#ff6d00"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "V2" ? (
              <Line
                type="monotone"
                dataKey="Vaccines2ModelData"
                stroke="#ffab40"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "I" ? (
              <Line
                type="monotone"
                dataKey="InfectionRawData"
                stroke="#d50000"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "I" ? (
              <Line
                type="monotone"
                dataKey="RecoveryModelData"
                stroke="#ff8a80"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "R" ? (
              <Line
                type="monotone"
                dataKey="RecoveryRawData"
                stroke="#1b5e20"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "R" ? (
              <Line
                type="monotone"
                dataKey="RecoveryModelData"
                stroke="#69f0ae"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "H" ? (
              <Line
                type="monotone"
                dataKey="HospitalizeRawData"
                stroke="#6a1b9a"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "H" ? (
              <Line
                type="monotone"
                dataKey="HospitalizeModelData"
                stroke="#ea80fc"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "D" ? (
              <Line
                type="monotone"
                dataKey="DeathRawData"
                stroke="#212121"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.state.mainVS === "D" ? (
              <Line
                type="monotone"
                dataKey="DeathModelData"
                stroke="#bdbdbd"
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
    maindateStartMain: state.reducer.dateStartMain,
    maindateEndMain: state.reducer.dateEndMain,

    mainVS: state.reducer.VS,
    mainVsData: state.reducer.vsData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // testEditstate: (d) => {
    //   return dispatch(actions.testGet(d));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VSGraph);
