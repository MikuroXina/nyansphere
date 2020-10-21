import type { FC } from "react";
import type { PartialSubmit } from "../lib/submit";
import { JudgeState } from "../lib/judge-state";
import { InternalLink } from "./internal-link";

const JudgeText: FC<{ state: JudgeState }> = ({ state }) => (
  <>
    <span data-state={state}>
      {
        {
          "no-submit": "未提出",
          judging: "採点中",
          wrong: "不正解",
          accepted: "正解",
        }[state]
      }
    </span>
    <style jsx>{`
      span[data-state="judging"] {
        color: orange;
      }
      span[data-state="wrong"] {
        color: red;
      }
      span[data-state="accepted"] {
        color: green;
      }
    `}</style>
  </>
);

const SubmitColumn: FC<{ datum: PartialSubmit }> = ({
  datum: { title, date, judge },
}) => (
  <>
    <span>{title}</span>
    <span>{date}</span>
    <JudgeText state={judge} />
    <style jsx>{`
      span {
        margin-right: 1rem;
      }
    `}</style>
  </>
);

const SubmitListItem: FC<PartialSubmit> = (datum) => (
  <InternalLink href={`/submits/${datum.id}`}>
    <SubmitColumn datum={datum}></SubmitColumn>
  </InternalLink>
);

export const SubmitList: FC<{ data: PartialSubmit[] }> = ({ data }) => (
  <>
    <ul>
      {data.map((datum, i) => (
        <li key={i}>
          <SubmitListItem {...datum} />
        </li>
      ))}
    </ul>
    <style jsx>{`
      ul {
        margin: 0 auto;
        padding: 1rem;
        max-width: 36rem;
        background-color: white;
        border-radius: 2rem;
      }
      li {
        padding-left: 1rem;
        border: solid 0 #aaa;
        border-bottom-width: thin;
        list-style: none;
        cursor: pointer;
      }
      li:first-child {
        border-width: thin 0;
      }
    `}</style>
  </>
);
