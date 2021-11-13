module.exports = {
  getdailyData: async function (res) {
    return fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => console.log(response));
  },
};
