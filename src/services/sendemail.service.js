// var nodemailer = require("nodemailer");
// var EmailUtil = {
//   sendEmail: async function sendEmail(
//     mailerAddress,
//     subject,
//     sendText,
//     callback
//   ) {
//     console.log(
//       "mailerAddress,subject,sendText,",
//       mailerAddress,
//       subject,
//       sendText
//     );

//     var options = {
//       service: "Gmail",
//       auth: {
//         user: "covidmodel01@gmail.com",
//         pass: "covidcovid",
//       },
//     };

//     var transport = nodemailer.createTransport(options);

//     transport.sendMail(
//       {
//         from: mailerAddress,
//         to: "sophonkripinit@gmail.com",
//         // to: ["covidmodel01@gmail.com", "sophonkripinit@gmail.com"],
//         subject: subject,
//         html: "<h1>New client for kitomba</h1>",
//         text: sendText,
//       },
//       function (error, responseStatus) {
//         var val;
//         if (error) {
//           console.log(error);
//           val = false;
//         } else {
//           console.log(responseStatus);
//           val = true;
//         }
//         callback(error, val);
//         return val;
//       }
//     );
//     console.log("transport", transport);
//   },
// };

// module.exports = EmailUtil;
