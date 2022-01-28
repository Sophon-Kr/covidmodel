import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import MainGraph from "../components/Graph/MainGraph";
// import Grid from "@mui/material/Grid";

import Why from "../components/ModelComponent/Why";
// import Evolution from "../components/ModelComponent/Evolution";
import ModelPart from "../components/ModelComponent/ModelPart";
import DescriptionPicLeft from "../components/ModelComponent/DescriptionPicLeft";
import DescriptionVPicRight from "../components/ModelComponent/DescriptionVPicRight";
import DescriptionEquation from "../components/ModelComponent/DescriptionEquation";
import ExampleFlow from "../components/ModelComponent/ExampleFlow";

import S from "../assets/S.png";
import V1 from "../assets/V1.png";
import V2 from "../assets/V2.png";
import M from "../assets/M.png";
import I from "../assets/I.png";
import R from "../assets/R.png";
import H from "../assets/H.png";
import D from "../assets/D.png";
import modelFlow from "../assets/covidflow.png";
// import ModelBackground from "../assets/BG2.png";

const modelDisplay = [
  {
    name: "Susceptible Class : S",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ ผู้ที่สามารถรับเชื้อโรค หรือ
        ผู้ที่ไม่มีความต้านทานต่อโรค
        โดยของเราจะสื่อถึงประชากรของประเทศไทยที่ยังไม่ได้รับเชื้อโรคและยังไม่มีภูมิต้านทานต่อเชื้อตัวนี้โดยการได้รับวัคซีน
      </div>
    ),
    pic: <img src={S} alt="Susceptible" width="400" height="auto" />,
    color: "#039be5",
  },
  {
    name: "Vaccines I Class : V1",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        ประชากรในประเทศไทยที่ได้รับภูมิต้านทานจากการฉีดวัคซีนในโดสแรก
        ในประเทศไทยได้เริ่มมีการแจกจ่ายวัคซีนให้แก่ประชากรในประเทศไทยเป็นครั้งแรก
        ในวันที่ 28 กุมภาพันธ์ 2564 แต่ในการทำของเราจะใช้ข้อมูลเริ่มต้นในวันที่
        01 มีนาคม 2564 โดยฉีดวัคซีนเพื่อป้องกันโรคโควิด-19 สามารถลดการแพร่ระบาด
        ลดความรุนแรงของอาการป่วย และลดการเสียชีวิตได้
        ประกาศจำนวนจากทางกระทรวงสาธารณสุข
      </div>
    ),
    pic: <img src={V1} alt="Vaccines1" width="400" height="auto" />,
    color: "#FFD600",
  },
  {
    name: "Vaccines I Class : V2",
    text: (
      <div>
        &emsp; &emsp; &emsp;คือ
        ประชากรในประเทศไทยที่ได้รับภูมิต้านทานจากการฉีดวัคซีนในโดสที่สอง
        เพื่อให้มีภูมิต้านทานที่เพิ่มขึ้น
        โดยการฉีดวัคซีนครบ2เข็มจะถือว่าเป็นการได้รับวัคซีนครบโดสแล้ว
        ประกาศจำนวนจากทางกระทรวงสาธารณสุข
      </div>
    ),
    pic: <img src={V2} alt="Vaccines2" width="400" height="auto" />,
    color: "#FFA500",
  },
  {
    name: "Maintenance Shot Class : M",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        ประชากรในประเทศไทยที่ได้รับภูมิต้านทานจากการฉีดวัคซีนเข็มกระตุ้น
        โดยต้องมีการฉีดเข็มกระตุ้นเนื่องจาก เมื่อระยะเวลาผ่านไป
        ระดับภูมิคุ้มจากวัคซีนชุดแรกที่ได้รับจะค่อยๆ ลดลง
        ทำให้ประสิทธิภาพในการป้องกันลดลง
        จึงต้องมีการรับวัคซีนเข็มกระตุ้นเพื่อกระตุ้นประสิทธิภาพของวัคซีน
        ประกาศจำนวนจากทางกระทรวงสาธารณสุข
      </div>
    ),
    pic: <img src={M} alt="Maintenance Shot" width="400" height="auto" />,
    color: "#3A2C97",
  },
  {
    name: "Infection I Class : I ",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        ประชากรที่ได้รับการยืนยันว่าติดเชื้อโรคแล้วในประเทศไทยประกาศจำนวนจากทางกระทรวงสาธารณสุข
      </div>
    ),
    pic: <img src={I} alt="Infection" width="400" height="auto" />,
    color: "#f44336",
  },
  {
    name: "Recovery Class : R",
    text: (
      <div>
        &emsp; &emsp; &emsp; Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.
      </div>
    ),
    pic: <img src={R} alt="Recovery" width="400" height="auto" />,
    color: "#008000",
  },
  {
    name: "Hospital Class : H",
    text: (
      <div>
        &emsp; &emsp; &emsp; Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.
      </div>
    ),
    pic: <img src={H} alt="Hospital" width="400" height="auto" />,
    color: "#800080",
  },
  {
    name: "Death Class : D",
    text: (
      <div>
        &emsp; &emsp; &emsp; Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book.
      </div>
    ),
    pic: <img src={D} alt="Death" width="400" height="auto" />,
    color: "#000000",
  },
];

export const Modelpage = (props) => {
  return (
    <Container maxWidth="xxl" style={{ marginTop: 75, marginBottom: 35 }}>
      <Container maxWidth="xxl" style={{ paddingTop: 30 }} disableGutters>
        <Paper
          style={{
            minHeight: 700,
            padding: 70,
            // backgroundImage: `url(${ModelBackground})`,
            // backgroundPosition: "top",
            // backgroundSize: "100%",
            // backgroundRepeat: "no-repeat",
          }}
          variant="outlined"
          square
        >
          {/* <img src={ModelBackground} alt="" /> */}
          <Why />
          {/* <Evolution /> */}
          <ModelPart />
          {modelDisplay.map((DescriptionData, index) =>
            index % 2 === 0 ? (
              <DescriptionPicLeft
                name={DescriptionData.name}
                text={DescriptionData.text}
                pic={DescriptionData.pic}
                color={DescriptionData.color}
              />
            ) : (
              <DescriptionVPicRight
                name={DescriptionData.name}
                text={DescriptionData.text}
                pic={DescriptionData.pic}
                color={DescriptionData.color}
              />
            )
          )}

          <DescriptionEquation />
          <ExampleFlow />
        </Paper>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Modelpage);
