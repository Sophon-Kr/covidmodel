import React from "react";
import { connect } from "react-redux";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import AutoGraphRoundedIcon from "@mui/icons-material/AutoGraphRounded";
import Why from "../components/ModelComponent/Why";
import ModelPart from "../components/ModelComponent/ModelPart";
import DescriptionPicLeft from "../components/ModelComponent/DescriptionPicLeft";
import DescriptionPicRight from "../components/ModelComponent/DescriptionPicRight";
import DescriptionPicCenter from "../components/ModelComponent/DescriptionPicCenter";
import DescriptionEquation from "../components/ModelComponent/DescriptionEquation";
import DescriptionEquationTable from "../components/ModelComponent/DescriptionEquationTable";
import DescriptionEquationTableValue from "../components/ModelComponent/DescriptionEquationTableValue";
import S from "../assets/S.png";
import V1 from "../assets/V1.png";
import V2 from "../assets/V2.png";
import M from "../assets/M.png";
import I from "../assets/I.png";
import H from "../assets/H.png";
import D from "../assets/D.png";

const modelDisplay = [
  {
    id: "1",
    name: "Susceptible Class : S",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ จำนวนผู้ที่สามารถรับเชื้อ COVID-19 หรือ
        ผู้ที่ไม่มีความต้านทานต่อโรค
        โดยจะสื่อถึงประชากรของประเทศไทยที่ยังไม่ได้รับเชื้อโรคและยังไม่มีภูมิต้านทานต่อเชื้อตัวนี้โดยการได้รับวัคซีน
      </div>
    ),
    pic: <img src={S} alt="Susceptible" width="100%" height="auto" />,
    color: "#039be5",
  },
  {
    id: "2",
    name: "Vaccines I Class : V1",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        จำนวนประชากรในประเทศไทยที่ได้รับภูมิต้านทานจากการฉีดวัคซีนในโดสแรก
        ในประเทศไทยได้เริ่มมีการแจกจ่ายวัคซีนให้แก่ประชากรในประเทศไทยเป็นครั้งแรก
        ในวันที่ 28 กุมภาพันธ์ 2564 แต่ในการทำของเราจะใช้ข้อมูลเริ่มต้นในวันที่
        01 มีนาคม 2564 โดยฉีดวัคซีนเพื่อป้องกันโรคโควิด-19 สามารถลดการแพร่ระบาด
        ลดความรุนแรงของอาการป่วย และลดการเสียชีวิตได้ ซึ่งถูกรวบรวมโดย กลุ่ม The
        Researcher (https://www.facebook.com/researcher.th)
      </div>
    ),
    pic: <img src={V1} alt="Vaccines1" width="100%" height="auto" />,
    color: "#FFD600",
  },
  {
    id: "3",
    name: "Vaccines I Class : V2",
    text: (
      <div>
        &emsp; &emsp; &emsp;คือ
        จำนวนประชากรในประเทศไทยที่ได้รับภูมิต้านทานจากการฉีดวัคซีนในโดสที่สอง
        เพื่อให้มีภูมิต้านทานที่เพิ่มขึ้น โดยการฉีดวัคซีนครบ 2
        เข็มจะถือว่าเป็นการได้รับวัคซีนครบโดสแล้ว ซึ่งถูกรวบรวมโดย กลุ่ม The
        Researcher (https://www.facebook.com/researcher.th)
      </div>
    ),
    pic: <img src={V2} alt="Vaccines2" width="100%" height="auto" />,
    color: "#FFA500",
  },
  {
    id: "4",
    name: "Maintenance Shot Class : M",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        จำนวนประชากรในประเทศไทยที่ได้รับภูมิต้านทานจากการฉีดวัคซีนเข็มกระตุ้น
        โดยต้องมีการฉีดเข็มกระตุ้นเนื่องจาก เมื่อระยะเวลาผ่านไป
        ระดับภูมิคุ้มจากวัคซีนชุดแรกที่ได้รับจะค่อยๆ ลดลง
        ทำให้ประสิทธิภาพในการป้องกันลดลง
        จึงต้องมีการรับวัคซีนเข็มกระตุ้นเพื่อกระตุ้นประสิทธิภาพของวัคซีน
        โดยประกาศจำนวนจากข้อมูลของทางกระทรวงสาธารณสุข
      </div>
    ),
    pic: <img src={M} alt="Maintenance Shot" width="100%" height="auto" />,
    color: "#3A2C97",
  },
  {
    id: "5",
    name: "Infection Class : I ",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        จำนวนประชากรในประเทศไทยที่ได้รับการยืนยันว่าติดเชื้อโรคแล้วในประเทศไทย
        โดยประกาศจำนวนจากข้อมูลของทางกระทรวงสาธารณสุขประเทศไทย
      </div>
    ),
    pic: <img src={I} alt="Infection" width="100%" height="auto" />,
    color: "#f44336",
  },

  {
    id: "6",
    name: "Hospital Class : H",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        จำนวนประชากรในประเทศไทยที่ได้รับการยืนยันว่าเป็นผู้ที่ฟื้นตัว หรือก็คือ
        ผู้ที่รักษาหายจากเชื้อชนิดนี้แล้ว
        โดยประกาศจำนวนจากข้อมูลของทางกระทรวงสาธารณสุขประเทศไทย
      </div>
    ),
    pic: <img src={H} alt="Hospital" width="100%" height="auto" />,
    color: "#800080",
  },
  {
    id: "7",
    name: "Death Class : D",
    text: (
      <div>
        &emsp; &emsp; &emsp; คือ
        จำนวนประชากรในประเทศไทยที่ได้รับการยืนยันว่าเป็นผู้เสียชีวิตจากเชื้อชนิดนี้
        โดยประกาศจำนวนจากข้อมูลของทางกระทรวงสาธารณสุขประเทศไทย
      </div>
    ),
    pic: <img src={D} alt="Death" width="100%" height="auto" />,
    color: "#000000",
  },
];

