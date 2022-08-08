/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { Common, mq } from "../../styles/common";

const HeaderCss = css`
  height: 60px;
  .headerInner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    width: ${Common.CotainerSize};
    margin: 0 auto;
    height: inherit;
    transition: padding 0.21s;
    /* height: 60px; */
    .logo {
      font-size: 3rem;
    }
    .menu {
      a {
        position: relative;
        font-size: 1.6rem;
        color: #3c434b;
        &:not(:last-of-type) {
          margin-right: 3rem;
        }
        &:after {
          content: "";
          display: inline-block;
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background-color: #3c434b;
        }
      }
    }
  }

  ${mq[2]} {
    .headerInner {
      width: 100%;
      padding: 0 4rem;
    }
  }
  ${mq[0]} {
    .headerInner {
      padding: 0 16px;
    }
  }
`;

function HeaderLayout() {
  return (
    <header css={HeaderCss}>
      <div className="headerInner">
        <div className="logo">
          <Link to="/">Portfolio</Link>{" "}
        </div>
        <div className="menu">
          <Link to="/">Work</Link>
          {/* <Link to="/">Extra</Link> */}
        </div>
      </div>
    </header>
  );
}

export default HeaderLayout;
