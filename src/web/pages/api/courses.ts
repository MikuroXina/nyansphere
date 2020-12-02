import type { NextApiRequest, NextApiResponse } from "next";
import type { Course } from "../../lib/course";

const FAUNA_SECRET = process.env.FAUNA_SECRET;

export async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.status(400).end("Bad Request");
    return;
  }
  const course = req.body as Omit<Course, "id">;

  res.status(201).end("Created");
}
