const express = require("express");
const app = express();
const addDays = require("date-fns/addDays");

app.get("/", (request, response) => {
  const date = addDays(new Date());
  const days = 100;
  const after100Days = (days) => {
    return `${date.getDate() + days}-${date.getMonth()}-${date.getFullYear()}`;
  };
  response.send(after100Days);
});

module.exports = app;
