import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const TableVS = (props) => {
  const [data, setData] = useState(props.mainVsData);

  const filterRangeByDate = (data) => {
    var startDate = new Date(props.maindateStartMain);
    var endDate = new Date(props.maindateEndMain);

    var dateAfterFilter = data.filter((a) => {
      var date = new Date(a.name);
      return date >= startDate && date <= endDate;
    });
    // console.log("dateAfterFilter ::", dateAfterFilter);
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
      if (props.period === "day") {
        console.log("props.mainVsData ;;;;;", props.mainVsData);
        let tempDataTable1 = filterRangeByDate(props.mainVsData);
        await setData(tempDataTable1);
      } else {
        console.log("props.mainVsData |||||", props.mainVsData);
        let tempDataTable2 = monthFilter(props.mainVsData);
        await setData(tempDataTable2);
      }
    }
    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.maintypeData,
    props.period,
    props.mainVsData,
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
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
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
                    Susceptible(Raw Data)
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
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.SusceptibleRawData}</TableCell>
                    <TableCell align="left">
                      {row.SusceptibleModelData}
                    </TableCell>
                    <TableCell align="left">
                      {Math.floor(
                        row.SusceptibleRawData - row.SusceptibleModelData
                      )}
                    </TableCell>
                    <TableCell align="left">
                      {((row.SusceptibleRawData - row.SusceptibleModelData) /
                        row.SusceptibleRawData) *
                        100}
                      %
                    </TableCell>
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
    //mainperiod: state.reducer.periodMain,
    maintypeData: state.reducer.typeData,
    maindateStartMain: state.reducer.dateStartMain,
    maindateEndMain: state.reducer.dateEndMain,

    mainVsData: state.reducer.vsData,
    mainRealDataMonth: state.reducer.realDataMonth,
    mainRealDataDay: state.reducer.realDataDay,
    mainModelDataMonth: state.reducer.modelDataMonth,
    mainModelDataDay: state.reducer.modelDataDay,

    dateStartMonthMain: state.reducer.dateStartMonthMain,
    dateEndMonthMain: state.reducer.dateEndMonthMain,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableVS);
