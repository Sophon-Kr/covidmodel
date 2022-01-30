import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const DescriptionPicLeft = (props) => {
  return (
    <Grid
    // style={{ marginTop: 50 }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
          xl={3}
          style={{
            // backgroundColor: "lightgreen",
            // minHeight: 350,
            // padding: 40,
            textAlign: "center",
            textJustify: "center",
            fontSize: 200,
          }}
        >
          {props.pic}
          {/* <img src={props.pic} alt={props.pic} width="100" height="auto" /> */}
          {/* <img src={props.pic} alt={props.pic} width="100" height="auto" /> */}
        </Grid>
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            // backgroundColor: "lightgrey",
            minHeight: 350,
            marginLeft: 50,
            padding: 40,
            display: "flex",
            alignItems: "center",
            fontSize: 30,
          }}
        >
          <Grid container>
            <div
              style={{
                color: props.color,
                fontWeight: "600",
                fontFamily: "IBM Plex Sans Thai Looped",
                fontSize: "3vw",
              }}
            >
              {props.name}
            </div>
            <div
              style={{
                fontFamily: "IBM Plex Sans Thai Looped",
                fontWeight: "400",
                fontSize: "2vw",
              }}
            >
              {props.text}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionPicLeft);
