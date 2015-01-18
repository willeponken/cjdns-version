cjdns-version
===
Check the current version of CJDNS.

## Example
```
var version = require('cjdns-version');

version('https://raw.githubusercontent.com/cjdelisle/cjdns/master/util/version/Version.h', function currentVersion(err, version) {
  if (err) {
    throw new Error(err);
  }

  console.log('The current version is', version);
});
```
