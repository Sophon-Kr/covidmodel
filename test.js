// const dateMax = () => {
//   // const dates = [];
//   // dates.push(new Date("2011 06 25"));
//   // dates.push(new Date("2011 06 26"));
//   // dates.push(new Date("2011 06 27"));
//   // dates.push(new Date("2011 06 28"));
//   const dates = [];
//   dates.push(new Date("2011-06-25"));
//   dates.push(new Date("2011-06-26"));
//   dates.push(new Date("2011-06-27"));
//   dates.push(new Date("2011-06-28"));

//   const testDate = ["2011-06-28", "2011-06-28", "2011-06-28", "2011-06-28"];
//   const newDates = [];
//   for (let i = 0; i < testDate.length; i++) {
//     newDates.push(new Date(testDate[i].split("-").join(" ")));
//   }

//   console.log("newDates", newDates);

//   const maxDate = new Date(Math.max.apply(null, newDates));
//   const minDate = new Date(Math.min.apply(null, newDates));
//   // var maxDate = new Date(Math.max.apply(null, data.name));
//   // var minDate = new Date(Math.min.apply(null, data.name));
//   console.log("maxDate:", maxDate + 1, "minDate:", minDate + 1);
// };

// dateMax();

const coviddata = [
  {
    Deaths: "83",
    Hospital: "624",
    Infected: "26031",
    Recovery: "25324",
    Susceptible: "66134665",
    Vaccine1: "0",
    Vaccine2: "0",
    name: "2021-03-01",
    test: "2021-03-01",
  },
  {
    Deaths: "84",
    Hospital: "569",
    Infected: "26073",
    Recovery: "25420",
    Susceptible: "66134581",
    Vaccine1: "0",
    Vaccine2: "0",
    name: "2021-03-02",
    test: "2021-03-02",
  },
  {
    Deaths: "84",
    Hospital: "541",
    Infected: "26108",
    Recovery: "25483",
    Susceptible: "66134511",
    Vaccine1: "0",
    Vaccine2: "0",
    name: "2021-03-03",
    test: "2021-03-03",
  },
];

const removelist = ["Vaccine1", "Vaccine2", "test", "Susceptible"];

const removeProperty = (coviddata) => {
  for (let i = 0; i < coviddata.length; i++) {
    let newcoviddata = coviddata[i];
    removelist.forEach((e) => delete newcoviddata[e]);
  }
  return coviddata;
  // console.log("newdata : ", coviddata);
};

const mydata = removeProperty(coviddata);
console.log("newdata : ", mydata);
