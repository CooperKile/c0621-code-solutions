const express = require('express');
const app = express();
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
app.get('/api/grades', (req, res) => {
  const allGrades = [];
  for (const key in grades) {
    allGrades.push(grades[key]);
  }
  res.json(allGrades);
});
app.delete('/api/grades/:id', (req, res) => {
  const id = parseInt(req.params.id);
  delete grades[id];
  res.sendStatus(204);
});
