var nodemailer = require("nodemailer");

module.exports = {
  sendMailService: async function (sendTo, sendFrom, subjectData, sendText) {
    console.log("sendMailService", sendTo, sendFrom, subjectData, sendText);

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "covidmodel01@gmail.com",
        pass: "covidcovid",
      },
    });

    var mailOptions = {
      from: sendFrom,
      to: sendTo,
      subject: subjectData,
      text: sendText,
    };

    console.log("mailOptions", mailOptions);

    const sendMail = transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        return error;
      } else {
        console.log("Email sent : info.response:: " + info.response);
        // console.log("sendMail: " + sendMail);
        return info.response;
      }
    });
    return sendMail;
  },
};
