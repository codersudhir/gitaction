"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Watchlist",{

/***/ "./pages/Watchlist.jsx":
/*!*****************************!*\
  !*** ./pages/Watchlist.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nconst Watchlist = (param)=>{\n    let { data  } = param;\n    // const [data,setdata]=useState([])\n    // useEffect(() => {\n    //   let data=JSON.parse(localStorage.getItem(\"data\"))\n    //   setdata(data)\n    // }, [])\n    const handledelet = (el)=>{\n    // console.log(el)\n    // fetch(`http://localhost:8080/wishlist/${el.id}`, {\n    //   method: 'DELETE',\n    // })\n    // .then(res => res.json()) \n    // .then((res)=>console.log(res))\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.map((el)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                justifyContent: \"space-around\",\n                border: \"1px solid red\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Image, {\n                        src: el.Images,\n                        width: \"200px\",\n                        height: \"80px\",\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/Watchlist.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        style: {\n                            marginTop: \"30px\"\n                        },\n                        children: el.Title\n                    }, void 0, false, {\n                        fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/Watchlist.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        marginTop: \"20px\",\n                        onClick: ()=>handledelet(el),\n                        children: \"Remove from Wishlist\"\n                    }, void 0, false, {\n                        fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/Watchlist.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, el.imdbID, true, {\n                fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/Watchlist.jsx\",\n                lineNumber: 28,\n                columnNumber: 14\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/Watchlist.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Watchlist;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watchlist);\nvar _c;\n$RefreshReg$(_c, \"Watchlist\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XYXRjaGxpc3QuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBc0Q7QUFDN0I7QUFDRztBQUNzQjtBQUVsRCxNQUFNUSxZQUFZLFNBQVk7UUFBWCxFQUFDQyxLQUFJLEVBQUM7SUFDdkIsb0NBQW9DO0lBR3BDLG9CQUFvQjtJQUNwQixzREFBc0Q7SUFDdEQsa0JBQWtCO0lBQ2xCLFNBQVM7SUFFVCxNQUFNQyxjQUFZLENBQUNDLEtBQUs7SUFDdEIsa0JBQWtCO0lBQ2xCLHFEQUFxRDtJQUNyRCxzQkFBc0I7SUFDdEIsS0FBSztJQUNMLDRCQUE0QjtJQUM1QixpQ0FBaUM7SUFFbkM7SUFDQSxxQkFFRSw4REFBQ0M7a0JBQ0VILEtBQUtJLEdBQUcsQ0FBQyxDQUFDRixLQUFLO1lBQ2hCLHFCQUFPLDhEQUFDVixrREFBSUE7Z0JBQUNhLGdCQUFnQjtnQkFBZ0JDLFFBQU87O2tDQUNsRCw4REFBQ2IsbURBQUtBO3dCQUFDYyxLQUFLTCxHQUFHTSxNQUFNO3dCQUFFQyxPQUFNO3dCQUFRQyxRQUFRO3dCQUFRQyxLQUFJOzs7Ozs7a0NBQ3pELDhEQUFDQzt3QkFBR0MsT0FBTzs0QkFBQ0MsV0FBVTt3QkFBTTtrQ0FBSVosR0FBR2EsS0FBSzs7Ozs7O2tDQUV4Qyw4REFBQ3hCLG9EQUFNQTt3QkFBQ3VCLFdBQVc7d0JBQVFFLFNBQVMsSUFBSWYsWUFBWUM7a0NBQUs7Ozs7Ozs7ZUFKY0EsR0FBR2UsTUFBTTs7Ozs7UUFNcEY7Ozs7OztBQU1KO0tBbENNbEI7O0FBa0ROLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1dhdGNobGlzdC5qc3g/OTZkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIEZsZXgsIEltYWdlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IFdhdGNobGlzdCA9ICh7ZGF0YX0pID0+IHtcbiAgLy8gY29uc3QgW2RhdGEsc2V0ZGF0YV09dXNlU3RhdGUoW10pXG4gIFxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgbGV0IGRhdGE9SlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGFcIikpXG4gIC8vICAgc2V0ZGF0YShkYXRhKVxuICAvLyB9LCBbXSlcblxuICBjb25zdCBoYW5kbGVkZWxldD0oZWwpPT57XG4gICAgLy8gY29uc29sZS5sb2coZWwpXG4gICAgLy8gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC93aXNobGlzdC8ke2VsLmlkfWAsIHtcbiAgICAvLyAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgLy8gfSlcbiAgICAvLyAudGhlbihyZXMgPT4gcmVzLmpzb24oKSkgXG4gICAgLy8gLnRoZW4oKHJlcyk9PmNvbnNvbGUubG9nKHJlcykpXG5cbiAgfVxuICByZXR1cm4gKFxuICBcbiAgICA8ZGl2ID5cbiAgICAgIHtkYXRhLm1hcCgoZWwpPT57XG4gICAgICByZXR1cm4gPEZsZXgganVzdGlmeUNvbnRlbnQ9e1wic3BhY2UtYXJvdW5kXCJ9IGJvcmRlcj1cIjFweCBzb2xpZCByZWRcIiBrZXk9e2VsLmltZGJJRH0gPlxuICAgICAgICA8SW1hZ2Ugc3JjPXtlbC5JbWFnZXN9IHdpZHRoPVwiMjAwcHhcIiBoZWlnaHQ9e1wiODBweFwifSBhbHQ9XCJcIiAvPlxuICAgICAgICA8aDEgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzMHB4XCJ9fT57ZWwuVGl0bGV9PC9oMT5cbiAgICAgIFxuICAgICAgICA8QnV0dG9uIG1hcmdpblRvcD17XCIyMHB4XCJ9IG9uQ2xpY2s9eygpPT5oYW5kbGVkZWxldChlbCl9PlJlbW92ZSBmcm9tIFdpc2hsaXN0PC9CdXR0b24+XG4gICAgICA8L0ZsZXg+XG4gICAgfSl9XG5cbiAgICA8L2Rpdj5cbiAgICBcbiAgXG4gIClcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7IFxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCAoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC93aXNobGlzdCcpXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gIC8vIFRoZSBuZXh0IGxpbmUgd2lsbCBvbmx5IGJlIGxvZ2dlZCBvbiB0aGUgc2VydmVyIGFuZCBuZXZlciBvbiB0aGUgYnJvd3NlciBjb25zb2xlIGV2ZW4gaWYgd2UgbWFrZSBcbiAgLy8gY2xpZW50LXNpZGUgbmF2aWdhdGlvbi5cbiAgLy8gVGhpcyBjb25maXJtcyB0aGF0IGBnZXRTZXJ2ZXJTaWRlUHJvcHNgIGlzIGd1YXJhbnRlZWQgdG8gcnVuIG9uIHRoZSBzZXJ2ZXIgYW5kIG5ldmVyIG9uIHRoZSBjbGllbnQgKG9yIGJyb3dzZXIpLlxuICBcblxuICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBkYXRhXG4gICAgICB9XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFdhdGNobGlzdCJdLCJuYW1lcyI6WyJCdXR0b24iLCJGbGV4IiwiSW1hZ2UiLCJheGlvcyIsIkxpbmsiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2F0Y2hsaXN0IiwiZGF0YSIsImhhbmRsZWRlbGV0IiwiZWwiLCJkaXYiLCJtYXAiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlciIsInNyYyIsIkltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJzdHlsZSIsIm1hcmdpblRvcCIsIlRpdGxlIiwib25DbGljayIsImltZGJJRCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Watchlist.jsx\n"));

/***/ })

});