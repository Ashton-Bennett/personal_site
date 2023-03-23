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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction NavMenu(param) {\n    let { toggleNavMenu , displayNavMenu  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        children: displayNavMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n            className: \"navMenuStyle\",\n            initial: {\n                opacity: 0,\n                x: 500\n            },\n            transition: {\n                duration: 0.25\n            },\n            animate: {\n                opacity: 1,\n                x: 0\n            },\n            exit: {\n                opacity: 0,\n                x: 500\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"navList\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#header\",\n                            onClick: toggleNavMenu,\n                            children: \"About\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 17,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#about\",\n                            onClick: toggleNavMenu,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 22,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/#projects\",\n                            onClick: toggleNavMenu,\n                            children: \"Blogs\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#blogs\",\n                            onClick: toggleNavMenu,\n                            children: \"Story\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 32,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#contact\",\n                            onClick: toggleNavMenu,\n                            children: \"Contact\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 37,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"navItem\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/assets/ashton.bennett.resume.pdf\",\n                            target: \"_blank\",\n                            children: [\n                                \"R\\xe9sum\\xe9\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                            lineNumber: 42,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                        lineNumber: 41,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n                lineNumber: 15,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/header/NavMenu.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = NavMenu;\nvar _c;\n$RefreshReg$(_c, \"NavMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9OYXZNZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDM0I7QUFFZCxTQUFTRyxRQUFRLEtBQWlDLEVBQUU7UUFBbkMsRUFBRUMsY0FBYSxFQUFFQyxlQUFjLEVBQUUsR0FBakM7SUFDOUIscUJBQ0UsOERBQUNMLDBEQUFlQTtrQkFDYkssZ0NBQ0MsOERBQUNKLHFEQUFVO1lBQ1RNLFdBQVU7WUFDVkMsU0FBUztnQkFBRUMsU0FBUztnQkFBR0MsR0FBRztZQUFJO1lBQzlCQyxZQUFZO2dCQUFFQyxVQUFVO1lBQUs7WUFDN0JDLFNBQVM7Z0JBQUVKLFNBQVM7Z0JBQUdDLEdBQUc7WUFBRTtZQUM1QkksTUFBTTtnQkFBRUwsU0FBUztnQkFBR0MsR0FBRztZQUFJO3NCQUUzQiw0RUFBQ0s7Z0JBQUdSLFdBQVU7O2tDQUNaLDhEQUFDUzt3QkFBR1QsV0FBVTtrQ0FDWiw0RUFBQ1U7NEJBQUVDLE1BQUs7NEJBQVVDLFNBQVNmO3NDQUFlOzs7Ozs7Ozs7OztrQ0FJNUMsOERBQUNZO3dCQUFHVCxXQUFVO2tDQUNaLDRFQUFDVTs0QkFBRUMsTUFBSzs0QkFBU0MsU0FBU2Y7c0NBQWU7Ozs7Ozs7Ozs7O2tDQUkzQyw4REFBQ1k7d0JBQUdULFdBQVU7a0NBQ1osNEVBQUNVOzRCQUFFQyxNQUFLOzRCQUFhQyxTQUFTZjtzQ0FBZTs7Ozs7Ozs7Ozs7a0NBSS9DLDhEQUFDWTt3QkFBR1QsV0FBVTtrQ0FDWiw0RUFBQ1U7NEJBQUVDLE1BQUs7NEJBQVNDLFNBQVNmO3NDQUFlOzs7Ozs7Ozs7OztrQ0FJM0MsOERBQUNZO3dCQUFHVCxXQUFVO2tDQUNaLDRFQUFDVTs0QkFBRUMsTUFBSzs0QkFBV0MsU0FBU2Y7c0NBQWU7Ozs7Ozs7Ozs7O2tDQUk3Qyw4REFBQ1k7d0JBQUdULFdBQVU7a0NBQ1osNEVBQUNVOzRCQUFFQyxNQUFLOzRCQUFvQ0UsUUFBTzs7Z0NBQVM7Z0NBQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXZCLENBQUM7S0EvQ3VCakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9oZWFkZXIvTmF2TWVudS5qcz81NzJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TWVudSh7IHRvZ2dsZU5hdk1lbnUsIGRpc3BsYXlOYXZNZW51IH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAge2Rpc3BsYXlOYXZNZW51ICYmIChcbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZNZW51U3R5bGVcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCwgeDogNTAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yNSB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSwgeDogMCB9fVxuICAgICAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCwgeDogNTAwIH19XG4gICAgICAgID5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2TGlzdFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNoZWFkZXJcIiBvbkNsaWNrPXt0b2dnbGVOYXZNZW51fT5cbiAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cIiNhYm91dFwiIG9uQ2xpY2s9e3RvZ2dsZU5hdk1lbnV9PlxuICAgICAgICAgICAgICAgIFByb2plY3RzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiLyNwcm9qZWN0c1wiIG9uQ2xpY2s9e3RvZ2dsZU5hdk1lbnV9PlxuICAgICAgICAgICAgICAgIEJsb2dzXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI2Jsb2dzXCIgb25DbGljaz17dG9nZ2xlTmF2TWVudX0+XG4gICAgICAgICAgICAgICAgU3RvcnlcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIG9uQ2xpY2s9e3RvZ2dsZU5hdk1lbnV9PlxuICAgICAgICAgICAgICAgIENvbnRhY3RcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXZJdGVtXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCIvYXNzZXRzL2FzaHRvbi5iZW5uZXR0LnJlc3VtZS5wZGZcIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICBSw6lzdW3DqXtcIiBcIn1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICApfVxuICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIkxpbmsiLCJOYXZNZW51IiwidG9nZ2xlTmF2TWVudSIsImRpc3BsYXlOYXZNZW51IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJ4IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiYW5pbWF0ZSIsImV4aXQiLCJ1bCIsImxpIiwiYSIsImhyZWYiLCJvbkNsaWNrIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/header/NavMenu.js\n"));

/***/ })

});