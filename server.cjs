require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
// const { getUserById } = require('');

//middleware
app.use(morgan("dev"));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Parse the apiRouter headers to see if there is a token on the user ID (will require a getUserById from a db function and requires jsonwebtoken))
app.use(async (req, res, next) => {
  const authHeader = req.header("Authorization");
  const prefix = "Bearer ";

  if (!authHeader) {
    next();
  } else if (authHeader.startsWith(prefix)) {
    const token = authHeader.slice(prefix.length);
    const { id } = jwt.verify(token, process.env.JWT_SECRET);
    if (!id) {
      next();
    } else {
      const user = await getUserById(id);
      req.user = { id: user.id, username: user.username };
      next();
    }
  } else {
    next();
  }
});

//API ROUTE (file location TBD)
// app.use('/', require('./api/index'));

app.listen(8080, () => console.log(`listening on port 8080`));