import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";

export const Contactpage = (props) => {
  return (
    <Container maxWidth="xxl">
      <Container maxWidth="xl" style={{ paddingTop: 30 }}>
        <Paper
          style={{
            minHeight: 100,
            padding: 30,
          }}
          elevation={5}
        >
          Contact page
        </Paper>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contactpage);
