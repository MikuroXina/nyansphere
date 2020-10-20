import type { FC } from "react";

export const SubmitButton: FC = () => (
  <>
    <button>提出</button>
    <style jsx>{`
      button {
        width: 6rem;
        height: 6rem;
        background-color: white;
        color: #111;
        font-size: 1.25rem;
        border-radius: 50%;
        box-shadow: #aaa 2px 2px 4px;
      }
      button:hover {
        color: #555;
        transition: color ease-in-out;
      }
      button:click {
        box-shadow: transparent;
      }
    `}</style>
  </>
);
