"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/Wallet-provider.tsx":
/*!*********************************!*\
  !*** ./app/Wallet-provider.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GridWallet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/../node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3modal/wagmi/react */ \"(app-pages-browser)/../node_modules/@web3modal/wagmi/dist/esm/exports/react.js\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! wagmi */ \"(app-pages-browser)/../node_modules/wagmi/dist/index.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/../node_modules/viem/_esm/chains/definitions/mainnet.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/../node_modules/viem/_esm/chains/definitions/arbitrum.js\");\n/* harmony import */ var wagmi_chains__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/chains */ \"(app-pages-browser)/../node_modules/viem/_esm/chains/definitions/goerli.js\");\n/* harmony import */ var _dashboard_Anvil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/Anvil */ \"(app-pages-browser)/./app/dashboard/Anvil.tsx\");\n/* harmony import */ var _theme_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme-provider */ \"(app-pages-browser)/./app/theme-provider.tsx\");\n/* harmony import */ var _dashboard_Arbitrum_Anvil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/Arbitrum_Anvil */ \"(app-pages-browser)/./app/dashboard/Arbitrum_Anvil.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n// 1. Get projectId\nconst projectId = \"76e490f32ea4fd8fc7071f1d3ed3cc6d\";\n\n\n\n// 2. Create wagmiConfig\nconst metadata = {\n    name: \"Web3Modal\",\n    description: \"Web3Modal Example\",\n    url: \"https://web3modal.com\",\n    icons: [\n        \"https://avatars.githubusercontent.com/u/37784886\"\n    ]\n};\n//yeah this should definitely be in layhout\nconst chains = [\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_5__.mainnet,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_6__.arbitrum,\n    wagmi_chains__WEBPACK_IMPORTED_MODULE_7__.goerli,\n    _dashboard_Anvil__WEBPACK_IMPORTED_MODULE_2__.Anvil,\n    _dashboard_Arbitrum_Anvil__WEBPACK_IMPORTED_MODULE_4__.Arbitrum_Anvil\n];\nconst wagmiConfig = (0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_1__.defaultWagmiConfig)({\n    chains,\n    projectId,\n    metadata\n});\n// 3. Create modal\n(0,_web3modal_wagmi_react__WEBPACK_IMPORTED_MODULE_1__.createWeb3Modal)({\n    wagmiConfig,\n    projectId,\n    chains,\n    themeMode: \"light\",\n    themeVariables: {\n        \"--w3m-color-mix\": \"#00DCFF\",\n        \"--w3m-color-mix-strength\": 20\n    }\n});\nfunction GridWallet(param) {\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_8__.WagmiConfig, {\n        config: wagmiConfig,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_theme_provider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            children: children\n        }, void 0, false, {\n            fileName: \"/home/scientific_peach/fake/work/nuked_defi/nuked_defi/src/app/Wallet-provider.tsx\",\n            lineNumber: 33,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/scientific_peach/fake/work/nuked_defi/nuked_defi/src/app/Wallet-provider.tsx\",\n        lineNumber: 32,\n        columnNumber: 9\n    }, this);\n}\n_c = GridWallet;\nvar _c;\n$RefreshReg$(_c, \"GridWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9XYWxsZXQtcHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytGO0FBQzVEO0FBQ3FCO0FBQ3hELG1CQUFtQjtBQUNuQixNQUFNTSxZQUFZO0FBQ3VCO0FBQ0c7QUFDZTtBQUMzRCx3QkFBd0I7QUFDeEIsTUFBTUksV0FBVztJQUNiQyxNQUFNO0lBQ05DLGFBQWE7SUFDYkMsS0FBSztJQUNMQyxPQUFPO1FBQUM7S0FBbUQ7QUFDL0Q7QUFDQSwyQ0FBMkM7QUFDM0MsTUFBTUMsU0FBUztJQUFDWCxpREFBT0E7SUFBRUQsa0RBQVFBO0lBQUVFLGdEQUFNQTtJQUFFRSxtREFBS0E7SUFBRUUscUVBQWNBO0NBQUM7QUFDakUsTUFBTU8sY0FBY2YsMEVBQWtCQSxDQUFDO0lBQUVjO0lBQVFUO0lBQVdJO0FBQVM7QUFFckUsa0JBQWtCO0FBQ2xCVix1RUFBZUEsQ0FBQztJQUNaZ0I7SUFBYVY7SUFBV1M7SUFBUUUsV0FBVztJQUMzQ0MsZ0JBQWdCO1FBQ1osbUJBQW1CO1FBQ25CLDRCQUE0QjtJQUNoQztBQUNKO0FBRWUsU0FBU0MsV0FBVyxLQUFpQjtRQUFqQixFQUFFQyxRQUFRLEVBQU8sR0FBakI7SUFDL0IscUJBQ0ksOERBQUNsQiw4Q0FBV0E7UUFBQ21CLFFBQVFMO2tCQUNqQiw0RUFBQ1IsdURBQWFBO3NCQUNUWTs7Ozs7Ozs7Ozs7QUFJakI7S0FSd0JEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9XYWxsZXQtcHJvdmlkZXIudHN4P2I5YWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IGNyZWF0ZVdlYjNNb2RhbCwgZGVmYXVsdFdhZ21pQ29uZmlnLCB1c2VXZWIzTW9kYWxUaGVtZSB9IGZyb20gJ0B3ZWIzbW9kYWwvd2FnbWkvcmVhY3QnXG5pbXBvcnQgeyBXYWdtaUNvbmZpZyB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IHsgYXJiaXRydW0sIG1haW5uZXQsIGdvZXJsaSB9IGZyb20gJ3dhZ21pL2NoYWlucydcbi8vIDEuIEdldCBwcm9qZWN0SWRcbmNvbnN0IHByb2plY3RJZCA9ICc3NmU0OTBmMzJlYTRmZDhmYzcwNzFmMWQzZWQzY2M2ZCdcbmltcG9ydCB7IEFudmlsIH0gZnJvbSAnLi9kYXNoYm9hcmQvQW52aWwnXG5pbXBvcnQgVGhlbWVQcm92aWRlciBmcm9tICcuL3RoZW1lLXByb3ZpZGVyJ1xuaW1wb3J0IHsgQXJiaXRydW1fQW52aWwgfSBmcm9tICcuL2Rhc2hib2FyZC9BcmJpdHJ1bV9BbnZpbCdcbi8vIDIuIENyZWF0ZSB3YWdtaUNvbmZpZ1xuY29uc3QgbWV0YWRhdGEgPSB7XG4gICAgbmFtZTogJ1dlYjNNb2RhbCcsXG4gICAgZGVzY3JpcHRpb246ICdXZWIzTW9kYWwgRXhhbXBsZScsXG4gICAgdXJsOiAnaHR0cHM6Ly93ZWIzbW9kYWwuY29tJyxcbiAgICBpY29uczogWydodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMzc3ODQ4ODYnXVxufVxuLy95ZWFoIHRoaXMgc2hvdWxkIGRlZmluaXRlbHkgYmUgaW4gbGF5aG91dFxuY29uc3QgY2hhaW5zID0gW21haW5uZXQsIGFyYml0cnVtLCBnb2VybGksIEFudmlsLCBBcmJpdHJ1bV9BbnZpbF1cbmNvbnN0IHdhZ21pQ29uZmlnID0gZGVmYXVsdFdhZ21pQ29uZmlnKHsgY2hhaW5zLCBwcm9qZWN0SWQsIG1ldGFkYXRhIH0pXG5cbi8vIDMuIENyZWF0ZSBtb2RhbFxuY3JlYXRlV2ViM01vZGFsKHtcbiAgICB3YWdtaUNvbmZpZywgcHJvamVjdElkLCBjaGFpbnMsIHRoZW1lTW9kZTogJ2xpZ2h0JyxcbiAgICB0aGVtZVZhcmlhYmxlczoge1xuICAgICAgICAnLS13M20tY29sb3ItbWl4JzogJyMwMERDRkYnLFxuICAgICAgICAnLS13M20tY29sb3ItbWl4LXN0cmVuZ3RoJzogMjBcbiAgICB9XG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHcmlkV2FsbGV0KHsgY2hpbGRyZW4gfTogYW55KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPFdhZ21pQ29uZmlnIGNvbmZpZz17d2FnbWlDb25maWd9PlxuICAgICAgICAgICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICAgICA8L1dhZ21pQ29uZmlnPlxuICAgIClcbn0iXSwibmFtZXMiOlsiY3JlYXRlV2ViM01vZGFsIiwiZGVmYXVsdFdhZ21pQ29uZmlnIiwiV2FnbWlDb25maWciLCJhcmJpdHJ1bSIsIm1haW5uZXQiLCJnb2VybGkiLCJwcm9qZWN0SWQiLCJBbnZpbCIsIlRoZW1lUHJvdmlkZXIiLCJBcmJpdHJ1bV9BbnZpbCIsIm1ldGFkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJjaGFpbnMiLCJ3YWdtaUNvbmZpZyIsInRoZW1lTW9kZSIsInRoZW1lVmFyaWFibGVzIiwiR3JpZFdhbGxldCIsImNoaWxkcmVuIiwiY29uZmlnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/Wallet-provider.tsx\n"));

/***/ })

});