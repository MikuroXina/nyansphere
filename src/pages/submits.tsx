import type { NextPage } from "next";
import { SubmitList } from "../components/submit-list";
import { Template } from "../components/template";

const Submits: NextPage = () => (
  <Template>
    <SubmitList
      data={[
        { title: "Hello, World!", date: "2020/10/20 11:00", judge: "wrong" },
        { title: "Hello, World!", date: "2020/10/20 12:00", judge: "accepted" },
      ]}
    ></SubmitList>
  </Template>
);

export default Submits;
