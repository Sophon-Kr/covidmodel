import React from "react";
import { connect } from "react-redux";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#AED6F1",
    color: "black",
    fontFamily: "IBM Plex Sans Thai Looped",
    fontWeight: "600",
    fontSize: "1.4vw",
  },
  [`&.${tableCellClasses.body}`]: {
    fontFamily: "IBM Plex Sans Thai Looped",
    fontWeight: "400",
    fontSize: "1.4vw",
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

const equationCovid = [
  {
    name: "rho",
    symbol: <span>&rho;</span>,
    value: "66,186,727",
    reference:
      "ราชกิจจานุเบกษา เรื่อง จำนวนราษฎรทั่วราชอาณาจักร ตามหลักฐานการทะเบียนราษฎร ปี 2563",
  },
  {
    name: "eta",
    symbol: <span>&eta;</span>,
    value: "0.09 - 0.21",
    reference:
      "Recurrent COVID-19 infection in a health care worker : a case report",
  },

  {
    name: "beta",
    symbol: <span>&beta;</span>,
    value: "2.27",
    reference:
      "https://scii.chula.ac.th/blog/thailand-tops-the-world-in-covid-reproduction-rate/",
  },
  {
    name: "omega",
    symbol: <span>&omega; </span>,
    value: (
      <span>
        &omega;<sub>1</sub> = 0.004, &omega;<sub>2</sub> = 0.001, &omega;
        <sub>3</sub> = 0.0001
      </span>
    ),
    reference:
      "ความก้าวหน้าในการฉีดวัคซีนเฉลี่ยตั้งแต่วันที่ 1 กรกฎาคม 2564 ถึง 31 สิงหาคม 2564",
  },
  {
    name: "epsilon",
    symbol: <span>&epsilon;</span>,
    value: (
      <div>
        <div>Pf(1) = 0.52 / Pf(2) = 0.92 / Pf(3)=N/A</div>
        <div>AZ(1)=0.641 / AZ(2) = 0.704 / AZ(3) =N/A</div>
        <div>Coronavac (1) =N/A / Coronavac(2)= 0.504 / Coronavac (3) =N/A</div>
        <div>Sinopharm (1) =N/A / Sinopharm (2)= 0.79 / Sinopharm (3) =N/A</div>
      </div>
    ),
    reference: "ประสิทธิภาพของวัคซีน",
  },
  {
    name: "alpha",
    symbol: <span>&alpha;</span>,
    value: "0.2",
    reference:
      "A Mathematical Model of COVID-19 Pandemic: A Case Study of Bangkok, Thailand",
  },
  {
    name: "lambda",
    symbol: <span>&lambda;</span>,
    value: "0.1",
    reference:
      "A Mathematical Model of COVID-19 Pandemic: A Case Study of Bangkok, Thailand",
  },
  {
    name: "zeta",
    symbol: <span>&zeta;</span>,
    value: "0.015",
    reference:
      "A Mathematical Model of COVID-19 Pandemic: A Case Study of Bangkok, Thailand",
  },
  {
    name: "mu",
    symbol: <span>&mu;</span>,
    value: (
      <span>
        3.6529 x 10<sup>-5</sup>
      </span>
    ),
    reference:
      "A Mathematical Model of COVID-19 Pandemic: A Case Study of Bangkok, Thailand",
  },
];

export const DescriptionEquationTableValue = (props) => {
  return (
    <TableContainer style={{ marginTop: "4%" }}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Symbol</StyledTableCell>
            <StyledTableCell align="center">Value</StyledTableCell>
            <StyledTableCell align="center">Refereces</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {equationCovid.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell scope="row" align="center">
                {row.symbol}
              </StyledTableCell>
              <StyledTableCell>{row.value}</StyledTableCell>
              <StyledTableCell component="th">{row.reference}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(DescriptionEquationTableValue);
export default DescriptionEquationTableValue;
