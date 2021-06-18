/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apps/smoothScroll.js":
/*!**********************************!*\
  !*** ./src/apps/smoothScroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ smoothScroll)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar fakeScroll = {};\nvar container = {};\nvar title = {};\nvar titles = [];\nvar text = {};\nvar texts = [];\nvar pageH = 0;\nvar winH = 0;\n\nvar animation = function animation() {};\n\nvar pageY = 0;\nvar calc = 0;\nvar star1Calc = 0;\nvar star2Calc = 0;\nvar ease = 0.1;\nvar isScroll = false;\nvar starOl1 = {};\nvar starOl2 = {};\nvar parallaxOl = {};\nvar mainVisual = {};\nvar mainVisualImg = {};\nvar mainImgSrc = '';\nvar mainVisualH = 500;\n\nvar smoothScroll = /*#__PURE__*/function () {\n  ///////////////////////////\n  /// constructor\n  ////////////////////////////\n  function smoothScroll() {\n    _classCallCheck(this, smoothScroll);\n\n    this.init();\n  } ///////////////////////////\n  ////////////////////////////\n\n\n  _createClass(smoothScroll, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      fakeScroll = document.querySelector('.ol-fake');\n      container = document.querySelector('.container');\n      title = document.querySelectorAll('.section__title');\n      text = document.querySelectorAll('.text');\n      parallaxOl = document.querySelector('.ol-parallax');\n      pageH = container.clientHeight;\n      pageY = window.scrollY;\n      winH = window.innerHeight;\n      fakeScroll.style.height = pageH + 'px';\n      parallaxOl.style.height = pageH + 'px';\n      container = document.querySelector('.container');\n      mainVisual = document.querySelector('.main-visual__inner');\n      mainVisualImg = document.querySelector('.main-visual__img');\n      var starOl = document.querySelectorAll('.ol-star');\n      starOl1 = starOl[0];\n      starOl2 = starOl[1];\n      starOl1.style.height = pageH * 2 + 'px';\n      starOl2.style.height = pageH + window.innerHeight + 'px';\n      var mainttl = document.querySelector('.main__title-inner');\n      this.loadImg();\n      setTimeout(function () {\n        mainttl.classList.add('isVisible');\n\n        _this.fadeInAnim();\n      }, 300);\n      this.setFadeInObj();\n      this.render();\n      window.addEventListener(\"scroll\", this.onScroll.bind(this));\n      window.addEventListener(\"resize\", this.onResize.bind(this));\n    }\n  }, {\n    key: \"loadImg\",\n    value: function loadImg() {\n      var imgPreloader = new Image();\n\n      imgPreloader.onload = function () {\n        mainVisual.style.backgroundImage = 'url(' + mainImgSrc + ')';\n        mainVisual.classList.add('isVisible');\n        setTimeout(function () {\n          mainVisual.classList.add('isScrollAnim');\n        }, 600);\n      };\n\n      imgPreloader.src = mainVisualImg.src;\n    }\n  }, {\n    key: \"setFadeInObj\",\n    value: function setFadeInObj() {\n      for (var i = 0; i < title.length; i++) {\n        var obj = {\n          'el': title[i],\n          isShow: false\n        };\n        titles[i] = obj;\n      }\n\n      for (var _i = 0; _i < text.length; _i++) {\n        var _obj = {\n          'el': text[_i],\n          isShow: false\n        };\n        texts[_i] = _obj;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      animation = window.requestAnimationFrame(this.render.bind(this));\n      pageY = window.scrollY;\n      calc += (pageY - calc) * ease;\n      calc = ~~(calc * 100) / 100;\n      star1Calc += (pageY / 0.5 - star1Calc) * ease;\n      star2Calc += (pageY / 0.8 - star2Calc) * ease;\n      container.style.transform = 'translateY(' + -calc + 'px)';\n      starOl1.style.transform = 'translateY(' + -star1Calc + 'px)';\n      starOl2.style.transform = 'translateY(' + -star2Calc + 'px)';\n\n      if (pageY <= mainVisualH) {\n        var mainVisualCalc = 100 + Number(pageY / 30);\n        mainVisualImg.style.width = mainVisualCalc + '%';\n      }\n\n      if (isScroll) {}\n    }\n  }, {\n    key: \"onScroll\",\n    value: function onScroll() {\n      var _this2 = this;\n\n      if (isScroll) return;\n      isScroll = true;\n      setTimeout(function () {\n        _this2.fadeInAnim();\n      }, 60);\n    }\n  }, {\n    key: \"onResize\",\n    value: function onResize() {\n      setTimeout(function () {\n        winH = window.innerHeight;\n      }, 100);\n    }\n  }, {\n    key: \"fadeInAnim\",\n    value: function fadeInAnim() {\n      //要素がまだ表示されていなければフェードインアニメーションさせる\n      for (var key in titles) {\n        if (!titles[key].isShow) {\n          var y = Math.floor(titles[key].el.getBoundingClientRect().top);\n\n          if (y < winH) {\n            var titleBG = titles[key].el.children;\n\n            for (var i = 0; i < titleBG.length; i++) {\n              var el = titleBG[i];\n              el.firstElementChild.classList.add('isVisible');\n              el.lastElementChild.classList.add('isVisible');\n            }\n          }\n        }\n      }\n\n      for (var _key in texts) {\n        if (!texts[_key].isShow) {\n          var _y = Math.floor(texts[_key].el.getBoundingClientRect().top);\n\n          if (_y < winH) {\n            texts[_key].el.classList.add('isVisible');\n\n            console.log(texts[_key].el);\n          }\n        }\n      }\n\n      isScroll = false;\n    }\n  }]);\n\n  return smoothScroll;\n}();\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/apps/smoothScroll.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apps_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apps/smoothScroll.js */ \"./src/apps/smoothScroll.js\");\n/* harmony import */ var _scss_reset_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/reset.scss */ \"./scss/reset.scss\");\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/style.scss */ \"./scss/style.scss\");\n\n\n\n\nwindow.onload = function () {\n  new _apps_smoothScroll_js__WEBPACK_IMPORTED_MODULE_0__.default();\n};\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./scss/reset.scss":
/*!*************************!*\
  !*** ./scss/reset.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./scss/reset.scss?");

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./scss/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;