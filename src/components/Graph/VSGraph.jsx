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
    Susceptible: 66162931,
    Vaccines1: 0,
    Vaccines2: 0,
    Infected: 11898,
    Recovery: 7375,
    Hospital: 4507,
    Death: 16,
  },
  {
    name: "Feb",
    Susceptible: 66172389,
    Vaccines1: 0,
    Vaccines2: 0,
    Infected: 7169,
    Recovery: 13513,
    Hospital: -6350,
    Death: 6,
  },
  {
    name: "Mar",
    Susceptible: 66022406,
    Vaccines1: 158497,
    Vaccines2: 33248,
    Infected: 2912,
    Recovery: 2298,
    Hospital: 603,
    Death: 11,
  },
  {
    name: "Apr",
    Susceptible: 65177414,
    Vaccines1: 936733,
    Vaccines2: 348600,
    Infected: 36290,
    Recovery: 8828,
    Hospital: 27353,
    Death: 109,
  },
  {
    name: "May",
    Susceptible: 64553188,
    Vaccines1: 1444261,
    Vaccines2: 743520,
    Infected: 94639,
    Recovery: 72091,
    Hospital: 21720,
    Death: 828,
  },
  {
    name: "Jun",
    Susceptible: 61416343,
    Vaccines1: 4571363,
    Vaccines2: 1691476,
    Infected: 99509,
    Recovery: 99134,
    Hospital: -614,
    Death: 992,
  },
  {
    name: "Jul",
    Susceptible: 58818693,
    Vaccines1: 6692062,
    Vaccines2: 1066214,
    Infected: 337986,
    Recovery: 184441,
    Hospital: 150711,
    Death: 2834,
  },
  {
    name: "Aug",
    Susceptible: 0,
    Vaccines1: 0,
    Vaccines2: 0,
    Infected: 607442,
    Recovery: 630071,
    Hospital: -29142,
    Death: 6732,
  },
  {
    name: "Sep",
    Susceptible: 0,
    Vaccines1: 0,
    Vaccines2: 0,
    Infected: 398746,
    Recovery: 448682,
    Hospital: -55293,
    Death: 513,
  },
];

const modelData = [
  {
    name: "Jan",
    "Susceptible(Real-Data)": 4300,
    "Susceptible(Model-Data)": 4000,
    "Susceptible(difference)": 300,
    "Susceptible(%difference)": 300,
    // "Vaccines2(Real-Data)": 2400,
    // Vaccines2(Model-Data): 2400,
    // Vaccines2(difference): 2400,
    // Vaccines2(%difference): 2400,
    // ...........
    // Infected: 100,
    // Recovery: 1,
    // Hospital: 1,
    // Death: 1,
  },
  {
    name: "Feb",
    "Susceptible(Real-Data)": 3000,
    "Susceptible(Model-Data)": 1398,
    // Vaccines2: 2210,
    // Infected: 200,
    // Recovery: 1,
    // Hospital: 1,
    // Death: 1,
  },
  {
    name: "Mar",
    "Susceptible(Real-Data)": 9000,
    "Susceptible(Model-Data)": 9800,
    // Vaccines2: 2290,
    // Infected: 400,
    // Recovery: 1,
    // Hospital: 1,
    // Death: 12,
  },
  {
    name: "Apr",
    "Susceptible(Real-Data)": 2780,
    "Susceptible(Model-Data)": 3908,
    // Vaccines2: 2000,
    // Infected: 600,
    // Recovery: 1,
    // Hospital: 1,
    // Death: 19,
  },
  {
    name: "May",
    "Susceptible(Real-Data)": 1890,
    "Susceptible(Model-Data)": 4800,
    // Vaccines2: 2181,
    // Infected: 900,
    // Recovery: 1,
    // Hospital: 1,
    // Death: 15,
  },
  {
    name: "Jun",
    "Susceptible(Real-Data)": 2390,
    "Susceptible(Model-Data)": 3800,
    // Vaccines2: 2500,
    // Infected: 350,
    // Recovery: 1,
    // Hospital: 1,
    // Death: 10,
  },
  {
    name: "Jul",
    "Susceptible(Real-Data)": 3490,
    "Susceptible(Model-Data)": 4300,
    // Vaccines2: 2100,
    // Infected: 700,
    // Recovery: 1,
    // Hospital: 1,
    // Death: 1,
  },
];

class VSGraph extends PureComponent {
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
            data={this.props.maintypeData === "model" ? modelData : data}
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
                dataKey="Susceptible(Real-Data)"
                stroke="#1565c0"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainV1Status ? (
              <Line
                type="monotone"
                dataKey="Susceptible(Model-Data)"
                stroke="#2196f3"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {/* {this.props.mainV2Status ? (
              <Line
                type="monotone"
                dataKey="Vaccines2"
                stroke="orange"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null} */}
            {/* {this.props.mainIStatus ? (
              <Line
                type="monotone"
                dataKey="Infected"
                stroke="#f44336
              "
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null} */}
            {/* {this.props.mainRStatus ? (
              <Line
                type="monotone"
                dataKey="Recovery"
                stroke="green"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null} */}
            {/* {this.props.mainHStatus ? (
              <Line
                type="monotone"
                dataKey="Hospital"
                stroke="purple"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null} */}
            {/* {this.props.mainDStatus ? (
              <Line
                type="monotone"
                dataKey="Death"
                stroke="black"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null} */}
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
    // testEditstate: (d) => {
    //   return dispatch(actions.testGet(d));
    // },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VSGraph);
