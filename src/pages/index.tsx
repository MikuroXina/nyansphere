import type { NextPage } from "next";
import { CodeBody } from "../components/code-body";

const Index: NextPage = () => (
  <>
    <header>
      <span className="title">Nyansphere</span>
    </header>
    <main>
      <CodeBody
        text={
          <>
            <h1>Hello, World!</h1>
            動作確認をしましょう。
          </>
        }
        defaultCode={[
          "#include <iostream>",
          "",
          "int main() {",
          '  std::cout << "Hello, World!\\n";',
          "}",
        ].join("\n")}
      />
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
        padding-top: 4rem;
      }
      .title {
        font-weight: bold;
        font-size: 1.5rem;
      }
    `}</style>
    <style jsx global>{`
      body {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </>
);

export default Index;
