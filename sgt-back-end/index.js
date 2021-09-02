const express = require('express');
const app = express();
app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
app.get('/api/grades', (req, res, next) => {
  const sql = `
  select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.post('/api/grades', (req, res, next) => {
  const score = parseInt(req.body.score, 10);
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer'
    });
    return;
  } else if (!req.body.name) {
    res.status(400).json({
      error: '"name" must be included'
    });
    return;
  } else if (!req.body.course) {
    res.status(400).json({
      error: '"course" must be included'
    });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *;
  `;
  const values = [req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(result => {
      res.status(201);
      res.json(result.rows[0]);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.put('/api/grades/:gradeId', (req, res, next) => {
  const score = parseInt(req.body.score, 10);
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: '"score" must be a positive integer'
    });
  } else if (!req.body.name) {
    res.status(400).json({
      error: '"name" must be included'
    });
  } else if (!req.body.course) {
    res.status(400).json({
      error: '"course" must be included'
    });
  }
  const sql = `
  update "grades"
  set "name" = $2,
      "course" = $3,
      "score" = $4
  where "gradeId" = $1
  returning *;
  `;
  const values = [gradeId, req.body.name, req.body.course, req.body.score];
  db.query(sql, values)
    .then(result => {
      const value = result.rows[0];
      if (!value) {
        res.status(404).json({
          error: 'Cannot find grade with "gradeId"'
        });
      } else {
        res.status(201);
        res.json(value);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
app.delete('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
  }
  const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *;
    `;
  const deletedGrade = [req.params.gradeId];
  db.query(sql, deletedGrade)
    .then(result => {
      const value = result.rows[0];
      if (!value) {
        res.status(404).json({
          error: 'Cannot find grade with "gradeId"'
        });
      } else {
        res.status(204);
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
