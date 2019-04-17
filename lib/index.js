"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactSymbol = _interopRequireDefault(require("react-symbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by rouven on 12.04.17.
 */
var Loading = function Loading(_ref) {
  var title = _ref.title;
  return _react["default"].createElement("div", {
    className: "pageWaiter"
  }, _react["default"].createElement("div", {
    className: "pageWaiter-inner"
  }, _react["default"].createElement(_reactSymbol["default"], {
    symbol: "cog",
    spinning: true
  })), _react["default"].createElement("p", {
    className: "pageWaiter-note"
  }, title));
};

Loading.defaultProps = {
  title: 'Ihre Daten werden geladen...'
};
Loading.propTypes = {
  title: _propTypes["default"].string
};
var _default = Loading;
exports["default"] = _default;