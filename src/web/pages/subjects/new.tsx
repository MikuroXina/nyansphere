import { Dispatch, FC, SetStateAction, useState } from "react";
import {
  MultiInputField,
  SingleInputField,
} from "../../components/input-field";
import { Card } from "../../components/card";
import { CreateButton } from "../../components/button";
import MonacoEditor from "@monaco-editor/react";
import type { NextPage } from "next";
import type { Subject } from "../../lib/subject";
import { Template } from "../../components/template";
import { postSubject } from "../../lib/post/subject";

const inputNames = ["説明", "入力", "出力", "制約 (任意)"] as const;

const indexKeyMap = [
  "desc",
  "inputDesc",
  "outputDesc",
  "constraintDesc",
] as const;

type NewPageState = Omit<Subject, "id">;

const initialState: Readonly<NewPageState> = {
  title: "無題",
  desc: "",
  inputDesc: "",
  outputDesc: "",
  constraintDesc: "",
  defaultCode: [
    "#include <iostream>",
    "",
    "int main() {",
    "  ",
    "  return 0;",
    "}",
  ].join("\n"),
};

const BasicForm: FC<{ setState: Dispatch<SetStateAction<NewPageState>> }> = ({
  setState,
}) => (
  <>
    <SingleInputField
      name="タイトル"
      onInput={(text) => setState((old) => ({ ...old, title: text }))}
    />
    {inputNames.map((name, i) => (
      <MultiInputField
        key={i}
        name={name}
        onInput={(text) =>
          setState((old) => ({ ...old, [indexKeyMap[i]]: text }))
        }
      />
    ))}
  </>
);

const NewPage: NextPage = () => {
  const [state, setState] = useState(initialState);
  return (
    <Template>
      <Card>
        <h1>課題の新規作成</h1>
        <BasicForm setState={setState} />
        <h2>デフォルトのコード</h2>
        <MonacoEditor height="18rem" language="cpp" />
        <CreateButton onClick={() => postSubject(state)} />
      </Card>
    </Template>
  );
};

export default NewPage;
