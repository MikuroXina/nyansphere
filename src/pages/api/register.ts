import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const MAIL_CLIENT_USER =
  process.env.MAIL_CLIENT_USER || "noreply.nyansphere@gmail.com";
const MAIL_CLIENT_ACCESS_TOKEN = process.env.MAIL_CLIENT_ACCESS_TOKEN;

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: MAIL_CLIENT_USER,
    accessToken: MAIL_CLIENT_ACCESS_TOKEN,
  },
});

const DOMAIN = process.env.DOMAIN || "http://localhost:3000";
const SECRET_KEY = process.env.SECRET_KEY || "*******";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ phrase: string }>,
): Promise<void> {
  res.setHeader("Access-Control-Allow-Origin", DOMAIN);

  const { body } = req;
  const { mail } = JSON.parse(body) as { mail: string };

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
  try {
    await sendMail(mail, phrase, token);
  } catch (err) {
    res.status(400).end("Bad Request\nINVALID_MAIL_ADDRESS");
    return;
  }

  res.status(200).json({ phrase });
}

function sendMail(mail: string, phrase: string, token: string) {
  return transporter.sendMail({
    from: "noreply.nyansphere@gmail.com",
    to: mail,
    subject: "Check your e-mail address",
    text: `Security phrase: ${phrase}\n\n ---\n\nPlease check above phrase whether be same as our registration page on our site.\nThen go to the link below.\nThis link expires in 30 seconds.\n\n ---\n\nhttps://${DOMAIN}/api/register/verify?jwt=${token}`,
  });
}
