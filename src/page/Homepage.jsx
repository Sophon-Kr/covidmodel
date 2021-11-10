import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const dailyData = [
  {
    id: 1,
    data: " Daily Confirmed Cases ",
    color: "red",
  },
  {
    id: 2,
    data: " Daily Dathes Cases",
    color: "grey",
  },
  {
    id: 3,
    data: " Daily Recovered Cases",
    color: "green",
  },
  {
    id: 4,
    data: " Daily Vacinated Cases",
    color: "yellow",
  },
];

export const Homepage = (props) => {
  return (
    <Container maxWidth="xxl">
      <Container maxWidth="xl" style={{ paddingTop: 30 }}>
        <Grid container spacing={3}>
          {dailyData.map((data) => (
            <Grid key={data.id} item xs={12} sm={6} md={3} lg={3} xl={3}>
              <Paper
                style={{
                  minHeight: 100,
                  padding: 30,
                  borderColor: "red",
                }}
                elevation={5}
              >
                {data.data}
              </Paper>
              <Divider style={{ backgroundColor: data.color, padding: 2 }} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth="xl" style={{ paddingTop: 30 }}>
        <Paper elevation={5} style={{ padding: 35 }}>
          <MainGraph />
          <Grid
            container
            // maxWidth="xl"
            style={{
              backgroundColor: "#AED6F1",
              padding: 20,
              // marginLeft: 35,
              // marginRight: 35,
              marginTop: 35,
            }}
          >
            data some thing
          </Grid>
        </Paper>
      </Container>

      <Container maxWidth="xl" style={{ paddingTop: 30 }}>
        <Paper elevation={5} style={{ padding: 35 }}>
          <MainGraph />
          <Grid
            container
            // maxWidth="xl"
            style={{
              backgroundColor: "#AED6F1",
              padding: 20,
              // marginLeft: 35,
              // marginRight: 35,
              marginTop: 35,
            }}
          >
            data some thing
          </Grid>
        </Paper>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
