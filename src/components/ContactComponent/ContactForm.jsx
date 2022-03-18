import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import contactPic from "../../assets/contactPic.png";

// import EmailUtil from "../../services/sendemail.service";
import { sendEmail } from "../../services/sendemail.service";
// import { getRawDataMonth } from "../../services/rawData.service";

export const ContactForm = (props) => {
  // const [contact, setContact] = React.useState(0);
  const [subjectData, setSubjectData] = React.useState("");
  const [sendFrom, setSendFrom] = React.useState("");
  const [sendText, setSendText] = React.useState("");
  const [sendSnackbar, setSendSnackbar] = React.useState(false);

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const handleOpenSnackbar = (status) => {
    if (status === "Success") {
      setSendSnackbar(status);
    } else {
      setSendSnackbar("failure");
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    setSendSnackbar(false);
  };
  const handleClear = (event) => {
    setSubjectData("");
    setSendFrom("");
    setSendText("");
  };

  const handleSubjectData = (event) => {
    setSubjectData(event.target.value);
  };

  const handleSendFrom = (event) => {
    setSendFrom(event.target.value);
  };
  const handleSendText = (event) => {
    setSendText(event.target.value);
  };
  const handleSendMail = async () => {
    const forSend = {
      sendFrom,
      subjectData,
      sendText,
    };
    //console.log("testsend", forSend);
    const testsend = await sendEmail(forSend);
    console.log("testsend", testsend);
    handleOpenSnackbar(testsend);
  };

  return (
    <Grid style={{ marginTop: 30, padding: 30 }}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid
          item={true}
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{
            minHeight: 600,
          }}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <img src={contactPic} alt="contact" width="150%" height="auto" />
        </Grid>
        <Grid
          item={true}
          xs={4}
          sm={4}
          md={4}
          lg={4}
          xl={4}
          style={{
            minHeight: 600,
          }}
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <img src={contactPic} alt="contact" width="300%" height="auto" />
        </Grid>
        <Grid
          item={true}
          xs={12}
          sm={12}
          md={12}
          lg={7}
          xl={7}
          style={{
            minHeight: 600,
          }}
        >
          <div
            style={{
              color: "#AED6F1",
              fontFamily: "IBM Plex Sans Thai Looped",
              fontWeight: "600",
              fontSize: "6vw",
            }}
          >
            CONTACT US
          </div>
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginTop: 20 }}
          ></Grid>
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
            <Grid item={true} xs={12} sm={12} md={9} lg={9} xl={9}>
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
            <Grid item={true} xs={12} sm={12} md={9} lg={9} xl={9}>
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
            <Grid item={true} xs={12} sm={12} md={9} lg={9} xl={9}>
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
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: 30 }}
          >
            <Grid
              xs={12}
              sm={12}
              md={9}
              lg={9}
              xl={9}
              container
              item
              justifyContent="space-around"
              alignItems="center"
            >
              <Button
                variant="contained"
                startIcon={<ClearRoundedIcon />}
                size="large"
                style={{
                  backgroundColor: "#ADE2FD",
                  color: "black",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "600",
                  marginTop: 20,
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
                  marginTop: 20,
                }}
                onClick={handleSendMail}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Snackbar
        open={sendSnackbar}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        {sendSnackbar === "Success" ? (
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Sending Completed
          </Alert>
        ) : sendSnackbar === "failure" ? (
          <Alert
            onClose={handleCloseSnackbar}
            severity="error"
            sx={{ width: "100%" }}
          >
            Sending Failed
          </Alert>
        ) : null}
      </Snackbar>
    </Grid>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default ContactForm;
