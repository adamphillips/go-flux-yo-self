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

var _fluxLoggerStore = require('../flux/LoggerStore');

var _fluxLoggerStore2 = _interopRequireDefault(_fluxLoggerStore);

var Container = require('flux/utils').Container;

var AppLog = (function (_React$Component) {
  _inherits(AppLog, _React$Component);

  function AppLog() {
    _classCallCheck(this, AppLog);

    _get(Object.getPrototypeOf(AppLog.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(AppLog, [{
    key: 'render',
    value: function render() {
      var results = [];
      for (var x in this.state.log) {
        var entry = this.state.log[x];
        results.push(_react2['default'].createElement(
          'tr',
          { key: x },
          _react2['default'].createElement(
            'td',
            null,
            entry.type
          ),
          _react2['default'].createElement(
            'td',
            null,
            entry.data
          )
        ));
      }

      return _react2['default'].createElement(
        'div',
        { id: this.props.id },
        _react2['default'].createElement(
          'table',
          null,
          _react2['default'].createElement(
            'thead',
            null,
            _react2['default'].createElement(
              'tr',
              null,
              _react2['default'].createElement(
                'td',
                null,
                'Type'
              ),
              _react2['default'].createElement(
                'td',
                null,
                'Data'
              )
            )
          ),
          _react2['default'].createElement(
            'tbody',
            null,
            results
          )
        )
      );
    }
  }], [{
    key: 'getStores',
    value: function getStores() {
      return [_fluxLoggerStore2['default']];
    }
  }, {
    key: 'calculateState',
    value: function calculateState(prevState) {
      console.log('checking state');
      return {
        log: _fluxLoggerStore2['default'].getState()
      };
    }
  }]);

  return AppLog;
})(_react2['default'].Component);

exports.AppLog = AppLog;

var contained = Container.create(AppLog);
exports['default'] = contained;