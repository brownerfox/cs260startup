const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const bcrypt = require('bcryptjs');
const DB = require('./database.js');
const uuid = require('uuid');
const authCookieName = 'token';

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
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

secureApiRouter.get('/posts', async (req, res) => {
  const posts = await DB.getPosts();
  res.send(posts);
});

secureApiRouter.post('/post', async (req, res) => {
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
      time: time || new Date()
  };

  await DB.addPost(newPost);
  res.status(201).send(newPost);
});

app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});