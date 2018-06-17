const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
// const path = require('path');
// const os = require('os');


const todoRouter = require('./routes/todoRouter');

const app = express();
app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('dist'));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());
app.use(cookieParser());

app.use('/api/', todoRouter);

const http = require('http');

const port = 8080;
// app.set('port', port);

const server = http.createServer(app);

server.listen(port);

function createError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

    // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.on('error', createError);

const debug = require('debug')('server:server');

server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
});
