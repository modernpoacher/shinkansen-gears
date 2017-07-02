'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Forward = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Forward = exports.Forward = function (_React$Component) {
  _inherits(Forward, _React$Component);

  function Forward() {
    _classCallCheck(this, Forward);

    return _possibleConstructorReturn(this, (Forward.__proto__ || Object.getPrototypeOf(Forward)).apply(this, arguments));
  }

  _createClass(Forward, [{
    key: 'render',
    value: function render() {
      var pathname = this.props.pathname;


      var key = pathname + '-forward';
      var to = {
        pathname: pathname
      };

      return _react2.default.createElement(
        'li',
        { key: key, className: 'shinkansen-gears-forward' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: to },
          'Forward'
        )
      );
    }
  }]);

  return Forward;
}(_react2.default.Component);

Forward.propTypes = {
  pathname: _propTypes2.default.string.isRequired
};