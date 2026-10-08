import nodemailer from "nodemailer";
import { buildHtml, buildPlainText, buildSubject } from "../utils/emailTemplate.js";

function getEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured in .env`);
  }
  return value;
}

function createTransporter() {
  const port = Number(process.env.SMTP_PORT || 465);
  const secure = String(process.env.SMTP_SECURE || "true").toLowerCase() === "true";

  return nodemailer.createTransport({
    host: getEnv("SMTP_HOST"),
    port,
    secure,
    auth: {
      user: getEnv("SMTP_USER"),
      pass: getEnv("SMTP_PASS")
    }
  });
}

export const transporter = createTransporter();

export async function verifyEmailTransport() {
  await transporter.verify();
}

export async function sendReferralEmail({ firstName, email, jobRole, company, jobLink }) {
  const subject = buildSubject({ jobRole, company });
  const text = buildPlainText({ firstName, jobRole, company, jobLink });
  const html = buildHtml({ firstName, jobRole, company, jobLink });

  const info = await transporter.sendMail({
    from: getEnv("MAIL_FROM"),
    to: email,
    subject,
    text,
    html,
    // Intentionally no cc/bcc so every recipient receives an independent email.
  });

  return {
    messageId: info.messageId,
    response: info.response
  };
}
