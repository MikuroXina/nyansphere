import type { NextApiRequest, NextApiResponse } from "next";
import fauna, { query as q } from "faunadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const {
    cookies: { session },
  } = req;

  if (!session) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }
  const client = new fauna.Client({ secret: session });
  await client.query(q.Logout(false));

  res.end();
}
