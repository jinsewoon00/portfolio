/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import WorkItemModel from "../model/workitem";
import { mq } from "../styles/common";

interface WorkItemBoxProps {
  children: React.ReactNode;
}

interface WorkItemProps {
  data: WorkItemModel;
  index: number;
}

const WorkItemBoxCss = css`
  padding: 10rem 0rem;
  header {
    h1 {
      margin-bottom: 5rem;
    }
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 4rem 1rem;
  }
  ${mq[2]} {
    padding: 8rem 4rem;
  }
  ${mq[0]} {
    padding: 4rem 0rem;
    header {
      padding: 0 16px;
      h1 {
        margin-bottom: 2rem;
      }
    }
    > div {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem 1rem;
    }
  }
`;

const WorkItemCss = css`
  width: calc(50% - 0.5rem);
  .imgHolder {
    width: 100%;
    aspect-ratio: 16/9;
    background-color: red;
    a {
      width: 100%;
      height: 100%;
      cursor: pointer;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .desc {
    h2 {
      font-size: 2rem;
      font-weight: bold;
      padding: 2rem 0 1rem;
    }
    ul {
      li {
        p {
          display: flex;
          align-items: center;
          font-size: 1.6rem;
          line-height: 1.5;
          i {
            font-size: 2rem;
            margin-right: 6px;
          }
          span {
            &:first-of-type {
              display: inline-block;
              /* min-width: 8rem; */
              margin-right: 8px;
            }
            &:last-of-type {
              font-size: 1.2rem;
              padding: 2px 8px;
              border-radius: 4px;
              background-color: #f2f2f2;
            }
          }
        }
      }
    }
  }

  ${mq[0]} {
    width: 100%;
    .desc {
      padding: 0 16px 0px;
    }
  }
`;

export function WorkItemBox(props: WorkItemBoxProps) {
  return (
    <>
      <div css={WorkItemBoxCss}>
        <header>
          <h1>아래의 포트폴리오는 2021 - 2022 동안의 프로젝트 입니다.</h1>
        </header>
        <div>{props.children}</div>
      </div>
    </>
  );
}

function WorkItem(props: WorkItemProps) {
  return (
    <>
      <div css={WorkItemCss}>
        <div className="imgHolder">
          <Link to={`/detail/${props.data.id}&idx=${props.index}`}>
            <img
              src={process.env.PUBLIC_URL + props.data.img}
              alt={props.data.title}
            />
          </Link>
        </div>
        <div className="desc">
          <h2>{props.data.title}</h2>
          <ul>
            <li>
              <p>
                <i>🔥</i> <span>작업 기여도</span>
                <span>{props.data.contribution}%</span>
              </p>
            </li>
            <li>
              <p>
                <i>🕓</i> <span>작업 기간</span>
                <span>{props.data.duration} Weeks</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
