"use strict";
const express = require("express");
const superagent = require("superagent");
const app = express();
app.get("/", sendWeatherOfRandomCity);
function sendWeatherOfRandomCity(request, response) {
  getWeatherOfRandomCity(request, response);
  sayHi();
}
const CITIES = [
  "kolkata",
  "delhi",
  "mumbai",
  "chennai",
  "bangalore",
  "hyderabad",
  "belgaum",
  "mysore",
];

function getWeatherOfRandomCity(request, response) {
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];
  superagent.get(`wttr.in/${city}`).end((err, res) => {
    if (err) {
      console.log("O snap");
      return response
        .status(500)
        .send(
          "There was an error getting the weather, try looking out the window"
        );
    }
    const responseText = res.text;
    response.send(responseText);
    console.log("Got the weather");
  });
  console.log("Fetching the weather, please be patient");
}
function sayHi() {
  console.log("Hi");
}
app.listen(3000, () => {
  console.log("Listening");
});

console.log("script start");
const interval = setInterval(() => {
  console.log("setInterval");
}, 0);
setTimeout(() => {
  console.log("setTimeout 1");
  Promise.resolve()
    .then(() => {
      console.log("promise 3");
    })
    .then(() => {
      console.log("promise 4");
    })
    .then(() => {
      setTimeout(() => {
        console.log("setTimeout 2");
        Promise.resolve()
          .then(() => {
            console.log("promise 5");
          })
          .then(() => {
            console.log("promise 6");
          })
          .then(() => {
            console.log("clear 6");
            clearInterval(interval);
          });
      }, 0);
    });
}, 0);
Promise.resolve()
  .then(() => {
    console.log("promise 1");
  })
  .then(() => {
    console.log("promise 2");
  });
