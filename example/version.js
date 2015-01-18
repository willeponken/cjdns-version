var version = require('../lib/check.js');

version('https://raw.githubusercontent.com/cjdelisle/cjdns/master/util/version/Version.h', function currentVersion(err, version) {
  if (err) {
    throw new Error(err);
  }

  console.log('The current version is', version);
});
