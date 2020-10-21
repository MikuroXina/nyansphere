import type { FC } from "react";
import type { PartialSubject } from "../lib/subject";
import { InternalLink } from "./internal-link";

const SubjectColumn: FC<{ datum: PartialSubject }> = ({ datum: { title } }) => (
  <>
    <span>{title}</span>
    <style jsx>{`
      span {
        margin-right: 1rem;
      }
    `}</style>
  </>
);

const SubjectListItem: FC<PartialSubject> = (datum) => (
  <InternalLink href={`/subjects/${datum.id}`}>
    <SubjectColumn datum={datum}></SubjectColumn>
  </InternalLink>
);

export const SubjectList: FC<{ data: PartialSubject[] }> = ({ data }) => (
  <>
    <ul>
      {data.map((datum, i) => (
        <li key={i}>
          <SubjectListItem {...datum} />
        </li>
      ))}
    </ul>
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
  </>
);
