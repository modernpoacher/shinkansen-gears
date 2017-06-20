'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Piston = undefined;

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

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reactGears = require('react-gears');

var _reverse = require('./reverse');

var _forward = require('./forward');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Piston = exports.Piston = function (_React$Component) {
  (0, _inherits3.default)(Piston, _React$Component);

  function Piston() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Piston);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Piston.__proto__ || (0, _getPrototypeOf2.default)(Piston)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Piston, [{
    key: 'componentWillReceiveProps',
    // define state

    /**
     *  Convert latest 'props' to an Immutable.Map() and store in 'state'
     *
     *  @param {Object} props   Latest props
     */
    value: function componentWillReceiveProps(props) {
      // // console.log('(Piston)componentWillReceiveProps()', props) // eslint-disable-line
      var reverse = props.reverse,
          forward = props.forward;


      this.setState({
        REVERSE: _immutable2.default.Map(reverse),
        FORWARD: _immutable2.default.Map(forward)
      });
    }

    /**
     *  Compare latest 'props' with previous 'state' for changes to 'reverse' or 'forward'
     *
     *  @param {Object} props   Latest props
     */

  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(props) {
      // // console.log('(Piston)shouldComponentUpdate()', props)
      /**
       *  Compare new 'props' to old 'state'
       */
      var reverse = props.reverse,
          forward = props.forward;
      var _state = this.state,
          REVERSE = _state.REVERSE,
          FORWARD = _state.FORWARD; // state must be defined

      /**
       *  Compare object values
       */

      return !_immutable2.default.is(_immutable2.default.Map(reverse), REVERSE) || !_immutable2.default.is(_immutable2.default.Map(forward), FORWARD);
    }
  }, {
    key: 'render',
    value: function render() {
      // // console.log('(Piston)render()')

      var _props = this.props,
          reverse = _props.reverse,
          forward = _props.forward,
          pattern = _props.pattern;


      var r = _reactGears.Gears.engage(reverse, pattern);
      var f = _reactGears.Gears.engage(forward, pattern);

      if (r || f) {
        return _react2.default.createElement(
          'ul',
          { className: 'locomotive-piston', key: 'locomotive-piston' },
          r ? _react2.default.createElement(_reverse.Reverse, { pathname: _reactGears.Gears.path(reverse, pattern) }) : false,
          f ? _react2.default.createElement(_forward.Forward, { pathname: _reactGears.Gears.path(forward, pattern) }) : false
        );
      }

      return false;
    }
  }]);
  return Piston;
}(_react2.default.Component);

Piston.defaultProps = {
  pattern: _reactGears.Gears.pattern()
};

Piston.propTypes = {
  reverse: _propTypes2.default.object,
  forward: _propTypes2.default.object,
  pattern: _propTypes2.default.string
};