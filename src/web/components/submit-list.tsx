import type { FC } from "react";
import { InternalLink } from "./internal-link";
import { JudgeStatus } from "./judge-status";
import { List } from "./list";
import type { PartialSubmit } from "../lib/submit";

const SubmitColumn: FC<{ datum: PartialSubmit }> = ({
  datum: { title, date, judge },
}) => (
  <>
    <span>{title}</span>
    <span>{date}</span>
    <JudgeStatus state={judge} />
    <style jsx>{`
      span {
        margin-right: 1rem;
      }
    `}</style>
  </>
);

const SubmitListItem: FC<PartialSubmit> = (datum) => (
  <InternalLink href={`/submits/${datum.id}`}>
    <SubmitColumn datum={datum}></SubmitColumn>
  </InternalLink>
);

export const SubmitList: FC<{ data: PartialSubmit[] }> = ({ data }) => (
  <List data={data} Component={SubmitListItem} />
);
