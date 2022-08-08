/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { mq } from "../styles/common";

interface Props {
  data: {
    id: string;
    desc: string;
    link?: string;
    tag: string[];
  };
}
const WorkItemDescCss = css`
  padding: 6rem 0;
  .imgHolder {
    position: relative;
    aspect-ratio: 16/9;
    background-color: teal;
    margin-bottom: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
    .dim {
      display: flex;
      align-items: flex-end;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.4) 5%,
        rgba(255, 255, 255, 0) 20%
      );
      padding: 2rem;
      .tag {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;
        span {
          font-size: 1.4rem;
          font-weight: 500;
          padding: 4px 8px;
          background-color: #f2f2f2;
          border-radius: 4px;
        }
      }
    }
  }
  .desc {
    article {
      &:not(:last-of-type) {
        margin-bottom: 4rem;
      }
      h2 {
        font-size: 20px;
        text-transform: capitalize;
        margin-bottom: 2rem;
      }
      p {
        font-size: 14px;
        margin-bottom: 2rem;
        line-height: 1.5;
      }

      .link {
        a {
          min-width: 4rem;
          padding: 0.8rem 1.2rem;
          background-color: #000;
          color: #fff;
          border-radius: 4px;
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
    }
  }
  ${mq[2]} {
    padding: 6rem 4rem;
  }
  ${mq[0]} {
    padding: 0rem 0px;
    .desc {
      padding: 0 16px;
    }
  }
`;

function WorkItemDesc(props: Props) {
  return (
    <>
      <div css={WorkItemDescCss}>
        <div className="imgHolder">
          <img src="" alt={props.data.id} />
          <div className="dim">
            <div className="tag">
              {props.data.tag.map((item) => {
                return <span>{item}</span>;
              })}
            </div>
          </div>
        </div>
        <div className="desc">
          <article>
            <h2>Description</h2>
            <p>{props.data.desc}</p>

            <div className="link">
              {props.data.link ? (
                <a href={props.data.link} target="_blank">
                  Go WebSite
                </a>
              ) : null}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default WorkItemDesc;
