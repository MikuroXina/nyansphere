import type { PartialSubmit, Submit } from "./submit";
import { submits } from "./test-db";

export const fetchSubmit = async (id: string): Promise<Submit | null> => {
  return submits.filter(({ id: submitId }) => id === submitId)[0] ?? null;
};

export const fetchPartialSubmits = async (): Promise<PartialSubmit[]> => {
  return [...submits];
};
