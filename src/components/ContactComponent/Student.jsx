import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import AdvisorProfile from "../../assets/user-computer-icons-anonymity-png-favpng-Ps1EmXsrUx17SLTQrTeDg1FN5.jpg";
import Typography from "@mui/material/Typography";

const studentData = [
  {
    name: "นาย กฤษฎา อาทิตย์กวิน",
    type: "นักศึกษา",
  },
  {
    name: "นางสาว พรรษมน บุญชนะชัย",
    type: "นักศึกษา",
  },
  {
    name: "นางสาว แพรวฟ้า สันทิฐิกวงศ์",
    type: "นักศึกษา",
  },
  {
    name: (
      <span>
        &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;นาย โศภณ ไกรพินิจ
        &nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
      </span>
    ),
    type: "นักศึกษา",
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
              sx={{ width: 200, height: "auto" }}
            />
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
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
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <div
              style={{
                fontSize: "1.2vw",
                fontFamily: "IBM Plex Sans Thai Looped",
                fontWeight: "400",
              }}
            >
              {studentData.type}
            </div>
          </Grid>
        </div>
      ))}
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Student);
