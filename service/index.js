const express = require('express');
const uuid = require('uuid');
const app = express();


const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.static('public'));

app.use(expres.json());

apiRouter.post('/auth/create', async (req, res) => {
    const user = users[req.body.email];
    if (user) {
      res.status(409).send({ msg: 'Existing user' });
    } else {
      const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
      users[user.email] = user;
  
      res.send({ token: user.token });
    }
  });