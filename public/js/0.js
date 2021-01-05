(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./resources/js/src/Pages/Login/index.tsx":
/*!************************************************!*\
  !*** ./resources/js/src/Pages/Login/index.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_AlertMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/AlertMessage */ "./resources/js/src/components/AlertMessage/index.tsx");
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Button */ "./resources/js/src/components/Button/index.tsx");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./resources/js/src/components/Layout/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





function Login() {
    var _this = this;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''), emailAddress = _a[0], setEmailAddress = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''), password = _b[0], setPassword = _b[1];
    var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (e) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            try {
                _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post('/admin/login', {
                    email: emailAddress,
                    password: password,
                });
            }
            catch (error) {
                console.log(error);
            }
            return [2 /*return*/];
        });
    }); }, [emailAddress, password]);
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], { isSinglePage: true },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: "w-2/6" },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_AlertMessage__WEBPACK_IMPORTED_MODULE_1__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", { method: "POST", onSubmit: onSubmit },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", { className: "block" },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", { className: "text-gray-700" }, "Email"),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", { type: "email", onChange: function (e) { return setEmailAddress(e.target.value); }, required: true, className: "mt-1 block w-full", placeholder: "Masukan Alamat E-mail" })),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", { className: "block" },
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", { className: "text-gray-700" }, "Password"),
                    react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", { type: "password", required: true, onChange: function (e) { return setPassword(e.target.value); }, className: "mt-1 block w-full", placeholder: "Masukan password" })),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Button__WEBPACK_IMPORTED_MODULE_2__["default"], null, "Wakanda")))));
}
/* harmony default export */ __webpack_exports__["default"] = (Login);


/***/ }),

/***/ "./resources/js/src/components/AlertMessage/index.tsx":
/*!************************************************************!*\
  !*** ./resources/js/src/components/AlertMessage/index.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var AlertMessage = function () {
    var flash = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["usePage"])().props.flash;
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, flash.message && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "bg-red-500 p-5 rounded-md text-white mb-5" }, flash.message))));
};
/* harmony default export */ __webpack_exports__["default"] = (AlertMessage);


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
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", { className: "text-xl font-bold text-white" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { href: "/" }, "Admin Ujian")),
            admin && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "text-white" },
                    "Hai, ", admin === null || admin === void 0 ? void 0 :
                    admin.name),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { className: " inline-block px-4 py-1 text-sm rounded-sm ml-3 bg-red-600 text-white", href: "/admin/logout" }, "Logout"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);


/***/ })

}]);