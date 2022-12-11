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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  width: 100vw;\\r\\n  font-family: 'Inter', sans-serif;\\r\\n  background-color: #f5f5f5;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  width: 60%;\\r\\n  height: 100vh;\\r\\n  margin: 3rem auto 0;\\r\\n}\\r\\n\\r\\n/* _______________________ Start Header________________ */\\r\\n\\r\\nnav {\\r\\n  width: 100%;\\r\\n  height: 50px;\\r\\n  border: 1px solid #e0e0e0;\\r\\n  border-radius: 7px;\\r\\n  display: flex;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\nnav ul {\\r\\n  width: 100%;\\r\\n  padding: 0 0.5rem;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\nnav ul li {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 0.2rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nnav ul li:nth-child(1),\\r\\nnav ul li:nth-child(2),\\r\\nnav ul li:nth-child(3) {\\r\\n  border-right: 1px solid #e0e0e0;\\r\\n  padding-right: 1rem;\\r\\n}\\r\\n\\r\\nnav ul li:nth-child(4) {\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\nnav img {\\r\\n  width: 25px;\\r\\n  height: 25px;\\r\\n}\\r\\n\\r\\n/* __________________________ End Header________________________ */\\r\\n\\r\\n/* _________________________ Start Main ________________________ */\\r\\n\\r\\n.main__title {\\r\\n  padding: 0.5rem 0;\\r\\n}\\r\\n\\r\\nhr {\\r\\n  border: 1px solid #e0e0e0;\\r\\n}\\r\\n\\r\\n.main__content {\\r\\n  padding: 1rem 0;\\r\\n  color: #6e747f;\\r\\n  line-height: 1.5;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  max-width: 100%;\\r\\n  width: 100%;\\r\\n  white-space: pre-wrap;\\r\\n  padding: 0.5rem 0;\\r\\n  word-break: break-word;\\r\\n  caret-color: #37352f;\\r\\n  color: #222;\\r\\n  cursor: text;\\r\\n  position: relative;\\r\\n}\\r\\n\\r\\n.input:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n[contenteditable]:empty::before {\\r\\n  content: attr(placeholder);\\r\\n  color: #37352f80;\\r\\n}\\r\\n\\r\\n/* ________________________ End Main_____________________________ */\\r\\n\\r\\n/* ______________________ Start POPUP ___________________________ */\\r\\n\\r\\n.popup {\\r\\n  position: relative;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 20rem;\\r\\n  height: 15rem;\\r\\n  background-color: #fff;\\r\\n  border-radius: 5px;\\r\\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\\r\\n  overflow-y: scroll;\\r\\n}\\r\\n\\r\\n.popup::-webkit-scrollbar {\\r\\n  width: 0.5rem;\\r\\n}\\r\\n\\r\\n.popup::-webkit-scrollbar-track {\\r\\n  background: #f1f1f1;\\r\\n}\\r\\n\\r\\n.popup::-webkit-scrollbar-thumb {\\r\\n  background: #888;\\r\\n}\\r\\n\\r\\n.popup::-webkit-scrollbar-thumb:hover {\\r\\n  background: #555;\\r\\n}\\r\\n\\r\\n.popup__header {\\r\\n  padding: 1rem 0.5rem;\\r\\n  font-size: 1rem;\\r\\n  font-weight: 600;\\r\\n  border-bottom: 1px solid #e0e0e0;\\r\\n}\\r\\n\\r\\n.popup__list {\\r\\n  padding: 0.5rem;\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\n.popup__item {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  outline: none;\\r\\n  padding: 0.5rem;\\r\\n  cursor: pointer;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  gap: 1rem;\\r\\n}\\r\\n\\r\\n.popup__item:hover,\\r\\n.popup__item:focus,\\r\\n.popup__item:active {\\r\\n  background-color: #f5f5f5;\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.popup__item div {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n.popup__item p {\\r\\n  color: #6e747f;\\r\\n  font-size: 0.8rem;\\r\\n  margin-top: 0.2rem;\\r\\n}\\r\\n\\r\\n/* _____________________ End POPUP ________________ */\\r\\n\\r\\n/* ______________________ Start Toggle Mode _____________ */\\r\\n\\r\\n.toggle-mode {\\r\\n  position: fixed;\\r\\n  top: 2rem;\\r\\n  right: 3rem;\\r\\n}\\r\\n\\r\\n.toggle-mode__icon {\\r\\n  width: 50px;\\r\\n  cursor: pointer;\\r\\n  animation: fadeIn 0.5s ease-in-out;\\r\\n}\\r\\n\\r\\n.toggle-mode__icon img {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n}\\r\\n\\r\\n.sun {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* ______________________ End Toggle Mode _____________ */\\r\\n\\r\\n/* ____________________ Js Classes ________________ */\\r\\n\\r\\n.h1 {\\r\\n  font-size: 2rem;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\n.h2 {\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.h3 {\\r\\n  font-size: 1.25rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.h4 {\\r\\n  font-size: 1.125rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.h5 {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.h6 {\\r\\n  font-size: 0.875rem;\\r\\n  font-weight: 500;\\r\\n}\\r\\n\\r\\n.p {\\r\\n  font-size: 1rem;\\r\\n  font-weight: 400;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Media Screen */\\r\\n@media screen and (max-width: 768px) {\\r\\n  .container {\\r\\n    width: 95%;\\r\\n  }\\r\\n\\r\\n  .toggle-mode {\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n  }\\r\\n}\\r\\n\\r\\n/* Animation  */\\r\\n@keyframes fadeIn {\\r\\n  0% {\\r\\n    opacity: 0;\\r\\n  }\\r\\n\\r\\n  100% {\\r\\n    opacity: 1;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_handleInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/handleInput.js */ \"./src/modules/handleInput.js\");\n\n\n\n(0,_modules_handleInput_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// Toggle dark/light mode\nconst sunIcon = document.querySelector('.sun');\nconst moonIcon = document.querySelector('.moon');\n\nconst darkMode = () => {\n  document.querySelector('html').style.filter = 'invert(0) hue-rotate(0deg)';\n  sunIcon.style.display = 'none';\n  moonIcon.style.display = 'block';\n};\n\nconst lightMode = () => {\n  document.querySelector('html').style.filter = 'invert(0) hue-rotate(0deg)';\n  document.querySelector('html').style.filter = 'invert(1) hue-rotate(180deg)';\n  sunIcon.style.display = 'block';\n  moonIcon.style.display = 'none';\n};\n\nsunIcon.addEventListener('click', darkMode);\nmoonIcon.addEventListener('click', lightMode);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/createInput.js":
/*!************************************!*\
  !*** ./src/modules/createInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createInput = (currentInput, currentId) => {\n  const newInput = document.createElement('div');\n  newInput.classList.add('input');\n  newInput.setAttribute('contenteditable', true);\n  newInput.setAttribute('spellcheck', true);\n  newInput.setAttribute('placeholder', \"Type '/' for blocks\");\n  newInput.setAttribute('id', `${Number(currentId) + 1}`);\n\n  currentInput.insertAdjacentElement('afterend', newInput);\n  newInput.focus();\n\n  return newInput;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createInput);\n\n\n//# sourceURL=webpack:///./src/modules/createInput.js?");

/***/ }),

