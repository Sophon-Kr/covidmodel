const axios = require("axios");

export async function getAllInitial() {
  return axios
    .get(`https://covid-data-123.herokuapp.com/covidmodel`)
    .then((res) => {
      //console.log("res", res.data.initial_default);
      //   initial_default
      return res.data.initial_default;
    });
}

export async function resetInitial() {
  return axios
    .get(`https://covid-data-123.herokuapp.com/covidmodel/reset`)
    .then((res) => {
      console.log("res", res);
      return res.data;
    });
}

export async function editInitialByDate({
  start_date,
  alpha,
  beta,
  epsilon1,
  epsilon2,
  lambdah,
  lambdas,
  mu,
  omega1,
  omega2,
  omega3,
  zetah,
  zetas,
}) {
  //console.log(sendFrom, subjectData, sendText);
  return axios
    .put(`https://covid-data-123.herokuapp.com/covidmodel`, {
      start_date: start_date,
      alpha: alpha,
      beta: beta,
      epsilon1: epsilon1,
      epsilon2: epsilon2,
      lambdah: lambdah,
      lambdas: lambdas,
      mu: mu,
      omega1: omega1,
      omega2: omega2,
      omega3: omega3,
      zetah: zetah,
      zetas: zetas,
    })
    .then((res) => {
      console.log("res", res);
      return res.data;
    });
}
