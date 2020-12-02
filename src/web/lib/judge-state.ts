import { useEffect, useState } from "react";
import { fetchJudgeState } from "./fetch/judge-state";

export type JudgeState = "no-submit" | "judging" | "wrong" | "accepted";

export const useJudgeState = (submitId: string): JudgeState => {
  const pollInterval = 2000;
  const [state, setState] = useState<JudgeState>("no-submit");

  useEffect(() => {
    const timer = setInterval(() => {
      fetchJudgeState(submitId).then(setState);
    }, pollInterval);

    return () => {
      clearInterval(timer);
    };
  });

  return state;
};
