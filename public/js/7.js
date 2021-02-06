(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./resources/js/src/Pages/Auth/Exams/components/QuestionChoice.tsx":
/*!*************************************************************************!*\
  !*** ./resources/js/src/Pages/Auth/Exams/components/QuestionChoice.tsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-debounce-input */ "./node_modules/react-debounce-input/lib/index.js");
/* harmony import */ var react_debounce_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_debounce_input__WEBPACK_IMPORTED_MODULE_1__);


var QuestionChoice = function (props) {
    var id = props.id, keyAnswer = props.keyAnswer, index = props.index;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''), descriptionValue = _a[0], setDescriptionValue = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
        index: index,
        value: keyAnswer,
        description: '',
    }), answer = _b[0], setAnswer = _b[1];
    var firstRun = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        console.log({ answer: answer });
        props.onChange(answer);
    }, [answer]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        if (firstRun.current) {
            firstRun.current = false;
            return;
        }
        var _answer = Object.assign({}, answer);
        _answer.description = descriptionValue;
        setAnswer(_answer);
    }, [descriptionValue]);
    var onCorrect = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
        props.onCorrect(keyAnswer);
    }, [keyAnswer]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "w-full pt-1 pb-1 center items-baseline" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "flex flex-row items-center" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "radio", name: "answer-" + id, onClick: onCorrect, value: keyAnswer }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: "uppercase font-bold pl-1" },
                keyAnswer,
                ".")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_debounce_input__WEBPACK_IMPORTED_MODULE_1__["DebounceInput"], { minLength: 2, element: "textarea", className: "w-full", debounceTimeout: 1000, placeholder: "Tulis jawaban disini", onChange: function (event) { return setDescriptionValue(event.target.value); } })));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuestionChoice));


/***/ }),

/***/ "./resources/js/src/Pages/Auth/Exams/components/QuestionForm.tsx":
/*!***********************************************************************!*\
  !*** ./resources/js/src/Pages/Auth/Exams/components/QuestionForm.tsx ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Button */ "./resources/js/src/components/Button/index.tsx");
/* harmony import */ var lib_alphabet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lib/alphabet */ "./resources/js/src/lib/alphabet.ts");
/* harmony import */ var lib_makeId__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/makeId */ "./resources/js/src/lib/makeId.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_mde__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-mde */ "./node_modules/react-mde/lib/js/index.js");
/* harmony import */ var react_mde__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_mde__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-mde/lib/styles/css/react-mde-all.css */ "./node_modules/react-mde/lib/styles/css/react-mde-all.css");
/* harmony import */ var react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_mde_lib_styles_css_react_mde_all_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _QuestionChoice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./QuestionChoice */ "./resources/js/src/Pages/Auth/Exams/components/QuestionChoice.tsx");









var QuestionForm = function (props) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''), descriptionValue = _a[0], setDescriptionValue = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(Object(lib_makeId__WEBPACK_IMPORTED_MODULE_3__["default"])()), id = _b[0], setId = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(3), totalAnswer = _c[0], setTotalAnswer = _c[1];
    var _d = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('write'), selectedTab = _d[0], setSelectedTab = _d[1];
    var _e = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(undefined), selectedAnswer = _e[0], setSelectedAnswer = _e[1];
    var _f = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(new Set()), listAnswers = _f[0], setListAnswers = _f[1];
    var addAnswer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (data) {
        listAnswers.forEach(function (item) {
            if (item.value === data.value) {
                listAnswers.delete(item);
            }
        });
        listAnswers.add(data);
        var _listAnswers = new Set(listAnswers);
        setListAnswers(_listAnswers);
    }, [listAnswers]);
    var onSelectCorrectAnswer = function (key) {
        setSelectedAnswer(key);
    };
    var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
        var _a;
        if (!descriptionValue) {
            alert('Harap isi kolom pertanyaan');
            return;
        }
        var answerNotValid = Array.from(listAnswers.values()).find(function (item) {
            if (!item.description) {
                return item;
            }
        });
        if (answerNotValid) {
            alert('Harap lengkapi jawan di kunci ' + answerNotValid.value);
            return;
        }
        if (!selectedAnswer) {
            alert('Harap pilih jawaban yang benar ');
            return;
        }
        var questionToSave = {
            question: descriptionValue,
            answers: Array.from(listAnswers.values()),
            selectedAnswer: selectedAnswer,
        };
        _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__["Inertia"].post("/admin/exams/" + ((_a = props.exam) === null || _a === void 0 ? void 0 : _a.id) + "/questions", questionToSave);
    }, [descriptionValue, listAnswers, selectedAnswer]);
    var renderAnswerField = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
        var answerField = [];
        for (var index = 0; index <= totalAnswer; index++) {
            var keyAnswer = lib_alphabet__WEBPACK_IMPORTED_MODULE_2__["default"][index];
            answerField.push(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_QuestionChoice__WEBPACK_IMPORTED_MODULE_8__["default"], { onChange: addAnswer, onCorrect: onSelectCorrectAnswer, index: index, id: id, keyAnswer: keyAnswer, key: keyAnswer }));
        }
        return answerField;
    }, [totalAnswer]);
    var addMoreAnswerField = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
        setTotalAnswer(totalAnswer + 1);
    }, [totalAnswer]);
    var reduceAnswerField = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
        setTotalAnswer(totalAnswer > 0 ? totalAnswer - 1 : 0);
        listAnswers.forEach(function (item) {
            if (item.index === totalAnswer) {
                listAnswers.delete(item);
            }
        });
        var _listAnswers = new Set(listAnswers);
        setListAnswers(_listAnswers);
    }, [totalAnswer, listAnswers]);
    return (react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: "w-full" },
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", { className: "font-bold text-2xl" }, "Pertanyaan"),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_mde__WEBPACK_IMPORTED_MODULE_6___default.a, { value: descriptionValue, onChange: setDescriptionValue, selectedTab: selectedTab, onTabChange: setSelectedTab, generateMarkdownPreview: function (markdown) {
                return Promise.resolve(react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_5___default.a, { source: markdown }));
            }, childProps: {
                writeButton: {
                    tabIndex: -1,
                },
            } }),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: "rounded-md p-5 w-full mt-2 bg-gray-100" },
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: " flex flex-row justify-end" },
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", { className: "bg-gray-200 p-2 rounded-md cursor-pointer text-xs mr-2", onClick: reduceAnswerField }, "- Kurangi Kolom Jawaban"),
                react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", { className: " bg-gray-700 p-2 rounded-md cursor-pointer text-white text-xs", onClick: addMoreAnswerField }, "+ Tambah Kolom Jawaban")),
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", { className: "flex flex-col" }, renderAnswerField())),
        react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(components_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { onClick: handleSubmit }, "Simpan Pertanyaan"))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_4___default.a.memo(QuestionForm));


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

/***/ "./resources/js/src/lib/alphabet.ts":
/*!******************************************!*\
  !*** ./resources/js/src/lib/alphabet.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];
/* harmony default export */ __webpack_exports__["default"] = (alphabet);


/***/ }),

/***/ "./resources/js/src/lib/makeId.ts":
/*!****************************************!*\
  !*** ./resources/js/src/lib/makeId.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function makeid(length) {
    if (length === void 0) { length = 5; }
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
/* harmony default export */ __webpack_exports__["default"] = (makeid);


/***/ })

}]);