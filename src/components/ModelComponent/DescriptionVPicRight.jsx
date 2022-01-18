import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

export const DescriptionVPicRight = (props) => {
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
            backgroundColor: "lightgrey",
            minHeight: 350,
            padding: 40,
            display: "flex",
            alignItems: "center",
            fontSize: 30,
          }}
        >
          {props.name} คือ {props.text}
        </Grid>
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
          xl={3}
          style={{
            backgroundColor: "lightgreen",
            minHeight: 350,
            marginLeft: 50,
            padding: 40,
            textAlign: "center",
            textJustify: "center",
            fontSize: 200,
          }}
        >
          {props.pic}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionVPicRight);
