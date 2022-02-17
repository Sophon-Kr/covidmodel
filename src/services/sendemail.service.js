const axios = require("axios");

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
