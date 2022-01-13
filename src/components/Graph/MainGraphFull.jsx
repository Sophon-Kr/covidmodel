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

// const data = [
//   // {
//   //   name: "Jan",
//   //   Susceptible: 4000,
//   //   Vaccines1: 2400,
//   //   Vaccines2: 2400,
//   //   Infected: 100,
//   //   Recovery: 1,
//   //   Hospital: 1,
//   //   Death: 1,
//   // },
//   // {
//   //   name: "Feb",
//   //   Susceptible: 3000,
//   //   Vaccines1: 1398,
//   //   Vaccines2: 2210,
//   //   Infected: 200,
//   //   Recovery: 1,
//   //   Hospital: 1,
//   //   Death: 1,
//   // },
//   // {
//   //   name: "Mar",
//   //   Susceptible: 2000,
//   //   Vaccines1: 9800,
//   //   Vaccines2: 2290,
//   //   Infected: 400,
//   //   Recovery: 1,
//   //   Hospital: 1,
//   //   Death: 12,
//   // },
//   // {
//   //   name: "Apr",
//   //   Susceptible: 2780,
//   //   Vaccines1: 3908,
//   //   Vaccines2: 2000,
//   //   Infected: 600,
//   //   Recovery: 1,
//   //   Hospital: 1,
//   //   Death: 19,
//   // },
//   // {
//   //   name: "May",
//   //   Susceptible: 1890,
//   //   Vaccines1: 4800,
//   //   Vaccines2: 2181,
//   //   Infected: 900,
//   //   Recovery: 1,
//   //   Hospital: 1,
//   //   Death: 15,
//   // },
//   // {
//   //   name: "Jun",
//   //   Susceptible: 2390,
//   //   Vaccines1: 3800,
//   //   Vaccines2: 2500,
//   //   Infected: 350,
//   //   Recovery: 1,
//   //   Hospital: 1,
//   //   Death: 10,
//   // },
//   // {
//   //   name: "Jul",
//   //   Susceptible: 3490,
//   //   Vaccines1: 4300,
//   //   Vaccines2: 2100,
//   //   Infected: 700,
//   //   Recovery: 1,
//   //   Hospital: 1,
//   //   Death: 1,
//   // },
//   {
//     name: "Jan",
//     Susceptible: 66162931,
//     Vaccines1: 0,
//     Vaccines2: 0,
//     Infected: 11898,
//     Recovery: 7375,
//     Hospital: 4507,
//     Death: 16,
//   },
//   {
//     name: "Feb",
//     Susceptible: 66172389,
//     Vaccines1: 0,
//     Vaccines2: 0,
//     Infected: 7169,
//     Recovery: 13513,
//     Hospital: -6350,
//     Death: 6,
//   },
//   {
//     name: "Mar",
//     Susceptible: 66022406,
//     Vaccines1: 158497,
//     Vaccines2: 33248,
//     Infected: 2912,
//     Recovery: 2298,
//     Hospital: 603,
//     Death: 11,
//   },
//   {
//     name: "Apr",
//     Susceptible: 65177414,
//     Vaccines1: 936733,
//     Vaccines2: 348600,
//     Infected: 36290,
//     Recovery: 8828,
//     Hospital: 27353,
//     Death: 109,
//   },
//   {
//     name: "May",
//     Susceptible: 64553188,
//     Vaccines1: 1444261,
//     Vaccines2: 743520,
//     Infected: 94639,
//     Recovery: 72091,
//     Hospital: 21720,
//     Death: 828,
//   },
//   {
//     name: "Jun",
//     Susceptible: 61416343,
//     Vaccines1: 4571363,
//     Vaccines2: 1691476,
//     Infected: 99509,
//     Recovery: 99134,
//     Hospital: -614,
//     Death: 992,
//   },
//   {
//     name: "Jul",
//     Susceptible: 58818693,
//     Vaccines1: 6692062,
//     Vaccines2: 1066214,
//     Infected: 337986,
//     Recovery: 184441,
//     Hospital: 150711,
//     Death: 2834,
//   },
//   {
//     name: "Aug",
//     Susceptible: 0,
//     Vaccines1: 0,
//     Vaccines2: 0,
//     Infected: 607442,
//     Recovery: 630071,
//     Hospital: -29142,
//     Death: 6732,
//   },
//   {
//     name: "Sep",
//     Susceptible: 0,
//     Vaccines1: 0,
//     Vaccines2: 0,
//     Infected: 398746,
//     Recovery: 448682,
//     Hospital: -55293,
//     Death: 513,
//   },
// ];

