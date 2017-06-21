'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reverse = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Reverse = exports.Reverse = function (_React$Component) {
  (0, _inherits3.default)(Reverse, _React$Component);

  function Reverse() {
    (0, _classCallCheck3.default)(this, Reverse);
    return (0, _possibleConstructorReturn3.default)(this, (Reverse.__proto__ || (0, _getPrototypeOf2.default)(Reverse)).apply(this, arguments));
  }

  (0, _createClass3.default)(Reverse, [{
    key: 'render',
    value: function render() {
      var pathname = this.props.pathname;


      var key = pathname + '-reverse';
      var to = {
        pathname: pathname
      };

      return _react2.default.createElement(
        'li',
        { key: key, className: 'shinkansen-gears-reverse' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: to },
          'Reverse'
        )
      );
    }
  }]);
  return Reverse;
}(_react2.default.Component);

Reverse.propTypes = {
  pathname: _propTypes2.default.string.isRequired
};