/***/ "./src/modules/createOption.js":
/*!*************************************!*\
  !*** ./src/modules/createOption.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _images_text_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/text.svg */ \"./src/images/text.svg\");\n\n\nconst createOption = (option) => {\n  const { title, description } = option;\n  return `\n    <button class=\"popup__item\" data-type=\"${option.type}\">\n    <img src=\"${_images_text_svg__WEBPACK_IMPORTED_MODULE_0__}\" alt=\"heading icon\" width=\"30\">\n    <div>\n      <h4>${title}</h4>\n      <p>${description}</p>\n    </div>\n    </button>`;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createOption);\n\n\n//# sourceURL=webpack:///./src/modules/createOption.js?");

/***/ }),

/***/ "./src/modules/createTag.js":
/*!**********************************!*\
  !*** ./src/modules/createTag.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n\n\nconst createTag = (input, tagType) => {\n  input.className = 'input';\n  input.classList.add(tagType);\n  input.textContent = input.textContent.slice(2).trim();\n  tagType === 'p'\n    ? input.setAttribute('placeholder', 'Paragraph')\n    : input.setAttribute('placeholder', `Heading ${tagType}`);\n  input.focus();\n  (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.removePopup)();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTag);\n\n\n//# sourceURL=webpack:///./src/modules/createTag.js?");

/***/ }),

