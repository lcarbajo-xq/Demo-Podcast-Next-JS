webpackHotUpdate(5,{

/***/ "./node_modules/http-status/lib/index.js":
false,

/***/ "./node_modules/next/dist/lib/error.js":
false,

/***/ "./node_modules/next/error.js":
false,

/***/ "./pages/_error.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _jsxFileName = "C:\\Users\\Luis Carbajo\\desktop\\PROYECTOS_PL\\cursos\\nextjs\\pages\\_error.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, (Error.__proto__ || Object.getPrototypeOf(Error)).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      }, this.props.statusCode ? "An error ".concat(this.props.statusCode, " occurred on server") : 'An error occurred on client');
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);


    (function (Component, route) {
      if(!Component) return
      if (false) return
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_error")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/channel.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error__ = __webpack_require__("./pages/_error.js");

var _jsxFileName = "C:\\Users\\Luis Carbajo\\desktop\\PROYECTOS_PL\\cursos\\nextjs\\pages\\channel.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channel = _props.channel,
          audio_clips = _props.audio_clips,
          channels = _props.channels,
          statusCode = _props.statusCode;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__error__["a" /* default */], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        className: "jsx-2062330198"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-2062330198"
      }, "Podcasts"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-2062330198"
      }, channel.title), audio_clips.map(function (clip) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_link___default.a, {
          href: "/podcast?id=".concat(clip.id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          className: "jsx-2062330198" + " " + "clip"
        }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          className: "jsx-2062330198"
        }, " ", clip.title, " ")));
      }), channels.map(function (serie) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h3", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          className: "jsx-2062330198"
        }, serie.title);
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "164687618",
        css: "header.jsx-2062330198{color:#fff;background:#55E6C1;padding:15px;text-align:center;font-weight:bold;}.channels.jsx-2062330198{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-2062330198 img.jsx-2062330198{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h1.jsx-2062330198{padding:15px;font-weight:600;}h2.jsx-2062330198{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNENEIsQUFHb0MsQUFPRSxBQU1LLEFBS0wsQUFJRCxXQXJCTyxDQXNCSCxDQWZGLEFBV0UsS0FMd0IsU0FMM0IsQ0FlRyxDQUpwQixDQWxCaUIsVUFRK0MsR0FQMUMsQ0FzQlQsU0FDVyxLQVhULEdBWE0sUUFZckIsSUFXQSxLQXRCQSxvQkFNQSIsImZpbGUiOiJwYWdlc1xcY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEx1aXMgQ2FyYmFqb1xcZGVza3RvcFxcUFJPWUVDVE9TX1BMXFxjdXJzb3NcXG5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5LCByZXMgfSkge1xyXG4gICAgICAgIGNvbnN0IGlkQ2hhbm5lbCA9IHF1ZXJ5LmlkO1xyXG4gICAgICAgIHRyeSB7IFxyXG4gICAgICAgICAgICBjb25zdCBbIHJlcXVlc3RDaGFubmVsICwgcmVxdWVzdENoaWxkLCByZXF1ZXN0QXVkaW8gXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgIGZldGNoIChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8keyBpZENoYW5uZWwgfWApLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2ggKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7IGlkQ2hhbm5lbCB9L2NoaWxkX2NoYW5uZWxzYCksXHJcbiAgICAgICAgICAgICAgICBmZXRjaCAoYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHsgaWRDaGFubmVsIH0vYXVkaW9fY2xpcHNgKVxyXG4gICAgICAgICAgICBdKVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlcXVlc3RDaGFubmVsLnN0YXR1cyA+PSA0MDApIHtcclxuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVxdWVzdENoYW5uZWwuc3RhdHVzO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbDogbnVsbCAsIGF1ZGlvX2NsaXBzOiBudWxsLCBjaGFubmVsczogbnVsbCwgc3RhdHVzQ29kZTogIHJlcXVlc3RDaGFubmVsLnN0YXR1c307XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgYm9keSA6IHsgY2hhbm5lbCB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hhbm5lbC5qc29uKCk7IFxyXG4gICAgICAgICAgICBjb25zdCB7IGJvZHkgOiB7IGF1ZGlvX2NsaXBzIH0gfSA9IGF3YWl0IHJlcXVlc3RBdWRpby5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgYm9keSA6IHsgY2hhbm5lbHMgfSB9ID0gYXdhaXQgcmVxdWVzdENoaWxkLmpzb24oKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IGNoYW5uZWwgLCBhdWRpb19jbGlwcywgY2hhbm5lbHMsIHN0YXR1c0NvZGU6IDIwMCB9O1xyXG4gICAgICAgIH0gY2F0Y2goZSkge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMztcclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbDogbnVsbCAsIGF1ZGlvX2NsaXBzOiBudWxsLCBjaGFubmVsczogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBjaGFubmVsLCBhdWRpb19jbGlwcywgY2hhbm5lbHMsIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICBpZiAoc3RhdHVzQ29kZSAhPT0gMjAwICkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9eyBzdGF0dXNDb2RlIH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgPGgxPnsgY2hhbm5lbC50aXRsZSB9PC9oMT5cclxuICAgICAgICAgICAgICAgIHsgYXVkaW9fY2xpcHMubWFwKCAoY2xpcCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eyBgL3BvZGNhc3Q/aWQ9JHsgY2xpcC5pZCB9YCB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4geyBjbGlwLnRpdGxlIH0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSkgfVxyXG5cclxuICAgICAgICAgICAgICAgIHsgY2hhbm5lbHMubWFwKCAoc2VyaWUpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8aDM+eyBzZXJpZS50aXRsZSB9PC9oMz5cclxuICAgICAgICAgICAgICAgICkpIH1cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM1NUU2QzE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=pages\\channel.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2076439261",
        css: "body{margin:0;background:white;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFGbUMsQUFHa0MsU0FDUSxpQkFDSyxzQkFDMUIiLCJmaWxlIjoicGFnZXNcXGNoYW5uZWwuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxMdWlzIENhcmJham9cXGRlc2t0b3BcXFBST1lFQ1RPU19QTFxcY3Vyc29zXFxuZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVzIH0pIHtcclxuICAgICAgICBjb25zdCBpZENoYW5uZWwgPSBxdWVyeS5pZDtcclxuICAgICAgICB0cnkgeyBcclxuICAgICAgICAgICAgY29uc3QgWyByZXF1ZXN0Q2hhbm5lbCAsIHJlcXVlc3RDaGlsZCwgcmVxdWVzdEF1ZGlvIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBmZXRjaCAoYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHsgaWRDaGFubmVsIH1gKSxcclxuICAgICAgICAgICAgICAgIGZldGNoIChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8keyBpZENoYW5uZWwgfS9jaGlsZF9jaGFubmVsc2ApLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2ggKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7IGlkQ2hhbm5lbCB9L2F1ZGlvX2NsaXBzYClcclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcXVlc3RDaGFubmVsLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGNoYW5uZWw6IG51bGwgLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6ICByZXF1ZXN0Q2hhbm5lbC5zdGF0dXN9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGJvZHkgOiB7IGNoYW5uZWwgfSB9ID0gYXdhaXQgcmVxdWVzdENoYW5uZWwuanNvbigpOyBcclxuICAgICAgICAgICAgY29uc3QgeyBib2R5IDogeyBhdWRpb19jbGlwcyB9IH0gPSBhd2FpdCByZXF1ZXN0QXVkaW8uanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGJvZHkgOiB7IGNoYW5uZWxzIH0gfSA9IGF3YWl0IHJlcXVlc3RDaGlsZC5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBjaGFubmVsICwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlOiAyMDAgfTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDM7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNoYW5uZWw6IG51bGwgLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXsgc3RhdHVzQ29kZSB9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT57IGNoYW5uZWwudGl0bGUgfTwvaDE+XHJcbiAgICAgICAgICAgICAgICB7IGF1ZGlvX2NsaXBzLm1hcCggKGNsaXApID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsgYC9wb2RjYXN0P2lkPSR7IGNsaXAuaWQgfWAgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+IHsgY2xpcC50aXRsZSB9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpIH1cclxuXHJcbiAgICAgICAgICAgICAgICB7IGNoYW5uZWxzLm1hcCggKHNlcmllKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGgzPnsgc2VyaWUudGl0bGUgfTwvaDM+XHJcbiAgICAgICAgICAgICAgICApKSB9XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTVFNkMxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgIClcclxuICAgIH1cclxufSJdfQ== */\n/*@ sourceURL=pages\\channel.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, res, idChannel, _ref2, _ref3, requestChannel, requestChild, requestAudio, _ref4, channel, _ref5, audio_clips, _ref6, channels;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                idChannel = query.id;
                _context.prev = 2;
                _context.next = 5;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"))]);

              case 5:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                requestChannel = _ref3[0];
                requestChild = _ref3[1];
                requestAudio = _ref3[2];

                if (!(requestChannel.status >= 400)) {
                  _context.next = 13;
                  break;
                }

                res.statusCode = requestChannel.status;
                return _context.abrupt("return", {
                  channel: null,
                  audio_clips: null,
                  channels: null,
                  statusCode: requestChannel.status
                });

              case 13:
                _context.next = 15;
                return requestChannel.json();

              case 15:
                _ref4 = _context.sent;
                channel = _ref4.body.channel;
                _context.next = 19;
                return requestAudio.json();

              case 19:
                _ref5 = _context.sent;
                audio_clips = _ref5.body.audio_clips;
                _context.next = 23;
                return requestChild.json();

              case 23:
                _ref6 = _context.sent;
                channels = _ref6.body.channels;
                return _context.abrupt("return", {
                  channel: channel,
                  audio_clips: audio_clips,
                  channels: channels,
                  statusCode: 200
                });

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](2);
                res.statusCode = 503;
                return _context.abrupt("return", {
                  channel: null,
                  audio_clips: null,
                  channels: null,
                  statusCode: 503
                });

              case 32:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 28]]);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);


    (function (Component, route) {
      if(!Component) return
      if (false) return
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/channel")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=5.0c0ff2e64b6a555b2584.hot-update.js.map