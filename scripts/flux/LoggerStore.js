'use strict';

import type {Action} from './Actions';
import Dispatcher from './Dispatcher';
import LogEntry from './LogEntry';

var ReduceStore = require('flux/utils').ReduceStore;

export class LoggerStore extends ReduceStore<array> {
  getInitialState(): array {
    return [];
  }

  reduce(state: array, action: Action): array {
    var entry = new LogEntry(action.type, action.message);
    var new_state = state.slice(0, 9);
    new_state.unshift(entry);
    return new_state;
  }
}

const instance = new LoggerStore(Dispatcher);
export default instance;
