'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ActionTypes = require('./ActionTypes');

var _ActionTypes2 = _interopRequireDefault(_ActionTypes);

var _Dispatcher = require('./Dispatcher');

var _Dispatcher2 = _interopRequireDefault(_Dispatcher);

var ReduceStore = require('flux/utils').ReduceStore;

var OutputStore = (function (_ReduceStore) {
  _inherits(OutputStore, _ReduceStore);

  function OutputStore() {
    _classCallCheck(this, OutputStore);

    _get(Object.getPrototypeOf(OutputStore.prototype), 'constructor', this).apply(this, arguments);

    this.messageForButton = function (id) {
      return 'You have clicked ' + id.replace('-', ' ');
    };
  }

  _createClass(OutputStore, [{
    key: 'getInitialState',
    value: function getInitialState() {
      return 'Test message';
    }
  }, {
    key: 'reduce',
    value: function reduce(state, action) {
      switch (action.type) {
        case _ActionTypes2['default'].BUTTON_CLICKED:
          state = this.messageForButton(action.id);
          return state;

        default:
          return state;
      }
    }
  }]);

  return OutputStore;
})(ReduceStore);

exports.OutputStore = OutputStore;

var instance = new OutputStore(_Dispatcher2['default']);
exports['default'] = instance;