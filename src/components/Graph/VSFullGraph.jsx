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

class VSFullGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      //covidData: props.mainTempData,
      mainVS: props.mainVS,
      mainStateVsData: props.mainVsData,
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
    var returndata = [];
    if (data) {
      var startDate = new Date(this.props.maindateStartMain);
      var endDate = new Date(this.props.maindateEndMain);
      var endDateNext = endDate.setDate(endDate.getDate() + 1);
      var dateAfterFilter = data.filter((a) => {
        var date = new Date(a.name);
        return date >= startDate && date <= endDateNext;
      });
      returndata.push(dateAfterFilter);
    } else {
      returndata.push([
        {
          DeathModelData: 0,
          DeathRawData: 0,
          HospitalizeModelData: 0,
          HospitalizeRawData: 0,
          InfectionModelData: 0,
          InfectionRawData: 0,
          MaintenanceShotModelData: 0,
          MaintenanceShotRawData: 0,
          SusceptibleModelData: 0,
          SusceptibleRawData: 0,
          Vaccines1ModelData: 0,
          Vaccines1RawData: 0,
          Vaccines2ModelData: 0,
          Vaccines2RawData: 0,
          name: "nodata",
        },
      ]);
    }
    return returndata[0];
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
      returndata.push(dateAfterFilter);
    } else {
      returndata.push([
        {
          DeathModelData: 0,
          DeathRawData: 0,
          HospitalizeModelData: 0,
          HospitalizeRawData: 0,
          InfectionModelData: 0,
          InfectionRawData: 0,
          MaintenanceShotModelData: 0,
          MaintenanceShotRawData: 0,
          SusceptibleModelData: 0,
          SusceptibleRawData: 0,
          Vaccines1ModelData: 0,
          Vaccines1RawData: 0,
          Vaccines2ModelData: 0,
          Vaccines2RawData: 0,
          name: "nodata",
        },
      ]);
    }
    return returndata[0];
  };

  componentDidUpdate(prevProps) {
    if (prevProps.mainVS !== this.props.mainVS) {
      this.setState({
        mainVS: this.props.mainVS,
      });
    }
    if (prevProps.mainVsData !== this.props.mainVsData) {
      this.setState({
        mainStateVsData: this.props.mainVsData,
      });
    }
  }

  render() {
    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer
          width="98%"
          height={window.innerHeight - (window.innerHeight * 15) / 100}
        >
          <LineChart
            width={500}
            height={300}
            data={
              this.props.period === "day"
                ? this.filterRangeByDate(this.state.mainStateVsData)
                : this.monthFilter(this.state.mainStateVsData)
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
                dataKey="InfectionModelData"
                stroke="#ff8a80"
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
    dateStartMonthMain: state.reducer.dateStartMonthMain,
    dateEndMonthMain: state.reducer.dateEndMonthMain,
    mainVS: state.reducer.VS,
    mainVsData: state.reducer.vsData,
  };
};

// const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, null)(VSFullGraph);
