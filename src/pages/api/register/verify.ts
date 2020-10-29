import type { NextApiRequest, NextApiResponse } from "next";
import fauna, { query as q } from "faunadb";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "*******";
const FAUNA_SECRET = process.env.FAUNA_SECRET || "UNSET";

const client = new fauna.Client({ secret: FAUNA_SECRET });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const {
    query: { jwt: token },
  } = req;

  if (Array.isArray(token)) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }
  const mail = await new Promise<string>((resolve, reject) =>
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        console.error(err);
        res.statusCode = 400;
        res.end("Bad Request");
        reject(err);
        return;
      }
      const { mail } = decoded as { mail: string };
      resolve(mail);
    }),
  );
  const { ref } = (await client.query(
    q.Create(q.Collection("users"), { mail }),
  )) as { ref: fauna.ExprArg };
  const { secret } = (await client.query(q.Login(ref, {}))) as {
    secret: string;
  };

  res.setHeader("Set-Cookie", `session=${secret}`);
  res.statusCode = 201;
  res.end("Created");
}
