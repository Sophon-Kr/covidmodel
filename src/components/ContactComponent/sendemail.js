var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "covidmodel01@gmail.com",
    pass: "covidcovid",
  },
});

var mailOptions = {
  from: "testmyemaol@gmail.com",
  to: "sophonkripinit@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

const sendMail = transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
