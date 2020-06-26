/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_circles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/circles */ "./src/scripts/circles.js");
/* harmony import */ var _scripts_circles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_circles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scripts_speeches__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/speeches */ "./src/scripts/speeches.js");
/* harmony import */ var _scripts_speeches__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_speeches__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scripts_api_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/api_keys */ "./src/scripts/api_keys.js");
/* harmony import */ var _scripts_api_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_api_keys__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/scripts/api_keys.js":
/*!*********************************!*\
  !*** ./src/scripts/api_keys.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

apiKey = "6138fd298emsh11aab9ec9165981p19347fjsna835530440b1";

/***/ }),

/***/ "./src/scripts/circles.js":
/*!********************************!*\
  !*** ./src/scripts/circles.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener('DOMContentLoaded', function () {
  var submitButton = document.getElementById('submit');
  var submitForm = document.getElementById('submit-form');
  var userInput = document.querySelector('.user-input');
  var clearButton = document.getElementById('clear');
  var speechButton = document.getElementById('speech');
  var mainContainer = document.querySelector('.main-container');
  var tooltip = d3.select('#word-preview'); // const fakeWords = [];

  clearButton.addEventListener("click", function (e) {
    e.preventDefault(); //clears all circles

    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    }

    ;
    userInput.value = "";
  });
  speechButton.addEventListener('click', function (e) {
    e.preventDefault();
    var idx = Math.floor(Math.random() * 3);
    userInput.value = speeches[idx];
  });
  submitForm.addEventListener('submit', function (e) {
    e.preventDefault(); //iterate through the string that user inputs

    var words = userInput.value;
    var frequencies = []; //remove punctuation

    var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

    function removePunctuation(string) {
      return string.replace(regex, '');
    } //remove duplicates


    words = removePunctuation(words).toLowerCase().split(" ");
    words = words.filter(function (word, idx) {
      return words.indexOf(word) === idx;
    });
    words.forEach(function (word) {
      //API call
      fetch("https://wordsapiv1.p.rapidapi.com/words/".concat(word, "/frequency"), {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
          "x-rapidapi-key": apiKey
        }
      }).then(function (response) {
        // debugger
        return response.json();
      }).then(function (res) {
        var obj = {};
        obj["frequency"] = res.frequency.perMillion;
        obj["word"] = word;
        frequencies.push(obj);
        return frequencies; // debugger
      }).then(function (frequencies) {
        // debugger
        //render circles here after gathering an array of radii lengths based on freq of word usage
        renderCircles(frequencies); //reset radii lengths to blank

        frequencies = []; // debugger
      }).catch(function (err) {
        console.log(err);
        console.log("".concat(word, " is not a word!")); // fakeWords.push(`${word} is not a word!`);
      });
    });
    tooltip.text("hover over bubbles!");
  });
});

function renderCircles(frequencies) {
  // debugger
  var circlesContainer = d3.select("#circles-container");
  var radiusScale = d3.scaleSqrt().domain([1, 32000]).range([5, 100]);
  var tooltip = d3.select('#word-preview');
  var colors = ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D", "#43AA8B", "#577590"];
  var numNodes = frequencies.length;
  var nodes = d3.range(numNodes).map(function (d, i) {
    return {
      radius: radiusScale(frequencies[i].frequency),
      word: frequencies[i].word
    };
  });
  var simulation = d3.forceSimulation(nodes).force('charge', d3.forceManyBody().strength(5)).force('center', d3.forceCenter(500, 250)).force('collision', d3.forceCollide().radius(function (d) {
    return d.radius;
  })).on('tick', ticked);

  function ticked() {
    // debugger
    var u = d3.select('svg').selectAll('circle').data(nodes);
    u.enter().append('circle').attr('r', function (d) {
      return d.radius;
    }).attr('fill', function (d, i) {
      // let index = Math.floor(Math.random() * colors.length);
      return colors[i % 7];
    }).attr('fill-opacity', .7).on('click', function (d) {
      console.log(d.word);
    }).on('mouseover', function (d) {
      return tooltip.text(d.word).style('visibility', 'visible');
    }).on("mouseout", function () {
      setTimeout(function () {
        return tooltip.text("");
      }, 7000);
    }).merge(u).attr('cx', function (d) {
      return d.x;
    }).attr('cy', function (d) {
      return d.y;
    });
    u.exit().remove();
  }
}

/***/ }),

