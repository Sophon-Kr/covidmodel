var nodemailer = require("nodemailer");

module.exports = {
  sendMailService: async function (sendTo, sendFrom, subjectData, sendText) {
    var req = {
      sendFrom: sendFrom,
      sendTo: sendTo,
      subjectData: subjectData,
      sendText: sendText,
    };
    return fetch(`http://localhost:5000/sendmail`, {
      method: "POST",
      headers: {
        // Authorization: accessToken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    }).then(async (res) => {
      // if (res.status == 401) {
      //   sessionStorage.removeItem("token");
      //   sessionStorage.removeItem("property");
      //   sessionStorage.removeItem("curent_component");
      //   window.location.reload(false);
      // } else
      return res.json();
    });
  },
  // sendMailService: async function (sendTo, sendFrom, subjectData, sendText) {
  //   //console.log("sendMailService", sendTo, sendFrom, subjectData, sendText);

  //   "https://covid-data-123.herokuapp.com/coviddata/month", {
  //             method: "GET",
  //             headers: {
  //                 "Content-Type": "application/json",
  //             },
  //         }
  //     ).then(async (res) => {
  //        return res.json();
  //     });

  // var transporter = nodemailer.createTransport({
  //   service: "gmail",
  //   auth: {
  //     user: "covidmodel01@gmail.com",
  //     pass: "covidcovid",
  //   },
  // });

  // var mailOptions = {
  //   from: sendFrom,
  //   to: sendTo,
  //   subject: subjectData,
  //   text: sendText,
  // };

  // console.log("mailOptions", mailOptions);

  // const sendMail = transporter.sendMail(mailOptions, function (error, info) {
  //   console.log("mailOptions", mailOptions);
  //   if (error) {
  //     console.log(error);
  //     return error;
  //   } else {
  //     console.log("Email sent : info.response:: " + info.response);
  //     // console.log("sendMail : " + sendMail);
  //     return info.response;
  //   }
  // });
  // return sendMail;
  // },
};
