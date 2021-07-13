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
  const name = req.query.name
  let resp
  if (!name) {
    resp = dataSet
  } else {
    resp = dataSet.filter(item => {
      return item.name.toLowerCase().indexOf(name.toLowerCase()) > -1
    })
  }
  res.json(resp);
});

app.get("/heroes/:id", (req, res) => {
  res.json(dataSet.find(item => item.id === +req.params.id));
});

app.listen(8000, "localhost", () => console.log("server start"))
