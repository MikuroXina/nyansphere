import { Card } from "./card";
import type { FC } from "react";

export function List<T>({
  data,
  Component,
}: {
  data: readonly T[];
  Component: FC<T>;
}): JSX.Element {
  return (
    <Card>
      {data.map((datum, i) => (
        <li key={i}>
          <Component {...datum} />
        </li>
      ))}
      <style jsx>{`
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
    </Card>
  );
}
