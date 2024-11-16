// Create web server
// Create a web server that listens on port 3000. When a user visits the root route, the server should respond with "Hello, World!".

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello, Peter!');
});

server.listen(3000);