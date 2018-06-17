const express = require('express');

const todoRouter = express.Router();
const os = require('os');

todoRouter.get('/', (req, res) => {
  res.send({ username: os.userInfo().username });
});

module.exports = todoRouter;
