var https = require('https');
https.get('https://healthcheck.iamon99.com/ping/e4358c88-4080-4d6b-923c-5f2e4bd69d2c').on('error', (err) => {
  console.log('Ping failed: ' + err);
});
