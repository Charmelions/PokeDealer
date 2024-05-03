require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs'); // nodejs "file system" module where we are saving our morgan log
const path = require('path'); // creates a path in our "file system" to the file we are saving our morgan log in
const jwt = require('jsonwebtoken');
//c import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()
// const { getUserById } = require('');

const PORT = process.env.PORT || 3000;

// creates our access.log file and stores our morgan log inside access.log
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

//middleware
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :date[web]', { stream: accessLogStream }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Parse the apiRouter headers to see if there is a token on the user ID (will require a getUserById from a db function and requires jsonwebtoken))
app.use(async (req, res, next) => {
  const authHeader = req.header('Authorization');
  const prefix = 'Bearer ';

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
app.use('/', (req, res) => { res.send('reached / endpoint'); });

//export default prisma

app.listen(PORT, () => console.log(`listening on port ${PORT}`));