var http;
const VERSION_CURRENT_PROTOCOL = '#define Version_CURRENT_PROTOCOL';

function downloadVersion(url, callback) {
  if (url.indexOf('https') !== -1) {
    http = require('https');
  } else {
    http = require('http');
  }
  
  http.get(url, function(res) {
    var data = '';
    
    res.on('data', function(chunk) {
      data += chunk;
    });

    res.on('end', function() {
      return callback(null, data);
    });

    res.on('error', function(err) {
      return callback(err);
    });
  });
}

function findVersion(data, callback) {
  data = data.toString();

  var index = data.indexOf(VERSION_CURRENT_PROTOCOL) + VERSION_CURRENT_PROTOCOL.length; // get index of end for found string

  // walk the rest of the string until newline
  var version = '';
  var characted;
  
  while(true) {
    character = data.charAt(index);
    
    if (character === '\n') {
      return callback(null, Number(version.replace(/\D/g, ''))); // strip non-numberic chars and convert to number
    } else {
      version += character;
    }

    index++;
  }
}

function versionController(url, callback) {
 
  downloadVersion(url, function(err, data) {

    findVersion(data, function(err, version) {
        if (err) {
          return callback(err);
        } else {
          return callback(null, version)
        }
      });
  });
}

module.exports = versionController;
