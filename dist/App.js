"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;
var _react = _interopRequireDefault(require("react"));
var _ExportedComponent = require("./ExportedComponent");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Greeting(_ref) {
  let {
    name
  } = _ref;
  const isIframe = window.self !== window.top;
  const parentOrigin = document.referrer;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "\u0425\u0423\u0419"), /*#__PURE__*/_react.default.createElement("div", null, isIframe ? 'Iframe' : 'Not'), parentOrigin, /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement(_ExportedComponent.ExportedComponent, null));
}
function App() {
  return /*#__PURE__*/_react.default.createElement(Greeting, {
    name: "world"
  });
}
