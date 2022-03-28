const axios = require("axios");

export async function getAllInitial(id) {
  return axios
    .get(`https://covidmodelproject.software/covidmodel/${id}`)
    .then((res) => {
      // console.log("res getAllInitial", res.data.initial_default);
      return res.data.initial_default;
    });
}

export async function resetInitial(id) {
  return axios
    .get(`https://covidmodelproject.software/covidmodel/reset/${id}`)
    .then((res) => {
      // console.log("res", res);
      return res.data;
    });
}
export async function getUserID(id) {
  return axios
    .get(`https://covidmodelproject.software/createuserid`)
    .then((res) => {
      // console.log("getUserID return : ", res);
      sessionStorage.setItem("id", res.data.id);
      return res.data.id;
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
  id,
}) {
  // console.log(
  //   "editInitialByDate",
  //   start_date,
  //   alpha,
  //   beta,
  //   epsilon1,
  //   epsilon2,
  //   lambdah,
  //   lambdas,
  //   mu,
  //   omega1,
  //   omega2,
  //   omega3,
  //   zetah,
  //   zetas
  // );
  return axios
    .put(`https://covidmodelproject.software/covidmodel/${id}`, {
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
      // console.log("res editInitialByDate", res.data.initial_value);
      return res.data.initial_value;
    });
}
