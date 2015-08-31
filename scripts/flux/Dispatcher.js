'use strict';

var Dispatcher = require('flux').Dispatcher;

import type {Action} from './Actions';

const instance: Dispatcher<Action> = new Dispatcher();
export default instance;

// So we can conveniently do, `import {dispatch} from './Dispatcher';`
export const dispatch = instance.dispatch.bind(instance);
