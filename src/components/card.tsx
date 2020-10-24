import type { FC } from "react";

export const Card: FC = ({ children }) => (
  <div>
    {children}
    <style jsx>{`
      div {
        margin: 0 auto;
        padding: 1rem;
        max-width: 36rem;
        background-color: white;
        border-radius: 2rem;
      }
    `}</style>
  </div>
);
