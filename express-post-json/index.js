let nextId = 2;
let grades = {};
grades = {
  3: {
    id: 3,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  }
};
const express = require('express');
const app = express();
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const key in grades) {
    gradesArray.push(grades[key]);
  }
  res.json(gradesArray);
});
app.use(express.json());

app.post('/api/grades', (req, res) => {
  grades[nextId] = {
    id: req.body.id,
    name: req.body.name,
    course: req.body.course,
    score: req.body.score
  };
  res.json();
  res.status(201).json(grades[nextId]);
  nextId++;
});
