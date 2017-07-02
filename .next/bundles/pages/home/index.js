
          window.__NEXT_REGISTER_PAGE('/home', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 540:
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

var _gitprofile = __webpack_require__(541);

var _gitprofile2 = _interopRequireDefault(_gitprofile);

var _repo = __webpack_require__(543);

var _repo2 = _interopRequireDefault(_repo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\xamppx\\htdocs\\gitport\\pages\\home\\index.js?entry';

var API = 'https://api.github.com/users';

var index = function (_React$Component) {
    (0, _inherits3.default)(index, _React$Component);

    function index(props) {
        (0, _classCallCheck3.default)(this, index);

        var _this = (0, _possibleConstructorReturn3.default)(this, (index.__proto__ || (0, _getPrototypeOf2.default)(index)).call(this, props));

        _this.state = {
            username: 'DiViNiZe',
            name: '',
            avatar: '',
            location: '',
            repos: '',
            followers: '',
            following: '',
            homeUrl: '',
            notFound: '',
            repoInfo: {}
        };
        return _this;
    }

    (0, _createClass3.default)(index, [{
        key: 'fetchProfile',
        value: function fetchProfile(username) {
            var _this2 = this;

            var url = API + '/' + username;
            fetch(url).then(function (res) {
                return res.json();
            }).then(function (data) {
                _this2.setState({
                    username: data.login,
                    name: data.name,
                    avatar: data.avatar_url,
                    location: data.location,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    homeUrl: data.html_url,
                    notFound: data.message
                });
            });
        }
    }, {
        key: 'fetchStarred',
        value: function fetchStarred(username) {
            var _this3 = this;

            var url = API + '/' + username + '/starred';
            fetch(url).then(function (res) {
                return res.json();
            }).then(function (data) {
                _this3.setState({
                    repoInfo: data
                });
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.fetchProfile(this.state.username);
            this.fetchStarred(this.state.username);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }), _react2.default.createElement('link', { rel: 'stylesheet', href: 'static/style.css', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }), _react2.default.createElement('div', { className: 'container', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, _react2.default.createElement(_gitprofile2.default, { data: this.state, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }), _react2.default.createElement(_repo2.default, { data: this.state.repoInfo, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })));
        }
    }]);

    return index;
}(_react2.default.Component);

exports.default = index;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\xamppx\\htdocs\\gitport\\pages\\home\\index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\xamppx\\htdocs\\gitport\\pages\\home\\index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

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
    })(module.exports.default || module.exports, "/home\\index")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 541:
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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "C:\\xamppx\\htdocs\\gitport\\pages\\home\\components\\gitprofile.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\xamppx\\htdocs\\gitport\\pages\\home\\components\\gitprofile.js"); } } })();
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
    })(module.exports.default || module.exports, "/home\\components\\gitprofile")
  
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ }),

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

},[542]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlc1xccGFnZXNcXGhvbWVcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZT82MTFiNzI2Iiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvY29tcG9uZW50cy9naXRwcm9maWxlLmpzPzYxMWI3MjYiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9jb21wb25lbnRzL3JlcG8uanM/NjExYjcyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHaXRwcm8gZnJvbSAnLi9jb21wb25lbnRzL2dpdHByb2ZpbGUuanMnXHJcbmltcG9ydCBSZXBvIGZyb20gJy4vY29tcG9uZW50cy9yZXBvLmpzJ1xyXG5jb25zdCBBUEkgPSAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycyc7XHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6ICdEaVZpTmlaZScsXHJcbiAgICAgICAgICAgIG5hbWU6JycsXHJcbiAgICAgICAgICAgIGF2YXRhcjonJyxcclxuICAgICAgICAgICAgbG9jYXRpb246JycsXHJcbiAgICAgICAgICAgIHJlcG9zOicnLFxyXG4gICAgICAgICAgICBmb2xsb3dlcnM6ICcnLFxyXG4gICAgICAgICAgICBmb2xsb3dpbmc6JycsXHJcbiAgICAgICAgICAgIGhvbWVVcmw6JycsXHJcbiAgICAgICAgICAgIG5vdEZvdW5kOicnLFxyXG4gICAgICAgICAgICByZXBvSW5mbzp7fSxcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmZXRjaFByb2ZpbGUodXNlcm5hbWUpIHsgXHJcbiAgICBsZXQgdXJsID0gYCR7QVBJfS8ke3VzZXJuYW1lfWA7XHJcbiAgICBmZXRjaCh1cmwpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdXNlcm5hbWU6IGRhdGEubG9naW4sXHJcbiAgICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICBhdmF0YXI6IGRhdGEuYXZhdGFyX3VybCxcclxuICAgICAgICAgIGxvY2F0aW9uOiBkYXRhLmxvY2F0aW9uLFxyXG4gICAgICAgICAgcmVwb3M6IGRhdGEucHVibGljX3JlcG9zLFxyXG4gICAgICAgICAgZm9sbG93ZXJzOiBkYXRhLmZvbGxvd2VycyxcclxuICAgICAgICAgIGZvbGxvd2luZzogZGF0YS5mb2xsb3dpbmcsXHJcbiAgICAgICAgICBob21lVXJsOiBkYXRhLmh0bWxfdXJsLFxyXG4gICAgICAgICAgbm90Rm91bmQ6IGRhdGEubWVzc2FnZVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICBmZXRjaFN0YXJyZWQodXNlcm5hbWUpe1xyXG4gICAgICAgIGxldCB1cmwgPSBgJHtBUEl9LyR7dXNlcm5hbWV9L3N0YXJyZWRgO1xyXG4gICAgICAgIGZldGNoKHVybClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgICAgcmVwb0luZm86ZGF0YSxcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5mZXRjaFByb2ZpbGUodGhpcy5zdGF0ZS51c2VybmFtZSk7XHJcbiAgICAgICAgdGhpcy5mZXRjaFN0YXJyZWQodGhpcy5zdGF0ZS51c2VybmFtZSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwiYm9keVwiPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy43L2Nzcy9ib290c3RyYXAubWluLmNzc1wiLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCJzdGF0aWMvc3R5bGUuY3NzXCIvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPEdpdHBybyBkYXRhPXt0aGlzLnN0YXRlfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxSZXBvIGRhdGEgPSB7dGhpcy5zdGF0ZS5yZXBvSW5mb30vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgKVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9ob21lP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG4gXHJcbmNsYXNzIEdpdFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBwcm9maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtY3JvcHBlciBwcm9maWxlcGljIGNvbC14cy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3RoaXMucHJvcHMuZGF0YS5hdmF0YXJ9IGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhIGNvbC14cy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt0aGlzLnByb3BzLmRhdGEudXNlcm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJuYW1lXCI+e3RoaXMucHJvcHMuZGF0YS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZyBjb2wteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvd2Vyc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLmZvbGxvd2Vyc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlZyBjb2wteHMtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvbGxvd2luZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJudW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRhLmZvbGxvd2luZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWcgY29sLXhzLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBvc2l0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm51bVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGEucmVwb3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdpdFByb2ZpbGVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9ob21lL2NvbXBvbmVudHMvZ2l0cHJvZmlsZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuY2xhc3MgcmVwbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpXHJcblxyXG59XHJcbiAgICByZW5kZXIoKXsgIFxyXG4gICAgICAgICBcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJlcG9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuRGF0YUxpc3QoKX1cclxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBEYXRhTGlzdChwcm9wcykge1xyXG4gICAgICAgICAgICBjb25zdCBsaXN0SXRlbXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGRhdGEgPT5cclxuICAgICAgICAgICAgICAgIDxsaT57ZGF0YS5uYW1lfTwvbGk+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8dWw+e2xpc3RJdGVtc308L3VsPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlcG9cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9ob21lL2NvbXBvbmVudHMvcmVwby5qcyJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQVdBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVlBOzs7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUdBO0FBRkE7QUFHQTs7OztBQUVBO0FBQUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUpBOzs7Ozs7QUF6REE7QUFDQTtBQWdFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBOzs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUdBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUZBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7Ozs7O0FBdENBO0FBQ0E7QUErQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25EQTtBQUNBOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBTUE7Ozs7O0FBaEJBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        