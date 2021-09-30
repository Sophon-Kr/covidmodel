import React, { useState } from "react";
import { connect } from "react-redux";
import Darklogo from "../Covid-logo-dark.png";
import Lightlogo from "../Covid-logo-light.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import SortIcon from "@mui/icons-material/Sort";
import Collapse from "@mui/material/Collapse";

export const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleMenuMobile = () => {
    setIsMobile(!isMobile);
  };
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar style={{ backgroundColor: "#2f5d8c", color: "#F9F9F9" }}>
          <img
            style={{ width: "45px", height: "45px", marginRight: 7 }}
            src={Lightlogo}
            alt="logo"
          />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontSize: 20 }}
          >
            COVID-19
          </Typography>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <Button color="inherit">Home</Button>
            <Button color="inherit">Model</Button>
            <Button color="inherit">Data</Button>
            <Button color="inherit">Contact</Button>
          </Box>
          <IconButton
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
                xl: "none",
              },
              mr: 2,
            }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuMobile}
          >
            {isMobile ? <SortIcon /> : <MenuIcon />}
          </IconButton>
        </Toolbar>

        <Collapse in={isMobile}>
          <Container
            maxWidth="xs"
            style={{
              backgroundColor: "#2f5d8c",
              paddingLeft: 20,
              paddingBottom: 10,
            }}
            sx={{
              display: {
                xs: "block",
                sm: "blocknone",
                md: "none",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <Container style={{ padding: 10 }}>Home</Container>
            <Container style={{ padding: 10 }}>Model</Container>
            <Container style={{ padding: 10 }}>Data</Container>
            <Container style={{ padding: 10 }}>Contact</Container>
          </Container>
        </Collapse>
      </AppBar>
    </Box>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
