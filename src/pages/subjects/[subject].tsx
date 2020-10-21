import type { GetServerSideProps, NextPage } from "next";
import { CodeBody } from "../../components/code-body";
import { JudgeStatus } from "../../components/judge-status";
import { SubjectText } from "../../components/subject-text";
import { Template } from "../../components/template";
import { fetchSubject } from "../../lib/fetch/subject";
import type { Subject } from "../../lib/subject";

const SubjectPage: NextPage<Subject> = (subject) => (
  <Template headerItems={[<JudgeStatus state="no-submit" key="status" />]}>
    <CodeBody
      text={<SubjectText {...subject} />}
      defaultCode={subject.defaultCode ?? ""}
    />
  </Template>
);

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
