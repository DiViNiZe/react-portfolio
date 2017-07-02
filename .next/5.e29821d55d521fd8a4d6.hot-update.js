webpackHotUpdate(5,{

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(37);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(40);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(39);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(12);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\xamppx\\htdocs\\gitport\\pages\\home\\components\\repo.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\xamppx\\htdocs\\gitport\\pages\\home\\components\\repo.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (true) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/home\\components\\repo")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMjk4MjFkNTVkNTIxZmQ4YTRkNi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9jb21wb25lbnRzL3JlcG8uanM/ZmU3NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmNsYXNzIHJlcG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbmNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKVxyXG5cclxufVxyXG4gICAgcmVuZGVyKCl7ICBcclxuICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByZXBvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLkRhdGFMaXN0KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gRGF0YUxpc3QocHJvcHMpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlzdEl0ZW1zID0gdGhpcy5wcm9wcy5kYXRhLm1hcChkYXRhID0+XHJcbiAgICAgICAgICAgICAgICA8bGk+e2RhdGEubmFtZX08L2xpPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPHVsPntsaXN0SXRlbXN9PC91bD5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZXBvXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvaG9tZS9jb21wb25lbnRzL3JlcG8uanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQU1BOzs7OztBQWhCQTtBQUNBO0FBaUJBO0FBQ0E7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==