/***/ "./src/scripts/speeches.js":
/*!*********************************!*\
  !*** ./src/scripts/speeches.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

speeches = ["Four score and seven years ago our fathers brought forth  \n  upon this continent, a new nation, conceived in liberty, \n  and dedicated to the proposition that all men are created equal", "I have a dream that one day this nation will rise up and live out \n  the true meaning of its creed: We hold these truths to be self-evident, \n  that all men are created equal. I have a dream that one day on the red hills \n  of Georgia, the sons of former slaves and the sons of former slave owners \n  will be able to sit down together at the table of brotherhood.", "And so, my fellow Americans: ask not what your country can do for you\n  ask what you can do for your country. My fellow citizens of the world \n  ask not what America will do for you, but what together we can do for the freedom of man.\n  Finally, whether you are citizens of America or citizens of the world, ask of us the same \n  high standards of strength and sacrifice which we ask of you. With a good conscience our \n  only sure reward, with history the final judge of our deeds, let us go forth to lead the \n  land we love, asking His blessing and His help, but knowing that here on earth God's work \n  must truly be our own."];

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwaV9rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3BlZWNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiXSwibmFtZXMiOlsiYXBpS2V5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3VibWl0QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtaXRGb3JtIiwidXNlcklucHV0IiwicXVlcnlTZWxlY3RvciIsImNsZWFyQnV0dG9uIiwic3BlZWNoQnV0dG9uIiwibWFpbkNvbnRhaW5lciIsInRvb2x0aXAiLCJkMyIsInNlbGVjdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInZhbHVlIiwiaWR4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BlZWNoZXMiLCJ3b3JkcyIsImZyZXF1ZW5jaWVzIiwicmVnZXgiLCJyZW1vdmVQdW5jdHVhdGlvbiIsInN0cmluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZmlsdGVyIiwid29yZCIsImluZGV4T2YiLCJmb3JFYWNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwib2JqIiwiZnJlcXVlbmN5IiwicGVyTWlsbGlvbiIsInB1c2giLCJyZW5kZXJDaXJjbGVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImNpcmNsZXNDb250YWluZXIiLCJyYWRpdXNTY2FsZSIsInNjYWxlU3FydCIsImRvbWFpbiIsInJhbmdlIiwiY29sb3JzIiwibnVtTm9kZXMiLCJsZW5ndGgiLCJub2RlcyIsIm1hcCIsImQiLCJpIiwicmFkaXVzIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiZm9yY2VDZW50ZXIiLCJmb3JjZUNvbGxpZGUiLCJvbiIsInRpY2tlZCIsInUiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJzZXRUaW1lb3V0IiwibWVyZ2UiLCJ4IiwieSIsImV4aXQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQUEsTUFBTSxHQUFHLG9EQUFULEM7Ozs7Ozs7Ozs7O0FDQUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQUs7QUFFakQsTUFBTUMsWUFBWSxHQUFHRixRQUFRLENBQUNH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QVRSLEVBU3dCLEVBVHhCLEVBVUdQLEVBVkgsQ0FVTSxPQVZOLEVBVWUsVUFBU1YsQ0FBVCxFQUFXO0FBQ3RCYixhQUFPLENBQUNDLEdBQVIsQ0FBWVksQ0FBQyxDQUFDNUIsSUFBZDtBQUNELEtBWkgsRUFhR3NDLEVBYkgsQ0FhTSxXQWJOLEVBYW1CLFVBQVNWLENBQVQsRUFBWTtBQUMzQixhQUFPbEQsT0FBTyxDQUNYdUMsSUFESSxDQUNDVyxDQUFDLENBQUM1QixJQURILEVBRUo4QyxLQUZJLENBRUUsWUFGRixFQUVnQixTQUZoQixDQUFQO0FBR0QsS0FqQkgsRUFrQkdSLEVBbEJILENBa0JNLFVBbEJOLEVBa0JrQixZQUFXO0FBQ3pCUyxnQkFBVSxDQUFDLFlBQUk7QUFDYixlQUFPckUsT0FBTyxDQUFDdUMsSUFBUixDQUFhLEVBQWIsQ0FBUDtBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxLQXRCSCxFQXVCRytCLEtBdkJILENBdUJTUixDQXZCVCxFQXdCR0ssSUF4QkgsQ0F3QlEsSUF4QlIsRUF3QmMsVUFBU2pCLENBQVQsRUFBWTtBQUN0QixhQUFPQSxDQUFDLENBQUNxQixDQUFUO0FBQ0QsS0ExQkgsRUEyQkdKLElBM0JILENBMkJRLElBM0JSLEVBMkJjLFVBQVNqQixDQUFULEVBQVk7QUFDdEIsYUFBT0EsQ0FBQyxDQUFDc0IsQ0FBVDtBQUNELEtBN0JIO0FBK0JBVixLQUFDLENBQUNXLElBQUYsR0FBU0MsTUFBVDtBQUNEO0FBRUYsQzs7Ozs7Ozs7Ozs7QUMvSkQ5RCxRQUFRLEdBQUcsaXJDQUFYLEM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgJy4vc2NyaXB0cy9jaXJjbGVzJztcbmltcG9ydCAnLi9zY3JpcHRzL3NwZWVjaGVzJztcbmltcG9ydCAnLi9zY3JpcHRzL2FwaV9rZXlzJzsiLCJhcGlLZXkgPSBcIjYxMzhmZDI5OGVtc2gxMWFhYjllYzkxNjU5ODFwMTkzNDdmanNuYTgzNTUzMDQ0MGIxXCIiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuICBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1mb3JtJyk7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWlucHV0Jyk7XG4gIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJyk7XG4gIGNvbnN0IHNwZWVjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVlY2gnKTtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KCcjd29yZC1wcmV2aWV3JylcbiAgLy8gY29uc3QgZmFrZVdvcmRzID0gW107XG5cbiAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgIC8vY2xlYXJzIGFsbCBjaXJjbGVzXG4gICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgfTtcblxuICAgICB1c2VySW5wdXQudmFsdWUgPSBcIlwiO1xuICB9KVxuXG4gIHNwZWVjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9IHNwZWVjaGVzW2lkeF07XG4gIH0pXG5cblxuICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvL2l0ZXJhdGUgdGhyb3VnaCB0aGUgc3RyaW5nIHRoYXQgdXNlciBpbnB1dHNcbiAgICBsZXQgd29yZHMgPSB1c2VySW5wdXQudmFsdWU7XG4gICAgbGV0IGZyZXF1ZW5jaWVzID0gW107XG5cbiAgICAvL3JlbW92ZSBwdW5jdHVhdGlvblxuICAgIGNvbnN0IHJlZ2V4ID0gL1shXCIjJCUmJygpKissLS4vOjs8PT4/QFtcXF1eX2B7fH1+XS9nO1xuICAgIGZ1bmN0aW9uIHJlbW92ZVB1bmN0dWF0aW9uKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCAnJykgXG4gICAgfSAgXG5cbiAgICAvL3JlbW92ZSBkdXBsaWNhdGVzXG4gICAgd29yZHMgPSByZW1vdmVQdW5jdHVhdGlvbih3b3JkcykudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XG4gICAgd29yZHMgPSB3b3Jkcy5maWx0ZXIoKHdvcmQsaWR4KT0+e1xuICAgICAgcmV0dXJuIHdvcmRzLmluZGV4T2Yod29yZCkgPT09IGlkeFxuICAgIH0pO1xuXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIFxuICAgICAgLy9BUEkgY2FsbFxuICAgICAgZmV0Y2goYGh0dHBzOi8vd29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbS93b3Jkcy8ke3dvcmR9L2ZyZXF1ZW5jeWAsIHtcblx0XHRcdFx0XCJtZXRob2RcIjogXCJHRVRcIixcblx0XHRcdFx0XCJoZWFkZXJzXCI6IHtcblx0XHRcdFx0XHRcIngtcmFwaWRhcGktaG9zdFwiOiBcIndvcmRzYXBpdjEucC5yYXBpZGFwaS5jb21cIixcblx0XHRcdFx0XHRcIngtcmFwaWRhcGkta2V5XCI6IGFwaUtleVxuICAgICAgICB9XG4gICAgICB9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgIGxldCBvYmogPSB7fTtcbiAgICAgICAgb2JqW1wiZnJlcXVlbmN5XCJdID0gcmVzLmZyZXF1ZW5jeS5wZXJNaWxsaW9uOyBcbiAgICAgICAgb2JqW1wid29yZFwiXSA9IHdvcmQ7XG4gICAgICAgIFxuICAgICAgICBmcmVxdWVuY2llcy5wdXNoKG9iaik7XG4gICAgICBcbiAgICAgICAgcmV0dXJuIGZyZXF1ZW5jaWVzOyBcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH0pXG4gICAgICAudGhlbihmcmVxdWVuY2llcyA9PiB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIFxuICAgICAgICAvL3JlbmRlciBjaXJjbGVzIGhlcmUgYWZ0ZXIgZ2F0aGVyaW5nIGFuIGFycmF5IG9mIHJhZGlpIGxlbmd0aHMgYmFzZWQgb24gZnJlcSBvZiB3b3JkIHVzYWdlXG4gICAgICAgIHJlbmRlckNpcmNsZXMoZnJlcXVlbmNpZXMpO1xuICAgICAgICAvL3Jlc2V0IHJhZGlpIGxlbmd0aHMgdG8gYmxhbmtcbiAgICAgICAgZnJlcXVlbmNpZXMgPSBbXTtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgIH0pXG5cdFx0XHQuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7d29yZH0gaXMgbm90IGEgd29yZCFgKTtcbiAgICAgICAgLy8gZmFrZVdvcmRzLnB1c2goYCR7d29yZH0gaXMgbm90IGEgd29yZCFgKTtcblx0XHRcdH0pO1xuICAgIH0pO1xuXG4gICAgdG9vbHRpcC50ZXh0KFwiaG92ZXIgb3ZlciBidWJibGVzIVwiKVxuICAgIFxuICB9KVxuXG59KTtcblxuZnVuY3Rpb24gcmVuZGVyQ2lyY2xlcyhmcmVxdWVuY2llcykge1xuICAvLyBkZWJ1Z2dlclxuICBjb25zdCBjaXJjbGVzQ29udGFpbmVyID0gZDMuc2VsZWN0KFwiI2NpcmNsZXMtY29udGFpbmVyXCIpO1xuICBjb25zdCByYWRpdXNTY2FsZSA9IGQzLnNjYWxlU3FydCgpLmRvbWFpbihbMSwgMzIwMDBdKS5yYW5nZShbNSwxMDBdKTtcbiAgY29uc3QgdG9vbHRpcCA9IGQzLnNlbGVjdCgnI3dvcmQtcHJldmlldycpXG4gIGNvbnN0IGNvbG9ycyA9IFtcIiNGOTQxNDRcIiwgXCIjRjM3MjJDXCIsIFwiI0Y4OTYxRVwiLCBcIiNGOUM3NEZcIiwgXCIjOTBCRTZEXCIsIFwiIzQzQUE4QlwiLCBcIiM1Nzc1OTBcIl07XG5cbiAgY29uc3QgbnVtTm9kZXMgPSBmcmVxdWVuY2llcy5sZW5ndGg7XG4gIGNvbnN0IG5vZGVzID0gZDMucmFuZ2UobnVtTm9kZXMpLm1hcChmdW5jdGlvbihkLCBpKSB7XG4gICAgcmV0dXJuIHtyYWRpdXM6IHJhZGl1c1NjYWxlKGZyZXF1ZW5jaWVzW2ldLmZyZXF1ZW5jeSksXG4gICAgICB3b3JkOiBmcmVxdWVuY2llc1tpXS53b3JkIFxuICAgIH1cbiAgfSlcblxuICBjb25zdCBzaW11bGF0aW9uID0gZDMuZm9yY2VTaW11bGF0aW9uKG5vZGVzKVxuICAgIC5mb3JjZSgnY2hhcmdlJywgZDMuZm9yY2VNYW55Qm9keSgpLnN0cmVuZ3RoKDUpKVxuICAgIC5mb3JjZSgnY2VudGVyJywgZDMuZm9yY2VDZW50ZXIoNTAwLCAyNTApKVxuICAgIC5mb3JjZSgnY29sbGlzaW9uJywgZDMuZm9yY2VDb2xsaWRlKCkucmFkaXVzKGZ1bmN0aW9uKGQpIHtcbiAgICAgIHJldHVybiBkLnJhZGl1c1xuICAgIH0pKVxuICAgIC5vbigndGljaycsIHRpY2tlZClcblxuICBmdW5jdGlvbiB0aWNrZWQoKSB7XG4gICAgLy8gZGVidWdnZXJcbiAgICBjb25zdCB1ID0gZDMuc2VsZWN0KCdzdmcnKVxuICAgIC5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gICAgLmRhdGEobm9kZXMpXG5cbiAgICB1LmVudGVyKClcbiAgICAgIC5hcHBlbmQoJ2NpcmNsZScpXG4gICAgICAuYXR0cigncicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQucmFkaXVzXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwnLCBmdW5jdGlvbihkLCBpKSB7XG4gICAgICAgIC8vIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvbG9ycy5sZW5ndGgpO1xuICAgICAgICByZXR1cm4gY29sb3JzW2kgJSA3XTsgXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIC43KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpe1xuICAgICAgICBjb25zb2xlLmxvZyhkLndvcmQpXG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB0b29sdGlwXG4gICAgICAgICAgLnRleHQoZC53b3JkKVxuICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHJldHVybiB0b29sdGlwLnRleHQoXCJcIilcbiAgICAgICAgfSwgNzAwMClcbiAgICAgIH0pXG4gICAgICAubWVyZ2UodSlcbiAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueFxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdjeScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueVxuICAgICAgfSlcblxuICAgIHUuZXhpdCgpLnJlbW92ZSgpXG4gIH1cbiAgXG59XG5cblxuXG5cblxuXG5cblxuIiwic3BlZWNoZXMgPSBbXG4gIGBGb3VyIHNjb3JlIGFuZCBzZXZlbiB5ZWFycyBhZ28gb3VyIGZhdGhlcnMgYnJvdWdodCBmb3J0aCAgXG4gIHVwb24gdGhpcyBjb250aW5lbnQsIGEgbmV3IG5hdGlvbiwgY29uY2VpdmVkIGluIGxpYmVydHksIFxuICBhbmQgZGVkaWNhdGVkIHRvIHRoZSBwcm9wb3NpdGlvbiB0aGF0IGFsbCBtZW4gYXJlIGNyZWF0ZWQgZXF1YWxgLFxuXG4gIGBJIGhhdmUgYSBkcmVhbSB0aGF0IG9uZSBkYXkgdGhpcyBuYXRpb24gd2lsbCByaXNlIHVwIGFuZCBsaXZlIG91dCBcbiAgdGhlIHRydWUgbWVhbmluZyBvZiBpdHMgY3JlZWQ6IFdlIGhvbGQgdGhlc2UgdHJ1dGhzIHRvIGJlIHNlbGYtZXZpZGVudCwgXG4gIHRoYXQgYWxsIG1lbiBhcmUgY3JlYXRlZCBlcXVhbC4gSSBoYXZlIGEgZHJlYW0gdGhhdCBvbmUgZGF5IG9uIHRoZSByZWQgaGlsbHMgXG4gIG9mIEdlb3JnaWEsIHRoZSBzb25zIG9mIGZvcm1lciBzbGF2ZXMgYW5kIHRoZSBzb25zIG9mIGZvcm1lciBzbGF2ZSBvd25lcnMgXG4gIHdpbGwgYmUgYWJsZSB0byBzaXQgZG93biB0b2dldGhlciBhdCB0aGUgdGFibGUgb2YgYnJvdGhlcmhvb2QuYCxcblxuICBgQW5kIHNvLCBteSBmZWxsb3cgQW1lcmljYW5zOiBhc2sgbm90IHdoYXQgeW91ciBjb3VudHJ5IGNhbiBkbyBmb3IgeW91XG4gIGFzayB3aGF0IHlvdSBjYW4gZG8gZm9yIHlvdXIgY291bnRyeS4gTXkgZmVsbG93IGNpdGl6ZW5zIG9mIHRoZSB3b3JsZCBcbiAgYXNrIG5vdCB3aGF0IEFtZXJpY2Egd2lsbCBkbyBmb3IgeW91LCBidXQgd2hhdCB0b2dldGhlciB3ZSBjYW4gZG8gZm9yIHRoZSBmcmVlZG9tIG9mIG1hbi5cbiAgRmluYWxseSwgd2hldGhlciB5b3UgYXJlIGNpdGl6ZW5zIG9mIEFtZXJpY2Egb3IgY2l0aXplbnMgb2YgdGhlIHdvcmxkLCBhc2sgb2YgdXMgdGhlIHNhbWUgXG4gIGhpZ2ggc3RhbmRhcmRzIG9mIHN0cmVuZ3RoIGFuZCBzYWNyaWZpY2Ugd2hpY2ggd2UgYXNrIG9mIHlvdS4gV2l0aCBhIGdvb2QgY29uc2NpZW5jZSBvdXIgXG4gIG9ubHkgc3VyZSByZXdhcmQsIHdpdGggaGlzdG9yeSB0aGUgZmluYWwganVkZ2Ugb2Ygb3VyIGRlZWRzLCBsZXQgdXMgZ28gZm9ydGggdG8gbGVhZCB0aGUgXG4gIGxhbmQgd2UgbG92ZSwgYXNraW5nIEhpcyBibGVzc2luZyBhbmQgSGlzIGhlbHAsIGJ1dCBrbm93aW5nIHRoYXQgaGVyZSBvbiBlYXJ0aCBHb2QncyB3b3JrIFxuICBtdXN0IHRydWx5IGJlIG91ciBvd24uYFxuXSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=