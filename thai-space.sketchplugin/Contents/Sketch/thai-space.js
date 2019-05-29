var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/thai-space.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/thai-space.js":
/*!***************************!*\
  !*** ./src/thai-space.js ***!
  \***************************/
/*! exports provided: default, addEmoji */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmoji", function() { return addEmoji; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }



var recursiveFindText = function recursiveFindText(elements) {
  try {
    var texts = [];
    elements.forEach(function (element) {
      if (element.type === 'Text') {
        texts.push(element);
      } else if (element.layers && element.layers.length) {
        var childTexts = recursiveFindText(element.layers);
        texts = [].concat(_toConsumableArray(texts), _toConsumableArray(childTexts));
      }
    });
    return texts;
  } catch (error) {
    return [];
  }
};

var getAllTextsInDocument = function getAllTextsInDocument() {
  var Document = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
  var texts = [];
  Document.pages.map(function (page) {
    if (page.layers && page.layers.length) {
      texts = [].concat(_toConsumableArray(texts), _toConsumableArray(recursiveFindText(page.layers)));
    }
  });
  return texts;
};

var addSpaceToLast = function addSpaceToLast(texts) {
  if (texts && texts.length) {
    texts.map(function (text) {
      text.text = text.text.replace(/\s*$/, '  ');
    });
  }
};

var addEmojiToLast = function addEmojiToLast(texts) {
  texts.map(function (text) {
    text.text = text.text + ' 🙌';
    text.style.fills = [{
      color: '#ff0000',
      fillType: sketch__WEBPACK_IMPORTED_MODULE_0___default.a.Style.FillType.Color
    }];
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Start adding space...");
  var texts = getAllTextsInDocument();
  addSpaceToLast(texts);
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDE4C Finish add space in ".concat(texts.length, " texts (Pls. Cmd + Z for undo)"));
});
var addEmoji = function addEmoji() {
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("Start adding 🙌...");
  var texts = getAllTextsInDocument();
  addEmojiToLast(texts);
  sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDE4C Finish add \uD83D\uDE4C in ".concat(texts.length, " texts"));
};

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['addEmoji'] = __skpm_run.bind(this, 'addEmoji')

//# sourceMappingURL=thai-space.js.map