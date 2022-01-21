import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AdvisorProfile from "../../assets/user-computer-icons-anonymity-png-favpng-Ps1EmXsrUx17SLTQrTeDg1FN5.jpg";
import Typography from "@mui/material/Typography";
export const Adviser = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      style={{ marginBottom: 50 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginBottom: 50 }}
      >
        <Avatar
          alt="Remy Sharp"
          src={AdvisorProfile}
          sx={{ width: 300, height: "auto" }}
          // width="350"
          // height="auto"
        />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          style={{ fontSize: 40 }}
        >
          ผศ.ดร.วศิน สุทธิฉายา
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Typography
          variant="h3"
          gutterBottom
          component="div"
          style={{ fontSize: 35 }}
        >
          อาจารย์ที่ปรึกษาหลัก
        </Typography>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Adviser);
