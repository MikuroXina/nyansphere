import type { FC } from "react";
import { InternalLink } from "./internal-link";
import { List } from "./list";
import type { PartialSubject } from "../lib/subject";

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
  <List data={data} Component={SubjectListItem} />
);
