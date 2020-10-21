import type { FC } from "react";
import type { Subject } from "../lib/subject";

export const SubjectText: FC<Subject> = ({
  title,
  desc,
  inputDesc,
  outputDesc,
}) => (
  <>
    <h1>{title}</h1>
    {desc}
    <h2>入力</h2>
    {inputDesc}
    <h2>出力</h2>
    {outputDesc}
  </>
);
