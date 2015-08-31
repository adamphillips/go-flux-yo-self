'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var Dispatcher = require('flux').Dispatcher;

var instance = new Dispatcher();
exports['default'] = instance;

// So we can conveniently do, `import {dispatch} from './Dispatcher';`
var dispatch = instance.dispatch.bind(instance);
exports.dispatch = dispatch;