/***/ "./src/modules/filterOptions.js":
/*!**************************************!*\
  !*** ./src/modules/filterOptions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst filterOptions = (searchInput) => {\n  searchInput = searchInput.slice(1);\n  const options = [...document.querySelectorAll('.popup__item')];\n  options.forEach((option) => {\n    const title = option.querySelector('h4').textContent;\n    option.style.display = title\n      .toLowerCase()\n      .includes(searchInput.toLowerCase())\n      ? 'flex'\n      : 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (filterOptions);\n\n\n//# sourceURL=webpack:///./src/modules/filterOptions.js?");

/***/ }),

/***/ "./src/modules/handleInput.js":
/*!************************************!*\
  !*** ./src/modules/handleInput.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup.js */ \"./src/modules/popup.js\");\n/* harmony import */ var _createInput_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createInput.js */ \"./src/modules/createInput.js\");\n/* harmony import */ var _selectOption_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectOption.js */ \"./src/modules/selectOption.js\");\n/* harmony import */ var _filterOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filterOptions.js */ \"./src/modules/filterOptions.js\");\n/* harmony import */ var _createTag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./createTag.js */ \"./src/modules/createTag.js\");\n\n\n\n\n\n\nconst handleInput = (input = document.getElementById('1')) => {\n  // If the first character is /, show the popup, else remove it\n  input.addEventListener('input', () => {\n    if (input.textContent[0] === '/') {\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.createPopup)(input);\n      (0,_selectOption_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(input);\n      // filter options\n      (0,_filterOptions_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(input.textContent);\n    } else {\n      (0,_popup_js__WEBPACK_IMPORTED_MODULE_0__.removePopup)();\n    }\n  });\n\n  input.addEventListener('keydown', (e) => {\n    /* If the user presses 'Enter':\n          1. check if the content start with /1, if true, create H1\n          2. check if the content start with /2, if true, create H2\n          3. if the user presses 'Enter' and the input is empty, remove the placeholder\n    */\n\n    if (e.key === 'Enter') {\n      e.preventDefault();\n      const text = input.textContent;\n\n      if (text[0] === '/' && text[1] === '1') (0,_createTag_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(input, 'h1');\n      if (text[0] === '/' && text[1] === '2') (0,_createTag_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(input, 'h2');\n      if (text === '') input.removeAttribute('placeholder');\n\n      const newInput = (0,_createInput_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(input, input.id);\n      handleInput(newInput);\n    }\n\n    /* If the user presses 'Backspace' && the input is empty && the input is not the first one:\n        - Remove the input and focus the previous input\n        - Add the placeholder to the previous <input type=\"text\" />\n        - Put the cursor at the end of the previous input content (used the range object to do that)\n    */\n    if (\n      e.key === 'Backspace' &&\n      input.textContent.length === 0 &&\n      input.id !== '1'\n    ) {\n      const previousInput = input.previousElementSibling;\n      input.remove();\n      previousInput.setAttribute('placeholder', \"Type '/' for blocks\");\n\n      // Add space to the previous input to make sure the cursor is at the end of the content\n      previousInput.textContent += ' ';\n      previousInput.focus();\n      const range = document.createRange();\n      const sel = window.getSelection();\n      range.setStart(\n        previousInput.childNodes[0] || previousInput,\n        previousInput.textContent.length\n      );\n      sel.removeAllRanges();\n      sel.addRange(range);\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleInput);\n\n\n//# sourceURL=webpack:///./src/modules/handleInput.js?");

