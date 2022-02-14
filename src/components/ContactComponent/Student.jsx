import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AdvisorProfile from "../../assets/user-computer-icons-anonymity-png-favpng-Ps1EmXsrUx17SLTQrTeDg1FN5.jpg";
import Box from "@mui/material/Box";
import pr from "../../assets/pr.png";
import so from "../../assets/so.png";
import ba from "../../assets/ba.png";
import be from "../../assets/be.png";

const studentData = [
  {
    name: "นาย กฤษฎา อาทิตย์กวิน",
    type: "นักศึกษา",
    pic: ba,
  },
  {
    name: "นางสาว พรรษมน บุญชนะชัย",
    type: "นักศึกษา",
    pic: be,
  },
  {
    name: <span> &nbsp;&nbsp;นางสาว แพรวฟ้า สันทิฐิกวงศ์</span>,
    type: "นักศึกษา",
    pic: pr,
  },
  {
    name: (
      <span>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;นาย โศภณ ไกรพินิจ &nbsp;&nbsp;</span>
    ),
    type: "นักศึกษา",
    pic: so,
  },
];

export const Student = (props) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      style={{ marginBottom: 50 }}
    >
      {studentData.map((studentData) => (
        <Grid item sx={12} sm={6} md={6} lg={3} xl={3}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            style={{ marginBottom: "5%", marginTop: "5%" }}
          >
            <Avatar
              alt="Remy Sharp"
              src={studentData.pic}
              sx={{ width: 180, height: "auto" }}
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
                  fontSize: "16px",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "400",
                }}
              >
                {studentData.name}
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
                {studentData.name}
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
                  fontSize: "14px",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "400",
                }}
              >
                {studentData.type}
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
                {studentData.type}
              </div>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
