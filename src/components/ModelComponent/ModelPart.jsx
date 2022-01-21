import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

export const ModelPart = (props) => {
  return (
    <Grid style={{ marginTop: 0, marginBottom: 70 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={10}
          md={10}
          lg={10}
          xl={10}
          style={{
            backgroundColor: "lightgreen",
            minHeight: 700,
            marginLeft: 50,
            fontSize: 50,
            textAlign: "center",
          }}
        >
          Flows Model
        </Grid>
      </Grid>
      <Grid
        style={{
          minHeight: 100,
          fontWeight: "bold",
          fontSize: 50,
          textAlign: "center",
          marginTop: 40,
        }}
      >
        SV1V2MIRHD MODEL
      </Grid>
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
            // backgroundColor: "lightgrey",
            minHeight: 200,
            marginLeft: 50,
            fontSize: 30,
          }}
        >
          &emsp; &emsp; &emsp; Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModelPart);
