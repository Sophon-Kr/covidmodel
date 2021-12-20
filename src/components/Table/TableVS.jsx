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

export const TableVS = (props) => {
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
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {/* 039be5
ffd600
orange
f44336
green
purple
black */}
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#0d47a1" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#1565c0" }}
                  >
                    Susceptible(Real Data)
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#2196f3" }}
                  >
                    Susceptible(Model Data)
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#90caf9" }}
                  >
                    Different
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{ backgroundColor: "#bbdefb" }}
                  >
                    Percent Difference
                  </TableCell>
                  {/* <TableCell align="left" style={{ backgroundColor: "green" }}>
                    Recovery
                  </TableCell>
                  <TableCell align="left" style={{ backgroundColor: "purple" }}>
                    Hospital{" "}
                  </TableCell>
                  <TableCell align="left" style={{ backgroundColor: "black" }}>
                    Death{" "}
                  </TableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {dataSV.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">
                      {row.SusceptibleRealData}
                    </TableCell>
                    <TableCell align="left">
                      {row.SusceptibleModelData}
                    </TableCell>
                    <TableCell align="left">
                      {Math.floor(
                        row.SusceptibleRealData - row.SusceptibleModelData
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {((row.SusceptibleRealData - row.SusceptibleModelData) /
                        row.SusceptibleRealData) *
                        100}{" "}
                      %
                    </TableCell>
                    {/* <TableCell align="left">{row.Recovery}</TableCell>
                    <TableCell align="left">{row.Hospital}</TableCell>
                    <TableCell align="left">{row.Death}</TableCell> */}
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableVS);
