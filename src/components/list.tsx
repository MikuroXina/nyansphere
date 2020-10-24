import type { FC } from "react";

export function List<T>({
  data,
  Component,
}: {
  data: readonly T[];
  Component: FC<T>;
}): JSX.Element {
  return (
    <ul>
      {data.map((datum, i) => (
        <li key={i}>
          <Component {...datum} />
        </li>
      ))}
      <style jsx>{`
        ul {
          margin: 0 auto;
          padding: 1rem;
          max-width: 36rem;
          background-color: white;
          border-radius: 2rem;
        }
        li {
          padding-left: 1rem;
          border: solid 0 #aaa;
          border-bottom-width: thin;
          list-style: none;
          cursor: pointer;
        }
        li:first-child {
          border-width: thin 0;
        }
      `}</style>
    </ul>
  );
}
