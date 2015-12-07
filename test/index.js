var expect = require('expect.js'),
    nodejsExample = require('..');

describe('nodejs-example', function() {
  it('should say hello', function(done) {
    expect(nodejsExample()).to.equal('Hello, world');
    done();
  });
});
