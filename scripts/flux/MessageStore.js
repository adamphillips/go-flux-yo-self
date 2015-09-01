'use strict';

import ActionTypes from './ActionTypes';
import type {Action} from './Actions';
import Dispatcher from './Dispatcher';

var ReduceStore = require('flux/utils').ReduceStore;

export class MessageStore extends ReduceStore<string> {
  getInitialState(): string {
    return 'Test message';
  }

  reduce(state: string, action: Action): string {
    switch(action.type) {
      case ActionTypes.BUTTON_CLICKED:
        state = this.messageForButton(action.id);
        return state;

      default:
        return state;
    }
  }

  messageForButton = (id) => {
    return 'You have clicked ' + id.replace('-', ' ');
  }
}

const instance = new MessageStore(Dispatcher);
export default instance;