"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/github",{

/***/ "./pages/github.js":
/*!*************************!*\
  !*** ./pages/github.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n\n\nvar _this = undefined;\n//cargar el Perfil desde:\n//https://api.github.com/users/Yul1us\n// const Github = (props) => {\n//     console.log(props.user)\n//     return (\n//         <Layout>\n//             <h1>Github</h1>\n//         </Layout>\n//     )\n// }\nvar Github = function(param) {\n    var user = param.user;\n    console.log(user);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-4 offset-md-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card card-body text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: user.name\n                        }, void 0, false, {\n                            fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: user.avatar_url,\n                            alt: \"img_avatar_url\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n                            lineNumber: 26,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: user.bio\n                        }, void 0, false, {\n                            fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n                            lineNumber: 27,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: user.blog,\n                            target: \"_blank\",\n                            className: \"btn btn-outline-secondary my-2\",\n                            children: \" My Blog\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n                            lineNumber: 28,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: user.html_url,\n                            target: \"_blank\",\n                            className: \"btn btn-outline-secondary \",\n                            children: \"Go to Github\"\n                        }, void 0, false, {\n                            fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n                            lineNumber: 29,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n                    lineNumber: 24,\n                    columnNumber: 21\n                }, _this)\n            }, void 0, false, {\n                fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n                lineNumber: 23,\n                columnNumber: 17\n            }, _this)\n        }, void 0, false, {\n            fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"F:\\\\00_Developments_01\\\\Next-simple-portfolio\\\\pages\\\\github.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, _this));\n};\n_c = Github;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Github);\nvar _c;\n$RefreshReg$(_c, \"Github\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9naXRodWIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBeUM7O0FBQ3pDLEVBQXlCO0FBQ3pCLEVBQXFDO0FBQ3JDLEVBQThCO0FBQzlCLEVBQThCO0FBQzlCLEVBQWU7QUFDZixFQUFtQjtBQUNuQixFQUE4QjtBQUU5QixFQUFvQjtBQUNwQixFQUFRO0FBQ1IsRUFBSTtBQUdKLEdBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQVEsUUFBSSxDQUFDO1FBQVhDLElBQUksU0FBSkEsSUFBSTtJQUNqQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUk7SUFDaEIsTUFBTSw2RUFDREYsMERBQU07OEZBSUZLLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQUs7a0dBQ2ZELENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUFzQjtzR0FDaENELENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUE0Qjs7b0dBQ3RDQyxDQUFFO3NDQUFFTCxJQUFJLENBQUNNLElBQUk7Ozs7OztvR0FDYkMsQ0FBRzs0QkFBQ0MsR0FBRyxFQUFFUixJQUFJLENBQUNTLFVBQVU7NEJBQUVDLEdBQUcsRUFBQyxDQUFnQjs7Ozs7O29HQUM5Q0MsQ0FBQztzQ0FBRVgsSUFBSSxDQUFDWSxHQUFHOzs7Ozs7b0dBQ1hDLENBQUM7NEJBQUNDLElBQUksRUFBRWQsSUFBSSxDQUFDZSxJQUFJOzRCQUFFQyxNQUFNLEVBQUMsQ0FBUTs0QkFBQ1osU0FBUyxFQUFDLENBQWdDO3NDQUFDLENBQVE7Ozs7OztvR0FDdEZTLENBQUM7NEJBQUNDLElBQUksRUFBRWQsSUFBSSxDQUFDaUIsUUFBUTs0QkFBRUQsTUFBTSxFQUFDLENBQVE7NEJBQUNaLFNBQVMsRUFBQyxDQUE0QjtzQ0FBRSxDQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTcEgsQ0FBQztLQXZCS0wsTUFBTTs7QUF1Q1osK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9naXRodWIuanM/MzU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuLy9jYXJnYXIgZWwgUGVyZmlsIGRlc2RlOlxyXG4vL2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvWXVsMXVzXHJcbi8vIGNvbnN0IEdpdGh1YiA9IChwcm9wcykgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2cocHJvcHMudXNlcilcclxuLy8gICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgPExheW91dD5cclxuLy8gICAgICAgICAgICAgPGgxPkdpdGh1YjwvaDE+XHJcbiAgICBcclxuLy8gICAgICAgICA8L0xheW91dD5cclxuLy8gICAgIClcclxuLy8gfVxyXG5cclxuXHJcbmNvbnN0IEdpdGh1YiA9ICh7dXNlcn0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXIpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIHsvKiA8aDE+R2l0aHViPC9oMT4gKi99XHJcbiAgICAgICAgICAgIHsvKiBDcmVhbmRvIGxvcyBvYmpldG9zICovfVxyXG4gICAgICAgICAgICB7LyogaHR0cHM6Ly9sYWlkZWF0ZWNoLm5ldC9zaW1vbi8jICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNCBvZmZzZXQtbWQtNCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NhcmQgY2FyZC1ib2R5IHRleHQtY2VudGVyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPnt1c2VyLm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PSdpbWdfYXZhdGFyX3VybCc+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmJpb308L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e3VzZXIuYmxvZ30gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBteS0yJz4gTXkgQmxvZzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17dXNlci5odG1sX3VybH0gdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0nYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSAnID5HbyB0byBHaXRodWI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIFxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG4vL3BpZGUgZGF0b3MgZGUgZm9ybWEgZXh0YXJuYSBkZXNkZSBlbCBzZXJ2aWRvci4uLlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gICAgLy9wZXRpY2lvbiBmZXRjaFxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvWXVsMXVzJylcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIHJldHVybiAge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IGRhdGFcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHaXRodWI7Il0sIm5hbWVzIjpbIkxheW91dCIsIkdpdGh1YiIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJuYW1lIiwiaW1nIiwic3JjIiwiYXZhdGFyX3VybCIsImFsdCIsInAiLCJiaW8iLCJhIiwiaHJlZiIsImJsb2ciLCJ0YXJnZXQiLCJodG1sX3VybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/github.js\n");

/***/ })

});