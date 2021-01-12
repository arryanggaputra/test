(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/src/Pages/Auth/Categories/index.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/src/Pages/Auth/Categories/index.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Button */ "./resources/js/src/components/Button/index.tsx");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ "./resources/js/src/components/Layout/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_mde__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-mde */ "./node_modules/react-mde/lib/js/index.js");
/* harmony import */ var react_mde__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_mde__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mde/lib/styles/css/react-mde-all.css */ "./node_modules/react-mde/lib/styles/css/react-mde-all.css");
/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__);








var Categories = function (props) {
    var isEdit = props.isEdit, category = props.category, categories = props.categories;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(isEdit ? category === null || category === void 0 ? void 0 : category.description : ''), descriptionValue = _a[0], setDescriptionValue = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(isEdit ? category === null || category === void 0 ? void 0 : category.title : ''), title = _b[0], setTitle = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('write'), selectedTab = _c[0], setSelectedTab = _c[1];
    var resetState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
        setDescriptionValue('');
        setTitle('');
    }, []);
    var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
        if (isEdit) {
            _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__["Inertia"].put('/admin/categories/' + (category === null || category === void 0 ? void 0 : category.id), {
                title: title,
                description: descriptionValue,
            });
        }
        else {
            _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__["Inertia"].post('/admin/categories', {
                title: title,
                description: descriptionValue,
            });
        }
        resetState();
    }, [title, descriptionValue, isEdit, category]);
    var onDelete = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (id) {
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_5__["Inertia"].delete('/admin/categories/' + id);
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], { isSinglePage: true },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "p-5 rounded-md border border-gray-300 bg-gray-100 shadow-sm" },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", { className: "block" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", { type: "email", value: title, onChange: function (e) { return setTitle(e.target.value); }, required: true, className: "w-full", placeholder: "Masukan Judul Kategori" })),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", { className: "block mt-5" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", { className: "text-gray-700 font-bold" }, "Deskripsi"),
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_mde__WEBPACK_IMPORTED_MODULE_3___default.a, { value: descriptionValue, onChange: setDescriptionValue, selectedTab: selectedTab, onTabChange: setSelectedTab, generateMarkdownPreview: function (markdown) {
                        return Promise.resolve(react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_4___default.a, { source: markdown }));
                    }, childProps: {
                        writeButton: {
                            tabIndex: -1,
                        },
                    } })),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Button__WEBPACK_IMPORTED_MODULE_0__["default"], { onClick: handleSubmit }, isEdit ? 'Ubah Kategori' : 'Simpan Kategori')),
        !isEdit && (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "mt-5" },
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "flex flex-col" },
                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" },
                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8" },
                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg" },
                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("table", { className: "min-w-full divide-y divide-gray-200" },
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", { className: "bg-gray-50" },
                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Title"),
                                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", { scope: "col", className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" }, "Description"),
                                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", { scope: "col", className: "relative px-6 py-3" }))),
                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", { className: "bg-white divide-y divide-gray-200" }, categories === null || categories === void 0 ? void 0 : categories.map(function (item) {
                                    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", null,
                                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", { className: "px-6 py-4 whitespace-nowrap" },
                                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "flex items-center" },
                                                react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "ml-4" },
                                                    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "text-sm font-medium text-gray-900" }, item.title)))),
                                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", { className: "px-6 py-4 whitespace-nowrap" },
                                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", { className: "text-sm text-gray-900" }, item.description)),
                                        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", { className: "px-6 py-4 whitespace-nowrap text-right text-sm font-medium" },
                                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_7__["InertiaLink"], { href: "/admin/categories/" + item.id, className: "cursor-pointer inline-block text-indigo-600 hover:text-indigo-900" }, "Edit"),
                                            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", { onClick: function () { return onDelete(item.id); }, className: "cursor-pointer inline-block ml-2 text-red-600 hover:text-red-900" }, "Hapus"))));
                                })))))))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Categories);


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
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { href: "/admin/categories", className: "px-2 inline-block text-white hover:text-yellow-300" }, "Category")),
            admin && (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "flex flex-row" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "text-white" },
                    "Hai, ", admin === null || admin === void 0 ? void 0 :
                    admin.name),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_0__["InertiaLink"], { className: " inline-block px-4 py-1 text-sm rounded-sm ml-3 bg-red-600 text-white", href: "/admin/logout" }, "Logout"))))));
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);


/***/ })

}]);