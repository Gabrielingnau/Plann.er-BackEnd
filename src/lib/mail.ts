import nodemailer from 'nodemailer';

export async function getMailClient() {
  const accunt = await nodemailer.createTestAccount()

  const transporter = nodemailer.createTransport({
    host:'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: {
      user: accunt.user,
      pass: accunt.pass,
    },
  });

  return transporter;
}