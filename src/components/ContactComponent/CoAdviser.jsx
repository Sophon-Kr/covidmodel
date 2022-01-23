import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AdvisorProfile from "../../assets/user-computer-icons-anonymity-png-favpng-Ps1EmXsrUx17SLTQrTeDg1FN5.jpg";
import Typography from "@mui/material/Typography";

const coAdviser = [
  {
    name: "ผศ.ธนดล ปริตรานันท์",
    type: "อาจารย์ที่ปรึกษาร่วม",
  },
  {
    name: "รศ.ดร.รังสิพรรณ มฤคทัต",
    type: "อาจารย์ที่ปรึกษาร่วม",
  },
];
export const CoAdviser = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      style={{ marginBottom: 80 }}
    >
      {/* <Avatar
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
        /> */}

      {coAdviser.map((CoAdvisorData) => (
        <div>
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
              sx={{ width: 250, height: "auto" }}
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
              style={{ fontSize: 35, fontFamily: "IBM Plex Sans Thai Looped", fontWeight: "400", }}
            >
              {CoAdvisorData.name}
            </Typography>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              style={{ fontSize: 30, fontFamily: "IBM Plex Sans Thai Looped", fontWeight: "400", }}
            >
              {CoAdvisorData.type}
            </Typography>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CoAdviser);
