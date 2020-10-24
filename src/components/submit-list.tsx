import type { FC } from "react";
import { InternalLink } from "./internal-link";
import type { JudgeState } from "../lib/judge-state";
import { List } from "./list";
import type { PartialSubmit } from "../lib/submit";

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
  <List data={data} Component={SubmitListItem} />
);
