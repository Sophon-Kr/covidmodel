import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import va from "../../assets/va.png";
import ra from "../../assets/ra.png";
import ta from "../../assets/ta.png";

const coAdviser = [
  {
    name: "ผศ.ดร.วศิน สุทธิฉายา",
    type: "อาจารย์ที่ปรึกษา",
    pic: va,
  },
  {
    name: "ผศ.ธนดล ปริตรานันท์",
    type: "อาจารย์ที่ปรึกษาร่วม",
    pic: ta,
  },
  {
    name: "รศ.ดร.รังสิพรรณ มฤคทัต",
    type: "อาจารย์ที่ปรึกษาร่วม",
    pic: ra,
  },
];
export const CoAdviser = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      style={{ marginBottom: 50 }}
    >
      {coAdviser.map((CoAdvisorData) => (
        <div>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginBottom: "5%", marginTop: "5%" }}
          >
            <Avatar
              alt="Remy Sharp"
              src={CoAdvisorData.pic}
              sx={{ width: 200, height: "auto" }}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <div
                style={{
                  fontSize: "18px",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "400",
                }}
              >
                {CoAdvisorData.name}
              </div>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <div
                style={{
                  fontSize: "1.75vw",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "400",
                }}
              >
                {CoAdvisorData.name}
              </div>
            </Box>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                display: {
                  xs: "block",
                  sm: "block",
                  md: "none",
                  lg: "none",
                  xl: "none",
                },
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "400",
                }}
              >
                {CoAdvisorData.type}
              </div>
            </Box>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <div
                style={{
                  fontSize: "1.75vw",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "400",
                }}
              >
                {CoAdvisorData.type}
              </div>
            </Box>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(CoAdviser);
export default CoAdviser;
