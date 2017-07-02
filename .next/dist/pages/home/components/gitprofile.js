"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "C:\\xamppx\\htdocs\\gitport\\pages\\home\\components\\gitprofile.js";


var GitProfile = function (_React$Component) {
    (0, _inherits3.default)(GitProfile, _React$Component);

    function GitProfile(props) {
        (0, _classCallCheck3.default)(this, GitProfile);

        return (0, _possibleConstructorReturn3.default)(this, (GitProfile.__proto__ || (0, _getPrototypeOf2.default)(GitProfile)).call(this, props));
    }

    (0, _createClass3.default)(GitProfile, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement("div", { className: "row profile", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement("div", { className: "image-cropper profilepic col-xs-3", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, _react2.default.createElement("img", { src: this.props.data.avatar, alt: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 13
                }
            })), _react2.default.createElement("div", { className: "data col-xs-3", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement("span", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, this.props.data.username), _react2.default.createElement("p", { className: "name", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, this.props.data.name)), _react2.default.createElement("div", { className: "social", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, _react2.default.createElement("div", { className: "seg col-xs-2", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 20
                }
            }, _react2.default.createElement("div", { className: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, "Followers"), _react2.default.createElement("div", { className: "num", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                }
            }, this.props.data.followers)), _react2.default.createElement("div", { className: "seg col-xs-2", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 28
                }
            }, _react2.default.createElement("div", { className: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, "Following"), _react2.default.createElement("div", { className: "num", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, this.props.data.following)), _react2.default.createElement("div", { className: "seg col-xs-2", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement("div", { className: "", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, "Repository"), _react2.default.createElement("div", { className: "num", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, this.props.data.repos)))));
        }
    }]);

    return GitProfile;
}(_react2.default.Component);

exports.default = GitProfile;