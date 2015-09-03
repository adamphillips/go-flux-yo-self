import LogEntry from '../../scripts/flux/LogEntry';

describe('LogEntry', function () {
  it('should have a type and data', function() {
    var l = new LogEntry('some type', 'some data')

    expect(l.type).toEqual('some type');
    expect(l.data).toEqual('some data');
  });
});
