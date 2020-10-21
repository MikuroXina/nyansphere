import type { PartialSubject, Subject } from "../subject";
import { subjects } from "../test-db";

export const fetchSubject = async (id: string): Promise<Subject | null> => {
  return subjects.filter(({ id: subjectId }) => subjectId === id)[0] ?? null;
};

export const fetchPartialSubjects = async (): Promise<PartialSubject[]> => {
  return [...subjects];
};
