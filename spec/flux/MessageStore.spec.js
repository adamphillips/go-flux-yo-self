'use strict';

import ActionTypes from '../../scripts/flux/ActionTypes';
import MessageStore from '../../scripts/flux/MessageStore';

describe('MessageStore', function () {
  describe('when a MESSAGE_UPDATED action is dispatched', function() {
    it('should update the message store', function() {
      var action = {
        type: ActionTypes.MESSAGE_UPDATED,
        message: 'some-message'
      };

      var newState = MessageStore.reduce('old-message', action);

      expect(newState).toEqual('some-message');
    });
  });

  describe('when another type of action is dispatched', function() {
    it('should not update the message store', function() {
      var action = {
        type: 'some-unknown-type',
        message: 'some-message'
      };

      var newState = MessageStore.reduce('old-message', action);

      expect(newState).toEqual('old-message');
    });
  });
});
