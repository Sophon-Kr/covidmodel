import React from "react";
import Grid from "@mui/material/Grid";

export const Why = (props) => {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid
        style={{
          fontWeight: "600",
          fontSize: "3vw",
          marginBottom: 20,
          fontFamily: "IBM Plex Sans Thai Looped",
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
          xs={10}
          md={10}
          lg={10}
          xl={10}
          style={{
            fontSize: "2vw",
            fontFamily: "IBM Plex Sans Thai Looped",
            fontWeight: "400",
          }}
        >
          <div>
            &emsp; &emsp; &emsp; COVID-19 หรือ ที่องค์การอนามัยโลก WHO
            ได้กำหนดชื่อโรคที่พบนี้ว่า Corona Virus Disease 2019
            โดยเป็นโรคที่พบครั้งแรกในเมืองหวู่ฮั่น มณฑลหูเป่ย์ ประเทศจีน
            สำหรับประเทศไทยนั้นได้เกิดการระบาดขึ้นทั่วประเทศอย่างมี
            นัยยะสำคัญในช่วงเดือนมีนาคม 2563
            และเรียกโรคนี้ว่าโรคติดเชื้อไวรัสโคโรนา 2019
          </div>
          <div>
            &emsp; &emsp; &emsp; จากงานวิจัยต่าง ๆ
            ในการวิเคราะห์แนวโน้มของผู้ป่วยในปัจจุบัน
            นิยมใช้แบบจำลองทางคณิตศาสตร์ที่มีชื่อว่า “SEIR” (Suspected- Expose-
            Infected- Recovery)
            เป็นแบบจำลองพื้นฐานทางคณิตศาสตร์ที่ไม่ได้คำนึงถึงเงื่อนไขหรือปัจจัยหรือมาตรการต่าง
            ๆ ที่เกิดขึ้นในแต่ละประเทศ เช่น การได้รับวัคซีน การเข้าโรงพยาบาล
          </div>
          <div>
            &emsp; &emsp; &emsp; ด้วยเหตุดังกล่าวนี้
            ทางคณะผู้จัดทำจึงมีแนวคิดที่จะพัฒนาแบบจำลองทางคณิตศาสตร์ที่
            คำนึงถึงปัจจัยพื้นฐาน และคำนึงถึงปัจจัยเสริมอื่น ๆ
            ร่วมด้วยเพื่อให้การทำนายแนวโน้มของจำนวนผู้ติดเชื้อมีความแม่นยำมากยิ่งขึ้น
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Why;
