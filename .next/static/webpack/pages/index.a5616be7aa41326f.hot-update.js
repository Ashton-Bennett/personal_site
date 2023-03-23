"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/header/NavMenu.js":
/*!**************************************!*\
  !*** ./components/header/NavMenu.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\n\nfunction NavMenu(param) {\n    let { toggleNavMenu , displayNavMenu  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {\n        children: displayNavMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {\n            className: \"navMenuStyle\",\n            initial: {\n                opacity: 0,\n                x: 500\n            },\n            transition: {\n                duration: 0.25\n            },\n            animate: {\n                opacity: 1,\n                x: 0\n            },\n            exit: {\n                opacity: 0,\n                x: 500\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"navList\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#header\",\n                            onClick: toggleNavMenu,\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 16,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 15,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#about\",\n                            onClick: toggleNavMenu,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 21,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#projects\",\n                            onClick: toggleNavMenu,\n                            children: \"Blogs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 26,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#blogs\",\n                            onClick: toggleNavMenu,\n                            children: \"Story\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 31,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 30,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#contact\",\n                            onClick: toggleNavMenu,\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/assets/ashton.bennett.resume.pdf\",\n                            target: \"_blank\",\n                            children: [\n                                \"R\\xe9sum\\xe9\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 41,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 40,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                lineNumber: 14,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n            lineNumber: 7,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\n_c = NavMenu;\nvar _c;\n$RefreshReg$(_c, \"NavMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9OYXZNZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBRXpDLFNBQVNFLFFBQVEsS0FBaUMsRUFBRTtRQUFuQyxFQUFFQyxjQUFhLEVBQUVDLGVBQWMsRUFBRSxHQUFqQztJQUM5QixxQkFDRSw4REFBQ0osMERBQWVBO2tCQUNiSSxnQ0FDQyw4REFBQ0gscURBQVU7WUFDVEssV0FBVTtZQUNWQyxTQUFTO2dCQUFFQyxTQUFTO2dCQUFHQyxHQUFHO1lBQUk7WUFDOUJDLFlBQVk7Z0JBQUVDLFVBQVU7WUFBSztZQUM3QkMsU0FBUztnQkFBRUosU0FBUztnQkFBR0MsR0FBRztZQUFFO1lBQzVCSSxNQUFNO2dCQUFFTCxTQUFTO2dCQUFHQyxHQUFHO1lBQUk7c0JBRTNCLDRFQUFDSztnQkFBR1IsV0FBVTs7a0NBQ1osOERBQUNTO3dCQUFHVCxXQUFVO2tDQUNaLDRFQUFDVTs0QkFBRUMsTUFBSzs0QkFBVUMsU0FBU2Y7c0NBQWU7Ozs7Ozs7Ozs7O2tDQUk1Qyw4REFBQ1k7d0JBQUdULFdBQVU7a0NBQ1osNEVBQUNVOzRCQUFFQyxNQUFLOzRCQUFTQyxTQUFTZjtzQ0FBZTs7Ozs7Ozs7Ozs7a0NBSTNDLDhEQUFDWTt3QkFBR1QsV0FBVTtrQ0FDWiw0RUFBQ1U7NEJBQUVDLE1BQUs7NEJBQVlDLFNBQVNmO3NDQUFlOzs7Ozs7Ozs7OztrQ0FJOUMsOERBQUNZO3dCQUFHVCxXQUFVO2tDQUNaLDRFQUFDVTs0QkFBRUMsTUFBSzs0QkFBU0MsU0FBU2Y7c0NBQWU7Ozs7Ozs7Ozs7O2tDQUkzQyw4REFBQ1k7d0JBQUdULFdBQVU7a0NBQ1osNEVBQUNVOzRCQUFFQyxNQUFLOzRCQUFXQyxTQUFTZjtzQ0FBZTs7Ozs7Ozs7Ozs7a0NBSTdDLDhEQUFDWTt3QkFBR1QsV0FBVTtrQ0FDWiw0RUFBQ1U7NEJBQUVDLE1BQUs7NEJBQW9DRSxRQUFPOztnQ0FBUztnQ0FDbkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQztLQS9DdUJqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2hlYWRlci9OYXZNZW51LmpzPzU3MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZNZW51KHsgdG9nZ2xlTmF2TWVudSwgZGlzcGxheU5hdk1lbnUgfSkge1xuICByZXR1cm4gKFxuICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICB7ZGlzcGxheU5hdk1lbnUgJiYgKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdk1lbnVTdHlsZVwiXG4gICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB4OiA1MDAgfX1cbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjI1IH19XG4gICAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxLCB4OiAwIH19XG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwLCB4OiA1MDAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZMaXN0XCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2hlYWRlclwiIG9uQ2xpY2s9e3RvZ2dsZU5hdk1lbnV9PlxuICAgICAgICAgICAgICAgIEFib3V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2Fib3V0XCIgb25DbGljaz17dG9nZ2xlTmF2TWVudX0+XG4gICAgICAgICAgICAgICAgUHJvamVjdHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvamVjdHNcIiBvbkNsaWNrPXt0b2dnbGVOYXZNZW51fT5cbiAgICAgICAgICAgICAgICBCbG9nc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNibG9nc1wiIG9uQ2xpY2s9e3RvZ2dsZU5hdk1lbnV9PlxuICAgICAgICAgICAgICAgIFN0b3J5XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbnRhY3RcIiBvbkNsaWNrPXt0b2dnbGVOYXZNZW51fT5cbiAgICAgICAgICAgICAgICBDb250YWN0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2Fzc2V0cy9hc2h0b24uYmVubmV0dC5yZXN1bWUucGRmXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgUsOpc3Vtw6l7XCIgXCJ9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgKX1cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJBbmltYXRlUHJlc2VuY2UiLCJtb3Rpb24iLCJOYXZNZW51IiwidG9nZ2xlTmF2TWVudSIsImRpc3BsYXlOYXZNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYW5pbWF0ZSIsImV4aXQiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/NavMenu.js\n"));

/***/ })

});