/***/ }),

/***/ "./src/modules/optionsList.js":
/*!************************************!*\
  !*** ./src/modules/optionsList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst optionsList = [\n  {\n    title: 'Heading 1',\n    description: 'Big Section heading',\n    type: 'h1',\n  },\n  {\n    title: 'Heading 2',\n    description: 'Medium Section heading',\n    type: 'h2',\n  },\n  {\n    title: 'Heading 3',\n    description: 'Small Section heading',\n    type: 'h3',\n  },\n  {\n    title: 'Heading 4',\n    description: 'Big Subsection heading',\n    type: 'h4',\n  },\n  {\n    title: 'Heading 5',\n    description: 'Medium Subsection heading',\n    type: 'h5',\n  },\n  {\n    title: 'Heading 6',\n    description: 'Small Subsection heading',\n    type: 'h6',\n  },\n  {\n    title: 'Paragraph',\n    description: 'Normal text',\n    type: 'p',\n  },\n];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (optionsList);\n\n\n//# sourceURL=webpack:///./src/modules/optionsList.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPopup\": () => (/* binding */ createPopup),\n/* harmony export */   \"removePopup\": () => (/* binding */ removePopup)\n/* harmony export */ });\n/* harmony import */ var _optionsList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./optionsList.js */ \"./src/modules/optionsList.js\");\n/* harmony import */ var _createOption_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOption.js */ \"./src/modules/createOption.js\");\n\n\n\nlet flag = false;\nlet active = -1;\n\nconst createPopup = (currentInput) => {\n  if (flag) return;\n  const popupHtml = `\n  <div class=\"popup\">\n    <div class=\"popup__header\">\n      <h4>Basic Blocks</h4>\n    </div>\n    <div class=\"popup__list\" role=\"listitem\">\n      ${_optionsList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].map((option) => (0,_createOption_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(option)).join('')}\n    </div>\n  </div>`;\n\n  currentInput.insertAdjacentHTML('afterend', popupHtml);\n  flag = true;\n};\n\nconst removePopup = () => {\n  const popup = document.querySelector('.popup');\n  if (popup) {\n    popup.remove();\n    flag = false;\n  }\n};\n\ndocument.addEventListener('keydown', (e) => {\n  const popOptions = [...document.querySelectorAll('.popup__item')];\n  if (!flag) return;\n  if (e.key === 'ArrowDown' && active < popOptions.length - 1) {\n    active += 1;\n    popOptions[active].focus();\n  }\n  if (e.key === 'ArrowUp' && active > 0) {\n    active -= 1;\n    popOptions[active].focus();\n  }\n  if (e.key === 'Escape') removePopup();\n});\n\n// remove popup when clicking outside\ndocument.addEventListener('click', (e) => {\n  if (e.target.closest('.popup')) return;\n  removePopup();\n});\n\n\n\n\n//# sourceURL=webpack:///./src/modules/popup.js?");

/***/ }),

/***/ "./src/modules/selectOption.js":
/*!*************************************!*\
  !*** ./src/modules/selectOption.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _createTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTag.js */ \"./src/modules/createTag.js\");\n\n\nconst selectOption = (input) => {\n  const options = document.querySelectorAll('.popup__item');\n  options.forEach((option) => {\n    option.addEventListener('click', () => {\n      const tagType = option.getAttribute('data-type');\n      (0,_createTag_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(input, tagType);\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (selectOption);\n\n\n//# sourceURL=webpack:///./src/modules/selectOption.js?");

/***/ }),

/***/ "./src/images/text.svg":
/*!*****************************!*\
  !*** ./src/images/text.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"166b1ec4b44f1f071c20.svg\";\n\n//# sourceURL=webpack:///./src/images/text.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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