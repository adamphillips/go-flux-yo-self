'use strict';

import ActionTypes from './ActionTypes';
import type {Action} from './Actions';
import Dispatcher from './Dispatcher';

var ReduceStore = require('flux/utils').ReduceStore;

export class MessageStore extends ReduceStore<string> {
  getInitialState(): string {
    return 'The message will appear here';
  }

  reduce(state: string, action: Action): string {
    switch(action.type) {
      case ActionTypes.MESSAGE_UPDATED:
        state = action.message;
        return state;

      default:
        return state;
    }
  }
}

const instance = new MessageStore(Dispatcher);
export default instance;
