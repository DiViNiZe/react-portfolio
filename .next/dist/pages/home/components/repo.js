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

var _jsxFileName = "C:\\xamppx\\htdocs\\gitport\\pages\\home\\components\\repo.js";


var repo = function (_React$Component) {
    (0, _inherits3.default)(repo, _React$Component);

    function repo(props) {
        (0, _classCallCheck3.default)(this, repo);

        return (0, _possibleConstructorReturn3.default)(this, (repo.__proto__ || (0, _getPrototypeOf2.default)(repo)).call(this, props));
    }

    (0, _createClass3.default)(repo, [{
        key: "render",
        value: function render() {

            return _react2.default.createElement("div", { className: "row repo", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 10
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement("h3", { className: "title", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, this.DataList())));
        }
    }]);

    return repo;
}(_react2.default.Component);

function DataList(props) {
    var listItems = this.props.data.map(function (data) {
        return _react2.default.createElement("li", {
            __source: {
                fileName: _jsxFileName,
                lineNumber: 22
            }
        }, data.name);
    });
    return _react2.default.createElement("ul", {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, listItems);
}

exports.default = repo;