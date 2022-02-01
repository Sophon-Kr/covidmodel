import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const DescriptionPicCenter = (props) => {
  return (
    <Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            textAlign: "center",
            textJustify: "center",
            // fontSize: "200px",
          }}
        >
          {props.pic}
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            // backgroundColor: "lightgrey",
            //minHeight: 350,
            //marginLeft: 50,
            padding: 40,
            display: "flex",
            alignItems: "center",
            //fontSize: "30px",
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionPicCenter);
