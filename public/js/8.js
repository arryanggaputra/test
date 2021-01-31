(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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
/* harmony default export */ __webpack_exports__["default"] = (QuestionChoice);


/***/ })

}]);