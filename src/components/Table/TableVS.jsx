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
    var endDateNext = endDate.setDate(endDate.getDate() + 1);
    var dateAfterFilter = data.filter((a) => {
      var date = new Date(a.name);
      return date >= startDate && date <= endDateNext;
    });
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
        let tempDataTable1 = filterRangeByDate(props.mainVsData);
        await setData(tempDataTable1);
      } else {
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

  const findDiffernceValue = (raw, model) => {
    if (raw === 0) {
      let val = 0;
      return val.toFixed(5);
    } else {
      let val = ((Math.abs(raw - model) / raw) * 100).toFixed(5);
      return val;
    }
  };

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
          {props.mainVS === "S" ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#0d47a1", color: "white" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#1565c0", color: "white" }}
                    >
                      Susceptible(Raw Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#2196f3", color: "white" }}
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

                      <TableCell align="left">
                        {row.SusceptibleRawData}
                      </TableCell>
                      <TableCell align="left">
                        {row.SusceptibleModelData}
                      </TableCell>
                      <TableCell align="left">
                        {Math.abs(
                          Math.floor(
                            row.SusceptibleRawData - row.SusceptibleModelData
                          )
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {findDiffernceValue(
                          row.SusceptibleRawData,
                          row.SusceptibleModelData
                        )}
                        %
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : props.mainVS === "V1" ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffd600" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffea00" }}
                    >
                      Vaccines1(Raw Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffff00" }}
                    >
                      Vaccines1(Model Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffff8d" }}
                    >
                      Different
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#fff9c4" }}
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

                      <TableCell align="left">{row.Vaccines1RawData}</TableCell>
                      <TableCell align="left">
                        {row.Vaccines1ModelData}
                      </TableCell>
                      <TableCell align="left">
                        {Math.abs(
                          Math.floor(
                            row.Vaccines1RawData - row.Vaccines1ModelData
                          )
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {findDiffernceValue(
                          row.Vaccines1RawData,
                          row.Vaccines1ModelData
                        )}
                        %
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : props.mainVS === "V2" ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ff6f00" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ff8f00" }}
                    >
                      Vaccines2(Raw Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffa726" }}
                    >
                      Vaccines2(Model Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffb74d" }}
                    >
                      Different
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ffcc80" }}
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

                      <TableCell align="left">{row.Vaccines2RawData}</TableCell>
                      <TableCell align="left">
                        {row.Vaccines1ModelData}
                      </TableCell>
                      <TableCell align="left">
                        {Math.abs(
                          Math.floor(
                            row.Vaccines2RawData - row.Vaccines2ModelData
                          )
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {findDiffernceValue(
                          row.Vaccines2RawData,
                          row.Vaccines2ModelData
                        )}
                        %
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : props.mainVS === "I" ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#b71c1c", color: "white" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#d32f2f", color: "white" }}
                    >
                      Infection(Raw Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e53935", color: "white" }}
                    >
                      Infection(Model Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ef5350", color: "white" }}
                    >
                      Different
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ff8a80", color: "white" }}
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

                      <TableCell align="left">{row.InfectionRawData}</TableCell>
                      <TableCell align="left">
                        {row.InfectionModelData}
                      </TableCell>
                      <TableCell align="left">
                        {Math.abs(
                          Math.floor(
                            row.InfectionRawData - row.InfectionModelData
                          )
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {findDiffernceValue(
                          row.InfectionRawData,
                          row.InfectionModelData
                        )}
                        %
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : // props.mainVS === "R" ? (
          //   <TableContainer>
          //     <Table>
          //       <TableHead>
          //         <TableRow>
          //           <TableCell
          //             align="left"
          //             style={{ backgroundColor: "#1b5e20", color: "white" }}
          //           >
          //             Date
          //           </TableCell>
          //           <TableCell
          //             align="left"
          //             style={{ backgroundColor: "#2e7d32", color: "white" }}
          //           >
          //             Recovery(Raw Data)
          //           </TableCell>
          //           <TableCell
          //             align="left"
          //             style={{ backgroundColor: "#4caf50" }}
          //           >
          //             Recovery(Model Data)
          //           </TableCell>
          //           <TableCell
          //             align="left"
          //             style={{ backgroundColor: "#a5d6a7" }}
          //           >
          //             Different
          //           </TableCell>
          //           <TableCell
          //             align="left"
          //             style={{ backgroundColor: "#e8f5e9" }}
          //           >
          //             Percent Difference
          //           </TableCell>
          //         </TableRow>
          //       </TableHead>
          //       <TableBody>
          //         {data.map((row) => (
          //           <TableRow
          //             key={row.name}
          //             sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          //           >
          //             <TableCell align="left">{row.name}</TableCell>

          //             <TableCell align="left">{row.RecoveryRawData}</TableCell>
          //             <TableCell align="left">
          //               {row.RecoveryModelData}
          //             </TableCell>
          //             <TableCell align="left">
          //               {Math.abs(
          //                 Math.floor(
          //                   row.RecoveryRawData - row.RecoveryModelData
          //                 )
          //               )}
          //             </TableCell>
          //             <TableCell align="left">
          //               {findDiffernceValue(
          //                 row.RecoveryRawData,
          //                 row.RecoveryModelData
          //               )}
          //               %
          //             </TableCell>
          //           </TableRow>
          //         ))}
          //       </TableBody>
          //     </Table>
          //   </TableContainer>
          // ) :
          props.mainVS === "H" ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#4a148c", color: "white" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#7b1fa2", color: "white" }}
                    >
                      Hospitalize(Raw Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#9c27b0", color: "white" }}
                    >
                      Hospitalize(Model Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#ce93d8" }}
                    >
                      Different
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#f3e5f5" }}
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

                      <TableCell align="left">
                        {row.HospitalizeRawData}
                      </TableCell>
                      <TableCell align="left">
                        {row.HospitalizeModelData}
                      </TableCell>
                      <TableCell align="left">
                        {Math.abs(
                          Math.floor(
                            row.HospitalizeRawData - row.HospitalizeModelData
                          )
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {findDiffernceValue(
                          row.HospitalizeRawData,
                          row.HospitalizeModelData
                        )}
                        %
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : props.mainVS === "D" ? (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#212121", color: "white" }}
                    >
                      Date
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#424242", color: "white" }}
                    >
                      Death(Raw Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#757575", color: "white" }}
                    >
                      Death(Model Data)
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#e0e0e0" }}
                    >
                      Different
                    </TableCell>
                    <TableCell
                      align="left"
                      style={{ backgroundColor: "#f5f5f5" }}
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

                      <TableCell align="left">{row.DeathRawData}</TableCell>
                      <TableCell align="left">{row.DeathModelData}</TableCell>
                      <TableCell align="left">
                        {Math.abs(
                          Math.floor(row.DeathRawData - row.DeathModelData)
                        )}
                      </TableCell>
                      <TableCell align="left">
                        {findDiffernceValue(
                          row.DeathRawData,
                          row.DeathModelData
                        )}
                        %
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : null}
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
    mainVS: state.reducer.VS,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(TableVS);