// const modelData = [
//   {
//     name: "Jan",
//     Susceptible: 4000,
//     Vaccines1: 2400,
//     Vaccines2: 2400,
//     Infected: 100,
//     Recovery: 1,
//     Hospital: 1,
//     Death: 1,
//   },
//   {
//     name: "Feb",
//     Susceptible: 3000,
//     Vaccines1: 1398,
//     Vaccines2: 2210,
//     Infected: 200,
//     Recovery: 1,
//     Hospital: 1,
//     Death: 1,
//   },
//   {
//     name: "Mar",
//     Susceptible: 2000,
//     Vaccines1: 9800,
//     Vaccines2: 2290,
//     Infected: 400,
//     Recovery: 1,
//     Hospital: 1,
//     Death: 12,
//   },
//   {
//     name: "Apr",
//     Susceptible: 2780,
//     Vaccines1: 3908,
//     Vaccines2: 2000,
//     Infected: 600,
//     Recovery: 1,
//     Hospital: 1,
//     Death: 19,
//   },
//   {
//     name: "May",
//     Susceptible: 1890,
//     Vaccines1: 4800,
//     Vaccines2: 2181,
//     Infected: 900,
//     Recovery: 1,
//     Hospital: 1,
//     Death: 15,
//   },
//   {
//     name: "Jun",
//     Susceptible: 2390,
//     Vaccines1: 3800,
//     Vaccines2: 2500,
//     Infected: 350,
//     Recovery: 1,
//     Hospital: 1,
//     Death: 10,
//   },
//   {
//     name: "Jul",
//     Susceptible: 3490,
//     Vaccines1: 4300,
//     Vaccines2: 2100,
//     Infected: 700,
//     Recovery: 1,
//     Hospital: 1,
//     Death: 1,
//   },
// ];

class MainGraphFull extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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
    // maindateStartMain
    // maindateEndMain
    // this.props.maindateStartMain
    var dateAfterFilter = data.filter((a) => {
      var date = new Date(a.name);
      return date >= startDate && date <= endDate;
    });
    console.log("dateAfterFilter", dateAfterFilter);
    return dateAfterFilter;
    // this.setState({ dataFilterd: dateAfterFilter });
  };

  // componentDidMount() {
  //   if (
  //     this.props.mainperiod === "month" &&
  //     this.props.maintypeData === "real"
  //   ) {
  //     this.setState({ data: this.props.mainRealDataMonth });
  //     // await props.getAllRealDataMount();
  //     console.log("month real ::: ");
  //   } else if (
  //     this.props.mainperiod === "day" &&
  //     this.props.maintypeData === "real"
  //   ) {
  //     this.setState({ data: this.props.mainRealDataDay });
  //     // await props.getAllRealDataDay();
  //     console.log("day real :::");
  //   } else if (
  //     this.props.mainperiod === "month" &&
  //     this.props.maintypeData === "model"
  //   ) {
  //     this.setState({ data: this.props.mainModelDataMonth });
  //     // await props.getAllModelDataMount();
  //     console.log("month model :::");
  //   } else if (
  //     this.props.mainperiod === "day" &&
  //     this.props.maintypeData === "model"
  //   ) {
  //     this.setState({ data: this.props.mainModelDataDay });
  //     // await props.getAllModelDataDay();
  //     console.log("day model :::");
  //   }
  // }

  // componentDidUpdate() {
  //   if (
  //     this.props.mainperiod === "month" &&
  //     this.props.maintypeData === "real"
  //   ) {
  //     this.setState({ data: this.props.mainRealDataMonth });
  //     // await props.getAllRealDataMount();
  //     console.log("month real :::");
  //   } else if (
  //     this.props.mainperiod === "day" &&
  //     this.props.maintypeData === "real"
  //   ) {
  //     this.setState({ data: this.props.mainRealDataDay });
  //     // await props.getAllRealDataDay();
  //     console.log("day real :::");
  //   } else if (
  //     this.props.mainperiod === "month" &&
  //     this.props.maintypeData === "model"
  //   ) {
  //     this.setState({ data: this.props.mainModelDataMonth });
  //     // await props.getAllModelDataMount();
  //     console.log("month model :::");
  //   } else if (
  //     this.props.mainperiod === "day" &&
  //     this.props.maintypeData === "model"
  //   ) {
  //     this.setState({ data: this.props.mainModelDataDay });
  //     // await props.getAllModelDataDay();
  //     console.log("day model::: ");
  //   }
  // }

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={830}>
          <LineChart
            width={500}
            height={300}
            data={
              this.props.mainperiod == "day"
                ? this.props.mainTempData
                : // ? this.filterRangeByDate(this.props.mainTempData)
                  this.props.mainTempData
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
                dataKey="Vaccine1"
                stroke="#ffd600"
                strokeWidth={3}
                activeDot={{ r: 8 }}
              />
            ) : null}
            {this.props.mainV2Status ? (
              <Line
                type="monotone"
                dataKey="Vaccine2"
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
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(MainGraphFull);
