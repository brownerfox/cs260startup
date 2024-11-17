const express = require('express');
const uuid = require('uuid');
const app = express();


const port = process.argv.length > 2 ? process.argv[2] : 4000;

const posts = [];

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

  apiRouter.post('/api/posts', (req, res) => {
    const { imageUrl, location, rodType, rodBrand, baitType, baitColor, caption, time } = req.body;

    // Basic validation (you might want to expand this as needed)
    if (!location || !caption) {
        return res.status(400).json({ msg: 'Location and caption are required' });
    }

    // Create a new post object
    const newPost = {
        id: uuidv4(),  // Unique identifier for the post
        imageUrl,
        location,
        rodType,
        rodBrand,
        baitType,
        baitColor,
        caption,
        time
    };

    // Store the post in the in-memory array (replace this with a database insert in production)
    posts.push(newPost);

    // Send a response with the created post
    res.status(201).json(newPost);
});

  app.use((_req, res) => {
    res.sendFile('index.html', { root: 'public' });
  });
  
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });