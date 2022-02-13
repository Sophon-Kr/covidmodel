import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";

const equationCovid = [
  {
    node: "S",
    equation: (
      <span>
        <sup>d(S)</sup>&frasl;<sub>d(t)</sub> = &minus;&beta;<sub>S</sub>SI
        &minus; &omega;<sub>1</sub>S &minus; &mu;S
      </span>
    ),
  },
  {
    node: "V1",
    equation: (
      <span>
        <sup>
          d(V<sub>1</sub>)
        </sup>
        &frasl;<sub>d(t)</sub> = &omega;<sub>1</sub>S &minus; &omega;
        <sub>2</sub>V<sub>1</sub> &minus; &beta;<sub>S</sub>(1&minus;&epsilon;
        <sub>1</sub>)V<sub>1</sub>I&minus; &mu;V<sub>1</sub>
      </span>
    ),
  },
  {
    node: "V2",
    equation: (
      <span>
        <sup>
          d(V<sub>2</sub>)
        </sup>
        &frasl;<sub>d(t)</sub> = &omega;<sub>2</sub>V<sub>1</sub> &minus;
        &omega;
        <sub>3</sub>V<sub>2</sub> &minus; &beta;<sub>S</sub>(1&minus;&epsilon;
        <sub>2</sub>)V<sub>2</sub>I&minus; &mu;V<sub>2</sub>
      </span>
    ),
  },
  {
    node: "M",
    equation: (
      <span>
        <sup>d(M)</sup>
        &frasl;<sub>d(t)</sub> = &omega;<sub>3</sub>V<sub>2</sub> + &lambda;
        <sub>H</sub>H + &lambda;
        <sub>S</sub>I - &beta;<sub>S</sub>
        (1&minus;&epsilon;
        <sub>2</sub>)MI&minus; &mu;M
      </span>
    ),
  },
  {
    node: "I",
    equation: (
      <span>
        <sup>d(I)</sup>
        &frasl;<sub>d(t)</sub> = &beta;<sub>S</sub>SI + &beta;
        <sub>S</sub>
        (1&minus;&epsilon;
        <sub>1</sub>)V<sub>1</sub>I + &beta;
        <sub>S</sub>
        (1&minus;&epsilon;
        <sub>2</sub>)V<sub>2</sub>I + &beta;
        <sub>S</sub>
        (1&minus;&epsilon;
        <sub>2</sub>)MI &minus; &alpha;<sub>S</sub>I &minus; &lambda;
        <sub>S</sub>I &minus; &zeta;<sub>S</sub>I
      </span>
    ),
  },
  {
    node: "H",
    equation: (
      <span>
        <sup>d(H)</sup>
        &frasl;<sub>d(t)</sub> = &alpha;<sub>S</sub>I &minus; &lambda;
        <sub>H</sub>H &minus; &zeta;<sub>H</sub>H
      </span>
    ),
  },
  // {
  //   node: "R",
  //   equation: (
  //     <span>
  //       <sup>d(R)</sup>
  //       &frasl;<sub>d(t)</sub> = &lambda;
  //       <sub>H</sub>H + &lambda;<sub>S</sub>I &minus; R
  //     </span>
  //   ),
  // },
  {
    node: "D",
    equation: (
      <span>
        <sup>d(D)</sup>
        &frasl;<sub>d(t)</sub> = &zeta;<sub>S</sub>I + &zeta;<sub>H</sub>H
      </span>
    ),
  },
];

export const DescriptionEquation = (props) => {
  return (
    <Grid style={{ marginTop: "4%" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          style={{
            marginLeft: 50,
          }}
        >
          <div
            style={{
              fontFamily: "IBM Plex Sans Thai Looped",
              fontWeight: "600",
              fontSize: "3vw",
              marginBottom: 10,
            }}
          >
            Equations
          </div>

          {equationCovid.map((data) => (
            <div
              style={{
                fontFamily: "IBM Plex Sans Thai Looped",
                fontWeight: "400",
                fontSize: "2vw",
              }}
            >
              {data.equation}
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DescriptionEquation);
