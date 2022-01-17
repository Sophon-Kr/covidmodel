import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

export const CoAdviser = (props) => {
  return (
    <Grid style={{ marginTop: 30 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          container
          xs={2}
          md={2}
          lg={2}
          xl={2}
          style={{ backgroundColor: "lightgreen", minHeight: 250 }}
        ></Grid>
        <Grid
          container
          xs={2}
          md={2}
          lg={2}
          xl={2}
          style={{ backgroundColor: "lightgreen", minHeight: 250 }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CoAdviser);
