import React from "react";
import Grid from "@mui/material/Grid";

export const DescriptionPicLeft = (props) => {
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
          xs={3}
          md={3}
          lg={3}
          xl={3}
          style={{
            textAlign: "center",
            textJustify: "center",
            fontSize: 200,
          }}
        >
          {props.pic}
        </Grid>
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            marginLeft: 50,
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
      </Grid>
    </Grid>
  );
};

export default DescriptionPicLeft;
