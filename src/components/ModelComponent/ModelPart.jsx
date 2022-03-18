import React from "react";
import Grid from "@mui/material/Grid";

import modelFlow from "../../assets/covidflow.png";

export const ModelPart = (props) => {
  return (
    <Grid style={{ marginTop: 50, marginBottom: 70 }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={10}
          md={10}
          lg={10}
          xl={10}
          style={{
            textAlign: "center",
          }}
        >
          <img src={modelFlow} alt="" width="100%" height="auto" />
        </Grid>
      </Grid>
      <Grid
        style={{
          fontWeight: "600",
          fontSize: "3vw",
          textAlign: "center",
          marginTop: 40,
          fontFamily: "IBM Plex Sans Thai Looped",
        }}
      >
        SV1V2MIHD MODEL
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            fontSize: "2vw",
            fontFamily: "IBM Plex Sans Thai Looped",
            fontWeight: "400",
          }}
        >
          &emsp; &emsp; &emsp; SV1V2MIHD MODEL คือ โมเดลที่เราได้ทำการปรับจาก
          โมเดลพื้นฐาน SEIR เป็นโมเดลที่สอดคล้องกับข้อมูลของเรามากขึ้น โดย
          มีความหมายศัพท์ทางการแพทย์แต่ละตัวดังนี้
        </Grid>
      </Grid>
    </Grid>
  );
};

// const mapStateToProps = (state) => ({});

// const mapDispatchToProps = {};

// export default connect(mapStateToProps, mapDispatchToProps)(ModelPart);
export default ModelPart;
