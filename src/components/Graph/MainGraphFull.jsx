import React, { PureComponent } from "react";
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
    S: 4000,
    V1: 2400,
    V2: 2400,
    I: 100,
    R: 1,
    H: 1,
    D: 1,
  },
  {
    name: "Feb",
    S: 3000,
    V1: 1398,
    V2: 2210,
    I: 200,
    R: 1,
    H: 1,
    D: 1,
  },
  {
    name: "Mar",
    S: 2000,
    V1: 9800,
    V2: 2290,
    I: 400,
    R: 1,
    H: 1,
    D: 12,
  },
  {
    name: "Apr",
    S: 2780,
    V1: 3908,
    V2: 2000,
    I: 600,
    R: 1,
    H: 1,
    D: 19,
  },
  {
    name: "May",
    S: 1890,
    V1: 4800,
    V2: 2181,
    I: 900,
    R: 1,
    H: 1,
    D: 15,
  },
  {
    name: "Jun",
    S: 2390,
    V1: 3800,
    V2: 2500,
    I: 350,
    R: 1,
    H: 1,
    D: 10,
  },
  {
    name: "Jul",
    S: 3490,
    V1: 4300,
    V2: 2100,
    I: 700,
    R: 1,
    H: 1,
    D: 1,
  },
];

export default class MainGraphFull extends PureComponent {
  // static demoUrl = "https://codesandbox.io/s/customized-legend-event-l19fo";

  state = {
    opacity: {
      S: 1,
      V1: 1,
      V2: 1,
      I: 1,
      R: 1,
      H: 1,
      D: 1,
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
        <ResponsiveContainer width="100%" height={800}>
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
            <Line
              type="monotone"
              dataKey="S"
              stroke="blue"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="V1"
              stroke="yellow"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />

            <Line
              type="monotone"
              dataKey="V2"
              stroke="orange"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="I"
              stroke="red"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="R"
              stroke="green"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="H"
              stroke="purple"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
            <Line
              type="monotone"
              dataKey="D"
              stroke="black"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
