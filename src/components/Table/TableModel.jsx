import React from "react";
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
          {/* <Typography variant="h6" color="initial">Data From Model</Typography> */}
          <TableContainer style={{ maxHeight: 900 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="left" style={{ backgroundColor: "grey" }}>
                    Date
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#039be5" }}
                  >
                    Susceptible
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#ffd600" }}
                  >
                    Vaccines1{" "}
                  </TableCell>
                  <TableCell align="left" style={{ backgroundColor: "orange" }}>
                    Vaccines2{" "}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#f44336" }}
                  >
                    Infected{" "}
                  </TableCell>
                  <TableCell align="left" style={{ backgroundColor: "green" }}>
                    Recovery
                  </TableCell>
                  <TableCell align="left" style={{ backgroundColor: "purple" }}>
                    Hospital{" "}
                  </TableCell>
                  <TableCell align="left" style={{ backgroundColor: "black" }}>
                    Death{" "}
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {props.mainRealDataDay.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.Susceptible}</TableCell>
                    <TableCell align="left">{row.Vaccines1}</TableCell>
                    <TableCell align="left">{row.Vaccines2}</TableCell>
                    <TableCell align="left">{row.Infected}</TableCell>
                    <TableCell align="left">{row.Recovery}</TableCell>
                    <TableCell align="left">{row.Hospital}</TableCell>
                    <TableCell align="left">{row.Death}</TableCell>
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
    // mainVS: state.reducer.VS,
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
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableModel);
