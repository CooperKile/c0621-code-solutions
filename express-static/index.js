const express = require('express');
const app = express();
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
const path = require('path');
// app.use(function (req, res, next) {
//   res.send('Hello World!');
//   next();
// });
const join = path.join(__dirname, 'public');
app.use(express.static(join));
