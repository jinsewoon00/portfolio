/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { mq } from "../styles/common";
import PopupComponents from "./common/popup";
// import vodaplayVideo from './video/vodaplay_play.mp4'
interface Props {
  data: {
    id: string;
    desc: string;
    img?: string;
    link?: string;
    video?: string;
    tag: string[];
  };
  onClickPopup: () => void;
}
const WorkItemDescCss = css`
  padding: 6rem 0;
  .imgHolder {
    position: relative;
    aspect-ratio: 16/9;
    /* background-color: teal; */
    margin-bottom: 4rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    .video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
    video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
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
      z-index: 2;
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
        a,
        button {
          min-width: 4rem;
          padding: 0.8rem 1.2rem;
          background-color: #000;
          color: #fff;
          border-radius: 4px;
          font-size: 1.5rem;
          font-weight: 500;
          cursor: pointer;
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
  const [popup, setPopup] = useState(0);
  return (
    <>
      <div css={WorkItemDescCss}>
        <div className="imgHolder">
          {props.data.img ? (
            <img src="" alt={props.data.id} />
          ) : (
            // <div
            //   className="video"
            //   style={{
            //     backgroundImage: "url(../../static/video/vodaplay_play.mp4)",
            //   }}
            // />
            <>
              <video muted autoPlay loop>
                <source
                  src={process.env.PUBLIC_URL + props.data.video}
                  type="video/mp4"
                />
              </video>
            </>
          )}

          <div className="dim">
            <div className="tag">
              {props.data.tag.map((item) => {
                return <span key={item}>{item}</span>;
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
              ) : // <button
              //   type="button"
              //   onClick={() => {
              //     props.onClickPopup();
              //     setPopup(1);
              //   }}
              // >
              //   Demo Video
              // </button>
              null}
            </div>
          </article>
        </div>
      </div>
      {popup === 1 && (
        <PopupComponents onClickClose={() => setPopup(0)}>
          <video muted autoPlay loop>
            <source
              src={process.env.PUBLIC_URL + props.data.video}
              type="video/mp4"
            />
          </video>
        </PopupComponents>
      )}
    </>
  );
}

export default WorkItemDesc;
