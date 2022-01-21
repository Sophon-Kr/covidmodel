import React from "react";
import { connect } from "react-redux";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export const Why = (props) => {
  return (
    <Grid

    // style={{ backgroundColor: "grey" }}
    >
      <Grid
        style={{
          minHeight: 100,
          fontWeight: "bold",
          fontSize: 50,
          marginLeft: 50,
        }}
      >
        ที่มาของโมเดล
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
          xl={3}
          style={{ backgroundColor: "lightgreen", minHeight: 350 }}
        ></Grid>
        <Grid
          item
          xs={8}
          md={8}
          lg={8}
          xl={8}
          style={{
            // backgroundColor: "lightgrey",
            minHeight: 350,
            marginLeft: 50,
            fontSize: 30,
          }}
        >
          <div>
            &emsp; &emsp; &emsp; COVID-19 หรือ ที่องค์การอนามัยโลก WHO
            ได้กำหนดชื่อโรคที่พบนี้ว่า Corona Virus Disease 2019
            โดยเป็นโรคที่พบครั้งแรกในเมืองหวู่ฮั่น มณฑลหูเป่ย์ ประเทศจีน
            สำหรับประเทศไทยนั้นได้เกิดการระบาดขึ้นทั่วประเทศอย่างมี
            นัยยะสำคัญในช่วงเดือนมีนาคม 2563
            และเรียกโรคนี้ว่าโรคติดเชื้อไวรัสโคโรนา 2019 และ
            ได้เริ่มมีการแจกจ่ายวัคซีนให้แก่ประชากรในประเทศไทยเป็นครั้งแรก
            ในวันที่ 28 กุมภาพันธ์ 25643 จากงานวิจัยต่าง ๆ
            ในการวิเคราะห์แนวโน้มของผู้ป่วยในปัจจุบัน
            นิยมใช้แบบจำลองทางคณิตศาสตร์ที่มีชื่อว่า “SEIR” (Suspected- Expose-
            Infected- Recovery)
            โดยแบบจำลองพื้นฐานทางคณิตศาสตร์ที่ไม่ได้คำนึงถึงเงื่อนไขหรือปัจจัยหรือมาตรการต่าง
            ๆ ที่เกิดขึ้นในแต่ละประเทศ เช่น การได้รับวัคซีน การเข้าโรงพยาบาล
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Why);
