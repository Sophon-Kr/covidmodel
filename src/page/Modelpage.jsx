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

const modelDisplay = [
  {
    name: "S",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "S",
  },
  {
    name: "V1",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "V1",
  },
  {
    name: "V2",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "V2",
  },
  {
    name: "M",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "M",
  },
  {
    name: "I",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "I",
  },
  {
    name: "R",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "R",
  },
  {
    name: "H",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "H",
  },
  {
    name: "D",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
    pic: "D",
  },
];

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
          {modelDisplay.map((DescriptionData, index) =>
            index % 2 === 0 ? (
              <DescriptionPicLeft
                name={DescriptionData.name}
                text={DescriptionData.text}
                pic={DescriptionData.pic}
              />
            ) : (
              <DescriptionVPicRight
                name={DescriptionData.name}
                text={DescriptionData.text}
                pic={DescriptionData.pic}
              />
            )
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
