const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const fruits = ["name", "edad", "test", ""];


  fruits.some((fruit) => fruit === "" || fruit === null || fruit === undefined)

  res.send();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


