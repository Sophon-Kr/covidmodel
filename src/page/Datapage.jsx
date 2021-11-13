import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TableModel from "../components/Table/TableModel";
import TableSource from "../components/Table/TableSource";

export const Datapage = (props) => {
  return (
    <Container maxWidth="xxl">
      <Container maxWidth="xxl" style={{ paddingTop: 30 }}>
        <Paper
          style={{
            minHeight: 100,
            padding: 30,
          }}
          variant="outlined"
          square
        >
          Datapage
        </Paper>
      </Container>
      <TableModel />
      {/* <TableSource /> */}
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Datapage);
