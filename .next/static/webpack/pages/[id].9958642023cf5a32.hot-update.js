"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[id]",{

/***/ "./pages/[id].jsx":
/*!************************!*\
  !*** ./pages/[id].jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Movie = (param)=>{\n    let { data1  } = param;\n    _s();\n    const [data, setdata] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(data1);\n    const { id  } = router.query;\n    const getdata = (id)=>{\n        fetch(\"https://movies-database-gold.vercel.app/movies?imdbID=\".concat(id)).then((res)=>res.json()).then((res)=>console.log(setdata(res)));\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        getdata(id);\n    }, [\n        id\n    ]);\n    const handleadd = (el)=>{\n    // fetch(`http://localhost:8080/wishlist`,{\n    //   method:\"POST\",\n    //   headers: {\n    //     'Content-type': 'application/json'\n    //    },\n    //    body:JSON.stringify(data)\n    // })\n    // .then((res)=>res.json())\n    // .then((res)=>console.log(res))\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Grid, {\n            textAlign: \"center\",\n            alignContent: \"center\",\n            children: data.map((el)=>{\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.GridItem, {\n                    border: \"1px solid black\",\n                    marginTop: \"50px\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {\n                            src: el.Images[2],\n                            width: \"800px\",\n                            height: \"500px\",\n                            marginLeft: \"280px\"\n                        }, void 0, false, {\n                            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                            children: el.Title\n                        }, void 0, false, {\n                            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.Genre\n                        }, void 0, false, {\n                            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.imdbRating\n                        }, void 0, false, {\n                            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: el.imdbVotes\n                        }, void 0, false, {\n                            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n                            lineNumber: 55,\n                            columnNumber: 12\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                            onClick: ()=>handleadd(el),\n                            children: \"ADD TO WATCHLIST\"\n                        }, void 0, false, {\n                            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n                            lineNumber: 56,\n                            columnNumber: 12\n                        }, undefined)\n                    ]\n                }, el.imdbID, true, {\n                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n                    lineNumber: 50,\n                    columnNumber: 16\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n            lineNumber: 48,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/[id].jsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Movie, \"exRBnm84lsKLGvak3Rd8Zzm2R9M=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Movie;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Movie);\nvar _c;\n$RefreshReg$(_c, \"Movie\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9baWRdLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFnRTtBQUN2QztBQUNHO0FBQ1c7QUFDVztBQUNyQjtBQUU3QixNQUFNVyxRQUFRLFNBQWE7UUFBWixFQUFDQyxNQUFLLEVBQUM7O0lBQ3BCLE1BQU0sQ0FBQ0MsTUFBS0MsUUFBUSxHQUFDTCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ2hDLE1BQU1NLFNBQU9ULHNEQUFTQTtJQUN0QlUsUUFBUUMsR0FBRyxDQUFDTDtJQUNaLE1BQU0sRUFBQ00sR0FBRSxFQUFDLEdBQUNILE9BQU9JLEtBQUs7SUFFdkIsTUFBTUMsVUFBUSxDQUFDRixLQUFLO1FBQ2xCRyxNQUFNLHlEQUE0RCxPQUFISCxLQUM5REksSUFBSSxDQUFDLENBQUNDLE1BQU1BLElBQUlDLElBQUksSUFDcEJGLElBQUksQ0FBQyxDQUFDQyxNQUFNUCxRQUFRQyxHQUFHLENBQUNILFFBQVFTO0lBR25DO0lBQ0FmLGdEQUFTQSxDQUFDLElBQUk7UUFDWlksUUFBUUY7SUFDVixHQUFFO1FBQUNBO0tBQUc7SUFLTixNQUFNTyxZQUFVLENBQUNDLEtBQUs7SUFFcEIsMkNBQTJDO0lBQzNDLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLFFBQVE7SUFDUiwrQkFBK0I7SUFDL0IsS0FBSztJQUNMLDJCQUEyQjtJQUMzQixpQ0FBaUM7SUFHbkM7SUFJQSxxQkFDRSw4REFBQ0M7a0JBRUUsNEVBQUMxQixrREFBSUE7WUFBRTJCLFdBQVc7WUFBVUMsY0FBYTtzQkFDekNoQixLQUFLaUIsR0FBRyxDQUFDLENBQUNKLEtBQUs7Z0JBQ2QscUJBQU8sOERBQUN4QixzREFBUUE7b0JBQUM2QixRQUFPO29CQUFtQ0MsV0FBVTs7c0NBQ25FLDhEQUFDN0IsbURBQUtBOzRCQUFDOEIsS0FBS1AsR0FBR1EsTUFBTSxDQUFDLEVBQUU7NEJBQUVDLE9BQU07NEJBQVFDLFFBQVE7NEJBQVNDLFlBQVc7Ozs7OztzQ0FDcEUsOERBQUNDO3NDQUFJWixHQUFHYSxLQUFLOzs7Ozs7c0NBQ2IsOERBQUNDO3NDQUFHZCxHQUFHZSxLQUFLOzs7Ozs7c0NBQ1osOERBQUNEO3NDQUFHZCxHQUFHZ0IsVUFBVTs7Ozs7O3NDQUNoQiw4REFBQ0Y7c0NBQUdkLEdBQUdpQixTQUFTOzs7Ozs7c0NBQ2hCLDhEQUFDM0Msb0RBQU1BOzRCQUFDNEMsU0FBUyxJQUFJbkIsVUFBVUM7c0NBQU87Ozs7Ozs7bUJBTk9BLEdBQUdtQixNQUFNOzs7OztZQVEzRDs7Ozs7Ozs7Ozs7QUFLTjtHQXZETWxDOztRQUVTTCxrREFBU0E7OztLQUZsQks7O0FBZ0VOLCtEQUFlQSxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1tpZF0uanN4PzY4MWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBHcmlkLCBHcmlkSXRlbSwgSW1hZ2UgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL05hdmJhcidcblxuY29uc3QgTW92aWUgPSAoe2RhdGExfSkgPT4ge1xuICBjb25zdCBbZGF0YSxzZXRkYXRhXT11c2VTdGF0ZShbXSlcbiAgY29uc3Qgcm91dGVyPXVzZVJvdXRlcigpXG4gIGNvbnNvbGUubG9nKGRhdGExKVxuICBjb25zdCB7aWR9PXJvdXRlci5xdWVyeVxuXG4gIGNvbnN0IGdldGRhdGE9KGlkKT0+e1xuICAgIGZldGNoKGBodHRwczovL21vdmllcy1kYXRhYmFzZS1nb2xkLnZlcmNlbC5hcHAvbW92aWVzP2ltZGJJRD0ke2lkfWApXG4gICAgLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAgLnRoZW4oKHJlcyk9PmNvbnNvbGUubG9nKHNldGRhdGEocmVzKSkpXG5cblxuICB9XG4gIHVzZUVmZmVjdCgoKT0+e1xuICAgIGdldGRhdGEoaWQpXG4gIH0sW2lkXSlcbiAgXG5cbiAgXG4gXG4gIGNvbnN0IGhhbmRsZWFkZD0oZWwpPT57XG4gIFxuICAgIC8vIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvd2lzaGxpc3RgLHtcbiAgICAvLyAgIG1ldGhvZDpcIlBPU1RcIixcbiAgICAvLyAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIC8vICAgIH0sXG4gICAgLy8gICAgYm9keTpKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIC8vIH0pXG4gICAgLy8gLnRoZW4oKHJlcyk9PnJlcy5qc29uKCkpXG4gICAgLy8gLnRoZW4oKHJlcyk9PmNvbnNvbGUubG9nKHJlcykpXG4gICAgXG5cbiAgfVxuICBcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgXG4gICAgICAgPEdyaWQgIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gYWxpZ25Db250ZW50PVwiY2VudGVyXCIgPlxuICAgICAge2RhdGEubWFwKChlbCk9PntcbiAgICAgICAgcmV0dXJuIDxHcmlkSXRlbSBib3JkZXI9XCIxcHggc29saWQgYmxhY2tcIiAga2V5PXtlbC5pbWRiSUR9IG1hcmdpblRvcD1cIjUwcHhcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtlbC5JbWFnZXNbMl19IHdpZHRoPVwiODAwcHhcIiBoZWlnaHQ9e1wiNTAwcHhcIn0gbWFyZ2luTGVmdD1cIjI4MHB4XCIgLz5cbiAgICAgICAgICA8aDQ+e2VsLlRpdGxlfTwvaDQ+XG4gICAgICAgICAgPHA+e2VsLkdlbnJlfTwvcD5cbiAgICAgICAgICA8cD57ZWwuaW1kYlJhdGluZ308L3A+XG4gICAgICAgICAgIDxwPntlbC5pbWRiVm90ZXN9PC9wPlxuICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpPT5oYW5kbGVhZGQoZWwpfSAgPkFERCBUTyBXQVRDSExJU1Q8L0J1dHRvbj5cbiAgICAgICAgPC9HcmlkSXRlbT5cbiAgICAgIH0pfVxuICAgICAgPC9HcmlkPlxuICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllXG4iXSwibmFtZXMiOlsiQnV0dG9uIiwiR3JpZCIsIkdyaWRJdGVtIiwiSW1hZ2UiLCJheGlvcyIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwiTW92aWUiLCJkYXRhMSIsImRhdGEiLCJzZXRkYXRhIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsImlkIiwicXVlcnkiLCJnZXRkYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImhhbmRsZWFkZCIsImVsIiwiZGl2IiwidGV4dEFsaWduIiwiYWxpZ25Db250ZW50IiwibWFwIiwiYm9yZGVyIiwibWFyZ2luVG9wIiwic3JjIiwiSW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiaDQiLCJUaXRsZSIsInAiLCJHZW5yZSIsImltZGJSYXRpbmciLCJpbWRiVm90ZXMiLCJvbkNsaWNrIiwiaW1kYklEIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[id].jsx\n"));

/***/ })

});