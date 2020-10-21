export interface Subject {
  id: string;
  title: string;
  desc: string;
  defaultCode?: string;
  inputDesc?: string;
  outputDesc?: string;
  constraintDesc?: string;
}

export type PartialSubject = Pick<Subject, "id" | "title">;
