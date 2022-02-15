const axios = require("axios");

// var nodemailer = require("nodemailer");
// // var EmailUtil = {
// //   sendEmail: async function sendEmail(
// //     mailerAddress,
// //     subject,
// //     sendText,
// //     callback
// //   ) {
// //     console.log(
// //       "mailerAddress,subject,sendText,",
// //       mailerAddress,
// //       subject,
// //       sendText
// //     );

// //     var options = {
// //       service: "Gmail",
// //       auth: {
// //         user: "covidmodel01@gmail.com",
// //         pass: "covidcovid",
// //       },
// //     };

// //     var transport = nodemailer.createTransport(options);

// //     transport.sendMail(
// //       {
// //         from: mailerAddress,
// //         to: "sophonkripinit@gmail.com",
// //         // to: ["covidmodel01@gmail.com", "sophonkripinit@gmail.com"],
// //         subject: subject,
// //         html: "<h1>New client for kitomba</h1>",
// //         text: sendText,
// //       },
// //       function (error, responseStatus) {
// //         var val;
// //         if (error) {
// //           console.log(error);
// //           val = false;
// //         } else {
// //           console.log(responseStatus);
// //           val = true;
// //         }
// //         callback(error, val);
// //         return val;
// //       }
// //     );
// //     console.log("transport", transport);
// //   },
// // };

// // module.exports = EmailUtil;

// export function sendEmail({ sendFrom, subjectData, sendText }) {
//   //   return data;

//   console.log(
//     " sendFrom, subjectData, sendText",
//     sendFrom,
//     subjectData,
//     sendText
//   );

//   var options = {
//     service: "Gmail",
//     auth: {
//       user: "covidmodel01@gmail.com",
//       pass: "covidcovid",
//     },
//   };

//   var transport = nodemailer.createTransport(options);

//   var sendstatust = transport.sendMail(
//     {
//       from: sendFrom,
//       to: "sophonkripinit@gmail.com",
//       // to: ["covidmodel01@gmail.com", "sophonkripinit@gmail.com"],
//       subject: subjectData,
//       // html: "<h1>New client for kitomba</h1>",
//       text: sendText,
//     },
//     function (error, responseStatus) {
//       var val;
//       if (error) {
//         console.log(error);
//         val = false;
//       } else {
//         console.log(responseStatus);
//         val = true;
//       }
//       //   callback(error, val);
//       return val;
//     }
//   );

//   console.log("transport", transport);
//   return sendstatust;
// }

// "use strict";
// const nodemailer = require("nodemailer");
// export async function sendEmail({ sendFrom, subjectData, sendText }) {
//   console.log(
//     "sendFrom, subjectData, sendText",
//     sendFrom,
//     subjectData,
//     sendText
//   );
//   let transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: "587",
//     auth: {
//       user: "covidmodel01@gmail.com",
//       pass: "covidcovid",
//     },
//   });

//   let info = await transporter.sendMail({
//     from: `${sendFrom}`,
//     to: "sophonkripinit@gmail.com",
//     subject: subjectData,
//     text: sendText,
//   });

//   console.log("Message sent: %s", info.messageId);

//   return info;
// }

// sendEmail().catch(console.error);

export async function sendEmail({ sendFrom, subjectData, sendText }) {
  console.log(sendFrom, subjectData, sendText);
  return axios
    .post(
      `https://backend-sendemail-bynodemailer.herokuapp.com/sendemailcovid`,
      {
        sendFrom: sendFrom,
        subjectData: subjectData,
        sendText: sendText,
      }
    )
    .then((res) => {
      console.log("res", res);
      return res.data.msg;
    });
}
