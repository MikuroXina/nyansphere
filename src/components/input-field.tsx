import type { FC } from "react";

export const SingleInputField: FC<{
  name: string;
  onInput?: (text: string) => void;
}> = ({ name, onInput }) => (
  <div>
    <label>{name}</label>
    <input
      type="text"
      name={name}
      onChange={(e) => onInput && onInput(e.target.value)}
    />
    <style jsx>{`
      div {
        display: flex;
        margin-bottom: 1rem;
        max-width: 100%;
      }
      label {
        margin: 0 4rem 0 1rem;
        flex: 1 0 0;
      }
      input {
        flex: 1 1 0;
        font-size: 1.5rem;
        border-radius: 0.5rem;
        min-width: 10%;
      }
    `}</style>
  </div>
);

export const MultiInputField: FC<{
  name: string;
  onInput?: (text: string) => void;
}> = ({ name, onInput }) => (
  <div>
    <label>{name}</label>
    <textarea
      name={name}
      cols={4}
      onChange={(e) => onInput && onInput(e.target.value)}
    />
    <style jsx>{`
      div {
        display: flex;
        margin-bottom: 1rem;
        max-width: 100%;
      }
      label {
        margin: 0 4rem 0 1rem;
        flex: 1 0 0;
      }
      textarea {
        flex: 1 1 0;
        line-height: 1.5rem;
        border-radius: 0.5rem;
        min-width: 10%;
        resize: none;
      }
    `}</style>
  </div>
);
