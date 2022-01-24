const dateMax = () => {
  // const dates = [];
  // dates.push(new Date("2011 06 25"));
  // dates.push(new Date("2011 06 26"));
  // dates.push(new Date("2011 06 27"));
  // dates.push(new Date("2011 06 28"));
  const dates = [];
  dates.push(new Date("2011-06-25"));
  dates.push(new Date("2011-06-26"));
  dates.push(new Date("2011-06-27"));
  dates.push(new Date("2011-06-28"));

  const testDate = ["2011-06-28", "2011-06-28", "2011-06-28", "2011-06-28"];
  const newDates = [];
  for (let i = 0; i < testDate.length; i++) {
    newDates.push(new Date(testDate[i].split("-").join(" ")));
  }

  console.log("newDates", newDates);

  const maxDate = new Date(Math.max.apply(null, newDates));
  const minDate = new Date(Math.min.apply(null, newDates));
  // var maxDate = new Date(Math.max.apply(null, data.name));
  // var minDate = new Date(Math.min.apply(null, data.name));
  console.log("maxDate:", maxDate + 1, "minDate:", minDate + 1);
};

dateMax();
