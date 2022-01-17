import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import MainGraph from "../components/Graph/MainGraph";
import Grid from "@mui/material/Grid";

import Adviser from "../components/ContactComponent/Adviser";
import CoAdviser from "../components/ContactComponent/CoAdviser";
import Student from "../components/ContactComponent/Student";
import ContactForm from "../components/ContactComponent/ContactForm";

export const Contactpage = (props) => {
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
          <Adviser />
          <CoAdviser />
          <Student />
          <ContactForm />
        </Paper>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Contactpage);
