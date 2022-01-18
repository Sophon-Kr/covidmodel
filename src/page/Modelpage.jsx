import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";

import Why from "../components/ModelComponent/Why";
import Evolution from "../components/ModelComponent/Evolution";
import ModelPart from "../components/ModelComponent/ModelPart";
import DescriptionPicLeft from "../components/ModelComponent/DescriptionPicLeft";
import DescriptionVPicRight from "../components/ModelComponent/DescriptionVPicRight";
import DescriptionEquation from "../components/ModelComponent/DescriptionEquation";
import ExampleFlow from "../components/ModelComponent/ExampleFlow";

export const Modelpage = (props) => {
  const modelDisplay = ["S", "V1", "V2", "M", "I", "R", "H", "D"];
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
          {modelDisplay.map((DescriptionData, index) =>
            index % 2 === 0 ? <DescriptionPicLeft /> : <DescriptionVPicRight />
          )}

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
