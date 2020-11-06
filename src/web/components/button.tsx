import type { FC } from "react";

const BaseButton: FC<{ label: string; onClick?: () => void }> = ({
  label,
  onClick,
}) => (
  <button onClick={onClick}>
    {label}
    <style jsx>{`
      button {
        width: 6rem;
        height: 6rem;
        background-color: white;
        color: #111;
        font-size: 1.25rem;
        border-radius: 50%;
        box-shadow: #aaa 2px 2px 4px;
        cursor: pointer;
      }
      button:hover {
        color: #555;
        transition: color ease-in-out;
      }
      button:click {
        box-shadow: transparent;
      }
    `}</style>
  </button>
);

export const SubmitButton: FC<{ onClick?: () => void }> = (props) => (
  <BaseButton label="提出" {...props} />
);

export const CreateButton: FC<{ onClick?: () => void }> = (props) => (
  <BaseButton label="作成" {...props} />
);
