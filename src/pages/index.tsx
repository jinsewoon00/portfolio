/** @jsxImportSource @emotion/react */
import Container from "../components/layout/Container";
import HeaderLayout from "../components/layout/HeaderLayout";
import Section from "../components/layout/Section";
import MotionContainer from "../components/MotionContainer";
import WorkItem, { WorkItemBox } from "../components/WorkItem";
import { WorkItemData } from "../model/workitem";

export default function Home() {
  return (
    <>
      <MotionContainer>
        <HeaderLayout />
        <Container>
          {/* <Section fullWidth>
          <div style={{ height: "100vh", backgroundColor: "teal" }}></div>
        </Section> */}
          <Section>
            <WorkItemBox>
              {WorkItemData.map((item, index) => {
                return (
                  <WorkItem
                    key={item.id}
                    data={WorkItemData[index]}
                    index={index}
                  />
                );
              })}
            </WorkItemBox>
          </Section>
        </Container>
      </MotionContainer>
    </>
  );
}
