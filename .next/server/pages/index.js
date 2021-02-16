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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
<<<<<<< HEAD
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/pages.module.scss */ \"./src/styles/pages.module.scss\");\n/* harmony import */ var _styles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/home/dan/projects/gr8hub/gr8hub-landing/src/pages/index.js\";\n\nfunction LandingPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_pages_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a[\"page-container\"],\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"Home Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tristique ipsum, quis luctus ipsum laoreet in. Nam tincidunt semper libero, sed consequat quam gravida ut. Aliquam fermentum, ipsum ut fermentum bibendum, ex tellus hendrerit magna, sit amet posuere erat velit et leo. Donec id suscipit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rutrum venenatis nunc elementum condimentum. Aenean malesuada fringilla urna vel euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque convallis risus eu tortor porta egestas. Aenean dictum massa ligula, at elementum nisi cursus eget. Aliquam erat volutpat.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Nam vel feugiat orci. Nam rhoncus tristique nisl, sed sagittis justo. Maecenas fermentum massa vel elementum accumsan. Sed dignissim et eros vitae volutpat. Quisque maximus odio sagittis tempor porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique sem nisl, eget cursus tortor eleifend et. Praesent ut nisl eget purus cursus efficitur vitae et augue. Proin et odio nec turpis malesuada placerat at pulvinar odio. Duis pulvinar metus ut rutrum eleifend.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tristique ipsum, quis luctus ipsum laoreet in. Nam tincidunt semper libero, sed consequat quam gravida ut. Aliquam fermentum, ipsum ut fermentum bibendum, ex tellus hendrerit magna, sit amet posuere erat velit et leo. Donec id suscipit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rutrum venenatis nunc elementum condimentum. Aenean malesuada fringilla urna vel euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque convallis risus eu tortor porta egestas. Aenean dictum massa ligula, at elementum nisi cursus eget. Aliquam erat volutpat.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Nam vel feugiat orci. Nam rhoncus tristique nisl, sed sagittis justo. Maecenas fermentum massa vel elementum accumsan. Sed dignissim et eros vitae volutpat. Quisque maximus odio sagittis tempor porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique sem nisl, eget cursus tortor eleifend et. Praesent ut nisl eget purus cursus efficitur vitae et augue. Proin et odio nec turpis malesuada placerat at pulvinar odio. Duis pulvinar metus ut rutrum eleifend.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus tristique ipsum, quis luctus ipsum laoreet in. Nam tincidunt semper libero, sed consequat quam gravida ut. Aliquam fermentum, ipsum ut fermentum bibendum, ex tellus hendrerit magna, sit amet posuere erat velit et leo. Donec id suscipit orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque rutrum venenatis nunc elementum condimentum. Aenean malesuada fringilla urna vel euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque convallis risus eu tortor porta egestas. Aenean dictum massa ligula, at elementum nisi cursus eget. Aliquam erat volutpat.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"Nam vel feugiat orci. Nam rhoncus tristique nisl, sed sagittis justo. Maecenas fermentum massa vel elementum accumsan. Sed dignissim et eros vitae volutpat. Quisque maximus odio sagittis tempor porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique sem nisl, eget cursus tortor eleifend et. Praesent ut nisl eget purus cursus efficitur vitae et augue. Proin et odio nec turpis malesuada placerat at pulvinar odio. Duis pulvinar metus ut rutrum eleifend.\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJMYW5kaW5nUGFnZSIsInN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBR2UsU0FBU0EsV0FBVCxHQUF1QjtBQUNwQyxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsZ0VBQUssQ0FBQyxnQkFBRCxDQUFyQjtBQUFBLDJCQUNJO0FBQUEsOEJBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEQSxlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFTRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVRGLGVBZUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmQSxlQXNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXRCQSxlQTRCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCQSxlQW1DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQW5DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGUgZnJvbSAnLi4vc3R5bGVzL3BhZ2VzLm1vZHVsZS5zY3NzJ1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExhbmRpbmdQYWdlKCkge1xuICByZXR1cm4gKCBcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVbXCJwYWdlLWNvbnRhaW5lclwiXX0+IFxuICAgICAgICA8ZGl2PlxuICAgICAgICA8aDE+SG9tZSBQYWdlPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBjdXJzdXMgdHJpc3RpcXVlIGlwc3VtLCBxdWlzIGx1Y3R1cyBpcHN1bSBsYW9yZWV0IGluLiBOYW0gdGluY2lkdW50IHNlbXBlciBsaWJlcm8sIFxuICAgICAgICAgICAgc2VkIGNvbnNlcXVhdCBxdWFtIGdyYXZpZGEgdXQuIEFsaXF1YW0gZmVybWVudHVtLCBpcHN1bSB1dCBmZXJtZW50dW0gYmliZW5kdW0sIGV4IHRlbGx1cyBoZW5kcmVyaXQgbWFnbmEsIHNpdCBhbWV0IHBvc3VlcmUgZXJhdCB2ZWxpdCBldCBsZW8uIERvbmVjIGlkIHN1c2NpcGl0IG9yY2kuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIFxuICAgICAgICAgICAgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gUXVpc3F1ZSBydXRydW0gdmVuZW5hdGlzIG51bmMgZWxlbWVudHVtIGNvbmRpbWVudHVtLiBBZW5lYW4gbWFsZXN1YWRhIGZyaW5naWxsYSB1cm5hIHZlbCBldWlzbW9kLiBcbiAgICAgICAgICAgIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUXVpc3F1ZSBjb252YWxsaXMgcmlzdXMgZXUgdG9ydG9yIHBvcnRhIGVnZXN0YXMuIEFlbmVhbiBkaWN0dW0gbWFzc2EgbGlndWxhLCBcbiAgICAgICAgICAgIGF0IGVsZW1lbnR1bSBuaXNpIGN1cnN1cyBlZ2V0LiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTmFtIHZlbCBmZXVnaWF0IG9yY2kuIE5hbSByaG9uY3VzIHRyaXN0aXF1ZSBuaXNsLCBzZWQgc2FnaXR0aXMganVzdG8uIFxuICAgICAgICAgICAgTWFlY2VuYXMgZmVybWVudHVtIG1hc3NhIHZlbCBlbGVtZW50dW0gYWNjdW1zYW4uIFNlZCBkaWduaXNzaW0gZXQgZXJvcyB2aXRhZSB2b2x1dHBhdC4gUXVpc3F1ZSBtYXhpbXVzIG9kaW8gc2FnaXR0aXMgdGVtcG9yIHBvcnRhLiBcbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIHRyaXN0aXF1ZSBzZW0gbmlzbCwgZWdldCBjdXJzdXMgdG9ydG9yIGVsZWlmZW5kIGV0LiBcbiAgICAgICAgICAgIFByYWVzZW50IHV0IG5pc2wgZWdldCBwdXJ1cyBjdXJzdXMgZWZmaWNpdHVyIHZpdGFlIGV0IGF1Z3VlLiBQcm9pbiBldCBvZGlvIG5lYyB0dXJwaXMgbWFsZXN1YWRhIHBsYWNlcmF0IGF0IHB1bHZpbmFyIG9kaW8uIER1aXMgcHVsdmluYXIgbWV0dXMgdXQgcnV0cnVtIGVsZWlmZW5kLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gU2VkIGN1cnN1cyB0cmlzdGlxdWUgaXBzdW0sIHF1aXMgbHVjdHVzIGlwc3VtIGxhb3JlZXQgaW4uIE5hbSB0aW5jaWR1bnQgc2VtcGVyIGxpYmVybywgXG4gICAgICAgICAgc2VkIGNvbnNlcXVhdCBxdWFtIGdyYXZpZGEgdXQuIEFsaXF1YW0gZmVybWVudHVtLCBpcHN1bSB1dCBmZXJtZW50dW0gYmliZW5kdW0sIGV4IHRlbGx1cyBoZW5kcmVyaXQgbWFnbmEsIHNpdCBhbWV0IHBvc3VlcmUgZXJhdCB2ZWxpdCBldCBsZW8uIERvbmVjIGlkIHN1c2NpcGl0IG9yY2kuIE9yY2kgdmFyaXVzIG5hdG9xdWUgcGVuYXRpYnVzIGV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMsIFxuICAgICAgICAgIG5hc2NldHVyIHJpZGljdWx1cyBtdXMuIFF1aXNxdWUgcnV0cnVtIHZlbmVuYXRpcyBudW5jIGVsZW1lbnR1bSBjb25kaW1lbnR1bS4gQWVuZWFuIG1hbGVzdWFkYSBmcmluZ2lsbGEgdXJuYSB2ZWwgZXVpc21vZC4gXG4gICAgICAgICAgSW50ZXJkdW0gZXQgbWFsZXN1YWRhIGZhbWVzIGFjIGFudGUgaXBzdW0gcHJpbWlzIGluIGZhdWNpYnVzLiBRdWlzcXVlIGNvbnZhbGxpcyByaXN1cyBldSB0b3J0b3IgcG9ydGEgZWdlc3Rhcy4gQWVuZWFuIGRpY3R1bSBtYXNzYSBsaWd1bGEsIFxuICAgICAgICAgIGF0IGVsZW1lbnR1bSBuaXNpIGN1cnN1cyBlZ2V0LiBBbGlxdWFtIGVyYXQgdm9sdXRwYXQuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgTmFtIHZlbCBmZXVnaWF0IG9yY2kuIE5hbSByaG9uY3VzIHRyaXN0aXF1ZSBuaXNsLCBzZWQgc2FnaXR0aXMganVzdG8uIFxuICAgICAgICAgIE1hZWNlbmFzIGZlcm1lbnR1bSBtYXNzYSB2ZWwgZWxlbWVudHVtIGFjY3Vtc2FuLiBTZWQgZGlnbmlzc2ltIGV0IGVyb3Mgdml0YWUgdm9sdXRwYXQuIFF1aXNxdWUgbWF4aW11cyBvZGlvIHNhZ2l0dGlzIHRlbXBvciBwb3J0YS4gXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTnVsbGEgdHJpc3RpcXVlIHNlbSBuaXNsLCBlZ2V0IGN1cnN1cyB0b3J0b3IgZWxlaWZlbmQgZXQuIFxuICAgICAgICAgIFByYWVzZW50IHV0IG5pc2wgZWdldCBwdXJ1cyBjdXJzdXMgZWZmaWNpdHVyIHZpdGFlIGV0IGF1Z3VlLiBQcm9pbiBldCBvZGlvIG5lYyB0dXJwaXMgbWFsZXN1YWRhIHBsYWNlcmF0IGF0IHB1bHZpbmFyIG9kaW8uIER1aXMgcHVsdmluYXIgbWV0dXMgdXQgcnV0cnVtIGVsZWlmZW5kLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBjdXJzdXMgdHJpc3RpcXVlIGlwc3VtLCBxdWlzIGx1Y3R1cyBpcHN1bSBsYW9yZWV0IGluLiBOYW0gdGluY2lkdW50IHNlbXBlciBsaWJlcm8sIFxuICAgICAgICAgIHNlZCBjb25zZXF1YXQgcXVhbSBncmF2aWRhIHV0LiBBbGlxdWFtIGZlcm1lbnR1bSwgaXBzdW0gdXQgZmVybWVudHVtIGJpYmVuZHVtLCBleCB0ZWxsdXMgaGVuZHJlcml0IG1hZ25hLCBzaXQgYW1ldCBwb3N1ZXJlIGVyYXQgdmVsaXQgZXQgbGVvLiBEb25lYyBpZCBzdXNjaXBpdCBvcmNpLiBPcmNpIHZhcml1cyBuYXRvcXVlIHBlbmF0aWJ1cyBldCBtYWduaXMgZGlzIHBhcnR1cmllbnQgbW9udGVzLCBcbiAgICAgICAgICBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBRdWlzcXVlIHJ1dHJ1bSB2ZW5lbmF0aXMgbnVuYyBlbGVtZW50dW0gY29uZGltZW50dW0uIEFlbmVhbiBtYWxlc3VhZGEgZnJpbmdpbGxhIHVybmEgdmVsIGV1aXNtb2QuIFxuICAgICAgICAgIEludGVyZHVtIGV0IG1hbGVzdWFkYSBmYW1lcyBhYyBhbnRlIGlwc3VtIHByaW1pcyBpbiBmYXVjaWJ1cy4gUXVpc3F1ZSBjb252YWxsaXMgcmlzdXMgZXUgdG9ydG9yIHBvcnRhIGVnZXN0YXMuIEFlbmVhbiBkaWN0dW0gbWFzc2EgbGlndWxhLCBcbiAgICAgICAgICBhdCBlbGVtZW50dW0gbmlzaSBjdXJzdXMgZWdldC4gQWxpcXVhbSBlcmF0IHZvbHV0cGF0LlxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE5hbSB2ZWwgZmV1Z2lhdCBvcmNpLiBOYW0gcmhvbmN1cyB0cmlzdGlxdWUgbmlzbCwgc2VkIHNhZ2l0dGlzIGp1c3RvLiBcbiAgICAgICAgICBNYWVjZW5hcyBmZXJtZW50dW0gbWFzc2EgdmVsIGVsZW1lbnR1bSBhY2N1bXNhbi4gU2VkIGRpZ25pc3NpbSBldCBlcm9zIHZpdGFlIHZvbHV0cGF0LiBRdWlzcXVlIG1heGltdXMgb2RpbyBzYWdpdHRpcyB0ZW1wb3IgcG9ydGEuIFxuICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE51bGxhIHRyaXN0aXF1ZSBzZW0gbmlzbCwgZWdldCBjdXJzdXMgdG9ydG9yIGVsZWlmZW5kIGV0LiBcbiAgICAgICAgICBQcmFlc2VudCB1dCBuaXNsIGVnZXQgcHVydXMgY3Vyc3VzIGVmZmljaXR1ciB2aXRhZSBldCBhdWd1ZS4gUHJvaW4gZXQgb2RpbyBuZWMgdHVycGlzIG1hbGVzdWFkYSBwbGFjZXJhdCBhdCBwdWx2aW5hciBvZGlvLiBEdWlzIHB1bHZpbmFyIG1ldHVzIHV0IHJ1dHJ1bSBlbGVpZmVuZC5cbiAgICAgICAgPC9wPlxuICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgKVxufVxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");
=======
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return LandingPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/Tim/Code/gr8hub/GitHub_next/src/pages/index.js\";\n\nfunction LandingPage() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Home Page\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n      bg: \"tomato\",\n      w: \"100%\",\n      p: 4,\n      color: \"white\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"this is text\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 4\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__[\"Center\"], {\n      bg: \"brand.grey\",\n      m: \"10\",\n      w: \"100%\",\n      p: 4,\n      color: \"white\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: \"put text in the middle\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 5\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 4\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 3\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJMYW5kaW5nUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUVlLFNBQVNBLFdBQVQsR0FBdUI7QUFDckMsc0JBQ0M7QUFBQSw0QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURELGVBRUMscUVBQUMsb0RBQUQ7QUFBSyxRQUFFLEVBQUMsUUFBUjtBQUFpQixPQUFDLEVBQUMsTUFBbkI7QUFBMEIsT0FBQyxFQUFFLENBQTdCO0FBQWdDLFdBQUssRUFBQyxPQUF0QztBQUFBLDZCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZELGVBTUMscUVBQUMsdURBQUQ7QUFBUSxRQUFFLEVBQUMsWUFBWDtBQUF3QixPQUFDLEVBQUMsSUFBMUI7QUFBK0IsT0FBQyxFQUFDLE1BQWpDO0FBQXdDLE9BQUMsRUFBRSxDQUEzQztBQUE4QyxXQUFLLEVBQUMsT0FBcEQ7QUFBQSw2QkFDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUREO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERDtBQVlBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDZW50ZXIsIFNxdWFyZSwgQ2lyY2xlIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGFuZGluZ1BhZ2UoKSB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxoMT5Ib21lIFBhZ2U8L2gxPlxuXHRcdFx0PEJveCBiZz1cInRvbWF0b1wiIHc9XCIxMDAlXCIgcD17NH0gY29sb3I9XCJ3aGl0ZVwiPlxuXHRcdFx0XHQ8cD50aGlzIGlzIHRleHQ8L3A+XG5cdFx0XHQ8L0JveD5cblxuXHRcdFx0PENlbnRlciBiZz1cImJyYW5kLmdyZXlcIiBtPVwiMTBcIiB3PVwiMTAwJVwiIHA9ezR9IGNvbG9yPVwid2hpdGVcIj5cblx0XHRcdFx0PHA+cHV0IHRleHQgaW4gdGhlIG1pZGRsZTwvcD5cblx0XHRcdDwvQ2VudGVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");
>>>>>>> 1d589db57723587013da6cec983c8a72f19fffec

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