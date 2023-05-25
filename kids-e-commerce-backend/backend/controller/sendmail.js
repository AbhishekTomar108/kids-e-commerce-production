const nodemailer = require("nodemailer");

const sendmail = async (req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      host:  "smtp.ethereal.email",
      port: 587,
      secure: false,
      auth: {
        user: 'shanie.jerde85@ethereal.email',
        pass: 'wVyZncExNnSd6cgwVB'
      },
    });

    let info = await transporter.sendMail({
      from: "shanie.jerde85@ethereal.email",
      to: "abhishektomar9211@gmail.com",
      subject: "Hello ✔",
      text: "Hello world okay",
      html: "<b>Hello world okay ok</b>",
    });

    res.send(info);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while sending the email.");
  }
};

module.exports = sendmail;
