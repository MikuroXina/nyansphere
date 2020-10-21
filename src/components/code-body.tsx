import { FC, ReactNode, useRef } from "react";
import MonacoEditor from "@monaco-editor/react";
import { SubmitButton } from "./submit-button";

export const CodeBody: FC<{
  text: ReactNode;
  defaultCode: string;
  onSubmit?: (code: string) => void;
}> = ({ text, onSubmit, defaultCode }) => {
  const codeGetter = useRef<() => string>();
  return (
    <>
      <main>
        <article>
          <section>{text}</section>
          <div className="button">
            <SubmitButton
              onClick={() => {
                if (onSubmit && codeGetter.current) {
                  onSubmit(codeGetter.current());
                }
              }}
            />
          </div>
        </article>
        <article>
          <MonacoEditor
            language="cpp"
            value={defaultCode}
            editorDidMount={(editor) => {
              codeGetter.current = editor;
            }}
          />
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
};
