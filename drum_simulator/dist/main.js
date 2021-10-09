/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function() {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var SOUNDS = [[\"KeyA\", \"COWBELL\"], [\"KeyS\", \"HIHAT\"], [\"KeyD\", \"KICK\"], [\"KeyF\", \"OPENHIHAT\"], [\"KeyJ\", \"SNARE\"], [\"KeyK\", \"TOM\"], [\"KeyL\", \"RIDE\"], [\"Semicolon\", \"CRASH\"]];\n  SOUNDS.forEach(function (pair) {\n    var audio = document.createElement(\"audio\");\n    var audioDiv = document.getElementById(\"audio-tags\");\n    audioDiv.append(audio);\n    var src = \"./sounds/\" + pair[1] + \".wav\";\n    audio.src = src;\n    audio.dataset.key = \"\".concat(pair[0]);\n  });\n  window.addEventListener('keydown', function (e) {\n    var audio = document.querySelector(\"audio[data-key=\\\"\".concat(e.code, \"\\\"]\"));\n    audio.play();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU19wcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiU09VTkRTIiwiZm9yRWFjaCIsInBhaXIiLCJhdWRpbyIsImNyZWF0ZUVsZW1lbnQiLCJhdWRpb0RpdiIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kIiwic3JjIiwiZGF0YXNldCIsImtleSIsIndpbmRvdyIsImUiLCJxdWVyeVNlbGVjdG9yIiwiY29kZSIsInBsYXkiXSwibWFwcGluZ3MiOiJBQUVBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLE1BQU0sR0FBRyxDQUNYLENBQUMsTUFBRCxFQUFTLFNBQVQsQ0FEVyxFQUVYLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FGVyxFQUdYLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FIVyxFQUlYLENBQUMsTUFBRCxFQUFTLFdBQVQsQ0FKVyxFQUtYLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FMVyxFQU1YLENBQUMsTUFBRCxFQUFTLEtBQVQsQ0FOVyxFQU9YLENBQUMsTUFBRCxFQUFTLE1BQVQsQ0FQVyxFQVFYLENBQUMsV0FBRCxFQUFjLE9BQWQsQ0FSVyxDQUFmO0FBV0FBLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLFVBQUFDLElBQUksRUFBSTtBQUNuQixRQUFJQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFaO0FBQ0EsUUFBTUMsUUFBUSxHQUFHUCxRQUFRLENBQUNRLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQUQsSUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCSixLQUFoQjtBQUNBLFFBQUlLLEdBQUcsR0FBRyxjQUFjTixJQUFJLENBQUMsQ0FBRCxDQUFsQixHQUF3QixNQUFsQztBQUNBQyxJQUFBQSxLQUFLLENBQUNLLEdBQU4sR0FBWUEsR0FBWjtBQUNBTCxJQUFBQSxLQUFLLENBQUNNLE9BQU4sQ0FBY0MsR0FBZCxhQUF1QlIsSUFBSSxDQUFDLENBQUQsQ0FBM0I7QUFDSCxHQVBEO0FBU0FTLEVBQUFBLE1BQU0sQ0FBQ1osZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBU2EsQ0FBVCxFQUFZO0FBQzNDLFFBQU1ULEtBQUssR0FBR0wsUUFBUSxDQUFDZSxhQUFULDRCQUEwQ0QsQ0FBQyxDQUFDRSxJQUE1QyxTQUFkO0FBQ0FYLElBQUFBLEtBQUssQ0FBQ1ksSUFBTjtBQUNILEdBSEQ7QUFJSCxDQXpCRCIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgU09VTkRTID0gW1xuICAgICAgICBbXCJLZXlBXCIsIFwiQ09XQkVMTFwiXSxcbiAgICAgICAgW1wiS2V5U1wiLCBcIkhJSEFUXCJdLFxuICAgICAgICBbXCJLZXlEXCIsIFwiS0lDS1wiXSxcbiAgICAgICAgW1wiS2V5RlwiLCBcIk9QRU5ISUhBVFwiXSxcbiAgICAgICAgW1wiS2V5SlwiLCBcIlNOQVJFXCJdLFxuICAgICAgICBbXCJLZXlLXCIsIFwiVE9NXCJdLFxuICAgICAgICBbXCJLZXlMXCIsIFwiUklERVwiXSxcbiAgICAgICAgW1wiU2VtaWNvbG9uXCIsIFwiQ1JBU0hcIl0sXG4gICAgXVxuXG4gICAgU09VTkRTLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgIGxldCBhdWRpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiKTtcbiAgICAgICAgY29uc3QgYXVkaW9EaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImF1ZGlvLXRhZ3NcIik7XG4gICAgICAgIGF1ZGlvRGl2LmFwcGVuZChhdWRpbyk7XG4gICAgICAgIGxldCBzcmMgPSBcIi4vc291bmRzL1wiICsgcGFpclsxXSArIFwiLndhdlwiO1xuICAgICAgICBhdWRpby5zcmMgPSBzcmM7XG4gICAgICAgIGF1ZGlvLmRhdGFzZXQua2V5ID0gYCR7cGFpclswXX1gO1xuICAgIH0pXG4gICAgXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgYXVkaW9bZGF0YS1rZXk9XCIke2UuY29kZX1cIl1gKSBcbiAgICAgICAgYXVkaW8ucGxheSgpOyBcbiAgICB9KTsgXG59KSJdLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9KU19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_modules__["./src/index.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;