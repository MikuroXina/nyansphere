import type { Subject } from "../subject";

export const postSubject = async (
  subject: Readonly<Omit<Subject, "id">>,
): Promise<void> => {
  console.log(subject);
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
