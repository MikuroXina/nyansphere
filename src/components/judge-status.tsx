import type { FC } from "react";
import { JudgeState } from "../lib/judge-state";

const messages: Readonly<Record<JudgeState, string>> = {
  "no-submit": "未提出",
  judging: "判定中",
  wrong: "不正解",
  accepted: "正解",
} as const;

export const JudgeStatus: FC<{ state: JudgeState }> = ({ state }) => (
  <span className="status" data-state={state}>
    {`提出状態: ${messages[state]}`}
    <style jsx>{`
      .status[data-state="judging"] {
        color: orange;
      }
      .status[data-state="wrong"] {
        color: red;
      }
      .status[data-state="accepted"] {
        color: green;
      }
    `}</style>
  </span>
);
