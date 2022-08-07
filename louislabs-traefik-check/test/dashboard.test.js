const chai = require('chai');
const fetch = require('node-fetch');

const expect = require('chai').expect,
  assert = require('assert');

describe('node-fetch helloworld', function () {
  describe('#helloworld', function () {
    it('get something from example.com', function (done) {
      this.timeout(5 * 1000);
      (async () => {
        const response = await fetch('https://dashboard-76c7d.web.app/');
        const body = await response.text();
        assert.equal(body.length > 0, true);
        done();
      })();
    });
  });
});

