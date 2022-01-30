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

import { sendMailService } from "../../services/sendemail.service";
// import { getRawDataMonth } from "../../services/rawData.service";

const mailList = [
  "Advisor@gmail.com,\
  Co-Advisor1@gmail.com,\
  Co-Advisor2@gmail.com,\
  Student1@gmail.com,\
  Student2@gmail.com,\
  Student3@gmail.com,\
  Student4@gmail.com",
  "Advisor@gmail.com",
  "Co-Advisor1@gmail.com",
  "Co-Advisor2@gmail.com",
  "Student1@gmail.com",
  "Student2@gmail.com",
  "sophon.kra@student.mahidol.edu",
  "sophonkripinit@gmail.com",
];

export const ContactForm = (props) => {
  const [contact, setContact] = React.useState(0);
  const [subjectData, setSubjectData] = React.useState("");
  const [sendTo, setSendTo] = React.useState(mailList);
  const [sendFrom, setSendFrom] = React.useState("");
  const [sendText, setSendText] = React.useState("");

  //   var subjectData = "Sending Email using Node.js";
  // var sendTo = ["sophonkripinit@gmail.com"];
  // var sendFrom = "sender@server.com";
  // var sendText =
  const handleClear = (event) => {
    setContact(0);
    setSubjectData("");
    setSendTo(mailList);
    setSendFrom("");
    setSendText("");
  };

  const handleSubjectData = (event) => {
    //console.log("handleSubjectData", event);
    setSubjectData(event.target.value);
  };
  const handleSendTo = (event) => {
    //console.log("handleSendTo", event);
    // <MenuItem value={0}>All</MenuItem>
    // <MenuItem value={1}>Advisor</MenuItem>
    // <MenuItem value={2}>Co-Advisor1</MenuItem>
    // <MenuItem value={3}>Co-Advisor2</MenuItem>
    // <MenuItem value={4}>Student1</MenuItem>
    // <MenuItem value={5}>Student2</MenuItem>
    // <MenuItem value={6}>Student3</MenuItem>
    // <MenuItem value={7}>Student4</MenuItem>
    // let allList =
    //   "Advisor@gmail.com,\
    //   Co-Advisor1@gmail.com,\
    //   Co-Advisor2@gmail.com,\
    //   Student1@gmail.com,\
    //   Student2@gmail.com,\
    //   Student3@gmail.com,\
    //   Student4@gmail.com";

    let mailPosition = event.target.value;
    // console.log("mailList[mailPosition]", mailPosition, mailList[mailPosition]);
    setContact(event.target.value);
    setSendTo(mailList[mailPosition]);
  };
  const handleSendFrom = (event) => {
    // console.log("handleSendFrom", event);
    setSendFrom(event.target.value);
  };
  const handleSendText = (event) => {
    //console.log("handleSendText", event.target.value);
    setSendText(event.target.value);
  };
  const handleSendMail = async () => {
    //console.log("handleSendMail:: ", sendTo, sendFrom, subjectData, sendText);
    // const tempData = await getRawDataMonth();
    // console.log("tempData", tempData);
    var sentmail = await sendMailService(
      sendTo,
      sendFrom,
      subjectData,
      sendText
    );
    // console.log(sentmail);
  };

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
          <img src={contactPic} alt="contact" width="150%" height="auto" />
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
                onChange={handleSendTo}
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
                value={sendFrom}
                onChange={handleSendFrom}
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
                value={subjectData}
                onChange={handleSubjectData}
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
                value={sendText}
                onChange={handleSendText}
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
                  onClick={handleClear}
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
                  onClick={handleSendMail}
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
