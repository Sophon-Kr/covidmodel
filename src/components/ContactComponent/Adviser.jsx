import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";

export const Adviser = (props) => {
  return (
    <Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          width="350"
          height="auto"
        />
        {/* <Grid
          container
          xs={3}
          md={3}
          lg={3}
          xl={3}
          style={{ backgroundColor: "lightgreen", minHeight: 350 }}
        ></Grid> */}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Adviser);
