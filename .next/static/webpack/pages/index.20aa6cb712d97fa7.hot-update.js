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

/***/ "./components/homepage/Projects.js":
/*!*****************************************!*\
  !*** ./components/homepage/Projects.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textFade\": function() { return /* binding */ textFade; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_pexels_nikolaos_dimou_2473183_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/pexels-nikolaos-dimou-2473183.jpg */ \"./public/images/pexels-nikolaos-dimou-2473183.jpg\");\n/* harmony import */ var _public_icons_south_FILL0_wght200_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/icons/south_FILL0_wght200_GRAD0_opsz48.png */ \"./public/icons/south_FILL0_wght200_GRAD0_opsz48.png\");\n/* harmony import */ var _ScrollingArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollingArrow */ \"./components/homepage/ScrollingArrow.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var utils_fadeoutanimations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/fadeoutanimations */ \"./utils/fadeoutanimations.js\");\n\n\n\n\n\n\n\n\n\nconst textFade = {\n    start: {\n        opacity: 0,\n        y: 5\n    },\n    end: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            type: \"tween\",\n            ease: \"linear\",\n            duration: 0.25,\n            delayChildren: 0.15,\n            staggerChildren: 0.15\n        }\n    }\n};\nconst Projects = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(_c = function Projects(param, ref) {\n    let { fadeOutStyle , setDisplayHamburgerNav  } = param;\n    const { initialForAnimation , animateForAnimation  } = (0,utils_fadeoutanimations__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fadeOutStyle);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        id: \"projects\",\n        className: \"column addHeight scrollSnap \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"imageStyle\",\n                priority: true,\n                src: _public_images_pexels_nikolaos_dimou_2473183_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"black laptop with colors exploding out of it.\"\n            }, void 0, false, {\n                fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.aside, {\n                className: \"column textSectionLargeScreen\",\n                initial: initialForAnimation,\n                animate: animateForAnimation,\n                whileInView: fadeOutStyle === true ? undefined : \"end\",\n                variants: textFade,\n                transition: {\n                    staggerChildren: 0.75\n                },\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row widthEighty spaceBetween\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h1, {\n                            variants: textFade,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.p, {\n                        className: \"widthEighty\",\n                        variants: textFade,\n                        children: [\n                            \" \",\n                            \"I take pride in delivering high-quality work that meets the needs of my clients and their users. Take a look at my portfolio to see some of my recent projects and get a sense of my style. I'm always excited to collaborate on new and exciting projects, so if you're interested in working with me, don't hesitate to reach out.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/projectsPage\",\n                        onClick: ()=>setDisplayHamburgerNav(false),\n                        scroll: false,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n                            whileHover: {\n                                scale: 1.1,\n                                color: \"whitesmoke\",\n                                cursor: \"pointer\"\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            transition: {\n                                type: \"spring\",\n                                stiffness: 400,\n                                damping: 17\n                            },\n                            className: \"widthEighty\",\n                            variants: textFade,\n                            children: \"View\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScrollingArrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        link: \"#blogs\",\n                        arrow: _public_icons_south_FILL0_wght200_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n});\n_c1 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c, _c1;\n$RefreshReg$(_c, \"Projects$forwardRef\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNtRDtBQUNGO0FBQ2xDO0FBQ2pCO0FBQ21CO0FBQ2I7QUFDcUI7QUFFakQsTUFBTVMsV0FBVztJQUN0QkMsT0FBTztRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRTtJQUMxQkMsS0FBSztRQUNIRixTQUFTO1FBQ1RDLEdBQUc7UUFDSEUsWUFBWTtZQUNWQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxlQUFlO1lBQ2ZDLGlCQUFpQjtRQUNuQjtJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLHlCQUFXYixpREFBVUEsTUFBQyxTQUFTYSxTQUNuQyxLQUF3QyxFQUN4Q0MsR0FBRyxFQUNIO1FBRkEsRUFBRUMsYUFBWSxFQUFFQyx1QkFBc0IsRUFBRSxHQUF4QztJQUdBLE1BQU0sRUFBRUMsb0JBQW1CLEVBQUVDLG9CQUFtQixFQUFFLEdBQ2hEakIsbUVBQWlCQSxDQUFDYztJQUVwQixxQkFDRSw4REFBQ0k7UUFBUUwsS0FBS0E7UUFBS00sSUFBRztRQUFXQyxXQUFVOzswQkFDekMsOERBQUM1QixtREFBS0E7Z0JBQ0o0QixXQUFVO2dCQUNWQyxRQUFRO2dCQUNSQyxLQUFLN0Isd0ZBQWFBO2dCQUNsQjhCLEtBQUk7Ozs7OzswQkFHTiw4REFBQ3pCLHVEQUFZO2dCQUNYc0IsV0FBVTtnQkFDVkssU0FBU1Q7Z0JBQ1RuQixTQUFTb0I7Z0JBQ1RTLGFBQWFaLGlCQUFpQixJQUFJLEdBQUdhLFlBQVksS0FBSztnQkFDdERDLFVBQVUzQjtnQkFDVkssWUFBWTtvQkFBRUssaUJBQWlCO2dCQUFLOztvQkFFbkM7a0NBQ0QsOERBQUNrQjt3QkFBSVQsV0FBVTtrQ0FDYiw0RUFBQ3RCLG9EQUFTOzRCQUFDOEIsVUFBVTNCO3NDQUFVOzs7Ozs7Ozs7OztrQ0FFakMsOERBQUNILG1EQUFRO3dCQUFDc0IsV0FBVTt3QkFBY1EsVUFBVTNCOzs0QkFDekM7NEJBQUk7Ozs7Ozs7a0NBT1AsOERBQUNMLGtEQUFJQTt3QkFDSG9DLE1BQUs7d0JBQ0xDLFNBQVMsSUFBTWxCLHVCQUF1QixLQUFLO3dCQUMzQ21CLFFBQVEsS0FBSztrQ0FFYiw0RUFBQ3BDLHdEQUFhOzRCQUNac0MsWUFBWTtnQ0FDVkMsT0FBTztnQ0FDUEMsT0FBTztnQ0FDUEMsUUFBUTs0QkFDVjs0QkFDQUMsVUFBVTtnQ0FBRUgsT0FBTzs0QkFBSTs0QkFDdkIvQixZQUFZO2dDQUFFQyxNQUFNO2dDQUFVa0MsV0FBVztnQ0FBS0MsU0FBUzs0QkFBRzs0QkFDMUR0QixXQUFVOzRCQUNWUSxVQUFVM0I7c0NBQ1g7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDTix1REFBY0E7d0JBQUNnRCxNQUFNO3dCQUFVQyxPQUFPbEQsMEZBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEQ7O0FBRUEsK0RBQWVrQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvUHJvamVjdHMuanM/N2YxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBjb21wdXRlckltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3BleGVscy1uaWtvbGFvcy1kaW1vdS0yNDczMTgzLmpwZ1wiO1xuaW1wb3J0IGRvd25BcnJvdyBmcm9tIFwiLi4vLi4vcHVibGljL2ljb25zL3NvdXRoX0ZJTEwwX3dnaHQyMDBfR1JBRDBfb3BzejQ4LnBuZ1wiO1xuaW1wb3J0IFNjcm9sbGluZ0Fycm93IGZyb20gXCIuL1Njcm9sbGluZ0Fycm93XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZhZGVvdXRhbmltYXRpb25zIGZyb20gXCJ1dGlscy9mYWRlb3V0YW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgdGV4dEZhZGUgPSB7XG4gIHN0YXJ0OiB7IG9wYWNpdHk6IDAsIHk6IDUgfSxcbiAgZW5kOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFwidHdlZW5cIixcbiAgICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgICBkdXJhdGlvbjogMC4yNSxcbiAgICAgIGRlbGF5Q2hpbGRyZW46IDAuMTUsXG4gICAgICBzdGFnZ2VyQ2hpbGRyZW46IDAuMTUsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IFByb2plY3RzID0gZm9yd2FyZFJlZihmdW5jdGlvbiBQcm9qZWN0cyhcbiAgeyBmYWRlT3V0U3R5bGUsIHNldERpc3BsYXlIYW1idXJnZXJOYXYgfSxcbiAgcmVmXG4pIHtcbiAgY29uc3QgeyBpbml0aWFsRm9yQW5pbWF0aW9uLCBhbmltYXRlRm9yQW5pbWF0aW9uIH0gPVxuICAgIGZhZGVvdXRhbmltYXRpb25zKGZhZGVPdXRTdHlsZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiByZWY9e3JlZn0gaWQ9XCJwcm9qZWN0c1wiIGNsYXNzTmFtZT1cImNvbHVtbiBhZGRIZWlnaHQgc2Nyb2xsU25hcCBcIj5cbiAgICAgIDxJbWFnZVxuICAgICAgICBjbGFzc05hbWU9XCJpbWFnZVN0eWxlXCJcbiAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgc3JjPXtjb21wdXRlckltYWdlfVxuICAgICAgICBhbHQ9XCJibGFjayBsYXB0b3Agd2l0aCBjb2xvcnMgZXhwbG9kaW5nIG91dCBvZiBpdC5cIlxuICAgICAgLz5cblxuICAgICAgPG1vdGlvbi5hc2lkZVxuICAgICAgICBjbGFzc05hbWU9XCJjb2x1bW4gdGV4dFNlY3Rpb25MYXJnZVNjcmVlblwiXG4gICAgICAgIGluaXRpYWw9e2luaXRpYWxGb3JBbmltYXRpb259XG4gICAgICAgIGFuaW1hdGU9e2FuaW1hdGVGb3JBbmltYXRpb259XG4gICAgICAgIHdoaWxlSW5WaWV3PXtmYWRlT3V0U3R5bGUgPT09IHRydWUgPyB1bmRlZmluZWQgOiBcImVuZFwifVxuICAgICAgICB2YXJpYW50cz17dGV4dEZhZGV9XG4gICAgICAgIHRyYW5zaXRpb249e3sgc3RhZ2dlckNoaWxkcmVuOiAwLjc1IH19XG4gICAgICA+XG4gICAgICAgIHtcIiBcIn1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd2lkdGhFaWdodHkgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgPG1vdGlvbi5oMSB2YXJpYW50cz17dGV4dEZhZGV9PlByb2plY3RzPC9tb3Rpb24uaDE+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8bW90aW9uLnAgY2xhc3NOYW1lPVwid2lkdGhFaWdodHlcIiB2YXJpYW50cz17dGV4dEZhZGV9PlxuICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICBJIHRha2UgcHJpZGUgaW4gZGVsaXZlcmluZyBoaWdoLXF1YWxpdHkgd29yayB0aGF0IG1lZXRzIHRoZSBuZWVkcyBvZlxuICAgICAgICAgIG15IGNsaWVudHMgYW5kIHRoZWlyIHVzZXJzLiBUYWtlIGEgbG9vayBhdCBteSBwb3J0Zm9saW8gdG8gc2VlIHNvbWUgb2ZcbiAgICAgICAgICBteSByZWNlbnQgcHJvamVjdHMgYW5kIGdldCBhIHNlbnNlIG9mIG15IHN0eWxlLiBJJmFwb3M7bSBhbHdheXNcbiAgICAgICAgICBleGNpdGVkIHRvIGNvbGxhYm9yYXRlIG9uIG5ldyBhbmQgZXhjaXRpbmcgcHJvamVjdHMsIHNvIGlmIHlvdSZhcG9zO3JlXG4gICAgICAgICAgaW50ZXJlc3RlZCBpbiB3b3JraW5nIHdpdGggbWUsIGRvbiZhcG9zO3QgaGVzaXRhdGUgdG8gcmVhY2ggb3V0LlxuICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIGhyZWY9XCIvcHJvamVjdHNQYWdlXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXREaXNwbGF5SGFtYnVyZ2VyTmF2KGZhbHNlKX1cbiAgICAgICAgICBzY3JvbGw9e2ZhbHNlfVxuICAgICAgICA+XG4gICAgICAgICAgPG1vdGlvbi5idXR0b25cbiAgICAgICAgICAgIHdoaWxlSG92ZXI9e3tcbiAgICAgICAgICAgICAgc2NhbGU6IDEuMSxcbiAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVzbW9rZVwiLFxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgdHlwZTogXCJzcHJpbmdcIiwgc3RpZmZuZXNzOiA0MDAsIGRhbXBpbmc6IDE3IH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3aWR0aEVpZ2h0eVwiXG4gICAgICAgICAgICB2YXJpYW50cz17dGV4dEZhZGV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVmlld1xuICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8U2Nyb2xsaW5nQXJyb3cgbGluaz17XCIjYmxvZ3NcIn0gYXJyb3c9e2Rvd25BcnJvd30gLz5cbiAgICAgIDwvbW90aW9uLmFzaWRlPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImNvbXB1dGVySW1hZ2UiLCJkb3duQXJyb3ciLCJTY3JvbGxpbmdBcnJvdyIsIkxpbmsiLCJhbmltYXRlIiwibW90aW9uIiwiZm9yd2FyZFJlZiIsImZhZGVvdXRhbmltYXRpb25zIiwidGV4dEZhZGUiLCJzdGFydCIsIm9wYWNpdHkiLCJ5IiwiZW5kIiwidHJhbnNpdGlvbiIsInR5cGUiLCJlYXNlIiwiZHVyYXRpb24iLCJkZWxheUNoaWxkcmVuIiwic3RhZ2dlckNoaWxkcmVuIiwiUHJvamVjdHMiLCJyZWYiLCJmYWRlT3V0U3R5bGUiLCJzZXREaXNwbGF5SGFtYnVyZ2VyTmF2IiwiaW5pdGlhbEZvckFuaW1hdGlvbiIsImFuaW1hdGVGb3JBbmltYXRpb24iLCJzZWN0aW9uIiwiaWQiLCJjbGFzc05hbWUiLCJwcmlvcml0eSIsInNyYyIsImFsdCIsImFzaWRlIiwiaW5pdGlhbCIsIndoaWxlSW5WaWV3IiwidW5kZWZpbmVkIiwidmFyaWFudHMiLCJkaXYiLCJoMSIsInAiLCJocmVmIiwib25DbGljayIsInNjcm9sbCIsImJ1dHRvbiIsIndoaWxlSG92ZXIiLCJzY2FsZSIsImNvbG9yIiwiY3Vyc29yIiwid2hpbGVUYXAiLCJzdGlmZm5lc3MiLCJkYW1waW5nIiwibGluayIsImFycm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/homepage/Projects.js\n"));

/***/ })

});