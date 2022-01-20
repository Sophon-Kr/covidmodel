import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AdvisorProfile from "../../assets/user-computer-icons-anonymity-png-favpng-Ps1EmXsrUx17SLTQrTeDg1FN5.jpg";

export const CoAdviser = (props) => {
  return (
    <Grid style={{ marginTop: 30 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Avatar
          alt="Remy Sharp"
          src={AdvisorProfile}
          sx={{ width: 250, height: "auto" }}
          // width="350"
          // height="auto"
        />
        <Avatar
          alt="Remy Sharp"
          src={AdvisorProfile}
          sx={{ width: 250, height: "auto" }}
          // width="350"
          // height="auto"
        />
        {/* <Grid
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
        ></Grid> */}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CoAdviser);
