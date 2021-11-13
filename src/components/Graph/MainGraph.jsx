import React, { PureComponent } from "react";
import * as actions from "../../middleware/action";
import { connect } from "react-redux";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    Susceptible: 4000,
    Vaccines1: 2400,
    Vaccines2: 2400,
    Infected: 100,
    Recovery: 1,
    Hospital: 1,
    Death: 1,
  },
  {
    name: "Feb",
    Susceptible: 3000,
    Vaccines1: 1398,
    Vaccines2: 2210,
    Infected: 200,
    Recovery: 1,
    Hospital: 1,
    Death: 1,
  },
  {
    name: "Mar",
    Susceptible: 2000,
    Vaccines1: 9800,
    Vaccines2: 2290,
    Infected: 400,
    Recovery: 1,
    Hospital: 1,
    Death: 12,
  },
  {
    name: "Apr",
    Susceptible: 2780,
    Vaccines1: 3908,
    Vaccines2: 2000,
    Infected: 600,
    Recovery: 1,
    Hospital: 1,
    Death: 19,
  },
  {
    name: "May",
    Susceptible: 1890,
    Vaccines1: 4800,
    Vaccines2: 2181,
    Infected: 900,
    Recovery: 1,
    Hospital: 1,
    Death: 15,
  },
  {
    name: "Jun",
    Susceptible: 2390,
    Vaccines1: 3800,
    Vaccines2: 2500,
    Infected: 350,
    Recovery: 1,
    Hospital: 1,
    Death: 10,
  },
  {
    name: "Jul",
    Susceptible: 3490,
    Vaccines1: 4300,
    Vaccines2: 2100,
    Infected: 700,
    Recovery: 1,
    Hospital: 1,
    Death: 1,
  },
];

class MainGraph extends PureComponent {
  // static demoUrl = "https://codesandbox.io/Susceptible/customized-legend-event-l19fo";

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

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={445}>
          <LineChart
            width={500}
            height={300}
            data={data}
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
            {this.props.mainSStatus ? (
              <Line
                type="monotone"
                dataKey="Susceptible"
                stroke="#039be5"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainV1Status ? (
              <Line
                type="monotone"
                dataKey="Vaccines1"
                stroke="#ffd600"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainV2Status ? (
              <Line
                type="monotone"
                dataKey="Vaccines2"
                stroke="orange"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainIStatus ? (
              <Line
                type="monotone"
                dataKey="Infected"
                stroke="#f44336
              "
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainRStatus ? (
              <Line
                type="monotone"
                dataKey="Recovery"
                stroke="green"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainHStatus ? (
              <Line
                type="monotone"
                dataKey="Hospital"
                stroke="purple"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainDStatus ? (
              <Line
                type="monotone"
                dataKey="Death"
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
  return {
    testEditstate: (d) => {
      return dispatch(actions.testGet(d));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainGraph);
