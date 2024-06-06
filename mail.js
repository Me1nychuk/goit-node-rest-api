import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9c7c7894859ac8",
    pass: "0c3c897ec8b945",
  },
});

function sendMail(message) {
  return transport.sendMail(message);
}

export default { sendMail };
