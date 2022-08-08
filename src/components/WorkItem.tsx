/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useRef } from "react";
import WorkItemModel from "../model/workitem";
import { mq } from "../styles/common";

interface WorkItemBoxProps {
  children: React.ReactNode;
}

interface WorkItemProps {
  data: WorkItemModel;
}

const WorkItemBoxCss = css`
  padding: 10rem 0rem;
  header {
    h1 {
      margin-bottom: 8rem;
    }
  }
  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
  ${mq[2]} {
    padding: 8rem 4rem;
  }
  ${mq[0]} {
    padding: 8rem 0rem;
    header {
      padding: 0 16px;
    }
  }
`;

const WorkItemCss = css`
  width: calc(50% - 1rem);
  .imgHolder {
    width: 100%;
    aspect-ratio: 16/9;
    background-color: red;
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
          font-size: 1.6rem;
          line-height: 2;
          i {
            font-size: 2rem;
            margin-right: 6px;
          }
          span {
            &:first-of-type {
              display: inline-block;
              min-width: 8rem;
            }
            &:last-of-type {
              padding: 4px;
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
      padding: 0 16px 30px;
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
          <img src={props.data.img} alt="" />
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
                <span>{props.data.duration} Days</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default WorkItem;
