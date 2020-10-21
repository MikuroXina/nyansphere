import { JudgeState } from "./judge-state";

export interface Submit {
  id: string;
  subjectId: string;
  title: string;
  date: string;
  judge: JudgeState;
  code: string;
}

export type PartialSubmit = Pick<Submit, "title" | "date" | "judge">;
