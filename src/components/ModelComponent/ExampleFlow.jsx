import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

export const ExampleFlow = (props) => {
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
          xs={10}
          md={10}
          lg={10}
          xl={10}
          style={{
            backgroundColor: "lightyellow",
            minHeight: 700,
            marginLeft: 50,
          }}
        >
          Flows.gif
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ExampleFlow);