'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _fluxUpdateMessage = require('../flux/UpdateMessage');

var _fluxUpdateMessage2 = _interopRequireDefault(_fluxUpdateMessage);

var _fluxDelayedUpdateMessage = require('../flux/DelayedUpdateMessage');

var _fluxDelayedUpdateMessage2 = _interopRequireDefault(_fluxDelayedUpdateMessage);

var Button = (function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _this = this;

    _classCallCheck(this, Button);

    _get(Object.getPrototypeOf(Button.prototype), 'constructor', this).apply(this, arguments);

    this.onButtonClick = function () {
      _this.actionCreator.run(_this.message);
    };
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      debugger;
      return _react2['default'].createElement(
        'button',
        { id: this.props.id, className: 'button component__view', onClick: this.onButtonClick },
        this.props.children,
        _react2['default'].createElement(
          'p',
          { className: 'button__description' },
          'When clicked, this button will create an instance of an ActionCreator. It will use this to set the message to ',
          this.message,
          '.'
        )
      );
    }
  }, {
    key: 'message',
    get: function get() {
      return 'You have clicked ' + this.props.id.replace('-', ' ');
    }
  }, {
    key: 'actionCreator',
    get: function get() {
      return new this.actionCreatorType();
    }
  }, {
    key: 'actionCreatorType',
    get: function get() {
      return this.props.delay ? _fluxDelayedUpdateMessage2['default'] : _fluxUpdateMessage2['default'];
    }
  }]);

  return Button;
})(_react2['default'].Component);

exports['default'] = Button;
module.exports = exports['default'];