var LogEntry = require('../../scripts/flux/LogEntry');

describe('LogEntry', function () {
  it('should exist', function() {
    var l = new LogEntry('some type', 'some data')

    expect(l.type).toEqual('some type');
    expect(l.data).toEqual('some data');
  });
});
