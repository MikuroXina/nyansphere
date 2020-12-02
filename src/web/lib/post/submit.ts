export const postSubmit = async (
  subjectId: string,
  code: string,
): Promise<void> => {
  console.log({ subjectId, code });
  await new Promise((resolve) => setTimeout(resolve, 1000));
};
