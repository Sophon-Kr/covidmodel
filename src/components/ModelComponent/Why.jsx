import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

export const Why = (props) => {
  return (
    <Grid

    // style={{ backgroundColor: "grey" }}
    >
      <Grid
        style={{
          minHeight: 100,
          fontWeight: "bold",
          fontSize: 50,
          marginLeft: 50,
        }}
      >
        Why SV1V2VbIRHD Model ?
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
          xl={3}
          style={{ backgroundColor: "lightgreen", minHeight: 350 }}
        ></Grid>
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            backgroundColor: "lightgrey",
            minHeight: 350,
            marginLeft: 50,
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Why);
