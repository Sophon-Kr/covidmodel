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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Grid";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b5e20",
    },
    secondary: {
      main: "#fbc02d",
    },
  },
});
export const Navbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const handleMenuMobile = () => {
    setIsMobile(!isMobile);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          flexGrow: 1,
          display: {
            xs: "none",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <AppBar
          position="static"
          style={{ backgroundColor: "#AED6F1", color: "#000000" }}
        >
          <Toolbar style={{ backgroundColor: "#AED6F1", color: "#000000" }}>
            <img
              style={{ width: "45px", height: "45px", marginRight: 7 }}
              src={Lightlogo}
              alt="logo"
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div" style={{ fontSize: 20 }}>
                COVID-19
              </Typography>
            </Box>

            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "block",
                },
              }}
            >
              <Grid
                container
                direction="row"
                justifyContent="start"
                alignItems="center"
              >
                <Grid item md={3} lg={3} xl={3}>
                  <NavLink
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      style={{ marginLeft: "20", alignItems: "center" }}
                      color="inherit"
                      startIcon={<AutoGraphRoundedIcon />}
                      maxWidth
                    >
                      Graph
                    </Button>
                  </NavLink>
                </Grid>

                <Grid item md={3} lg={3} xl={3}>
                  <NavLink
                    to="/datapage"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      style={{ marginLeft: "20" }}
                      color="inherit"
                      startIcon={<StorageRoundedIcon />}
                      maxWidth
                    >
                      Data
                    </Button>
                  </NavLink>
                </Grid>

                <Grid item md={3} lg={3} xl={3}>
                  <NavLink
                    to="/modelpage"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      style={{ marginLeft: "20", alignItems: "center" }}
                      color="inherit"
                      startIcon={<DescriptionRoundedIcon />}
                      maxWidth
                    >
                      Model
                    </Button>
                  </NavLink>
                </Grid>

                <Grid item md={3} lg={3} xl={3}>
                  <NavLink
                    to="/contactpage"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      style={{ marginLeft: "20" }}
                      color="inherit"
                      startIcon={<PeopleAltRoundedIcon />}
                      maxWidth
                    >
                      Contact
                    </Button>
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          display: {
            xs: "block",
            sm: "none",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
        style={{ backgroundColor: "#AED6F1", color: "#F9F9F9" }}
      >
        <Toolbar style={{ backgroundColor: "#AED6F1", color: "#F9F9F9" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <IconButton aria-label="Graph" color="inherit" fontSize="large">
              <AutoGraphRoundedIcon />
            </IconButton>
            <IconButton aria-label="Model" color="inherit">
              <DescriptionRoundedIcon />
            </IconButton>
            <IconButton aria-label="Data" color="inherit">
              <StorageRoundedIcon />
            </IconButton>
            <IconButton aria-label="Contact" color="inherit">
              <PeopleAltRoundedIcon />
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
