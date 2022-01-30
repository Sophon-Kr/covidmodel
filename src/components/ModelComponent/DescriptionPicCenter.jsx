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
            minHeight: 350,
            marginLeft: 50,
            padding: 40,
            display: "flex",
            alignItems: "center",
            fontSize: "30px",
          }}
        >
          <Grid
            container
            style={{
              fontFamily: "IBM Plex Sans Thai Looped",
              fontWeight: "400",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              component="div"
              style={{
                color: props.color,
                fontWeight: "600",
                fontFamily: "IBM Plex Sans Thai Looped",
              }}
            >
              {props.name}
            </Typography>

            {props.text}
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
