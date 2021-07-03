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

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _cliente_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente.js */ \"./assets/js/cliente.js\");\n/* harmony import */ var _impuestos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./impuestos.js */ \"./assets/js/impuestos.js\");\n\n\nvar impuesto = new _impuestos_js__WEBPACK_IMPORTED_MODULE_1__.Impuestos(500, 20);\nvar claudio = new _cliente_js__WEBPACK_IMPORTED_MODULE_0__.Cliente(\"claudio\", impuesto);\nclaudio.calcularImpuesto();\n\n//# sourceURL=webpack://desafioclaseses6/./assets/js/app.js?");

/***/ }),

/***/ "./assets/js/cliente.js":
/*!******************************!*\
  !*** ./assets/js/cliente.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Cliente\": () => (/* binding */ Cliente)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Cliente = /*#__PURE__*/function () {\n  function Cliente(nombre, impuesto) {\n    _classCallCheck(this, Cliente);\n\n    this.nombre = nombre;\n    this.impuesto = impuesto;\n  }\n\n  _createClass(Cliente, [{\n    key: \"calcularImpuesto\",\n    value: function calcularImpuesto() {\n      var resultado = (this.impuesto.monto_bruto_anual - this.impuesto.deducciones) * 0.21;\n      console.log(resultado);\n    }\n  }]);\n\n  return Cliente;\n}();\n\n//# sourceURL=webpack://desafioclaseses6/./assets/js/cliente.js?");

/***/ }),

/***/ "./assets/js/impuestos.js":
/*!********************************!*\
  !*** ./assets/js/impuestos.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Impuestos\": () => (/* binding */ Impuestos)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Impuestos = /*#__PURE__*/function () {\n  function Impuestos(monto_bruto_anual, deducciones) {\n    _classCallCheck(this, Impuestos);\n\n    this.monto_bruto_anual = monto_bruto_anual;\n    this.deducciones = deducciones;\n  }\n\n  _createClass(Impuestos, [{\n    key: \"monto_bruto_anual\",\n    get: function get() {\n      return this._monto_bruto_anual;\n    },\n    set: function set(value) {\n      this._monto_bruto_anual = value;\n    }\n  }, {\n    key: \"deducciones\",\n    get: function get() {\n      return this._deducciones;\n    },\n    set: function set(value) {\n      this._deducciones = value;\n    }\n  }]);\n\n  return Impuestos;\n}();\n\n//# sourceURL=webpack://desafioclaseses6/./assets/js/impuestos.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/js/app.js");
/******/ 	
/******/ })()
;