export const Modelpage = (props) => {
  return (
    <Container
      maxWidth="xxl"
      style={{
        marginTop: 60,
        marginBottom: 35,
      }}
    >
      <Container maxWidth="xxl" style={{ paddingTop: 30 }} disableGutters>
        <Paper
          style={{
            padding: "4%",
          }}
          variant="outlined"
          square
        >
          <Why />
          <ModelPart />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            {modelDisplay.map((DescriptionData, index) =>
              index % 2 === 0 ? (
                <DescriptionPicLeft
                  key={DescriptionData.id}
                  name={DescriptionData.name}
                  text={DescriptionData.text}
                  pic={DescriptionData.pic}
                  color={DescriptionData.color}
                />
              ) : (
                <DescriptionPicRight
                  key={DescriptionData.id}
                  name={DescriptionData.name}
                  text={DescriptionData.text}
                  pic={DescriptionData.pic}
                  color={DescriptionData.color}
                />
              )
            )}
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                sm: "block",
                md: "block",
                lg: "none",
                xl: "none",
              },
            }}
          >
            {modelDisplay.map((DescriptionData) => (
              <DescriptionPicCenter
                key={DescriptionData.id}
                name={DescriptionData.name}
                text={DescriptionData.text}
                pic={DescriptionData.pic}
                color={DescriptionData.color}
              />
            ))}
          </Box>

          <DescriptionEquation />
          <DescriptionEquationTable />
          <DescriptionEquationTableValue />
          <div align="center">
            <NavLink
              to="/graphpage"
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                variant="contained"
                size="large"
                startIcon={<AutoGraphRoundedIcon />}
                // maxWidth
                style={{
                  backgroundColor: "#AED6F1",
                  color: "black",
                  padding: "13px",
                  marginTop: "3%",
                  fontFamily: "IBM Plex Sans Thai Looped",
                  fontWeight: "600",
                }}
              >
                Go to Graph Page
              </Button>
            </NavLink>
          </div>
        </Paper>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    userID: state.reducer.userID,
  };
};

export default connect(mapStateToProps, null)(Modelpage);
