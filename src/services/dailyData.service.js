
module.exports = {
  getdailyData: async function () {
    return fetch("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all")
      .then((res) => res.json())
      .then((res) => console.log(res));
  },
};
