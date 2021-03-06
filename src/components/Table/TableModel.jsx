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

export const TableModel = (props) => {
  const [data, setData] = useState(
    props.mainTempData === null ||
      props.mainTempData === false ||
      props.mainTempData === undefined ||
      props.mainTempData === "false"
      ? [
          {
            Deaths: 0,
            Hospital: 0,
            Infected: 0,
            Maintenance: 0,
            Susceptible: 0,
            Vaccine1: 0,
            Vaccine2: 0,
            name: "nodata",
          },
        ]
      : props.mainTempData
  );

  const filterRangeByDate = (data) => {
    var returndata = [];
    if (data) {
      var startDate = new Date(props.maindateStartMain);
      var endDate = new Date(props.maindateEndMain);
      var endDateNext = endDate.setDate(endDate.getDate() + 1);
      var dateAfterFilter = data.filter((a) => {
        var date = new Date(a.name);
        return date >= startDate && date <= endDateNext;
      });
      returndata = dateAfterFilter;
    } else {
      returndata.push({
        Deaths: 0,
        Hospital: 0,
        Infected: 0,
        Maintenance: 0,
        Susceptible: 0,
        Vaccine1: 0,
        Vaccine2: 0,
        name: "nodata",
      });
    }
    return returndata;
  };

  const monthFilter = (dataMonth) => {
    var returndata = [];
    if (dataMonth) {
      let startMonth = props.dateStartMonthMain;
      let endMonth = props.dateEndMonthMain;

      var dateAfterFilter = dataMonth.filter((a) => {
        var date = new Date("1-" + a.name.split("-").join(" "));
        return date >= startMonth && date <= endMonth;
      });
      returndata = dateAfterFilter;
    } else {
      returndata.push({
        Deaths: 0,
        Hospital: 0,
        Infected: 0,
        Maintenance: 0,
        Susceptible: 0,
        Vaccine1: 0,
        Vaccine2: 0,
        name: "nodata",
      });
    }
    return returndata;
  };

  useEffect(() => {
    async function fetchData() {
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
                  {props.maintypeData === "model"
                    ? [
                        props.mainMStatus ? (
                          <TableCell
                            key={props.mainMStatus}
                            align="left"
                            style={{ backgroundColor: "#8c9eff" }}
                          >
                            Maintenance
                          </TableCell>
                        ) : (
                          <TableCell
                            key={props.mainMStatus}
                            align="left"
                            style={{ backgroundColor: "#e0e0e0" }}
                          >
                            Maintenance
                          </TableCell>
                        ),
                      ]
                    : null}

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
                      Maintenance
                    </TableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row, index) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{row.name}</TableCell>
                    <TableCell align="left">{row.Susceptible}</TableCell>
                    <TableCell align="left">{row.Vaccine1}</TableCell>
                    <TableCell align="left">{row.Vaccine2}</TableCell>
                    {props.maintypeData === "model" ? (
                      <TableCell align="left">{row.Maintenance}</TableCell>
                    ) : null}
                    <TableCell align="left">{row.Infected}</TableCell>
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
    mainMStatus: state.reducer.MStatus,
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

export default connect(mapStateToProps, null)(TableModel);
