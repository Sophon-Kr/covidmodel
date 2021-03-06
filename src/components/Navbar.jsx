import React from "react";
import Lightlogo from "../Covid-logo-light.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
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
          position="fixed"
          style={{
            backgroundColor: "#AED6F1",
            color: "#000000",
          }}
        >
          <Toolbar style={{ backgroundColor: "#AED6F1", color: "#000000" }}>
            <img
              style={{ width: "45px", height: "45px", marginRight: 7 }}
              src={Lightlogo}
              alt="logo"
            />
            <Box sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="div"
                style={{
                  fontSize: 20,
                  color: "#212121",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "600",
                }}
              >
                SV1V2MIHD MODEL
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
                justifyContent="end"
                alignItems="center"
              >
                <Grid item>
                  <NavLink
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Button
                      style={{
                        marginLeft: "20",
                        alignItems: "center",
                        fontFamily: "IBM Plex Sans Thai Looped",
                        fontWeight: "600",
                      }}
                      color="inherit"
                      startIcon={<DescriptionRoundedIcon />}
                      // maxWidth
                    >
                      Model
                    </Button>
                  </NavLink>
                </Grid>
                <Grid item>
                  <NavLink
                    to="/graphpage"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      style={{
                        marginLeft: "20",
                        alignItems: "center",
                        fontFamily: "IBM Plex Sans Thai Looped",
                        fontWeight: "600",
                      }}
                      color="inherit"
                      startIcon={<AutoGraphRoundedIcon />}
                      // maxWidth
                    >
                      Graph
                    </Button>
                  </NavLink>
                </Grid>

                <Grid item>
                  <NavLink
                    to="/vsgraphpage"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      style={{
                        marginLeft: "20",
                        fontFamily: "IBM Plex Sans Thai Looped",
                        fontWeight: "600",
                      }}
                      color="inherit"
                      startIcon={<StorageRoundedIcon />}
                      // maxWidth
                    >
                      Comparasion
                    </Button>
                  </NavLink>
                </Grid>

                <Grid item>
                  <NavLink
                    to="/contactpage"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <Button
                      style={{
                        marginLeft: "20",
                        fontFamily: "IBM Plex Sans Thai Looped",
                        fontWeight: "600",
                      }}
                      color="inherit"
                      startIcon={<PeopleAltRoundedIcon />}
                      //maxWidth
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
        <Toolbar
          style={{
            backgroundColor: "#AED6F1",
            color: "#F9F9F9",
            // minHeight: 20,
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              <IconButton aria-label="Model" color="inherit" fontSize="large">
                <DescriptionRoundedIcon />
              </IconButton>
            </NavLink>
            <NavLink
              to="/graphpage"
              style={{ textDecoration: "none", color: "black" }}
            >
              <IconButton aria-label="Graph" color="inherit">
                <AutoGraphRoundedIcon />
              </IconButton>
            </NavLink>
            <NavLink
              to="/vsgraphpage"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <IconButton aria-label="Comparasion" color="inherit">
                <StorageRoundedIcon />
              </IconButton>
            </NavLink>

            <NavLink
              to="/contactpage"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <IconButton aria-label="Contact" color="inherit">
                <PeopleAltRoundedIcon />
              </IconButton>
            </NavLink>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default Navbar;
