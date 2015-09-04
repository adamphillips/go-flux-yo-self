'use strict';

import LoggerStore from '../../scripts/flux/LoggerStore';

describe('LoggerStore', function () {
  describe('when an action is dispatched', function() {
    it('should add a log entry to the top of the list', function() {
      var newState = LoggerStore.reduce(['existing-entry'], {type: 'some-type', message: 'some-message'});

      expect(newState.length).toEqual(2);

      var newEntry = newState[0];

      expect(newEntry.type).toEqual('some-type');
      expect(newEntry.data).toEqual('some-message');
    });

    it('should store a maximum of 10 log entries', function() {
      var initialState = [];

      for (var x=0; x<10; x++) {
        initialState.push('some-entry-' + x);
      }

      expect(initialState.length).toEqual(10);

      var newState = LoggerStore.reduce(initialState, {type: 'some-type', message: 'some-message'});

      expect(newState.length).toEqual(10);

      var newEntry = newState[0];

      expect(newEntry.type).toEqual('some-type');
      expect(newEntry.data).toEqual('some-message');

      var lastEntry = newState.reverse()[0];

      expect(lastEntry).toEqual('some-entry-8');
    });
  });
});
