import MonacoEditor from "@monaco-editor/react";
import type { GetServerSideProps, NextPage } from "next";
import { JudgeStatus } from "../../components/judge-status";
import { Template } from "../../components/template";
import { fetchSubmit } from "../../lib/fetch/submit";
import type { Submit } from "../../lib/submit";

const SubmitPage: NextPage<Submit> = ({ title, date, judge, code }) => (
  <Template>
    <div>
      <span>{title}</span>
      <span>{date}</span>
      <JudgeStatus state={judge} />
    </div>
    <MonacoEditor language="cpp" value={code} options={{ readOnly: true }} />
    <style jsx>{`
      span {
        margin: 1rem;
      }
    `}</style>
  </Template>
);

export default SubmitPage;

export const getServerSideProps: GetServerSideProps<Submit> = async ({
  params,
  res,
}) => {
  const submit = params?.submit;
  if (typeof submit !== "string") {
    res.end("Not found");
    throw new Error("Not found");
  }
  const props = await fetchSubmit(submit);
  if (!props) {
    res.end("Not found");
    throw new Error("Not found");
  }
  return { props };
};
