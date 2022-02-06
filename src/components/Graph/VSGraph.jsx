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

const dataSV = [
  {
    name: "January-2021",
    // year: "2021",
    SusceptibleRealData: 66162931,
    SusceptibleModelData: 0,
    Vaccines1RealData: 0,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 0,
    Vaccines2ModelData: 0,
    InfectionRealData: 11898,
    InfectionModelData: 0,
    RecoveryRealData: 7375,
    RecoveryModelData: 0,
    HospitalizeRealData: 4507,
    HospitalizeModelData: 0,
    DeathRealData: 16,
    DeathModelData: 0,
  },
  {
    name: "February-2021",
    // year: "2021",
    SusceptibleRealData: 66172389,
    SusceptibleModelData: 0,
    Vaccines1RealData: 0,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 0,
    Vaccines2ModelData: 0,
    InfectionRealData: 7169,
    InfectionModelData: 0,
    RecoveryRealData: 13513,
    RecoveryModelData: 0,
    HospitalizeRealData: -6350,
    HospitalizeModelData: 0,
    DeathRealData: 6,
    DeathModelData: 0,
  },
  {
    name: "March-2021",
    // year: "2021",
    SusceptibleRealData: 66022406,
    SusceptibleModelData: 0,
    Vaccines1RealData: 158497,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 33248,
    Vaccines2ModelData: 0,
    InfectionRealData: 2912,
    InfectionModelData: 0,
    RecoveryRealData: 2298,
    RecoveryModelData: 0,
    HospitalizeRealData: 603,
    HospitalizeModelData: 0,
    DeathRealData: 11,
    DeathModelData: 0,
  },
  {
    name: "April-2021",
    // year: "2021",
    SusceptibleRealData: 65177414,
    SusceptibleModelData: 0,
    Vaccines1RealData: 936733,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 348600,
    Vaccines2ModelData: 0,
    InfectionRealData: 36290,
    InfectionModelData: 0,
    RecoveryRealData: 8828,
    RecoveryModelData: 0,
    HospitalizeRealData: 27353,
    HospitalizeModelData: 0,
    DeathRealData: 109,
    DeathModelData: 0,
  },
  {
    name: "May-2021",
    // year: "2021",
    SusceptibleRealData: 64553188,
    SusceptibleModelData: 0,
    Vaccines1RealData: 1444261,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 743520,
    Vaccines2ModelData: 0,
    InfectionRealData: 94639,
    InfectionModelData: 0,
    RecoveryRealData: 72091,
    RecoveryModelData: 0,
    HospitalizeRealData: 21720,
    HospitalizeModelData: 0,
    DeathRealData: 828,
    DeathModelData: 0,
  },
  {
    name: "June-2021",
    // year: "2021",
    SusceptibleRealData: 61416343,
    SusceptibleModelData: 0,
    Vaccines1RealData: 4571363,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 1691476,
    Vaccines2ModelData: 0,
    InfectionRealData: 99509,
    InfectionModelData: 0,
    RecoveryRealData: 99134,
    RecoveryModelData: 0,
    HospitalizeRealData: -614,
    HospitalizeModelData: 0,
    DeathRealData: 992,
    DeathModelData: 0,
  },
  {
    name: "July-2021",
    // year: "2021",
    SusceptibleRealData: 58818693,
    SusceptibleModelData: 0,
    Vaccines1RealData: 6692062,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 1066214,
    Vaccines2ModelData: 0,
    InfectionRealData: 337986,
    InfectionModelData: 0,
    RecoveryRealData: 184441,
    RecoveryModelData: 0,
    HospitalizeRealData: 150711,
    HospitalizeModelData: 0,
    DeathRealData: 2834,
    DeathModelData: 0,
  },
  {
    name: "August-2021",
    // year: "2021",
    SusceptibleRealData: 54962377,
    SusceptibleModelData: 0,
    Vaccines1RealData: 10009247,
    Vaccines1ModelData: 0,
    Vaccines2RealData: 4326504,
    Vaccines2ModelData: 0,
    InfectionRealData: 607442,
    InfectionModelData: 0,
    RecoveryRealData: 630071,
    RecoveryModelData: 0,
    HospitalizeRealData: -29142,
    HospitalizeModelData: 0,
    DeathRealData: 6732,
    DeathModelData: 0,
  },
  {
    name: "September-2021",
    // year: "2021",
    SusceptibleRealData: 56578527,
    SusceptibleModelData: 0,
    Vaccines1RealData: 8810927,
    Vaccines1ModelData: 9139212,
    Vaccines2RealData: 11722126,
    Vaccines2ModelData: 11937355,
    InfectionRealData: 398746,
    InfectionModelData: 405564.8,
    RecoveryRealData: 448682,
    RecoveryModelData: 475536.2,
    HospitalizeRealData: -55293,
    HospitalizeModelData: -54660.2,
    DeathRealData: 5138,
    DeathModelData: 52585.333,
  },
  {
    name: "October-2021",
    // year: "2021",
    SusceptibleRealData: 55801205,
    SusceptibleModelData: 0,
    Vaccines1RealData: 9768424,
    Vaccines1ModelData: 9625499,
    Vaccines2RealData: 11045684,
    Vaccines2ModelData: 10753419,
    InfectionRealData: 308549,
    InfectionModelData: 297205.9,
    RecoveryRealData: 321455,
    RecoveryModelData: 289291.7,
    HospitalizeRealData: -15384,
    HospitalizeModelData: -13898.9,
    DeathRealData: 2478,
    DeathModelData: 2598.009,
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
      // console.log("date month", date);
      return date >= startMonth && date <= endMonth;
    });
    // console.log("dateAfterFilter M :", dateAfterFilter);
    return dateAfterFilter;
  };
  // componentDidMount() {
  //   console.log("props.mainVsData,", this.state.mainVsData);
  // }
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
              this.props.period == "day"
                ? this.filterRangeByDate(this.state.mainVsData)
                : this.monthFilter(this.state.mainVsData)
            }
            // data={this.state.mainVsData}
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
    mainperiod: state.reducer.period,
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
