
module.exports = {
    getRawDataMonth: async function (accessToken, id) {
      return fetch(
        "https://covid-data-123.herokuapp.com/coviddata/month", {
              method: "GET",
              headers: {
                  Authorization: accessToken,
                  "Content-Type": "application/json",
              },
          }
      ).then(async (res) => {
         return res.json();
      });
  }
}