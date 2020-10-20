import type { FC } from "react";

export type JudgeState = "no-submit" | "judging" | "wrong" | "accepted";

const messages: Readonly<Record<JudgeState, string>> = {
  "no-submit": "",
  judging: "判定中",
  wrong: "不正解",
  accepted: "正解",
} as const;

export const JudgeStatus: FC<{ state: JudgeState }> = ({ state }) => (
  <>
    <span className="status" data-state={state}>
      {messages[state]}
    </span>
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
  </>
);
