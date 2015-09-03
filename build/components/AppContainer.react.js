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

var _LayerReact = require('./Layer.react');

var _LayerReact2 = _interopRequireDefault(_LayerReact);

var _MessageBarReact = require('./MessageBar.react');

var _MessageBarReact2 = _interopRequireDefault(_MessageBarReact);

var _ButtonReact = require('./Button.react');

var _ButtonReact2 = _interopRequireDefault(_ButtonReact);

var _ActionCreatorReact = require('./ActionCreator.react');

var _ActionCreatorReact2 = _interopRequireDefault(_ActionCreatorReact);

var _DispatcherReact = require('./Dispatcher.react');

var _DispatcherReact2 = _interopRequireDefault(_DispatcherReact);

var _StoreReact = require('./Store.react');

var _StoreReact2 = _interopRequireDefault(_StoreReact);

var _SourceLinkReact = require('./SourceLink.react');

var _SourceLinkReact2 = _interopRequireDefault(_SourceLinkReact);

var AppContainer = (function (_React$Component) {
  _inherits(AppContainer, _React$Component);

  function AppContainer() {
    _classCallCheck(this, AppContainer);

    _get(Object.getPrototypeOf(AppContainer.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AppContainer, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        { id: 'app-container' },
        _react2['default'].createElement(
          _LayerReact2['default'],
          { id: 'view-layer' },
          _react2['default'].createElement(_MessageBarReact2['default'], { id: 'message-bar' }),
          _react2['default'].createElement(
            'div',
            { className: 'button-container' },
            _react2['default'].createElement(
              _ButtonReact2['default'],
              { id: 'button-1' },
              'Button 1'
            ),
            _react2['default'].createElement(
              _ButtonReact2['default'],
              { id: 'button-2' },
              'Button 2'
            ),
            _react2['default'].createElement(
              _ButtonReact2['default'],
              { id: 'button-3', delay: 'true' },
              'Button 3'
            )
          )
        ),
        _react2['default'].createElement(
          _LayerReact2['default'],
          { id: 'action-creator-layer' },
          _react2['default'].createElement(
            _ActionCreatorReact2['default'],
            { id: 'update-message-action-creator' },
            'UpdateMessage Action Creator'
          ),
          _react2['default'].createElement(
            _ActionCreatorReact2['default'],
            { id: 'delayed-update-message-action-creator' },
            'DelayedUpdateMessage Action Creator'
          )
        ),
        _react2['default'].createElement(
          _LayerReact2['default'],
          { id: 'dispatcher-layer' },
          _react2['default'].createElement(
            _DispatcherReact2['default'],
            { id: 'dispatcher' },
            'Dispatcher'
          )
        ),
        _react2['default'].createElement(
          _LayerReact2['default'],
          { id: 'store-layer' },
          _react2['default'].createElement(
            _StoreReact2['default'],
            { id: 'message-store' },
            'Message Store',
            _react2['default'].createElement(
              'p',
              { className: 'store__description' },
              'The MessageStore contains the message to be displayed in the bar at top. The MessageBar React component as being bound to the MessageStore.',
              _react2['default'].createElement(
                _SourceLinkReact2['default'],
                { filename: 'MessageStore.js' },
                'View on Github'
              )
            )
          ),
          _react2['default'].createElement(
            _StoreReact2['default'],
            { id: 'logger-store' },
            'LoggerStore',
            _react2['default'].createElement(
              'p',
              { className: 'store__description' },
              'The LoggerStore contains the log of the last 10 actions. This is the source used for the data table. The AppLog React component as being bound to the LoggerStore.',
              _react2['default'].createElement(
                _SourceLinkReact2['default'],
                { filename: 'LoggerStore.js' },
                'View on Github'
              )
            )
          )
        )
      );
    }
  }]);

  return AppContainer;
})(_react2['default'].Component);

exports['default'] = AppContainer;
module.exports = exports['default'];