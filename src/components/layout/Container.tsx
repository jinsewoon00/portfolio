/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Common } from "../../styles/common";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

const ContainerCss = css``;

function Container(props: Props) {
  return (
    <>
      <main css={ContainerCss} {...props} />
    </>
  );
}

export default Container;
