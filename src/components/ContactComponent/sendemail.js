var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "covidmodel01@gmail.com",
    pass: "covidcovid",
  },
});

var subjectData = "Sending Email using Node.js";
var sendTo = ["sophonkripinit@gmail.com"];
var sendFrom = "sender@server.com";
var sendText =
  // eslint-disable-next-line no-multi-str
  "Lorem Ipsum is simply dummy text of the printing \
and typesetting industry. Lorem Ipsum has been the industry's standard \
dummy text ever since the 1500s, when an unknown printer took a galley \
of type and scrambled it to make a type specimen book.";

var mailOptions = {
  from: sendFrom,
  to: sendTo,
  subject: subjectData,
  text: sendText,
};

const sendMail = transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent : info.response:: " + info.response);
    // console.log("sendMail: " + sendMail);
  }
});
