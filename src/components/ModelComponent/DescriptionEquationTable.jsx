import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#AED6F1",
    color: "black",
    fontFamily: "IBM Plex Sans Thai Looped",
    fontWeight: "600",
    fontSize: "18px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "IBM Plex Sans Thai Looped",
    fontWeight: "400",
    fontSize: "18px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

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

const equationCovid = [
  {
    name: "rho",
    symbol: <span>&rho;</span>,
    meaningEN: "Total Population",
    meaningTH: "ประชากรทั้งหมด",
  },
  {
    name: "eta",
    symbol: <span>&eta;</span>,
    meaningEN: "The recurrent infections rate for who was recovery",
    meaningTH: "อัตราการติดซ้้าของผู้ที่หายจากการติดเชื้อ",
  },

  {
    name: "beta",
    symbol: <span>&beta;</span>,
    meaningEN: "The effective contact rate",
    meaningTH: "ประสิทธิภาพในการแพร่เชื้อโรคระหว่างบุคคล",
  },
  {
    name: "omega",
    symbol: <span>&omega; </span>,
    meaningEN: "The performance of vaccination rate",
    meaningTH: "ก้าลังในการฉีดวัคซีน",
  },
  {
    name: "epsilon",
    symbol: <span>&epsilon;</span>,
    meaningEN: "The effective of covid-19 vaccine rate",
    meaningTH: "ประสิทธิภาพของวัคซีน",
  },
  {
    name: "alpha",
    symbol: <span>&alpha;</span>,
    meaningEN: "The hospital rate for infected",
    meaningTH: "อัตราการเข้าโรงพยาบาลของผู้ติดเชื้อ",
  },
  {
    name: "lambda",
    symbol: <span>&lambda;</span>,
    meaningEN: "The recovery rate of infected",
    meaningTH: "อัตราการหายป่วยจากการติดเชื้อ",
  },
  {
    name: "zeta",
    symbol: <span>&zeta;</span>,
    meaningEN:
      "The COVID-19 disease mortality rate for individuals in the infectious",
    meaningTH: "อัตราการที่ผู้ป่วยติดเชื้อจะเสียชีวิต",
  },
  {
    name: "mu",
    symbol: <span>&mu;</span>,
    meaningEN: "The natural death rate of all individuals",
    meaningTH: "อัตราการตายโดยธรรมชาติ",
  },
];

export const DescriptionEquation = (props) => {
  return (
    <TableContainer style={{ marginTop: "4%" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Symbol</StyledTableCell>
            <StyledTableCell align="center">Meaning(English)</StyledTableCell>
            <StyledTableCell align="center">Meaning(Thai)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equationCovid.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell scope="row" align="center">
                {row.symbol}
              </StyledTableCell>
              <StyledTableCell>{row.meaningEN}</StyledTableCell>
              <StyledTableCell component="th">{row.meaningTH}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionEquation);
