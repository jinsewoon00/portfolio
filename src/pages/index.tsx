/** @jsxImportSource @emotion/react */
import Container from "../components/layout/Container";
import HeaderLayout from "../components/layout/HeaderLayout";
import Section from "../components/layout/Section";
import WorkItem, { WorkItemBox } from "../components/WorkItem";
import { WorkItemData } from "../model/workitem";

export default function Home() {
  return (
    <>
      <HeaderLayout />
      <Container>
        {/* <Section fullWidth>
          <div style={{ height: "100vh", backgroundColor: "teal" }}></div>
        </Section> */}
        <Section>
          <WorkItemBox>
            {WorkItemData.map((item, index) => {
              return <WorkItem key={item.title} data={WorkItemData[index]} />;
            })}
          </WorkItemBox>
        </Section>
      </Container>
    </>
  );
}
