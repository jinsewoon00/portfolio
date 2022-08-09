/** @jsxImportSource @emotion/react */
import { useState } from "react";
import PopupComponents from "../../components/common/popup";
import WorkItemDesc from "../../components/detail";
import Container from "../../components/layout/Container";
import HeaderLayout from "../../components/layout/HeaderLayout";
import Section from "../../components/layout/Section";
import MotionContainer from "../../components/MotionContainer";
import { DetailData } from "../../model/detail";

export default function Detail() {
  const parmsIdx = window.location.pathname.split("&idx=")[1];
  const [popup, setPopup] = useState(0);
  return (
    <>
      <MotionContainer>
        <HeaderLayout />
        <Container>
          <Section>
            <WorkItemDesc
              data={DetailData[Number(parmsIdx)]}
              onClickPopup={() => {
                setPopup(1);
                console.log("popup");
              }}
            />
          </Section>
        </Container>
      </MotionContainer>
    </>
  );
}
