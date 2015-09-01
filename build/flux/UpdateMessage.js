'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fluxDispatcher = require('../flux/Dispatcher');

var UpdateMessage = function UpdateMessage() {
  _classCallCheck(this, UpdateMessage);

  this.run = function (message) {
    (0, _fluxDispatcher.dispatch)({
      type: 'message/updated',
      message: message
    });
  };
};

exports['default'] = UpdateMessage;
module.exports = exports['default'];