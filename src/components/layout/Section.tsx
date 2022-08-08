/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Common, mq } from "../../styles/common";

interface Props {
  fullWidth?: boolean;
  children: React.ReactNode;
}

const SectionCss = styled.section<Props>`
  width: ${(props) => (props.fullWidth ? "100%" : Common.CotainerSize)};
  margin: 0 auto;
  ${mq[2]} {
    width: 100vw;
  }
`;

function Section(props: Props) {
  return (
    <>
      <SectionCss fullWidth={props.fullWidth}>{props.children}</SectionCss>
    </>
  );
}

export default Section;
