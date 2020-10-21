import type { NextPage } from "next";
import { InternalLink } from "../components/internal-link";
import { Template } from "../components/template";

const Index: NextPage = () => (
  <Template
    headerItems={[
      <InternalLink href="/subjects" key="subjects">
        Subjects
      </InternalLink>,
      <InternalLink href="/submits" key="submits">
        Submits
      </InternalLink>,
    ]}
  >
    Work in Progress
  </Template>
);

export default Index;
