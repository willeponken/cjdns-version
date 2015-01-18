cjdns-version
===
Check the current version of CJDNS.

## Example
### Code
Output `The current version is ##`:

```
var version = require('cjdns-version');

version('https://raw.githubusercontent.com/cjdelisle/cjdns/master/util/version/Version.h', function currentVersion(err, version) {
  if (err) {
    throw new Error(err);
  }

  console.log('The current version is', version);
});
```

You can find an example in [/example/version.js](/example/version.js).

### Web server
To start the web server and have it respond with JSON containing current version, run:
```
npm start
```
or just:
```
node example/hype.js
```

Then browse to `http://[::1]:3434` and it'll respond with something like:
```
{"version":"13"}
```

You can find an example in [/example/hype.js](/example/hype.js).
