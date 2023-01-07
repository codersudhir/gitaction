"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);\n_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Home({ data  }) {\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    style: {\n                        textAlign: \"center\",\n                        fontSize: \"40px\"\n                    },\n                    children: \"movies App\"\n                }, void 0, false, {\n                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                    lineNumber: 11,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n                    templateColumns: \"repeat(4, 1fr)\",\n                    gap: 25,\n                    textAlign: \"center\",\n                    children: data.map((el)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.GridItem, {\n                            border: \"1px solid black\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {\n                                    src: el.Images[2],\n                                    height: \"300px\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                                    lineNumber: 15,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                    children: el.Title\n                                }, void 0, false, {\n                                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                                    lineNumber: 16,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: el.Genre\n                                }, void 0, false, {\n                                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                                    lineNumber: 17,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: el.imdbRating\n                                }, void 0, false, {\n                                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                                    lineNumber: 18,\n                                    columnNumber: 11\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: el.imdbVotes\n                                }, void 0, false, {\n                                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                                    lineNumber: 19,\n                                    columnNumber: 12\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {\n                                    href: `${el.imdbID}`,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                                        style: {\n                                            backgroundColor: \"black\",\n                                            color: \"white\"\n                                        },\n                                        children: \"Watch movie\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                                        lineNumber: 21,\n                                        columnNumber: 12\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                                    lineNumber: 20,\n                                    columnNumber: 12\n                                }, this)\n                            ]\n                        }, el.imdbID, true, {\n                            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                            lineNumber: 14,\n                            columnNumber: 16\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/sudhir/Desktop/gitation/gitaction/pages/index.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        }, this)\n    }, void 0, false);\n}\nasync function getServerSideProps() {\n    const res = await fetch(\"https://movies-database-gold.vercel.app/movies\");\n    const data = await res.json();\n    // The next line will only be logged on the server and never on the browser console even if we make \n    // client-side navigation.\n    // This confirms that `getServerSideProps` is guaranteed to run on the server and never on the client (or browser).\n    return {\n        props: {\n            data\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBbUY7QUFDM0M7QUFHekIsU0FBU1EsS0FBSyxFQUFDQyxLQUFJLEVBQUMsRUFBRTtJQUVuQ0MsUUFBUUMsR0FBRyxDQUFDRjtJQUNaLHFCQUNFO2tCQUNBLDRFQUFDRzs7OEJBQ0MsOERBQUNDO29CQUFHQyxPQUFPO3dCQUFDQyxXQUFVO3dCQUFTQyxVQUFTO29CQUFNOzhCQUFHOzs7Ozs7OEJBQ2pELDhEQUFDZCxrREFBSUE7b0JBQUNlLGlCQUFnQjtvQkFBaUJDLEtBQUs7b0JBQUtILFdBQVc7OEJBQzNETixLQUFLVSxHQUFHLENBQUMsQ0FBQ0MsS0FBSzt3QkFDZCxxQkFBTyw4REFBQ2pCLHNEQUFRQTs0QkFBQ2tCLFFBQU87OzhDQUN0Qiw4REFBQ2pCLG1EQUFLQTtvQ0FBQ2tCLEtBQUtGLEdBQUdHLE1BQU0sQ0FBQyxFQUFFO29DQUFHQyxRQUFROzs7Ozs7OENBQ25DLDhEQUFDQzs4Q0FBSUwsR0FBR00sS0FBSzs7Ozs7OzhDQUNiLDhEQUFDQzs4Q0FBR1AsR0FBR1EsS0FBSzs7Ozs7OzhDQUNaLDhEQUFDRDs4Q0FBR1AsR0FBR1MsVUFBVTs7Ozs7OzhDQUNoQiw4REFBQ0Y7OENBQUdQLEdBQUdVLFNBQVM7Ozs7Ozs4Q0FDaEIsOERBQUN6QixrREFBSUE7b0NBQUMwQixNQUFNLENBQUMsRUFBRVgsR0FBR1ksTUFBTSxDQUFDLENBQUM7OENBQzFCLDRFQUFDaEMsb0RBQU1BO3dDQUFDYyxPQUFPOzRDQUFDbUIsaUJBQWdCOzRDQUFRQyxPQUFNO3dDQUFPO2tEQUFHOzs7Ozs7Ozs7Ozs7MkJBUFhkLEdBQUdZLE1BQU07Ozs7O29CQVUzRDs7Ozs7Ozs7Ozs7OztBQU9OLENBQUM7QUFFTSxlQUFlRyxxQkFBcUI7SUFDekMsTUFBTUMsTUFBTSxNQUFNQyxNQUFPO0lBQ3pCLE1BQU01QixPQUFPLE1BQU0yQixJQUFJRSxJQUFJO0lBRTNCLG9HQUFvRztJQUNwRywwQkFBMEI7SUFDMUIsbUhBQW1IO0lBR25ILE9BQU87UUFDSEMsT0FBTztZQUNIOUI7UUFDSjtJQUNKO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL21vdmllc2FwcC8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBGbGV4LCBHcmlkLCBHcmlkSXRlbSwgSW1hZ2UsIExpbmssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7ZGF0YX0pIHtcbiBcbiAgY29uc29sZS5sb2coZGF0YSlcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgIDxkaXY+XG4gICAgICA8aDEgc3R5bGU9e3t0ZXh0QWxpZ246XCJjZW50ZXJcIixmb250U2l6ZTpcIjQwcHhcIn19Pm1vdmllcyBBcHA8L2gxPlxuICAgICAgPEdyaWQgdGVtcGxhdGVDb2x1bW5zPSdyZXBlYXQoNCwgMWZyKScgZ2FwPXsyNX0gIHRleHRBbGlnbj17XCJjZW50ZXJcIn0gPlxuICAgICAge2RhdGEubWFwKChlbCk9PntcbiAgICAgICAgcmV0dXJuIDxHcmlkSXRlbSBib3JkZXI9XCIxcHggc29saWQgYmxhY2tcIiAga2V5PXtlbC5pbWRiSUR9PlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2VsLkltYWdlc1syXX0gIGhlaWdodD17XCIzMDBweFwifSAvPlxuICAgICAgICAgIDxoND57ZWwuVGl0bGV9PC9oND5cbiAgICAgICAgICA8cD57ZWwuR2VucmV9PC9wPlxuICAgICAgICAgIDxwPntlbC5pbWRiUmF0aW5nfTwvcD5cbiAgICAgICAgICAgPHA+e2VsLmltZGJWb3Rlc308L3A+XG4gICAgICAgICAgIDxMaW5rIGhyZWY9e2Ake2VsLmltZGJJRH1gfT5cbiAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjpcImJsYWNrXCIsY29sb3I6XCJ3aGl0ZVwifX0+V2F0Y2ggbW92aWU8L0J1dHRvbj48L0xpbms+XG4gICAgICAgICAgXG4gICAgICAgIDwvR3JpZEl0ZW0+XG4gICAgICB9KX1cbiAgICAgIDwvR3JpZD5cbiAgICAgIFxuICAgIDwvZGl2PlxuICAgIDwvPlxuICApXG4gIFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkgeyBcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2ggKCdodHRwczovL21vdmllcy1kYXRhYmFzZS1nb2xkLnZlcmNlbC5hcHAvbW92aWVzJylcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgLy8gVGhlIG5leHQgbGluZSB3aWxsIG9ubHkgYmUgbG9nZ2VkIG9uIHRoZSBzZXJ2ZXIgYW5kIG5ldmVyIG9uIHRoZSBicm93c2VyIGNvbnNvbGUgZXZlbiBpZiB3ZSBtYWtlIFxuICAvLyBjbGllbnQtc2lkZSBuYXZpZ2F0aW9uLlxuICAvLyBUaGlzIGNvbmZpcm1zIHRoYXQgYGdldFNlcnZlclNpZGVQcm9wc2AgaXMgZ3VhcmFudGVlZCB0byBydW4gb24gdGhlIHNlcnZlciBhbmQgbmV2ZXIgb24gdGhlIGNsaWVudCAob3IgYnJvd3NlcikuXG4gIFxuXG4gIHJldHVybiB7XG4gICAgICBwcm9wczoge1xuICAgICAgICAgIGRhdGFcbiAgICAgIH1cbiAgfVxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJGbGV4IiwiR3JpZCIsIkdyaWRJdGVtIiwiSW1hZ2UiLCJMaW5rIiwiVGV4dCIsInVzZVJvdXRlciIsIkhvbWUiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwic3R5bGUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsInRlbXBsYXRlQ29sdW1ucyIsImdhcCIsIm1hcCIsImVsIiwiYm9yZGVyIiwic3JjIiwiSW1hZ2VzIiwiaGVpZ2h0IiwiaDQiLCJUaXRsZSIsInAiLCJHZW5yZSIsImltZGJSYXRpbmciLCJpbWRiVm90ZXMiLCJocmVmIiwiaW1kYklEIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();