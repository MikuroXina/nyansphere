import MonacoEditor from "@monaco-editor/react";
import type { FC, ReactNode } from "react";
import { SubmitButton } from "./submit-button";

export const CodeBody: FC<{ text: ReactNode; defaultCode: string }> = ({
  text,
  defaultCode,
}) => (
  <>
    <main>
      <article>
        <section>{text}</section>
        <div className="button">
          <SubmitButton />
        </div>
      </article>
      <article>
        <MonacoEditor language="cpp" value={defaultCode} />
      </article>
    </main>
    <style jsx>{`
      main {
        display: flex;
        width: 99%;
        height: 89vh;
      }
      article {
        max-width: 50%;
        flex: 0 1 50%;
      }
      section {
        margin-left: 1rem;
      }
      .button {
        position: absolute;
        left: 1rem;
        bottom: 1rem;
      }
    `}</style>
  </>
);
