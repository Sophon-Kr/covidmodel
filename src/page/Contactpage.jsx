import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import CoAdviser from "../components/ContactComponent/CoAdviser";
import Student from "../components/ContactComponent/Student";
import ContactForm from "../components/ContactComponent/ContactForm";

export const Contactpage = (props) => {
  return (
    <Container maxWidth="xxl" style={{ marginTop: 65, marginBottom: 35 }}>
      <Container maxWidth="xxl" style={{ paddingTop: 30 }} disableGutters>
        <Paper
          style={{
            minHeight: 700,
            padding: 30,
          }}
          variant="outlined"
          square
        >
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
