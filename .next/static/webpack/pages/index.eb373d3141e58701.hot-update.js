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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"textFade\": function() { return /* binding */ textFade; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_images_pexels_nikolaos_dimou_2473183_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/images/pexels-nikolaos-dimou-2473183.jpg */ \"./public/images/pexels-nikolaos-dimou-2473183.jpg\");\n/* harmony import */ var _public_icons_south_FILL0_wght200_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/icons/south_FILL0_wght200_GRAD0_opsz48.png */ \"./public/icons/south_FILL0_wght200_GRAD0_opsz48.png\");\n/* harmony import */ var _ScrollingArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScrollingArrow */ \"./components/homepage/ScrollingArrow.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var utils_fadeoutanimations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/fadeoutanimations */ \"./utils/fadeoutanimations.js\");\n\n\n\n\n\n\n\n\n\nconst textFade = {\n    start: {\n        opacity: 0,\n        y: 5\n    },\n    end: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            type: \"tween\",\n            ease: \"linear\",\n            duration: 0.5,\n            delayChildren: 0.55,\n            staggerChildren: 0.3\n        }\n    }\n};\nconst Projects = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_6__.forwardRef)(_c = function Projects(param, ref) {\n    let { fadeOutStyle , setDisplayHamburgerNav  } = param;\n    const { initialForAnimation , animateForAnimation  } = (0,utils_fadeoutanimations__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(fadeOutStyle);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        ref: ref,\n        id: \"projects\",\n        className: \"column addHeight scrollSnap \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                className: \"imageStyle\",\n                priority: true,\n                src: _public_images_pexels_nikolaos_dimou_2473183_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                alt: \"black laptop with colors exploding out of it.\"\n            }, void 0, false, {\n                fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.aside, {\n                className: \"column textSectionLargeScreen\",\n                initial: initialForAnimation,\n                animate: animateForAnimation,\n                whileInView: fadeOutStyle === true ? undefined : \"end\",\n                variants: textFade,\n                transition: {\n                    staggerChildren: 0.75\n                },\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row widthEighty spaceBetween\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.h1, {\n                            variants: textFade,\n                            children: \"Projects\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.p, {\n                        className: \"widthEighty\",\n                        variants: textFade,\n                        children: [\n                            \" \",\n                            \"I take pride in delivering high-quality work that meets the needs of my clients and their users. Take a look at my portfolio to see some of my recent projects and get a sense of my style. I'm always excited to collaborate on new and exciting projects, so if you're interested in working with me, don't hesitate to reach out.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        href: \"/projectsPage\",\n                        onClick: ()=>setDisplayHamburgerNav(false),\n                        scroll: false,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.motion.button, {\n                            whileHover: {\n                                scale: 1.1,\n                                color: \"whitesmoke\",\n                                cursor: \"pointer\"\n                            },\n                            whileTap: {\n                                scale: 0.9\n                            },\n                            transition: {\n                                type: \"spring\",\n                                stiffness: 400,\n                                damping: 17\n                            },\n                            className: \"widthEighty\",\n                            variants: textFade,\n                            children: \"View\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ScrollingArrow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        link: \"#blogs\",\n                        arrow: _public_icons_south_FILL0_wght200_GRAD0_opsz48_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                    }, void 0, false, {\n                        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ashtonbennett/Desktop/projects/ashton_bennett_site/components/homepage/Projects.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n});\n_c1 = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c, _c1;\n$RefreshReg$(_c, \"Projects$forwardRef\");\n$RefreshReg$(_c1, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWVwYWdlL1Byb2plY3RzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNtRDtBQUNGO0FBQ2xDO0FBQ2pCO0FBQ21CO0FBQ2I7QUFDcUI7QUFFakQsTUFBTVMsV0FBVztJQUN0QkMsT0FBTztRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRTtJQUMxQkMsS0FBSztRQUNIRixTQUFTO1FBQ1RDLEdBQUc7UUFDSEUsWUFBWTtZQUNWQyxNQUFNO1lBQ05DLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxlQUFlO1lBQ2ZDLGlCQUFpQjtRQUNuQjtJQUNGO0FBQ0YsRUFBRTtBQUVGLE1BQU1DLHlCQUFXYixpREFBVUEsTUFBQyxTQUFTYSxTQUNuQyxLQUF3QyxFQUN4Q0MsR0FBRyxFQUNIO1FBRkEsRUFBRUMsYUFBWSxFQUFFQyx1QkFBc0IsRUFBRSxHQUF4QztJQUdBLE1BQU0sRUFBRUMsb0JBQW1CLEVBQUVDLG9CQUFtQixFQUFFLEdBQ2hEakIsbUVBQWlCQSxDQUFDYztJQUVwQixxQkFDRSw4REFBQ0k7UUFBUUwsS0FBS0E7UUFBS00sSUFBRztRQUFXQyxXQUFVOzswQkFDekMsOERBQUM1QixtREFBS0E7Z0JBQ0o0QixXQUFVO2dCQUNWQyxRQUFRO2dCQUNSQyxLQUFLN0Isd0ZBQWFBO2dCQUNsQjhCLEtBQUk7Ozs7OzswQkFHTiw4REFBQ3pCLHVEQUFZO2dCQUNYc0IsV0FBVTtnQkFDVkssU0FBU1Q7Z0JBQ1RuQixTQUFTb0I7Z0JBQ1RTLGFBQWFaLGlCQUFpQixJQUFJLEdBQUdhLFlBQVksS0FBSztnQkFDdERDLFVBQVUzQjtnQkFDVkssWUFBWTtvQkFBRUssaUJBQWlCO2dCQUFLOztvQkFFbkM7a0NBQ0QsOERBQUNrQjt3QkFBSVQsV0FBVTtrQ0FDYiw0RUFBQ3RCLG9EQUFTOzRCQUFDOEIsVUFBVTNCO3NDQUFVOzs7Ozs7Ozs7OztrQ0FFakMsOERBQUNILG1EQUFRO3dCQUFDc0IsV0FBVTt3QkFBY1EsVUFBVTNCOzs0QkFDekM7NEJBQUk7Ozs7Ozs7a0NBT1AsOERBQUNMLGtEQUFJQTt3QkFDSG9DLE1BQUs7d0JBQ0xDLFNBQVMsSUFBTWxCLHVCQUF1QixLQUFLO3dCQUMzQ21CLFFBQVEsS0FBSztrQ0FFYiw0RUFBQ3BDLHdEQUFhOzRCQUNac0MsWUFBWTtnQ0FDVkMsT0FBTztnQ0FDUEMsT0FBTztnQ0FDUEMsUUFBUTs0QkFDVjs0QkFDQUMsVUFBVTtnQ0FBRUgsT0FBTzs0QkFBSTs0QkFDdkIvQixZQUFZO2dDQUFFQyxNQUFNO2dDQUFVa0MsV0FBVztnQ0FBS0MsU0FBUzs0QkFBRzs0QkFDMUR0QixXQUFVOzRCQUNWUSxVQUFVM0I7c0NBQ1g7Ozs7Ozs7Ozs7O2tDQUlILDhEQUFDTix1REFBY0E7d0JBQUNnRCxNQUFNO3dCQUFVQyxPQUFPbEQsMEZBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJeEQ7O0FBRUEsK0RBQWVrQixRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaG9tZXBhZ2UvUHJvamVjdHMuanM/N2YxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBjb21wdXRlckltYWdlIGZyb20gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3BleGVscy1uaWtvbGFvcy1kaW1vdS0yNDczMTgzLmpwZ1wiO1xuaW1wb3J0IGRvd25BcnJvdyBmcm9tIFwiLi4vLi4vcHVibGljL2ljb25zL3NvdXRoX0ZJTEwwX3dnaHQyMDBfR1JBRDBfb3BzejQ4LnBuZ1wiO1xuaW1wb3J0IFNjcm9sbGluZ0Fycm93IGZyb20gXCIuL1Njcm9sbGluZ0Fycm93XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZhZGVvdXRhbmltYXRpb25zIGZyb20gXCJ1dGlscy9mYWRlb3V0YW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgY29uc3QgdGV4dEZhZGUgPSB7XG4gIHN0YXJ0OiB7IG9wYWNpdHk6IDAsIHk6IDUgfSxcbiAgZW5kOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgIHR5cGU6IFwidHdlZW5cIixcbiAgICAgIGVhc2U6IFwibGluZWFyXCIsXG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgZGVsYXlDaGlsZHJlbjogMC41NSxcbiAgICAgIHN0YWdnZXJDaGlsZHJlbjogMC4zLFxuICAgIH0sXG4gIH0sXG59O1xuXG5jb25zdCBQcm9qZWN0cyA9IGZvcndhcmRSZWYoZnVuY3Rpb24gUHJvamVjdHMoXG4gIHsgZmFkZU91dFN0eWxlLCBzZXREaXNwbGF5SGFtYnVyZ2VyTmF2IH0sXG4gIHJlZlxuKSB7XG4gIGNvbnN0IHsgaW5pdGlhbEZvckFuaW1hdGlvbiwgYW5pbWF0ZUZvckFuaW1hdGlvbiB9ID1cbiAgICBmYWRlb3V0YW5pbWF0aW9ucyhmYWRlT3V0U3R5bGUpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gcmVmPXtyZWZ9IGlkPVwicHJvamVjdHNcIiBjbGFzc05hbWU9XCJjb2x1bW4gYWRkSGVpZ2h0IHNjcm9sbFNuYXAgXCI+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VTdHlsZVwiXG4gICAgICAgIHByaW9yaXR5XG4gICAgICAgIHNyYz17Y29tcHV0ZXJJbWFnZX1cbiAgICAgICAgYWx0PVwiYmxhY2sgbGFwdG9wIHdpdGggY29sb3JzIGV4cGxvZGluZyBvdXQgb2YgaXQuXCJcbiAgICAgIC8+XG5cbiAgICAgIDxtb3Rpb24uYXNpZGVcbiAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uIHRleHRTZWN0aW9uTGFyZ2VTY3JlZW5cIlxuICAgICAgICBpbml0aWFsPXtpbml0aWFsRm9yQW5pbWF0aW9ufVxuICAgICAgICBhbmltYXRlPXthbmltYXRlRm9yQW5pbWF0aW9ufVxuICAgICAgICB3aGlsZUluVmlldz17ZmFkZU91dFN0eWxlID09PSB0cnVlID8gdW5kZWZpbmVkIDogXCJlbmRcIn1cbiAgICAgICAgdmFyaWFudHM9e3RleHRGYWRlfVxuICAgICAgICB0cmFuc2l0aW9uPXt7IHN0YWdnZXJDaGlsZHJlbjogMC43NSB9fVxuICAgICAgPlxuICAgICAgICB7XCIgXCJ9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdpZHRoRWlnaHR5IHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxtb3Rpb24uaDEgdmFyaWFudHM9e3RleHRGYWRlfT5Qcm9qZWN0czwvbW90aW9uLmgxPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1vdGlvbi5wIGNsYXNzTmFtZT1cIndpZHRoRWlnaHR5XCIgdmFyaWFudHM9e3RleHRGYWRlfT5cbiAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgSSB0YWtlIHByaWRlIGluIGRlbGl2ZXJpbmcgaGlnaC1xdWFsaXR5IHdvcmsgdGhhdCBtZWV0cyB0aGUgbmVlZHMgb2ZcbiAgICAgICAgICBteSBjbGllbnRzIGFuZCB0aGVpciB1c2Vycy4gVGFrZSBhIGxvb2sgYXQgbXkgcG9ydGZvbGlvIHRvIHNlZSBzb21lIG9mXG4gICAgICAgICAgbXkgcmVjZW50IHByb2plY3RzIGFuZCBnZXQgYSBzZW5zZSBvZiBteSBzdHlsZS4gSSZhcG9zO20gYWx3YXlzXG4gICAgICAgICAgZXhjaXRlZCB0byBjb2xsYWJvcmF0ZSBvbiBuZXcgYW5kIGV4Y2l0aW5nIHByb2plY3RzLCBzbyBpZiB5b3UmYXBvcztyZVxuICAgICAgICAgIGludGVyZXN0ZWQgaW4gd29ya2luZyB3aXRoIG1lLCBkb24mYXBvczt0IGhlc2l0YXRlIHRvIHJlYWNoIG91dC5cbiAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICBocmVmPVwiL3Byb2plY3RzUGFnZVwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0RGlzcGxheUhhbWJ1cmdlck5hdihmYWxzZSl9XG4gICAgICAgICAgc2Nyb2xsPXtmYWxzZX1cbiAgICAgICAgPlxuICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICB3aGlsZUhvdmVyPXt7XG4gICAgICAgICAgICAgIHNjYWxlOiAxLjEsXG4gICAgICAgICAgICAgIGNvbG9yOiBcIndoaXRlc21va2VcIixcbiAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB3aGlsZVRhcD17eyBzY2FsZTogMC45IH19XG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IHR5cGU6IFwic3ByaW5nXCIsIHN0aWZmbmVzczogNDAwLCBkYW1waW5nOiAxNyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwid2lkdGhFaWdodHlcIlxuICAgICAgICAgICAgdmFyaWFudHM9e3RleHRGYWRlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFZpZXdcbiAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG4gICAgICAgIDwvTGluaz5cbiAgICAgICAgPFNjcm9sbGluZ0Fycm93IGxpbms9e1wiI2Jsb2dzXCJ9IGFycm93PXtkb3duQXJyb3d9IC8+XG4gICAgICA8L21vdGlvbi5hc2lkZT5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJjb21wdXRlckltYWdlIiwiZG93bkFycm93IiwiU2Nyb2xsaW5nQXJyb3ciLCJMaW5rIiwiYW5pbWF0ZSIsIm1vdGlvbiIsImZvcndhcmRSZWYiLCJmYWRlb3V0YW5pbWF0aW9ucyIsInRleHRGYWRlIiwic3RhcnQiLCJvcGFjaXR5IiwieSIsImVuZCIsInRyYW5zaXRpb24iLCJ0eXBlIiwiZWFzZSIsImR1cmF0aW9uIiwiZGVsYXlDaGlsZHJlbiIsInN0YWdnZXJDaGlsZHJlbiIsIlByb2plY3RzIiwicmVmIiwiZmFkZU91dFN0eWxlIiwic2V0RGlzcGxheUhhbWJ1cmdlck5hdiIsImluaXRpYWxGb3JBbmltYXRpb24iLCJhbmltYXRlRm9yQW5pbWF0aW9uIiwic2VjdGlvbiIsImlkIiwiY2xhc3NOYW1lIiwicHJpb3JpdHkiLCJzcmMiLCJhbHQiLCJhc2lkZSIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInVuZGVmaW5lZCIsInZhcmlhbnRzIiwiZGl2IiwiaDEiLCJwIiwiaHJlZiIsIm9uQ2xpY2siLCJzY3JvbGwiLCJidXR0b24iLCJ3aGlsZUhvdmVyIiwic2NhbGUiLCJjb2xvciIsImN1cnNvciIsIndoaWxlVGFwIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImxpbmsiLCJhcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/homepage/Projects.js\n"));

/***/ })

});