webpackHotUpdate(6,{

/***/ "./pages/podcast.js":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__ = __webpack_require__("./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_fetch__);

var _jsxFileName = "C:\\Users\\Luis Carbajo\\desktop\\PROYECTOS_PL\\cursos\\nextjs\\pages\\podcast.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
      var audio_clip = this.props.audio_clip;
      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-1106197576"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-1106197576" + " " + "cover"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("img", {
        src: audio_clip.urls.post_image.original,
        alt: "cover",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-1106197576"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-1106197576"
      }, audio_clip.title)), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-1106197576"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3727612707",
        css: ".channels.jsx-1106197576{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.cover.jsx-1106197576 img.jsx-1106197576{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:20%;height:20%;align:center;}h1.jsx-1106197576{padding:15px;font-weight:600;}h2.jsx-1106197576{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:absolute;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb2RjYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0MsQUFHMEMsQUFNSyxBQU9MLEFBSUQsWUFDSSxDQWpCRixBQWFFLEtBUHdCLFNBTDNCLENBaUJHLENBSnBCLFdBWmdFLElBaUJuRCxTQUNXLEtBYlYsVUFDQyxLQWFmLE1BWmlCLGFBQ2pCLE1BUEEiLCJmaWxlIjoicGFnZXNcXHBvZGNhc3QuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxMdWlzIENhcmJham9cXGRlc2t0b3BcXFBST1lFQ1RPU19QTFxcY3Vyc29zXFxuZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgICAgICBjb25zdCBpZEF1ZGlvID0gcXVlcnkuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkuaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RDbGlwID0gYXdhaXQgZmV0Y2ggKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7IGlkQXVkaW8gfS5tcDNgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IGJvZHkgOiB7IGF1ZGlvX2NsaXAgfSB9ID0gYXdhaXQgcmVxdWVzdENsaXAuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvX2NsaXAudGl0bGUpO1xyXG4gICAgICAgIHJldHVybiB7IGF1ZGlvX2NsaXAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICBjb25zdCB7IGF1ZGlvX2NsaXAgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgYXVkaW9fY2xpcC51cmxzLnBvc3RfaW1hZ2Uub3JpZ2luYWwgfSBhbHQ9XCJjb3ZlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgYXVkaW9fY2xpcC50aXRsZSB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGF1ZGlvIHNyYz17IGF1ZGlvX2NsaXAudXJscy5oaWdoX21wMyB9IGNvbnRyb2xzLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY292ZXIgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=pages\\podcast.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "3132620418",
        css: "body{margin:0;background:white;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxwb2RjYXN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEdUMsQUFHc0MsU0FDUSxpQkFDSyxzQkFDMUIiLCJmaWxlIjoicGFnZXNcXHBvZGNhc3QuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxMdWlzIENhcmJham9cXGRlc2t0b3BcXFBST1lFQ1RPU19QTFxcY3Vyc29zXFxuZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcclxuICAgICAgICBjb25zdCBpZEF1ZGlvID0gcXVlcnkuaWQ7XHJcbiAgICAgICAgY29uc29sZS5sb2cocXVlcnkuaWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RDbGlwID0gYXdhaXQgZmV0Y2ggKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7IGlkQXVkaW8gfS5tcDNgKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCB7IGJvZHkgOiB7IGF1ZGlvX2NsaXAgfSB9ID0gYXdhaXQgcmVxdWVzdENsaXAuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGF1ZGlvX2NsaXAudGl0bGUpO1xyXG4gICAgICAgIHJldHVybiB7IGF1ZGlvX2NsaXAgfTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpe1xyXG5cclxuICAgICAgICBjb25zdCB7IGF1ZGlvX2NsaXAgfSA9IHRoaXMucHJvcHNcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXsgYXVkaW9fY2xpcC51cmxzLnBvc3RfaW1hZ2Uub3JpZ2luYWwgfSBhbHQ9XCJjb3ZlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPnsgYXVkaW9fY2xpcC50aXRsZSB9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGF1ZGlvIHNyYz17IGF1ZGlvX2NsaXAudXJscy5oaWdoX21wMyB9IGNvbnRyb2xzLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE2MHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY292ZXIgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIl19 */\n/*@ sourceURL=pages\\podcast.js */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var query, idAudio, requestClip, _ref2, audio_clip;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                idAudio = query.id;
                console.log(query.id);
                _context.next = 5;
                return fetch("https://api.audioboom.com/audio_clips/".concat(idAudio, ".mp3"));

              case 5:
                requestClip = _context.sent;
                _context.next = 8;
                return requestClip.json();

              case 8:
                _ref2 = _context.sent;
                audio_clip = _ref2.body.audio_clip;
                console.log(audio_clip.title);
                return _context.abrupt("return", {
                  audio_clip: audio_clip
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/podcast")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=6.fd48e15329cb292a3d0b.hot-update.js.map