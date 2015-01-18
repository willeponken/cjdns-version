var http = require('http')
  , server = http.createServer()
  , version  = require('./check.js');

const NAME = 'Hype'
    , PORT = 3434
    , ADDRESS = '::';

function onRequest(req, res) {
  console.log(req.method, req.url);
  console.log(this.name + ': Request from ' + req.connection.remoteAddress);
  res.writeHead(200, {'Content-Type': 'application/json'});

  version('https://raw.githubusercontent.com/cjdelisle/cjdns/master/util/version/Version.h', function(err, version) {
    if (err) {
      res.end('{"error":"Unable to fetch current CJDNS version"}');
    } else {
      res.end('{"version":"' + version + '"}');
    }
  });
}

function onListening() {
  console.log(this.name + ': Listening on http://[' + ADDRESS + ']:' + PORT + '/');
  console.log(this.name + ': Press CTRL+C to terminate');
}

function startServer(name, address, port) {
  server.name = '\x1B[34m' + name + '\x1B[00m';
  server.on('request', onRequest);
  server.on('listening', onListening);
  server.listen(port, address);
  return server;
}

// Initialize and listen
startServer(NAME, ADDRESS, PORT);
