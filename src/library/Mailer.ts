import nodemailer from 'nodemailer';
import Logging from './Logging';

export const sendEmail = async (to: string, subject: string, text: string) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: 'Comfysloth',
    to,
    subject,
    text,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    Logging.info(`Email sent: ${info.response}`);
  } catch (error) {
    console.log(error);
  }
};
