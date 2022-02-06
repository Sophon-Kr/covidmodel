import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

export const DescriptionPicRight = (props) => {
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
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            display: "flex",
            alignItems: "center",
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
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
          xl={3}
          style={{
            marginLeft: 50,
            textAlign: "center",
            textJustify: "center",
            fontSize: 200,
          }}
        >
          {props.pic}
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
)(DescriptionPicRight);
