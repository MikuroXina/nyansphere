import type { GetServerSideProps, NextPage } from "next";
import { Card } from "../components/card";
import { CreateButton } from "../components/button";
import { InternalLink } from "../components/internal-link";
import type { PartialSubject } from "../lib/subject";
import { SubjectList } from "../components/subject-list";
import { Template } from "../components/template";
import { fetchPartialSubjects } from "../lib/fetch/subject";

interface SubjectsProps {
  subjects: PartialSubject[];
}

const SubjectsPage: NextPage<SubjectsProps> = ({ subjects }) => (
  <Template>
    <Card>
      <SubjectList data={subjects} />
      <InternalLink href="/subjects/new">
        <CreateButton />
      </InternalLink>
    </Card>
  </Template>
);

export default SubjectsPage;

export const getServerSideProps: GetServerSideProps<SubjectsProps> = async () => ({
  props: { subjects: await fetchPartialSubjects() },
});
