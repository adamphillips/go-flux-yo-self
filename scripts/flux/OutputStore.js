'use strict';

import type {Action} from './Actions';
import Dispatcher from './Dispatcher';

var ReduceStore = require('flux/utils').ReduceStore;

export class OutputStore extends ReduceStore<string> {
  getInitialState(): string {
    return 'Test message';
  }

  reduce(state: string, action: Action): string {
    switch(action.type) {
      case 'button/clicked':
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

const instance = new OutputStore(Dispatcher);
export default instance;
