import type { GetServerSideProps, NextPage } from "next";
import type { PartialSubject } from "../lib/subject";
import { SubjectList } from "../components/subject-list";
import { Template } from "../components/template";
import { fetchPartialSubjects } from "../lib/fetch/subject";

interface SubjectsProps {
  subjects: PartialSubject[];
}

const SubjectsPage: NextPage<SubjectsProps> = ({ subjects }) => (
  <Template>
    <SubjectList data={subjects} />
  </Template>
);

export default SubjectsPage;

export const getServerSideProps: GetServerSideProps<SubjectsProps> = async () => ({
  props: { subjects: await fetchPartialSubjects() },
});