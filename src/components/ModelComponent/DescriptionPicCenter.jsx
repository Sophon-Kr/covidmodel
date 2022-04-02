import React from "react";
import Grid from "@mui/material/Grid";

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
            maxWidth: "50%",
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
            padding: 40,
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

export default DescriptionPicCenter;
