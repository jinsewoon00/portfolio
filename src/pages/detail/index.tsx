/** @jsxImportSource @emotion/react */
import WorkItemDesc from "../../components/detail";
import Container from "../../components/layout/Container";
import HeaderLayout from "../../components/layout/HeaderLayout";
import Section from "../../components/layout/Section";
import MotionContainer from "../../components/MotionContainer";
import { DetailData } from "../../model/detail";

export default function Detail() {
  const parmsIdx = window.location.pathname.split("&idx=")[1];

  return (
    <>
      <MotionContainer>
        <HeaderLayout />
        <Container>
          <Section>
            <WorkItemDesc data={DetailData[Number(parmsIdx)]} />
          </Section>
        </Container>
      </MotionContainer>
    </>
  );
}
