webpackHotUpdate(4,{

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error__ = __webpack_require__("./pages/_error.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_slug__ = __webpack_require__("./helpers/slug.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_components_channel_grid__ = __webpack_require__("./src/components/channel-grid.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_components_PodcastListWithClick__ = __webpack_require__("./src/components/PodcastListWithClick.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_components_podcast_player__ = __webpack_require__("./src/components/podcast-player.js");

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "openPodcast", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event, infoPodcast) {
        event.preventDefault();

        _this.setState({
          openPodcast: infoPodcast
        });
      }
    });
    Object.defineProperty(_assertThisInitialized(_this), "closePodcast", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        event.preventDefault();

        _this.setState({
          openPodcast: null
        });
      }
    });
    _this.state = {
      openPodcast: null
    };
    return _this;
  }

  _createClass(_default, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          channel = _props.channel,
          audio_clips = _props.audio_clips,
          channels = _props.channels,
          statusCode = _props.statusCode;
      var openPodcast = this.state.openPodcast;

      if (statusCode !== 200) {
        return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__error__["default"], {
          statusCode: statusCode,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          }
        });
      }

      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-1111672500"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        className: "jsx-1111672500"
      }, "".concat(channel.title, " | Channel"))), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-1111672500"
      }, channel.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-1111672500"
      }, channel.title), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        className: "jsx-1111672500" + " " + "banner"
      }), openPodcast && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        className: "jsx-1111672500" + " " + "modal"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__src_components_podcast_player__["a" /* default */], {
        clip: openPodcast,
        onClose: this.closePodcast,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })), channels.length > 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        className: "jsx-1111672500"
      }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("header", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        className: "jsx-1111672500"
      }, " ", "".concat(channel.title, " > Series "), " "), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__src_components_channel_grid__["a" /* default */], {
        channels: channels,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      })), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        className: "jsx-1111672500"
      }, "\xDAltimos Podcasts"), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__src_components_PodcastListWithClick__["a" /* default */], {
        podcasts: audio_clips,
        onClickPodcast: this.openPodcast,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "424103008",
        css: "header.jsx-1111672500{color:#fff;background:#55E6C1;padding:15px;text-align:center;font-weight:bold;}.banner.jsx-1111672500{width:100%;padding-bottom:25%;background-position:50% 50%;background-size:cover;background-color:#aaa;}.channels.jsx-1111672500{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}.channel.jsx-1111672500 img.jsx-1111672500{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}h1.jsx-1111672500{padding:15px;font-weight:600;}h2.jsx-1111672500{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:absolute;}.modal.jsx-1111672500{position:fixed;top:0;bottom:0;left:0;right:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHNEIsQUFHb0MsQUFPQSxBQU9FLEFBTUssQUFLTCxBQUlELEFBT0csV0FuQ0ksQUFPQSxDQXNCSCxDQWZGLEFBV0UsRUFXVixHQWhCa0MsR0FpQi9CLE1BdEJJLENBZUcsQ0FKcEIsQ0F6QmlCLEFBT2UsQUE4QnJCLE9BQ0MsR0F2Qm9ELEdBZDFDLENBNkJULENBU0ssUUFSTSxLQXZCRSxBQVlYLENBb0JmLEVBdENxQixRQW1CckIsSUFXQSxLQTdCQSxFQU0wQixrQkFPMUIsSUFOQSIsImZpbGUiOiJwYWdlc1xcY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiJDOlxcVXNlcnNcXEx1aXMgQ2FyYmFqb1xcZGVza3RvcFxcUFJPWUVDVE9TX1BMXFxjdXJzb3NcXG5leHRqcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xyXG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xyXG5pbXBvcnQgc2x1ZyBmcm9tICcuLi9oZWxwZXJzL3NsdWcnO1xyXG5pbXBvcnQgQ2hhbm5lbEdyaWQgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvY2hhbm5lbC1ncmlkJztcclxuaW1wb3J0IFBvZGNhc3RMaXN0V2l0aENsaWNrIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL1BvZGNhc3RMaXN0V2l0aENsaWNrJztcclxuaW1wb3J0IFBvZGNhc3RQbGF5ZXIgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvcG9kY2FzdC1wbGF5ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgb3BlblBvZGNhc3Q6IG51bGwgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSwgcmVzIH0pIHtcclxuICAgICAgICBjb25zdCBpZENoYW5uZWwgPSBxdWVyeS5pZDtcclxuICAgICAgICB0cnkgeyBcclxuICAgICAgICAgICAgY29uc3QgWyByZXF1ZXN0Q2hhbm5lbCAsIHJlcXVlc3RDaGlsZCwgcmVxdWVzdEF1ZGlvIF0gPSBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICBmZXRjaCAoYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHsgaWRDaGFubmVsIH1gKSxcclxuICAgICAgICAgICAgICAgIGZldGNoIChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8keyBpZENoYW5uZWwgfS9jaGlsZF9jaGFubmVsc2ApLFxyXG4gICAgICAgICAgICAgICAgZmV0Y2ggKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7IGlkQ2hhbm5lbCB9L2F1ZGlvX2NsaXBzYClcclxuICAgICAgICAgICAgXSlcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0Q2hhbm5lbC5zdGF0dXMgPj0gNDAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcXVlc3RDaGFubmVsLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIHJldHVybiB7IGNoYW5uZWw6IG51bGwgLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6ICByZXF1ZXN0Q2hhbm5lbC5zdGF0dXN9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGJvZHkgOiB7IGNoYW5uZWwgfSB9ID0gYXdhaXQgcmVxdWVzdENoYW5uZWwuanNvbigpOyBcclxuICAgICAgICAgICAgY29uc3QgeyBib2R5IDogeyBhdWRpb19jbGlwcyB9IH0gPSBhd2FpdCByZXF1ZXN0QXVkaW8uanNvbigpO1xyXG4gICAgICAgICAgICBjb25zdCB7IGJvZHkgOiB7IGNoYW5uZWxzIH0gfSA9IGF3YWl0IHJlcXVlc3RDaGlsZC5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyBjaGFubmVsICwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlOiAyMDAgfTtcclxuICAgICAgICB9IGNhdGNoKGUpIHtcclxuICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSA1MDM7XHJcbiAgICAgICAgICAgIHJldHVybiB7IGNoYW5uZWw6IG51bGwgLCBhdWRpb19jbGlwczogbnVsbCwgY2hhbm5lbHM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvcGVuUG9kY2FzdCA9IChldmVudCwgaW5mb1BvZGNhc3QpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBvcGVuUG9kY2FzdDogaW5mb1BvZGNhc3QsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBjbG9zZVBvZGNhc3QgPSAoKSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgb3BlblBvZGNhc3Q6IG51bGwsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgY2hhbm5lbCwgYXVkaW9fY2xpcHMsIGNoYW5uZWxzLCBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzXHJcbiAgICAgICAgY29uc3QgeyBvcGVuUG9kY2FzdCB9ID0gdGhpcy5zdGF0ZVxyXG5cclxuICAgICAgICBpZiAoc3RhdHVzQ29kZSAhPT0gMjAwICkge1xyXG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9eyBzdGF0dXNDb2RlIH0vPlxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPiBcclxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+eyBgJHtjaGFubmVsLnRpdGxlfSB8IENoYW5uZWxgIH08L3RpdGxlPiBcclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+eyBjaGFubmVsLnRpdGxlIH08L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxoMT57IGNoYW5uZWwudGl0bGUgfTwvaDE+XHJcblxyXG4gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFubmVyXCIgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2hhbm5lbC51cmxzLmJhbm5lcl9pbWFnZS5vcmlnaW5hbH0pYCB9fSAvPlxyXG4gICAgICAgICAgICAgICAgeyBvcGVuUG9kY2FzdCAmJiA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb2RjYXN0UGxheWVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpcD17IG9wZW5Qb2RjYXN0IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9IHt0aGlzLmNsb3NlUG9kY2FzdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgey8qIDxMYXlvdXQgdGl0bGU9eyBgJHtjaGFubmVsLnRpdGxlfSB8IENoYW5uZWxgIH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxHcmlkIGNoYW5uZWxzPXsgYXVkaW9fY2xpcHMgfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MYXlvdXQ+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIHsgYXVkaW9fY2xpcHMubWFwKCAoY2xpcCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPSdwb2RjYXN0JyBwYXJhbXM9e3sgc2x1Z0NoYW5uZWw6IHNsdWcoY2hhbm5lbC50aXRsZSksIGlkQ2hhbm5lbDogY2hhbm5lbC5pZCwgc2x1Zzogc2x1ZyhjbGlwLnRpdGxlKSwgaWQ6IGNsaXAuaWQgfX0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj4geyBjbGlwLnRpdGxlIH0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKSkgfSAqL31cclxuICAgICAgICAgICAgICAgIHsgY2hhbm5lbHMubGVuZ3RoID4gMCAmJiBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPiB7YCR7IGNoYW5uZWwudGl0bGUgfSA+IFNlcmllcyBgfSA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxHcmlkIGNoYW5uZWxzPXsgY2hhbm5lbHMgfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAvLyA8TGluayByb3V0ZT0nY2hhbm5lbCcgcGFyYW1zPXt7IHNsdWc6IHNsdWcoY2hhbm5lbC50aXRsZSksIGlkOiBjaGFubmVsLmlkIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPGEgY2xhc3NOYW1lPVwiY2hhbm5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGltZyBzcmM9eyBjaGFubmVsLnVybHMubG9nb19pbWFnZS5vcmlnaW5hbCB9IGFsdD1cImNvdmVyXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgPGgyPiB7IGNoYW5uZWwudGl0bGUgfSA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gPC9MaW5rPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDxoMj7Dmmx0aW1vcyBQb2RjYXN0czwvaDI+XHJcbiAgICAgICAgICAgICAgICA8UG9kY2FzdExpc3RXaXRoQ2xpY2sgXHJcbiAgICAgICAgICAgICAgICAgICAgcG9kY2FzdHM9eyBhdWRpb19jbGlwcyB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja1BvZGNhc3Q9eyB0aGlzLm9wZW5Qb2RjYXN0IH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTVFNkMxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuYmFubmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyaWQtZ2FwOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5jaGFubmVsIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjE1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICApXHJcbiAgICB9XHJcbn0iXX0= */\n/*@ sourceURL=pages\\channel.js */"
      }), __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
        styleId: "2076439261",
        css: "body{margin:0;background:white;font-family:system-ui;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjaGFubmVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlKbUMsQUFHa0MsU0FDUSxpQkFDSyxzQkFDMUIiLCJmaWxlIjoicGFnZXNcXGNoYW5uZWwuanMiLCJzb3VyY2VSb290IjoiQzpcXFVzZXJzXFxMdWlzIENhcmJham9cXGRlc2t0b3BcXFBST1lFQ1RPU19QTFxcY3Vyc29zXFxuZXh0anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnLi4vcm91dGVzJztcclxuaW1wb3J0IEVycm9yIGZyb20gJy4vX2Vycm9yJztcclxuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJztcclxuaW1wb3J0IENoYW5uZWxHcmlkIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL2NoYW5uZWwtZ3JpZCc7XHJcbmltcG9ydCBQb2RjYXN0TGlzdFdpdGhDbGljayBmcm9tICcuLi9zcmMvY29tcG9uZW50cy9Qb2RjYXN0TGlzdFdpdGhDbGljayc7XHJcbmltcG9ydCBQb2RjYXN0UGxheWVyIGZyb20gJy4uL3NyYy9jb21wb25lbnRzL3BvZGNhc3QtcGxheWVyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IG9wZW5Qb2RjYXN0OiBudWxsIH1cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnksIHJlcyB9KSB7XHJcbiAgICAgICAgY29uc3QgaWRDaGFubmVsID0gcXVlcnkuaWQ7XHJcbiAgICAgICAgdHJ5IHsgXHJcbiAgICAgICAgICAgIGNvbnN0IFsgcmVxdWVzdENoYW5uZWwgLCByZXF1ZXN0Q2hpbGQsIHJlcXVlc3RBdWRpbyBdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgZmV0Y2ggKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2NoYW5uZWxzLyR7IGlkQ2hhbm5lbCB9YCksXHJcbiAgICAgICAgICAgICAgICBmZXRjaCAoYGh0dHBzOi8vYXBpLmF1ZGlvYm9vbS5jb20vY2hhbm5lbHMvJHsgaWRDaGFubmVsIH0vY2hpbGRfY2hhbm5lbHNgKSxcclxuICAgICAgICAgICAgICAgIGZldGNoIChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8keyBpZENoYW5uZWwgfS9hdWRpb19jbGlwc2ApXHJcbiAgICAgICAgICAgIF0pXHJcblxyXG4gICAgICAgICAgICBpZiAocmVxdWVzdENoYW5uZWwuc3RhdHVzID49IDQwMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzLnN0YXR1c0NvZGUgPSByZXF1ZXN0Q2hhbm5lbC5zdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyBjaGFubmVsOiBudWxsICwgYXVkaW9fY2xpcHM6IG51bGwsIGNoYW5uZWxzOiBudWxsLCBzdGF0dXNDb2RlOiAgcmVxdWVzdENoYW5uZWwuc3RhdHVzfTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBib2R5IDogeyBjaGFubmVsIH0gfSA9IGF3YWl0IHJlcXVlc3RDaGFubmVsLmpzb24oKTsgXHJcbiAgICAgICAgICAgIGNvbnN0IHsgYm9keSA6IHsgYXVkaW9fY2xpcHMgfSB9ID0gYXdhaXQgcmVxdWVzdEF1ZGlvLmpzb24oKTtcclxuICAgICAgICAgICAgY29uc3QgeyBib2R5IDogeyBjaGFubmVscyB9IH0gPSBhd2FpdCByZXF1ZXN0Q2hpbGQuanNvbigpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgY2hhbm5lbCAsIGF1ZGlvX2NsaXBzLCBjaGFubmVscywgc3RhdHVzQ29kZTogMjAwIH07XHJcbiAgICAgICAgfSBjYXRjaChlKSB7XHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAzO1xyXG4gICAgICAgICAgICByZXR1cm4geyBjaGFubmVsOiBudWxsICwgYXVkaW9fY2xpcHM6IG51bGwsIGNoYW5uZWxzOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb3BlblBvZGNhc3QgPSAoZXZlbnQsIGluZm9Qb2RjYXN0KSA9PiB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgb3BlblBvZGNhc3Q6IGluZm9Qb2RjYXN0LFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VQb2RjYXN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBudWxsLFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG5cclxuICAgICAgICBjb25zdCB7IGNoYW5uZWwsIGF1ZGlvX2NsaXBzLCBjaGFubmVscywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wc1xyXG4gICAgICAgIGNvbnN0IHsgb3BlblBvZGNhc3QgfSA9IHRoaXMuc3RhdGVcclxuXHJcbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCApIHtcclxuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXsgc3RhdHVzQ29kZSB9Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8SGVhZD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPnsgYCR7Y2hhbm5lbC50aXRsZX0gfCBDaGFubmVsYCB9PC90aXRsZT4gXHJcbiAgICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyPnsgY2hhbm5lbC50aXRsZSB9PC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8aDE+eyBjaGFubmVsLnRpdGxlIH08L2gxPlxyXG5cclxuICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhbm5lclwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2NoYW5uZWwudXJscy5iYW5uZXJfaW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cclxuICAgICAgICAgICAgICAgIHsgb3BlblBvZGNhc3QgJiYgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9kY2FzdFBsYXllciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXA9eyBvcGVuUG9kY2FzdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsb3NlPSB7dGhpcy5jbG9zZVBvZGNhc3QgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pn1cclxuICAgICAgICAgICAgICAgIHsvKiA8TGF5b3V0IHRpdGxlPXsgYCR7Y2hhbm5lbC50aXRsZX0gfCBDaGFubmVsYCB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDaGFubmVsR3JpZCBjaGFubmVscz17IGF1ZGlvX2NsaXBzIH0gLz5cclxuICAgICAgICAgICAgICAgIDwvTGF5b3V0PiAqL31cclxuICAgICAgICAgICAgICAgIHsvKiB7IGF1ZGlvX2NsaXBzLm1hcCggKGNsaXApID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT0ncG9kY2FzdCcgcGFyYW1zPXt7IHNsdWdDaGFubmVsOiBzbHVnKGNoYW5uZWwudGl0bGUpLCBpZENoYW5uZWw6IGNoYW5uZWwuaWQsIHNsdWc6IHNsdWcoY2xpcC50aXRsZSksIGlkOiBjbGlwLmlkIH19ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+IHsgY2xpcC50aXRsZSB9IDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICkpIH0gKi99XHJcbiAgICAgICAgICAgICAgICB7IGNoYW5uZWxzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj4ge2AkeyBjaGFubmVsLnRpdGxlIH0gPiBTZXJpZXMgYH0gPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsR3JpZCBjaGFubmVscz17IGNoYW5uZWxzIH0gLz5cclxuICAgICAgICAgICAgICAgICAgICB7LyogLy8gPExpbmsgcm91dGU9J2NoYW5uZWwnIHBhcmFtcz17eyBzbHVnOiBzbHVnKGNoYW5uZWwudGl0bGUpLCBpZDogY2hhbm5lbC5pZCB9fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIDxhIGNsYXNzTmFtZT1cImNoYW5uZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxpbWcgc3JjPXsgY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWwgfSBhbHQ9XCJjb3ZlclwiLz5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIDxoMj4geyBjaGFubmVsLnRpdGxlIH0gPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8aDI+w5psdGltb3MgUG9kY2FzdHM8L2gyPlxyXG4gICAgICAgICAgICAgICAgPFBvZGNhc3RMaXN0V2l0aENsaWNrIFxyXG4gICAgICAgICAgICAgICAgICAgIHBvZGNhc3RzPXsgYXVkaW9fY2xpcHMgfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tQb2RjYXN0PXsgdGhpcy5vcGVuUG9kY2FzdCB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzU1RTZDMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLmJhbm5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMTYwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuY2hhbm5lbCBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59Il19 */\n/*@ sourceURL=pages\\channel.js */"
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
//# sourceMappingURL=4.d3d951c48f3b9bd785c6.hot-update.js.map