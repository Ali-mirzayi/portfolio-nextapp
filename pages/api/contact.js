require("dotenv").config();
const nodemailer = require("nodemailer");
export default async (req, res) => {
  const { name, email, message, phone } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  try {
    const emailRes = await transporter.sendMail({
      //this isnt my email!!
      //my email = alimirzaei7997@gmail.com
      from: email,
      to: process.env.USER,
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a new contact form submission</p><br>
      <p><strong>Name: </strong> ${name} </p><br>
      <p><strong>Phone: </strong> ${phone} </p><br>
      <p><strong>Message: </strong> ${message} </p><br>
      `,
    });

    console.log("sended");
  } catch (err) {
    console.log(`errore:${err}`);
  }

  res.status(200).json(req.body);
};
