import type { GetServerSideProps, NextPage } from "next";
import { CodeBody } from "../../components/code-body";
import { JudgeStatus } from "../../components/judge-status";
import type { Subject } from "../../lib/subject";
import { SubjectText } from "../../components/subject-text";
import { Template } from "../../components/template";
import { fetchSubject } from "../../lib/fetch/subject";
import { postSubmit } from "../../lib/post-submit";
import { useJudgeState } from "../../lib/judge-state";

const SubjectPage: NextPage<Subject> = (subject) => {
  const state = useJudgeState(subject.id);
  return (
    <Template headerItems={[<JudgeStatus state={state} key="status" />]}>
      <CodeBody
        text={<SubjectText {...subject} />}
        onSubmit={(code) => {
          postSubmit(subject.id, code);
        }}
        defaultCode={subject.defaultCode ?? ""}
      />
    </Template>
  );
};

export default SubjectPage;

export const getServerSideProps: GetServerSideProps<Subject> = async ({
  params,
  res,
}) => {
  const subject = params?.subject;
  if (typeof subject !== "string") {
    res.end("Not found");
    throw new Error("Not found");
  }
  const props = await fetchSubject(subject);
  if (!props) {
    res.end("Not found");
    throw new Error("Not found");
  }
  return { props };
};
