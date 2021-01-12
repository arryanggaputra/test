(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./resources/js/src/Pages/Auth/Dashboard/index.tsx":
/*!*********************************************************!*\
  !*** ./resources/js/src/Pages/Auth/Dashboard/index.tsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ "./resources/js/src/components/Layout/index.tsx");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Button */ "./resources/js/src/components/Button/index.tsx");



function Dashboard() {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], { isSinglePage: true },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "p-5 rounded-md border border-gray-300 bg-gray-100 shadow-sm" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { className: "block" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "text-gray-700 font-bold" }, "Tambah Ujian Baru"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "email", onChange: function () { }, required: true, className: "mt-1 block w-full p-5 text-2xl", placeholder: "Masukan Judul Ujian" })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Tambahkan Ujian Baru"))));
}
/* harmony default export */ __webpack_exports__["default"] = (Dashboard);


/***/ }),

/***/ "./resources/js/src/components/Button/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Button/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Button = function (props) {
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", __assign({}, props, { className: "px-5 py-2 bg-green-400 mt-3 text-white" })));
};
/* harmony default export */ __webpack_exports__["default"] = (Button);


/***/ }),

/***/ "./resources/js/src/components/Layout/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Layout/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Navbar */ "./resources/js/src/components/Navbar/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Layout(props) {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Navbar__WEBPACK_IMPORTED_MODULE_0__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "container mx-auto max-w-screen-lg pt-5" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "flex flex-row" },
                !props.isSinglePage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "w-3/12" }),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: (props.isSinglePage ? 'w-full' : 'w-9/12 pl-5') + " " }, props.children)))));
}
/* harmony default export */ __webpack_exports__["default"] = (Layout);


/***/ }),

/***/ "./resources/js/src/components/Navbar/index.tsx":
/*!******************************************************!*\
  !*** ./resources/js/src/components/Navbar/index.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var Navbar = function () {
    var props = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["usePage"])().props;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null), admin = _a[0], setAdmin = _a[1];
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        setAdmin(props.admin);
    }, [props]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "bg-green-700 p-5 px-10 shadow-md" },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "container flex flex-row max-w-screen-lg mx-auto justify-between" },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "flex flex-row items-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", { className: "text-xl font-bold text-white" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { href: "/admin" }, "Admin Ujian")),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { href: "/admin/categories", className: "px-2 inline-block ml-2 rounded-sm bg-green-800 text-white hover:text-yellow-300" }, "Category"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { href: "/admin/exams", className: "px-2 inline-block ml-2 rounded-sm bg-green-800 text-white hover:text-yellow-300" }, "Ujian")),
            admin && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "text-white" },
                    "Hai, ", admin === null || admin === void 0 ? void 0 :
                    admin.name),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { className: " inline-block px-4 py-1 text-sm rounded-sm ml-3 bg-red-600 text-white", href: "/admin/logout" }, "Logout"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);


/***/ })

}]);