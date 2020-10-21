import type { GetServerSideProps, NextPage } from "next";
import type { PartialSubmit } from "../lib/submit";
import { SubmitList } from "../components/submit-list";
import { Template } from "../components/template";
import { fetchPartialSubmits } from "../lib/fetch/submit";

interface SubmitsProps {
  submits: PartialSubmit[];
}

const Submits: NextPage<SubmitsProps> = ({ submits }) => (
  <Template>
    <SubmitList data={submits}></SubmitList>
  </Template>
);

export default Submits;

export const getServerSideProps: GetServerSideProps<SubmitsProps> = async () => ({
  props: { submits: await fetchPartialSubmits() },
});
