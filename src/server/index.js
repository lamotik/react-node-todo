const express = require('express');

const custodianCasesController = require('./controller/cases');

const app = express();

app.use(express.static('dist'));
app.use('/api/custodianCases', custodianCasesController);

const http = require('http');

const server = http.createServer(app);

server.listen(8080);
