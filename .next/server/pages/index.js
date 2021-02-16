module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Hero/hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/hero.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _panel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel */ \"./src/components/Hero/panel.jsx\");\n\nvar _jsxFileName = \"/home/dan/projects/gr8hub/gr8hub-landing/src/components/Hero/hero.js\";\n\n\n\nfunction Hero() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Wrap\"], {\n    w: \"clamp(300px, calc(100vw - 20px), 1000px)\",\n    m: \"1\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_panel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n        m: \"20px\",\n        as: \"kbd\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n          src: \"https://gr8hub.com/wp-content/uploads/2020/10/cropped-Logo.png\",\n          alt: \"gr8hub\",\n          mb: 8,\n          width: \"250px\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          fontSize: \"3xl\",\n          mb: -1,\n          children: \"Lern von Menschen,\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          fontSize: \"2xl\",\n          mb: 6,\n          children: \"nicht nur von ihren Videos.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 13,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Text\"], {\n          fontSize: \"sm\",\n          mb: 6,\n          as: \"kbd\",\n          children: [\"Wir machen Weiterbildung und Beratung einfach,\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 61\n          }, this), \"kosteng\\xFCnstig sowie jederzeit und \\xFCberall m\\xF6glich.\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n          size: \"lg\",\n          colorScheme: \"purple\",\n          mt: \"40px\",\n          children: \"Kostenlos Platz sichern\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 13\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 11\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_panel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Image\"], {\n        src: \"https://gr8hub.com/wp-content/uploads/2021/02/Feature-Mockup.png\",\n        alt: \"mobile\",\n        mb: 8\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 7\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvL2hlcm8uanM/NzFhNyJdLCJuYW1lcyI6WyJIZXJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsSUFBVCxHQUFnQjtBQUNaLHNCQUNFLHFFQUFDLHFEQUFEO0FBQU0sS0FBQyxFQUFDLDBDQUFSO0FBQW1ELEtBQUMsRUFBQyxHQUFyRDtBQUFBLDRCQUNFLHFFQUFDLDhDQUFEO0FBQUEsNkJBQ0UscUVBQUMsb0RBQUQ7QUFBSyxTQUFDLEVBQUMsTUFBUDtBQUFjLFVBQUUsRUFBQyxLQUFqQjtBQUFBLGdDQUNFLHFFQUFDLHNEQUFEO0FBQU8sYUFBRyxFQUFDLGdFQUFYO0FBQTRFLGFBQUcsRUFBQyxRQUFoRjtBQUF5RixZQUFFLEVBQUUsQ0FBN0Y7QUFBZ0csZUFBSyxFQUFDO0FBQXRHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSxxRUFBQyxxREFBRDtBQUFNLGtCQUFRLEVBQUMsS0FBZjtBQUFxQixZQUFFLEVBQUUsQ0FBQyxDQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUtFLHFFQUFDLHFEQUFEO0FBQU8sa0JBQVEsRUFBQyxLQUFoQjtBQUFzQixZQUFFLEVBQUUsQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEYsZUFRRSxxRUFBQyxxREFBRDtBQUFNLGtCQUFRLEVBQUMsSUFBZjtBQUFvQixZQUFFLEVBQUUsQ0FBeEI7QUFBMkIsWUFBRSxFQUFDLEtBQTlCO0FBQUEsb0ZBQ2dEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRGhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRixlQVlFLHFFQUFDLHVEQUFEO0FBQVEsY0FBSSxFQUFDLElBQWI7QUFBa0IscUJBQVcsRUFBQyxRQUE5QjtBQUF1QyxZQUFFLEVBQUMsTUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBbUJFLHFFQUFDLDhDQUFEO0FBQUEsNkJBQ0EscUVBQUMsc0RBQUQ7QUFBTyxXQUFHLEVBQUMsa0VBQVg7QUFBOEUsV0FBRyxFQUFDLFFBQWxGO0FBQTJGLFVBQUUsRUFBRTtBQUEvRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5CRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCSDs7QUFFY0EsbUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZXJvL2hlcm8uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXcmFwLCBUZXh0LCBCb3ggLCBIZWFkaW5nLCBCdXR0b24sIEltYWdlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBQYW5lbCBmcm9tICcuL3BhbmVsJ1xuXG5mdW5jdGlvbiBIZXJvKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8V3JhcCB3PVwiY2xhbXAoMzAwcHgsIGNhbGMoMTAwdncgLSAyMHB4KSwgMTAwMHB4KVwiIG09XCIxXCI+XG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgICA8Qm94IG09XCIyMHB4XCIgYXM9XCJrYmRcIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCJodHRwczovL2dyOGh1Yi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMTAvY3JvcHBlZC1Mb2dvLnBuZ1wiIGFsdD1cImdyOGh1YlwiIG1iPXs4fSB3aWR0aD1cIjI1MHB4XCIvPlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCIzeGxcIiBtYj17LTF9PlxuICAgICAgICAgICAgICBMZXJuIHZvbiBNZW5zY2hlbiwgXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8VGV4dCAgZm9udFNpemU9XCIyeGxcIiBtYj17Nn0+XG4gICAgICAgICAgICAgIG5pY2h0IG51ciB2b24gaWhyZW4gVmlkZW9zLlxuICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiIG1iPXs2fSBhcz1cImtiZFwiPlxuICAgICAgICAgICAgICBXaXIgbWFjaGVuIFdlaXRlcmJpbGR1bmcgdW5kIEJlcmF0dW5nIGVpbmZhY2gsPGJyIC8+XG4gICAgICAgICAgICAgIGtvc3RlbmfDvG5zdGlnIHNvd2llIGplZGVyemVpdCB1bmQgw7xiZXJhbGwgbcO2Z2xpY2guXG4gICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJsZ1wiIGNvbG9yU2NoZW1lPVwicHVycGxlXCIgbXQ9XCI0MHB4XCIgPlxuICAgICAgICAgICAgICBLb3N0ZW5sb3MgUGxhdHogc2ljaGVyblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvUGFuZWw+XG4gICAgICAgIDxQYW5lbD5cbiAgICAgICAgPEltYWdlIHNyYz1cImh0dHBzOi8vZ3I4aHViLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wMi9GZWF0dXJlLU1vY2t1cC5wbmdcIiBhbHQ9XCJtb2JpbGVcIiBtYj17OH0vPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L1BhbmVsPlxuICAgICAgPC9XcmFwPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVyb1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Hero/hero.js\n");

