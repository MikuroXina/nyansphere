import type { NextPage } from "next";
import { CodeBody } from "../components/code-body";
import { JudgeStatus } from "../components/judge-status";

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
  <>
    <header>
      <span className="title">Nyansphere</span>
      <JudgeStatus state="no-submit" />
    </header>
    <main>
      <CodeBody text={exampleText} defaultCode={exampleCode} />
    </main>
    <style jsx>{`
      header {
        position: fixed;
        width: 100%;
        z-index: 5;
        padding: 0.2rem 1rem;
        box-shadow: #aaa 0px 4px 8px;
        background-color: white;
      }
      main {
        position: absolute;
        top: 3rem;
        left: 0;
        right: 0;
        bottom: 0;
      }
      .title {
        font-weight: bold;
        margin-right: 1rem;
      }
    `}</style>
    <style jsx global>{`
      html {
        overflow: hidden;
      }
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </>
);

export default Index;
