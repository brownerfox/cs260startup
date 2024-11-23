const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const DB = require('./database.js');


const port = process.argv.length > 2 ? process.argv[2] : 4000;

const posts = [];
const users = {};

app.use(express.static('public'));

app.use(cookieParser());

app.use(express.json());

var apiRouter = express.Router();
app.use(`/api`, apiRouter);

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});

apiRouter.post('/post', (req, res) => {
  const { imageUrl, location, rodType, rodBrand, baitType, baitColor, caption, time } = req.body;

  const newPost = {
      id: uuid.v4(),
      imageUrl,
      location,
      rodType,
      rodBrand,
      baitType,
      baitColor,
      caption,
      time
  };

  posts.push(newPost);

  res.status(201).json(newPost);
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});