/***/ }),

/***/ "./src/components/Hero/index.js":
/*!**************************************!*\
  !*** ./src/components/Hero/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hero */ \"./src/components/Hero/hero.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_hero__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvL2luZGV4LmpzPzA0MGYiXSwibmFtZXMiOlsiSGVybyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ2VBLDRHQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvSGVyby9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvIGZyb20gJy4vaGVybydcbmV4cG9ydCBkZWZhdWx0IEhlcm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Hero/index.js\n");

/***/ }),

/***/ "./src/components/Hero/panel.jsx":
/*!***************************************!*\
  !*** ./src/components/Hero/panel.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Panel; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/dan/projects/gr8hub/gr8hub-landing/src/components/Hero/panel.jsx\";\n\nfunction Panel({\n  children\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"WrapItem\"], {\n    flex: 1,\n    minW: \"300px\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n      w: \"100%\",\n      bg: \"white\",\n      h: \"75vh\",\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZXJvL3BhbmVsLmpzeD82MjcyIl0sIm5hbWVzIjpbIlBhbmVsIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxLQUFULENBQWU7QUFBQ0M7QUFBRCxDQUFmLEVBQTBCO0FBQ3ZDLHNCQUNFLHFFQUFDLHlEQUFEO0FBQVUsUUFBSSxFQUFFLENBQWhCO0FBQW1CLFFBQUksRUFBQyxPQUF4QjtBQUFBLDJCQUNFLHFFQUFDLHVEQUFEO0FBQVEsT0FBQyxFQUFDLE1BQVY7QUFBaUIsUUFBRSxFQUFDLE9BQXBCO0FBQTRCLE9BQUMsRUFBQyxNQUE5QjtBQUFBLGdCQUNHQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFPRCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0hlcm8vcGFuZWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2VudGVyLCBXcmFwSXRlbSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhbmVsKHtjaGlsZHJlbn0pe1xuICByZXR1cm4gKFxuICAgIDxXcmFwSXRlbSBmbGV4PXsxfSBtaW5XPVwiMzAwcHhcIj5cbiAgICAgIDxDZW50ZXIgdz1cIjEwMCVcIiBiZz1cIndoaXRlXCIgaD1cIjc1dmhcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgPC9DZW50ZXI+XG4gICAgPC9XcmFwSXRlbT5cbiAgKVxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Hero/panel.jsx\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero */ \"./src/components/Hero/index.js\");\n\nvar _jsxFileName = \"/home/dan/projects/gr8hub/gr8hub-landing/src/pages/index.js\";\n\n\nfunction LandingPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n    w: \"clamp(300px, calc(100vw - 20px), 1000px)\",\n    m: \"auto\",\n    h: \"calc(100vh - 80px)\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Hero__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJMYW5kaW5nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDcEMsc0JBQ0UscUVBQUMsdURBQUQ7QUFBUSxLQUFDLEVBQUMsMENBQVY7QUFBcUQsS0FBQyxFQUFDLE1BQXZEO0FBQThELEtBQUMsRUFBQyxvQkFBaEU7QUFBQSwyQkFDRSxxRUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZW50ZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEhlcm8gZnJvbSAnLi4vY29tcG9uZW50cy9IZXJvJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYW5kaW5nUGFnZSgpIHtcbiAgcmV0dXJuICggXG4gICAgPENlbnRlciB3PVwiY2xhbXAoMzAwcHgsIGNhbGMoMTAwdncgLSAyMHB4KSwgMTAwMHB4KVwiIG09XCJhdXRvXCIgaD1cImNhbGMoMTAwdmggLSA4MHB4KVwiPlxuICAgICAgPEhlcm8gLz5cbiAgICA8L0NlbnRlcj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@chakra-ui/react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCI/M2I2NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAY2hha3JhLXVpL3JlYWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@chakra-ui/react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });