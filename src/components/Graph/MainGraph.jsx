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

// const modelData = [
//   {
//     name: "Jan",
//     Susceptible: 4000,
//     Vaccine1: 2400,
//     Vaccine2: 2400,
//     Infected: 100,
//     Recovery: 1,
//     Hospital: 1,
//     Deaths: 1,
//   },
//   {
//     name: "Feb",
//     Susceptible: 3000,
//     Vaccine1: 1398,
//     Vaccine2: 2210,
//     Infected: 200,
//     Recovery: 1,
//     Hospital: 1,
//     Deaths: 1,
//   },
//   {
//     name: "Mar",
//     Susceptible: 2000,
//     Vaccine1: 9800,
//     Vaccine2: 2290,
//     Infected: 400,
//     Recovery: 1,
//     Hospital: 1,
//     Deaths: 12,
//   },
//   {
//     name: "Apr",
//     Susceptible: 2780,
//     Vaccine1: 3908,
//     Vaccine2: 2000,
//     Infected: 600,
//     Recovery: 1,
//     Hospital: 1,
//     Deaths: 19,
//   },
//   {
//     name: "May",
//     Susceptible: 1890,
//     Vaccine1: 4800,
//     Vaccine2: 2181,
//     Infected: 900,
//     Recovery: 1,
//     Hospital: 1,
//     Deaths: 15,
//   },
//   {
//     name: "Jun",
//     Susceptible: 2390,
//     Vaccine1: 3800,
//     Vaccine2: 2500,
//     Infected: 350,
//     Recovery: 1,
//     Hospital: 1,
//     Deaths: 10,
//   },
//   {
//     name: "Jul",
//     Susceptible: 3490,
//     Vaccine1: 4300,
//     Vaccine2: 2100,
//     Infected: 700,
//     Recovery: 1,
//     Hospital: 1,
//     Deaths: 1,
//   },
// ];

class MainGraph extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataFilterd: [],
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
    // var startDate = new Date("2021-02-01");
    // var endDate = new Date("2021-02-15");
    // maindateStartMain
    // maindateEndMain

    var dateAfterFilter = data.filter((a) => {
      var date = new Date(a.name);
      return (
        date >= this.props.maindateStartMain &&
        date <= this.props.maindateEndMain
      );
    });
    console.log("dateAfterFilter", dateAfterFilter);
    return dateAfterFilter;
    // this.setState({ dataFilterd: dateAfterFilter });
  };

  fetchData = () => {
    if (
      this.props.mainperiod === "month" &&
      this.props.maintypeData === "real"
    ) {
      this.setState({ data: this.props.mainRealDataMonth });
      // await props.getAllRealDataMount();
      console.log("month real ::: ");
    } else if (
      this.props.mainperiod === "day" &&
      this.props.maintypeData === "real"
    ) {
      this.setState({ data: this.props.mainRealDataDay });
      // await props.getAllRealDataDay();
      console.log("day real :::");
    } else if (
      this.props.mainperiod === "month" &&
      this.props.maintypeData === "model"
    ) {
      this.setState({ data: this.props.mainModelDataMonth });
      // await props.getAllModelDataMount();
      console.log("month model :::");
    } else if (
      this.props.mainperiod === "day" &&
      this.props.maintypeData === "model"
    ) {
      this.setState({ data: this.props.mainModelDataDay });
      // await props.getAllModelDataDay();
      console.log("day model :::");
    }
  };
  async componentDidMount(prevState) {
    await this.fetchData();
    // let getfilter = await this.filterRangeByDate(this.state.data);
    // if (this.state.dataFilterd !== this.prevState.dataFilterd) {
    //   this.setState({ dataFilterd: getfilter });
    // }

    // await this.filterRangeByDate(this.state.data);
    // let getfilter = await this.filterRangeByDate(this.state.data);
    // console.log("getfilter", getfilter);
    // this.setState({ dataFilterd: getfilter });
  }

  async componentDidUpdate(prevState) {
    await this.fetchData();
    // let getfilter = await this.filterRangeByDate(this.state.data);
    // if (getfilter !== this.state.dataFilterd) {
    //   this.setState({ dataFilterd: getfilter });
    // }
    // await this.filterRangeByDate(this.state.data);
    // let getfilter = await this.filterRangeByDate(this.state.data);
    // if (this.props.userID !== prevProps.userID) {
    //   this.fetchData(this.props.userID);
    // }
    // this.setState({ dataFilterd: getfilter });
  }

  render() {
    const { opacity } = this.state;

    return (
      <div style={{ width: "100%" }}>
        <ResponsiveContainer width="100%" height={445}>
          <LineChart
            width={500}
            height={300}
            data={this.state.data}
            // data={this.filterRangeByDate(this.state.data)}
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

    mainRealDataMonth: state.reducer.realDataMonth,
    mainRealDataDay: state.reducer.realDataDay,
    mainModelDataMonth: state.reducer.modelDataMonth,
    mainModelDataDay: state.reducer.modelDataDay,
  };
};

const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(MainGraph);
