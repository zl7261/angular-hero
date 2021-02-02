const express = require("express");

const app = express();

app.use(express.json())

let dataSet = [
  {id: 11, name: 'Dr Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

app.get("/heroes", (req, res) => {
  res.json(dataSet);
});

app.get("/heroes/:id", (req, res) => {
  res.json(dataSet.find(item => item.id === +req.params.id));
});

app.listen(8000, "localhost", () => console.log("服务已经启动"))
