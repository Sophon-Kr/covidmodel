import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

const rows = [
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

export const TableModel = (props) => {
  const [data, setData] = useState(props.mainTempData);

  const filterRangeByDate = (data) => {
    var startDate = new Date(props.maindateStartMain);
    var endDate = new Date(props.maindateEndMain);

    var dateAfterFilter = data.filter((a) => {
      var date = new Date(a.name);
      return date >= startDate && date <= endDate;
    });
    console.log("dateAfterFilter", dateAfterFilter);
    return dateAfterFilter;
  };

  const monthFilter = (dataMonth) => {
    let startMonth = props.dateStartMonthMain;
    let endMonth = props.dateEndMonthMain;

    var dateAfterFilter = dataMonth.filter((a) => {
      var date = new Date(a.name);
      return date >= startMonth && date <= endMonth;
    });
    return dateAfterFilter;
  };

  useEffect(() => {
    async function fetchData() {
      await setData([]);
      if (props.mainperiod === "day") {
        let tempDataTable1 = filterRangeByDate(props.mainTempData);
        await setData(tempDataTable1);
      } else {
        let tempDataTable2 = monthFilter(props.mainTempData);
        await setData(tempDataTable2);
      }
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.maintypeData,
    props.mainperiod,
    props.mainTempData,
    props.maindateStartMain,
    props.maindateEndMain,
    props.dateStartMonthMain,
    props.dateEndMonthMain,
  ]);

  return (
    <Container maxWidth="xxl" style={{ paddingBottom: 30 }}>
      <Container maxWidth="xxl" style={{ paddingTop: 30 }} disableGutters>
        <Paper
          style={{
            minHeight: 100,
            padding: 30,
          }}
          variant="outlined"
          square
        >
          <TableContainer style={{ maxHeight: 900 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#e0e0e0" }}
                  >
                    Date
                  </TableCell>
                  {props.mainSStatus ? (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#81d4fa" }}
                    >
                      Susceptible
                    </TableCell>
                  ) : (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Susceptible
                    </TableCell>
                  )}

                  {props.mainV1Status ? (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#fff59d" }}
                    >
                      Vaccines1{" "}
                    </TableCell>
                  ) : (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Vaccines1
                    </TableCell>
                  )}

                  {props.mainV2Status ? (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffcc80" }}
                    >
                      Vaccines2{" "}
                    </TableCell>
                  ) : (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Vaccines2
                    </TableCell>
                  )}

                  {props.mainIStatus ? (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ef9a9a" }}
                    >
                      Infected{" "}
                    </TableCell>
                  ) : (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Infected
                    </TableCell>
                  )}

                  {props.mainRStatus ? (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#c5e1a5" }}
                    >
                      Recovery
                    </TableCell>
                  ) : (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Recovery
                    </TableCell>
                  )}

                  {props.mainHStatus ? (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#b39ddb" }}
                    >
                      Hospital{" "}
                    </TableCell>
                  ) : (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Hospital
                    </TableCell>
                  )}

                  {props.mainDStatus ? (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#9e9e9e" }}
                    >
                      Death
                    </TableCell>
                  ) : (
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Death
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.Susceptible}</TableCell>
                    <TableCell align="left">{row.Vaccine1}</TableCell>
                    <TableCell align="left">{row.Vaccine2}</TableCell>
                    <TableCell align="left">{row.Infected}</TableCell>
                    <TableCell align="left">{row.Recovery}</TableCell>
                    <TableCell align="left">{row.Hospital}</TableCell>
                    <TableCell align="left">{row.Deaths}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Container>
  );
};

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

    dateStartMonthMain: state.reducer.dateStartMonthMain,
    dateEndMonthMain: state.reducer.dateEndMonthMain,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableModel);
