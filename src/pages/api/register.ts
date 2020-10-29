import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({});

const DOMAIN = process.env.DOMAIN || "localhost:3000";
const SECRET_KEY = process.env.SECRET_KEY || "*******";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  const {
    query: { mail },
  } = req;

  if (Array.isArray(mail)) {
    res.statusCode = 400;
    res.end("Bad Request");
    return;
  }
  const salt = await bcrypt.genSalt();
  const token = jwt.sign({ salt, mail }, SECRET_KEY, { expiresIn: "30s" });

  const phrases = [
    "Aby",
    "Biscket",
    "Circular",
    "Diana",
    "Feline",
    "Helix",
    "Ixy",
    "Julia",
    "Nyan",
    "Meow",
    "Osk",
    "Qli",
    "Tay",
    "Vivid",
    "Wa",
    "Xyro",
    "Zen",
  ];
  const phrase = phrases.sort(() => Math.random() + 0.5)[0];
  await sendMail(mail, phrase, token);

  res.end(JSON.stringify({ phrase }));
}

function sendMail(mail: string, phrase: string, token: string) {
  return transporter.sendMail({
    from: "noreply@nyansphere.org",
    to: mail,
    subject: "Check your e-mail address",
    text: `Security phrase: ${phrase}\n\n ---\n\nPlease check above phrase whether be same as our registration page on our site.\nThen go to the link below.\nThis link expires in 30 seconds.\n\n ---\n\nhttps://${DOMAIN}/api/register/verify?jwt=${token}`,
  });
}
