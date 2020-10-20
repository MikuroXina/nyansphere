import type { NextPage } from "next";
import MonacoEditor from "@monaco-editor/react";

const Index: NextPage = () => (
  <>
    <h1>Nyansphere</h1>
    <main>
      <MonacoEditor
        language="cpp"
        value={[
          "#include <iostream>",
          "",
          "int main() {",
          '  std::cout << "Hello, World!\\n";',
          "}",
        ].join("\n")}
      />
    </main>
    <style jsx>{`
      h1 {
        position: fixed:
        z-index: 5;
      }
      main {
        height: 95vh;
      }
    `}</style>
  </>
);

export default Index;
