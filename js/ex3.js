const countries = {
  name: "Tim",
  countries: [
    { name: "Brazil", year: 2023 },
    { name: "Argentina", year: 2023 },
    { name: "Peru", year: 2023 },
    { name: "Chile", year: 2023 },
    { name: "Korea", year: 2018 },
    { name: "Vietnam", year: 2018 },
    { name: "Cambodia", year: 2018 }
  ]
};
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(countries)
})
  .then(response => response.text())
  .then(result => {
    console.log(result);
  })
  .catch(err => {
    console.error(err.message);
  });
