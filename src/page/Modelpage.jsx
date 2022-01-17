import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";

import Why from "../components/Modelpage/Why";
import Evolution from "../components/Modelpage/Evolution";
import ModelPart from "../components/Modelpage/ModelPart";
import DescriptionS from "../components/Modelpage/DescriptionS";
import DescriptionV1 from "../components/Modelpage/DescriptionV1";
import DescriptionV2 from "../components/Modelpage/DescriptionV2";
import DescriptionVb from "../components/Modelpage/DescriptionVb";
import DescriptionI from "../components/Modelpage/DescriptionI";
import DescriptionR from "../components/Modelpage/DescriptionR";
import DescriptionEquation from "../components/Modelpage/DescriptionEquation";
import ExampleFlow from "../components/Modelpage/ExampleFlow";

export const Modelpage = (props) => {
  return (
    <Container maxWidth="xxl" style={{ marginTop: 75, marginBottom: 35 }}>
      <Container maxWidth="xxl" style={{ paddingTop: 30 }} disableGutters>
        <Paper
          style={{
            minHeight: 700,
            padding: 30,
          }}
          variant="outlined"
          square
        >
          <Why />
          <Evolution />
          <ModelPart />
          <DescriptionS />
          <DescriptionV1 />
          <DescriptionV2 />
          <DescriptionVb />
          <DescriptionI />
          <DescriptionR />
          <DescriptionI />
          {/* H */}
          <DescriptionR />

          {/* D */}
          <DescriptionEquation />
          <ExampleFlow />
        </Paper>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Modelpage);
