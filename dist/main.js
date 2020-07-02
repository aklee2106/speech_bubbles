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
  var tooltip = d3.select('#word-preview');
  var modal = document.querySelector('.modal');
  var xbutton = document.querySelector('.close');
  xbutton.addEventListener('click', function (e) {
    modal.style.display = 'none';
  });
  window.addEventListener('click', function (e) {
    if (e.target === modal) modal.style.display = 'none';
  });
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
        return response.json();
      }).then(function (res) {
        var obj = {};
        obj["frequency"] = res.frequency.perMillion;
        obj["word"] = word;
        frequencies.push(obj);
        return frequencies;
      }).then(function (frequencies) {
        //render circles here after gathering an array of radii lengths based on freq of word usage
        renderCircles(frequencies); //reset radii lengths to blank

        frequencies = [];
      }).catch(function (err) {
        console.log(err);
      });
    });
    tooltip.text("hover over bubbles!");
  });
});

function renderCircles(frequencies) {
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
    var u = d3.select('svg').selectAll('circle').data(nodes);
    u.enter().append('circle').attr('r', function (d) {
      return d.radius;
    }).attr('fill', function (d, i) {
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

speeches = ["Four score and seven years ago our fathers brought forth \n  upon this continent, a new nation, conceived in liberty, \n  and dedicated to the proposition that all men are created equal \n  Now we are engaged in a great civil war, testing whether that nation, \n  or any nation so conceived, and so dedicated, can long endure. We are met \n  on a great battle field of that war.", "I have a dream that one day this nation will rise up and live out \n  the true meaning of its creed: We hold these truths to be self evident \n  that all men are created equal. I have a dream that one day on the red hills \n  of Georgia, the sons of former slaves and the sons of former slave owners \n  will be able to sit down together at the table of brotherhood.", "And so, my fellow Americans: ask not what your country can do for you \n  ask what you can do for your country. My fellow citizens of the world \n  ask not what America will do for you, but what together we can do for the freedom of man. \n  Finally, whether you are citizens of America or citizens of the world, ask of us the same \n  high standards of strength and sacrifice which we ask of you. With a good conscience our \n  only sure reward, with history the final judge of our deeds, let us go forth to lead the \n  land we love, asking His blessing and His help, but knowing that here on earth God's work \n  must truly be our own."];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwaV9rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3BlZWNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiXSwibmFtZXMiOlsiYXBpS2V5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3VibWl0QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtaXRGb3JtIiwidXNlcklucHV0IiwicXVlcnlTZWxlY3RvciIsImNsZWFyQnV0dG9uIiwic3BlZWNoQnV0dG9uIiwibWFpbkNvbnRhaW5lciIsInRvb2x0aXAiLCJkMyIsInNlbGVjdCIsIm1vZGFsIiwieGJ1dHRvbiIsImUiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInZhbHVlIiwiaWR4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BlZWNoZXMiLCJ3b3JkcyIsImZyZXF1ZW5jaWVzIiwicmVnZXgiLCJyZW1vdmVQdW5jdHVhdGlvbiIsInN0cmluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZmlsdGVyIiwid29yZCIsImluZGV4T2YiLCJmb3JFYWNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwib2JqIiwiZnJlcXVlbmN5IiwicGVyTWlsbGlvbiIsInB1c2giLCJyZW5kZXJDaXJjbGVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImNpcmNsZXNDb250YWluZXIiLCJyYWRpdXNTY2FsZSIsInNjYWxlU3FydCIsImRvbWFpbiIsInJhbmdlIiwiY29sb3JzIiwibnVtTm9kZXMiLCJsZW5ndGgiLCJub2RlcyIsIm1hcCIsImQiLCJpIiwicmFkaXVzIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiZm9yY2VDZW50ZXIiLCJmb3JjZUNvbGxpZGUiLCJvbiIsInRpY2tlZCIsInUiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwic2V0VGltZW91dCIsIm1lcmdlIiwieCIsInkiLCJleGl0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkFBLE1BQU0sR0FBRyxvREFBVCxDOzs7Ozs7Ozs7OztBQ0FBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUEx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QSxDQUFDLENBQUNxQixDQUFUO0FBQ0QsS0E1Qkg7QUE4QkFULEtBQUMsQ0FBQ1UsSUFBRixHQUFTQyxNQUFUO0FBQ0Q7QUFFRixDOzs7Ozs7Ozs7OztBQ3JLRDdELFFBQVEsR0FBRyxrM0NBQVgsQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCAnLi9zY3JpcHRzL2NpcmNsZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc3BlZWNoZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvYXBpX2tleXMnOyIsImFwaUtleSA9IFwiNjEzOGZkMjk4ZW1zaDExYWFiOWVjOTE2NTk4MXAxOTM0N2Zqc25hODM1NTMwNDQwYjFcIiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWZvcm0nKTtcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItaW5wdXQnKTtcbiAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgY29uc3Qgc3BlZWNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWVjaCcpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyN3b3JkLXByZXZpZXcnKVxuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsJyk7XG4gIGNvbnN0IHhidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgXG4gIHhidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgIGlmIChlLnRhcmdldCA9PT0gbW9kYWwpIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0pO1xuXG5cbiAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgIC8vY2xlYXJzIGFsbCBjaXJjbGVzXG4gICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgfTtcblxuICAgICB1c2VySW5wdXQudmFsdWUgPSBcIlwiO1xuICB9KVxuXG4gIHNwZWVjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9IHNwZWVjaGVzW2lkeF07XG4gIH0pXG5cblxuICBzdWJtaXRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvL2l0ZXJhdGUgdGhyb3VnaCB0aGUgc3RyaW5nIHRoYXQgdXNlciBpbnB1dHNcbiAgICBsZXQgd29yZHMgPSB1c2VySW5wdXQudmFsdWU7XG4gICAgbGV0IGZyZXF1ZW5jaWVzID0gW107XG5cbiAgICAvL3JlbW92ZSBwdW5jdHVhdGlvblxuICAgIGNvbnN0IHJlZ2V4ID0gL1shXCIjJCUmJygpKissLS4vOjs8PT4/QFtcXF1eX2B7fH1+XS9nO1xuICAgIGZ1bmN0aW9uIHJlbW92ZVB1bmN0dWF0aW9uKHN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCAnJykgXG4gICAgfSAgXG5cbiAgICAvL3JlbW92ZSBkdXBsaWNhdGVzXG4gICAgd29yZHMgPSByZW1vdmVQdW5jdHVhdGlvbih3b3JkcykudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIik7XG4gICAgd29yZHMgPSB3b3Jkcy5maWx0ZXIoKHdvcmQsaWR4KT0+e1xuICAgICAgcmV0dXJuIHdvcmRzLmluZGV4T2Yod29yZCkgPT09IGlkeFxuICAgIH0pO1xuXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIFxuICAgICAgLy9BUEkgY2FsbFxuICAgICAgZmV0Y2goYGh0dHBzOi8vd29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbS93b3Jkcy8ke3dvcmR9L2ZyZXF1ZW5jeWAsIHtcblx0XHRcdFx0XCJtZXRob2RcIjogXCJHRVRcIixcblx0XHRcdFx0XCJoZWFkZXJzXCI6IHtcblx0XHRcdFx0XHRcIngtcmFwaWRhcGktaG9zdFwiOiBcIndvcmRzYXBpdjEucC5yYXBpZGFwaS5jb21cIixcblx0XHRcdFx0XHRcIngtcmFwaWRhcGkta2V5XCI6IGFwaUtleVxuICAgICAgICB9XG4gICAgICB9KVxuXHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIG9ialtcImZyZXF1ZW5jeVwiXSA9IHJlcy5mcmVxdWVuY3kucGVyTWlsbGlvbjsgXG4gICAgICAgIG9ialtcIndvcmRcIl0gPSB3b3JkO1xuICAgICAgICBcbiAgICAgICAgZnJlcXVlbmNpZXMucHVzaChvYmopO1xuICAgICAgXG4gICAgICAgIHJldHVybiBmcmVxdWVuY2llczsgXG4gICAgICAgIFxuICAgICAgfSlcbiAgICAgIC50aGVuKGZyZXF1ZW5jaWVzID0+IHtcbiAgICAgICAgXG4gICAgICAgIC8vcmVuZGVyIGNpcmNsZXMgaGVyZSBhZnRlciBnYXRoZXJpbmcgYW4gYXJyYXkgb2YgcmFkaWkgbGVuZ3RocyBiYXNlZCBvbiBmcmVxIG9mIHdvcmQgdXNhZ2VcbiAgICAgICAgcmVuZGVyQ2lyY2xlcyhmcmVxdWVuY2llcyk7XG4gICAgICAgIC8vcmVzZXQgcmFkaWkgbGVuZ3RocyB0byBibGFua1xuICAgICAgICBmcmVxdWVuY2llcyA9IFtdO1xuICAgICAgfSlcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0fSk7XG4gICAgfSk7XG5cbiAgICB0b29sdGlwLnRleHQoXCJob3ZlciBvdmVyIGJ1YmJsZXMhXCIpXG4gICAgXG4gIH0pXG5cbn0pO1xuXG5mdW5jdGlvbiByZW5kZXJDaXJjbGVzKGZyZXF1ZW5jaWVzKSB7XG5cbiAgY29uc3QgY2lyY2xlc0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjaXJjbGVzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcmFkaXVzU2NhbGUgPSBkMy5zY2FsZVNxcnQoKS5kb21haW4oWzEsIDMyMDAwXSkucmFuZ2UoWzUsMTAwXSk7XG4gIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyN3b3JkLXByZXZpZXcnKVxuICBjb25zdCBjb2xvcnMgPSBbXCIjRjk0MTQ0XCIsIFwiI0YzNzIyQ1wiLCBcIiNGODk2MUVcIiwgXCIjRjlDNzRGXCIsIFwiIzkwQkU2RFwiLCBcIiM0M0FBOEJcIiwgXCIjNTc3NTkwXCJdO1xuXG4gIGNvbnN0IG51bU5vZGVzID0gZnJlcXVlbmNpZXMubGVuZ3RoO1xuICBjb25zdCBub2RlcyA9IGQzLnJhbmdlKG51bU5vZGVzKS5tYXAoZnVuY3Rpb24oZCwgaSkge1xuICAgIHJldHVybiB7cmFkaXVzOiByYWRpdXNTY2FsZShmcmVxdWVuY2llc1tpXS5mcmVxdWVuY3kpLFxuICAgICAgd29yZDogZnJlcXVlbmNpZXNbaV0ud29yZCBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbihub2RlcylcbiAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCg1KSlcbiAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKDUwMCwgMjUwKSlcbiAgICAuZm9yY2UoJ2NvbGxpc2lvbicsIGQzLmZvcmNlQ29sbGlkZSgpLnJhZGl1cyhmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZC5yYWRpdXNcbiAgICB9KSlcbiAgICAub24oJ3RpY2snLCB0aWNrZWQpXG5cbiAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgXG4gICAgY29uc3QgdSA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgIC5kYXRhKG5vZGVzKVxuXG4gICAgdS5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ3InLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnJhZGl1c1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICByZXR1cm4gY29sb3JzW2kgJSA3XTsgXG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2ZpbGwtb3BhY2l0eScsIC43KVxuICAgICAgLm9uKCdjbGljaycsIGZ1bmN0aW9uKGQpe1xuICAgICAgICBjb25zb2xlLmxvZyhkLndvcmQpXG4gICAgICB9KVxuICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiB0b29sdGlwXG4gICAgICAgICAgLnRleHQoZC53b3JkKVxuICAgICAgICAgIC5zdHlsZSgndmlzaWJpbGl0eScsICd2aXNpYmxlJylcbiAgICAgIH0pXG4gICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgIHJldHVybiB0b29sdGlwLnRleHQoXCJcIilcbiAgICAgICAgfSwgNzAwMClcbiAgICAgIH0pXG4gICAgICAubWVyZ2UodSlcbiAgICAgIC5hdHRyKCdjeCcsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueFxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdjeScsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIGQueVxuICAgICAgfSlcblxuICAgIHUuZXhpdCgpLnJlbW92ZSgpXG4gIH1cbiAgXG59XG5cblxuXG5cblxuXG5cblxuIiwic3BlZWNoZXMgPSBbXG4gIGBGb3VyIHNjb3JlIGFuZCBzZXZlbiB5ZWFycyBhZ28gb3VyIGZhdGhlcnMgYnJvdWdodCBmb3J0aCBcbiAgdXBvbiB0aGlzIGNvbnRpbmVudCwgYSBuZXcgbmF0aW9uLCBjb25jZWl2ZWQgaW4gbGliZXJ0eSwgXG4gIGFuZCBkZWRpY2F0ZWQgdG8gdGhlIHByb3Bvc2l0aW9uIHRoYXQgYWxsIG1lbiBhcmUgY3JlYXRlZCBlcXVhbCBcbiAgTm93IHdlIGFyZSBlbmdhZ2VkIGluIGEgZ3JlYXQgY2l2aWwgd2FyLCB0ZXN0aW5nIHdoZXRoZXIgdGhhdCBuYXRpb24sIFxuICBvciBhbnkgbmF0aW9uIHNvIGNvbmNlaXZlZCwgYW5kIHNvIGRlZGljYXRlZCwgY2FuIGxvbmcgZW5kdXJlLiBXZSBhcmUgbWV0IFxuICBvbiBhIGdyZWF0IGJhdHRsZSBmaWVsZCBvZiB0aGF0IHdhci5gLFxuICBcbiAgYEkgaGF2ZSBhIGRyZWFtIHRoYXQgb25lIGRheSB0aGlzIG5hdGlvbiB3aWxsIHJpc2UgdXAgYW5kIGxpdmUgb3V0IFxuICB0aGUgdHJ1ZSBtZWFuaW5nIG9mIGl0cyBjcmVlZDogV2UgaG9sZCB0aGVzZSB0cnV0aHMgdG8gYmUgc2VsZiBldmlkZW50IFxuICB0aGF0IGFsbCBtZW4gYXJlIGNyZWF0ZWQgZXF1YWwuIEkgaGF2ZSBhIGRyZWFtIHRoYXQgb25lIGRheSBvbiB0aGUgcmVkIGhpbGxzIFxuICBvZiBHZW9yZ2lhLCB0aGUgc29ucyBvZiBmb3JtZXIgc2xhdmVzIGFuZCB0aGUgc29ucyBvZiBmb3JtZXIgc2xhdmUgb3duZXJzIFxuICB3aWxsIGJlIGFibGUgdG8gc2l0IGRvd24gdG9nZXRoZXIgYXQgdGhlIHRhYmxlIG9mIGJyb3RoZXJob29kLmAsXG4gIFxuICBgQW5kIHNvLCBteSBmZWxsb3cgQW1lcmljYW5zOiBhc2sgbm90IHdoYXQgeW91ciBjb3VudHJ5IGNhbiBkbyBmb3IgeW91IFxuICBhc2sgd2hhdCB5b3UgY2FuIGRvIGZvciB5b3VyIGNvdW50cnkuIE15IGZlbGxvdyBjaXRpemVucyBvZiB0aGUgd29ybGQgXG4gIGFzayBub3Qgd2hhdCBBbWVyaWNhIHdpbGwgZG8gZm9yIHlvdSwgYnV0IHdoYXQgdG9nZXRoZXIgd2UgY2FuIGRvIGZvciB0aGUgZnJlZWRvbSBvZiBtYW4uIFxuICBGaW5hbGx5LCB3aGV0aGVyIHlvdSBhcmUgY2l0aXplbnMgb2YgQW1lcmljYSBvciBjaXRpemVucyBvZiB0aGUgd29ybGQsIGFzayBvZiB1cyB0aGUgc2FtZSBcbiAgaGlnaCBzdGFuZGFyZHMgb2Ygc3RyZW5ndGggYW5kIHNhY3JpZmljZSB3aGljaCB3ZSBhc2sgb2YgeW91LiBXaXRoIGEgZ29vZCBjb25zY2llbmNlIG91ciBcbiAgb25seSBzdXJlIHJld2FyZCwgd2l0aCBoaXN0b3J5IHRoZSBmaW5hbCBqdWRnZSBvZiBvdXIgZGVlZHMsIGxldCB1cyBnbyBmb3J0aCB0byBsZWFkIHRoZSBcbiAgbGFuZCB3ZSBsb3ZlLCBhc2tpbmcgSGlzIGJsZXNzaW5nIGFuZCBIaXMgaGVscCwgYnV0IGtub3dpbmcgdGhhdCBoZXJlIG9uIGVhcnRoIEdvZCdzIHdvcmsgXG4gIG11c3QgdHJ1bHkgYmUgb3VyIG93bi5gXG5dIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==