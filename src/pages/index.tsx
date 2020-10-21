import type { NextPage } from "next";
import { CodeBody } from "../components/code-body";
import { JudgeStatus } from "../components/judge-status";
import { Template } from "../components/template";

const exampleText = (
  <>
    <h1>Hello, World!</h1>
    動作確認をしましょう。
    <h2>入力</h2>
    なし
    <h2>出力</h2>
    <code>Hello, World!</code> と改行を合わせて出力する.
  </>
);

const exampleCode = [
  "#include <iostream>",
  "",
  "int main() {",
  '  std::cout << "Hello, World!\\n";',
  "}",
].join("\n");

const Index: NextPage = () => (
  <Template headerItem={<JudgeStatus state="no-submit" />}>
    <CodeBody text={exampleText} defaultCode={exampleCode} />
  </Template>
);

export default Index;
