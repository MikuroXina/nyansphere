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
        position: absolute;
        display: flex;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
      article {
        max-width: 50%;
        flex: 0 1 50%;
      }
      article:first-child {
        position: relative;
        max-height: 100%;
        overflow: scroll;
        margin-left: 1rem;
      }
      .button {
        margin-top: 1rem;
        margin-bottom: 1rem;
      }
    `}</style>
  </>
);
