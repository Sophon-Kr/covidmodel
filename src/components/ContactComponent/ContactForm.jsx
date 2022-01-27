import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

import contactPic from "../../assets/contactPic.png";

import nodemailer from "nodemailer";

export const ContactForm = (props) => {
  const [contact, setContact] = React.useState(0);

  const handleChange = (event) => {
    setContact(event.target.value);
  };
  // const handlesendMail = (event) => {
  //   let testmail = sendMail;
  //   console.log(testmail);
  // };

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "covidmodel01@gmail.com",
      pass: "covidcovid",
    },
  });

  var mailOptions = {
    from: "youremail@gmail.com",
    to: "sophonkripinit@gmail.com",
    subject: "Sending Email using Node.js",
    text: "That was easy!",
  };

  const sendMail = transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  return (
    <Grid style={{ marginTop: 30, padding: 30 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        // style={{ backgroundColor: "lightyellow" }}
      >
        <Grid
          item
          xs={4}
          md={4}
          lg={4}
          xl={4}
          style={{
            minHeight: 600,
            // backgroundColor: "lightgrey",
          }}
        >
          {/* Picture Contact */}
          <img src={contactPic} alt="contact" width="920" height="auto" />
        </Grid>
        <Grid
          item
          xs={7}
          md={7}
          lg={7}
          xl={7}
          style={{
            minHeight: 600,
            // backgroundColor: "lightgrey",
          }}
        >
          <Typography
            variant="h1"
            gutterBottom
            component="div"
            style={{
              color: "#AED6F1",
              fontFamily: "IBM Plex Sans Thai Looped",
              fontWeight: "600",
            }}
          >
            CONTACT US
          </Typography>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: 20 }}
          >
            <Grid>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "600",
                }}
              >
                Contact
              </Typography>
            </Grid>
            <Grid xs={9} md={9} lg={9} xl={9}>
              <TextField
                // labelId="demo-simple-select-label"
                // id="demo-simple-select"
                variant="outlined"
                value={contact}
                label="Select Contact"
                onChange={handleChange}
                select
                fullWidth
                style={{
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "400",
                }}
              >
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={1}>Advisor</MenuItem>
                <MenuItem value={2}>Co-Advisor1</MenuItem>
                <MenuItem value={3}>Co-Advisor2</MenuItem>
                <MenuItem value={4}>Student1</MenuItem>
                <MenuItem value={5}>Student2</MenuItem>
                <MenuItem value={6}>Student3</MenuItem>
                <MenuItem value={7}>Student4</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: 10 }}
          >
            <Grid>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "600",
                }}
              >
                Your Email
              </Typography>
            </Grid>
            <Grid xs={9} md={9} lg={9} xl={9}>
              <TextField
                variant="outlined"
                label="Your Email"
                // value={contact}
                // onChange={handleChange}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: 10 }}
          >
            <Grid>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "600",
                }}
              >
                Subject
              </Typography>
            </Grid>
            <Grid xs={9} md={9} lg={9} xl={9}>
              <TextField
                variant="outlined"
                label="Subject"
                // value={contact}
                // onChange={handleChange}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="top"
            style={{ marginTop: 10 }}
          >
            <Grid>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                style={{
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "600",
                }}
              >
                Details
              </Typography>
            </Grid>
            <Grid xs={9} md={9} lg={9} xl={9}>
              <TextField
                variant="outlined"
                label="Details"
                multiline
                rows={10}
                // value={contact}
                // onChange={handleChange}
                fullWidth
              ></TextField>
            </Grid>
          </Grid>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: 30 }}
          >
            <Grid></Grid>
            <Grid xs={9} md={9} lg={9} xl={9}>
              <Grid container justifyContent="space-evenly" alignItems="center">
                <Button
                  variant="contained"
                  startIcon={<ClearRoundedIcon />}
                  size="large"
                  style={{
                    backgroundColor: "#ADE2FD",
                    color: "black",
                    fontFamily: "IBM Plex Sans Thai Looped",
                    fontWeight: "600",
                  }}
                >
                  Clear
                </Button>
                <Button
                  variant="contained"
                  startIcon={<SendRoundedIcon />}
                  size="large"
                  style={{
                    backgroundColor: "#0157A2",
                    fontFamily: "IBM Plex Sans Thai Looped",
                    fontWeight: "600",
                  }}
                  onClick={() => sendMail}
                >
                  Send
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
