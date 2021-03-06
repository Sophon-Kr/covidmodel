import React from "react";
import Grid from "@mui/material/Grid";

const equationCovid = [
  {
    id: "1",
    node: "S",
    equation: (
      <span>
        <sup>d(S)</sup>&frasl;<sub>d(t)</sub> = &minus;&beta;<sub>1</sub>SI
        &minus; &omega;<sub>1</sub>S &minus; &mu;S
      </span>
    ),
  },
  {
    id: "2",
    node: "V1",
    equation: (
      <span>
        <sup>
          d(V<sub>1</sub>)
        </sup>
        &frasl;<sub>d(t)</sub> = &omega;<sub>1</sub>S &minus; &omega;
        <sub>2</sub>V<sub>1</sub> &minus; &beta;<sub>1</sub>(1&minus;&epsilon;
        <sub>1</sub>)V<sub>1</sub>I&minus; &mu;V<sub>1</sub>
      </span>
    ),
  },
  {
    id: "3",
    node: "V2",
    equation: (
      <span>
        <sup>
          d(V<sub>2</sub>)
        </sup>
        &frasl;<sub>d(t)</sub> = &omega;<sub>2</sub>V<sub>1</sub> &minus;
        &omega;
        <sub>3</sub>V<sub>2</sub> &minus; &beta;<sub>1</sub>(1&minus;&epsilon;
        <sub>2</sub>)V<sub>2</sub>I&minus; &mu;V<sub>2</sub>
      </span>
    ),
  },
  {
    id: "4",
    node: "M",
    equation: (
      <span>
        <sup>d(M)</sup>
        &frasl;<sub>d(t)</sub> = &omega;<sub>3</sub>V<sub>2</sub> + &lambda;
        <sub>2</sub>H + &lambda;
        <sub>1</sub>I &minus; &beta;<sub>1</sub>
        (1&minus;&epsilon;
        <sub>2</sub>)MI&minus; &mu;M
      </span>
    ),
  },
  {
    id: "5",
    node: "I",
    equation: (
      <span>
        <sup>d(I)</sup>
        &frasl;<sub>d(t)</sub> = &beta;<sub>1</sub>SI + &beta;
        <sub>1</sub>
        (1&minus;&epsilon;
        <sub>1</sub>)V<sub>1</sub>I + &beta;
        <sub>1</sub>
        (1&minus;&epsilon;
        <sub>2</sub>)V<sub>2</sub>I + &beta;
        <sub>1</sub>
        (1&minus;&epsilon;
        <sub>2</sub>)MI &minus; &alpha;<sub>1</sub>I &minus; &lambda;
        <sub>1</sub>I &minus; &zeta;<sub>1</sub>I
      </span>
    ),
  },
  {
    id: "6",
    node: "H",
    equation: (
      <span>
        <sup>d(H)</sup>
        &frasl;<sub>d(t)</sub> = &alpha;<sub>1</sub>I &minus; &lambda;
        <sub>2</sub>H &minus; &zeta;<sub>2</sub>H
      </span>
    ),
  },

  {
    id: "7",
    node: "D",
    equation: (
      <span>
        <sup>d(D)</sup>
        &frasl;<sub>d(t)</sub> = &zeta;<sub>1</sub>I + &zeta;<sub>2</sub>H
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
              key={data.id}
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

export default DescriptionEquation;
