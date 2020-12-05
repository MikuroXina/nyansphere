import type { MailValidator } from "../abst/mail-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

const URL_BASE = process.env.URL_BASE || "http://localhost:3000";
const SECRET_KEY = process.env.SECRET_KEY || "*******";

export class Mailer implements MailValidator {
  private transporter = nodemailer.createTransport({
    // host: "smtp.example.com",
    port: 465,
    secure: true,
  });

  async validate(mail: string): Promise<boolean> {
    const salt = await bcrypt.genSalt();
    const token = jwt.sign({ salt, mail }, SECRET_KEY, { expiresIn: "30s" });
    await this.transporter.sendMail({
      // from: "noreply.nyansphere@example.com",
      to: mail,
      subject: "Check your e-mail address",
      text: `This link expires in 30 seconds.\n\n ---\n\nhttps://${URL_BASE}/api/register/verify?jwt=${token}`,
    });
    return true;
  }
}
