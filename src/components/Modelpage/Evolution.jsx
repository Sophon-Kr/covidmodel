import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

export const Evolution = (props) => {
  return (
    <Grid style={{ marginTop: 50 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            backgroundColor: "lightgreen",
            minHeight: 200,
            marginLeft: 50,
          }}
        ></Grid>
      </Grid>
      <Grid
        style={{
          minHeight: 100,
          fontWeight: "bold",
          fontSize: 50,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        SEIR to SV1V2VbIRHD
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            backgroundColor: "lightgrey",
            minHeight: 200,
            marginLeft: 50,
          }}
        ></Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Evolution);
