/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect } from "react";

interface Props {
  onClickClose: () => void;
  children: React.ReactNode;
}

const PopupComponentsCss = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  min-height: 100vh;
  .dim {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 101;
    cursor: pointer;
  }
  .popupContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 16px;
    padding: 4rem;
    background-color: #fff;
    z-index: 102;
    max-width: 80vw;
    max-height: 90vh;
    video {
      width: 100%;
      max-height: 80vh;
    }
  }
`;
function PopupComponents(props: Props) {
  //   useEffect(() => {
  //     document.body.style.overflow = "hidden";
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   }, []);

  return (
    <>
      <div css={PopupComponentsCss}>
        <div className="dim" onClick={props.onClickClose} />
        <div className="popupContainer">{props.children}</div>
      </div>
    </>
  );
}

export default PopupComponents;
