import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";
import { padding } from "@mui/system";

export const Homepage = (props) => {
  return (
    <Container
      // style={{ backgroundColor: "#F9F9F9", height: "100%" }}
      maxWidth="xxl"
    >
      <Container maxWidth="xl" style={{ paddingTop: 30 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Paper
              style={{
                minHeight: 100,
                padding: 30,
                backgroundColor: "lightgreen",
              }}
            >
              data1
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Paper
              style={{
                minHeight: 100,
                padding: 30,
                backgroundColor: "lightyellow",
              }}
            >
              data2
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Paper
              style={{
                minHeight: 100,
                padding: 30,
                backgroundColor: "pink",
              }}
            >
              data3
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
            <Paper
              style={{
                minHeight: 100,
                padding: 30,
                backgroundColor: "#D8D8D6",
              }}
            >
              data3
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" style={{ paddingTop: 30 }}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <MainGraph />
        </Paper>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
