import axios from "axios";
module.exports = {
  getRawDataMonth: async function () {
    return axios
      .get("https://covid-data-123.herokuapp.com/coviddata/month")
      .then((response) => {
        console.log("response: ", response);
        response.json();
      })
      .catch((err) => {
        console.error(err);
      });
  },
  getIndividualProfile: async function () {
    return fetch(
      "http://" +
        (process.env.REACT_APP_host || "localhost") +
        ":8000/individualprofile",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(async (res) => res.json());
  },
};

// .get("https://covid-data-123.herokuapp.com/coviddata/month")
