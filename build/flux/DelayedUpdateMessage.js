'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _fluxDispatcher = require('../flux/Dispatcher');

var _fluxUpdateMessage = require('../flux/UpdateMessage');

var _fluxUpdateMessage2 = _interopRequireDefault(_fluxUpdateMessage);

var DelayedUpdateMessage = function DelayedUpdateMessage() {
  _classCallCheck(this, DelayedUpdateMessage);

  this.run = function (message) {
    var updater = new _fluxUpdateMessage2['default']();
    updater.run('Preparing to update message');

    setTimeout(function () {
      var updater = new _fluxUpdateMessage2['default']();
      updater.run(message);
    }, 1000);
  };
};

exports['default'] = DelayedUpdateMessage;
module.exports = exports['default'];