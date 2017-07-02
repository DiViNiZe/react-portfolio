'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _gitprofile = require('./components/gitprofile.js');

var _gitprofile2 = _interopRequireDefault(_gitprofile);

var _repo = require('./components/repo.js');

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