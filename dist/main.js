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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwaV9rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3BlZWNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3MiXSwibmFtZXMiOlsiYXBpS2V5IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3VibWl0QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJzdWJtaXRGb3JtIiwidXNlcklucHV0IiwicXVlcnlTZWxlY3RvciIsImNsZWFyQnV0dG9uIiwic3BlZWNoQnV0dG9uIiwibWFpbkNvbnRhaW5lciIsInRvb2x0aXAiLCJkMyIsInNlbGVjdCIsIm1vZGFsIiwieGJ1dHRvbiIsImUiLCJzdHlsZSIsImRpc3BsYXkiLCJ3aW5kb3ciLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInZhbHVlIiwiaWR4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic3BlZWNoZXMiLCJ3b3JkcyIsImZyZXF1ZW5jaWVzIiwicmVnZXgiLCJyZW1vdmVQdW5jdHVhdGlvbiIsInN0cmluZyIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNwbGl0IiwiZmlsdGVyIiwid29yZCIsImluZGV4T2YiLCJmb3JFYWNoIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwicmVzIiwib2JqIiwiZnJlcXVlbmN5IiwicGVyTWlsbGlvbiIsInB1c2giLCJyZW5kZXJDaXJjbGVzIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImNpcmNsZXNDb250YWluZXIiLCJyYWRpdXNTY2FsZSIsInNjYWxlU3FydCIsImRvbWFpbiIsInJhbmdlIiwiY29sb3JzIiwibnVtTm9kZXMiLCJsZW5ndGgiLCJub2RlcyIsIm1hcCIsImQiLCJpIiwicmFkaXVzIiwic2ltdWxhdGlvbiIsImZvcmNlU2ltdWxhdGlvbiIsImZvcmNlIiwiZm9yY2VNYW55Qm9keSIsInN0cmVuZ3RoIiwiZm9yY2VDZW50ZXIiLCJmb3JjZUNvbGxpZGUiLCJvbiIsInRpY2tlZCIsInUiLCJzZWxlY3RBbGwiLCJkYXRhIiwiZW50ZXIiLCJhcHBlbmQiLCJhdHRyIiwic2V0VGltZW91dCIsIm1lcmdlIiwieCIsInkiLCJleGl0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkFBLE1BQU0sR0FBRyxvREFBVCxDOzs7Ozs7Ozs7OztBQ0FBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUEx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VCxFQUFZO0FBQ3RCLGFBQU9BLENBQUMsQ0FBQ29CLENBQVQ7QUFDRCxLQTFCSCxFQTJCR0gsSUEzQkgsQ0EyQlEsSUEzQlIsRUEyQmMsVUFBU2pCLENBQVQsRUFBWTtBQUN0QixhQUFPQSxDQUFDLENBQUNxQixDQUFUO0FBQ0QsS0E3Qkg7QUErQkFULEtBQUMsQ0FBQ1UsSUFBRixHQUFTQyxNQUFUO0FBQ0Q7QUFFRixDOzs7Ozs7Ozs7OztBQzNLRDdELFFBQVEsR0FBRyxrM0NBQVgsQzs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5jc3NcIjtcbmltcG9ydCAnLi9zY3JpcHRzL2NpcmNsZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvc3BlZWNoZXMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvYXBpX2tleXMnOyIsImFwaUtleSA9IFwiNjEzOGZkMjk4ZW1zaDExYWFiOWVjOTE2NTk4MXAxOTM0N2Zqc25hODM1NTMwNDQwYjFcIiIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKT0+IHtcblxuICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XG4gIGNvbnN0IHN1Ym1pdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LWZvcm0nKTtcbiAgY29uc3QgdXNlcklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzZXItaW5wdXQnKTtcbiAgY29uc3QgY2xlYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcbiAgY29uc3Qgc3BlZWNoQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwZWVjaCcpO1xuICBjb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGFpbmVyJyk7XG4gIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyN3b3JkLXByZXZpZXcnKVxuICAvLyBjb25zdCBmYWtlV29yZHMgPSBbXTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xuICBjb25zdCB4YnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlJyk7XG4gIFxuICB4YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBpZiAoZS50YXJnZXQgPT09IG1vZGFsKSBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9KTtcblxuXG4gIGNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSk9PiB7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgICAvL2NsZWFycyBhbGwgY2lyY2xlc1xuICAgICB3aGlsZSAobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICBtYWluQ29udGFpbmVyLnJlbW92ZUNoaWxkKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCk7XG4gICAgIH07XG5cbiAgICAgdXNlcklucHV0LnZhbHVlID0gXCJcIjtcbiAgfSlcblxuICBzcGVlY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PiB7XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAzKTtcbiAgICB1c2VySW5wdXQudmFsdWUgPSBzcGVlY2hlc1tpZHhdO1xuICB9KVxuXG5cbiAgc3VibWl0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSk9PntcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy9pdGVyYXRlIHRocm91Z2ggdGhlIHN0cmluZyB0aGF0IHVzZXIgaW5wdXRzXG4gICAgbGV0IHdvcmRzID0gdXNlcklucHV0LnZhbHVlO1xuICAgIGxldCBmcmVxdWVuY2llcyA9IFtdO1xuXG4gICAgLy9yZW1vdmUgcHVuY3R1YXRpb25cbiAgICBjb25zdCByZWdleCA9IC9bIVwiIyQlJicoKSorLC0uLzo7PD0+P0BbXFxdXl9ge3x9fl0vZztcbiAgICBmdW5jdGlvbiByZW1vdmVQdW5jdHVhdGlvbihzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWdleCwgJycpIFxuICAgIH0gIFxuXG4gICAgLy9yZW1vdmUgZHVwbGljYXRlc1xuICAgIHdvcmRzID0gcmVtb3ZlUHVuY3R1YXRpb24od29yZHMpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xuICAgIHdvcmRzID0gd29yZHMuZmlsdGVyKCh3b3JkLGlkeCk9PntcbiAgICAgIHJldHVybiB3b3Jkcy5pbmRleE9mKHdvcmQpID09PSBpZHhcbiAgICB9KTtcblxuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBcbiAgICAgIC8vQVBJIGNhbGxcbiAgICAgIGZldGNoKGBodHRwczovL3dvcmRzYXBpdjEucC5yYXBpZGFwaS5jb20vd29yZHMvJHt3b3JkfS9mcmVxdWVuY3lgLCB7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFwiaGVhZGVyc1wiOiB7XG5cdFx0XHRcdFx0XCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJ3b3Jkc2FwaXYxLnAucmFwaWRhcGkuY29tXCIsXG5cdFx0XHRcdFx0XCJ4LXJhcGlkYXBpLWtleVwiOiBhcGlLZXlcbiAgICAgICAgfVxuICAgICAgfSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIG9ialtcImZyZXF1ZW5jeVwiXSA9IHJlcy5mcmVxdWVuY3kucGVyTWlsbGlvbjsgXG4gICAgICAgIG9ialtcIndvcmRcIl0gPSB3b3JkO1xuICAgICAgICBcbiAgICAgICAgZnJlcXVlbmNpZXMucHVzaChvYmopO1xuICAgICAgXG4gICAgICAgIHJldHVybiBmcmVxdWVuY2llczsgXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnJlcXVlbmNpZXMgPT4ge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBcbiAgICAgICAgLy9yZW5kZXIgY2lyY2xlcyBoZXJlIGFmdGVyIGdhdGhlcmluZyBhbiBhcnJheSBvZiByYWRpaSBsZW5ndGhzIGJhc2VkIG9uIGZyZXEgb2Ygd29yZCB1c2FnZVxuICAgICAgICByZW5kZXJDaXJjbGVzKGZyZXF1ZW5jaWVzKTtcbiAgICAgICAgLy9yZXNldCByYWRpaSBsZW5ndGhzIHRvIGJsYW5rXG4gICAgICAgIGZyZXF1ZW5jaWVzID0gW107XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9KVxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3dvcmR9IGlzIG5vdCBhIHdvcmQhYCk7XG4gICAgICAgIC8vIGZha2VXb3Jkcy5wdXNoKGAke3dvcmR9IGlzIG5vdCBhIHdvcmQhYCk7XG5cdFx0XHR9KTtcbiAgICB9KTtcblxuICAgIHRvb2x0aXAudGV4dChcImhvdmVyIG92ZXIgYnViYmxlcyFcIilcbiAgICBcbiAgfSlcblxufSk7XG5cbmZ1bmN0aW9uIHJlbmRlckNpcmNsZXMoZnJlcXVlbmNpZXMpIHtcbiAgLy8gZGVidWdnZXJcbiAgY29uc3QgY2lyY2xlc0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjaXJjbGVzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcmFkaXVzU2NhbGUgPSBkMy5zY2FsZVNxcnQoKS5kb21haW4oWzEsIDMyMDAwXSkucmFuZ2UoWzUsMTAwXSk7XG4gIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyN3b3JkLXByZXZpZXcnKVxuICBjb25zdCBjb2xvcnMgPSBbXCIjRjk0MTQ0XCIsIFwiI0YzNzIyQ1wiLCBcIiNGODk2MUVcIiwgXCIjRjlDNzRGXCIsIFwiIzkwQkU2RFwiLCBcIiM0M0FBOEJcIiwgXCIjNTc3NTkwXCJdO1xuXG4gIGNvbnN0IG51bU5vZGVzID0gZnJlcXVlbmNpZXMubGVuZ3RoO1xuICBjb25zdCBub2RlcyA9IGQzLnJhbmdlKG51bU5vZGVzKS5tYXAoZnVuY3Rpb24oZCwgaSkge1xuICAgIHJldHVybiB7cmFkaXVzOiByYWRpdXNTY2FsZShmcmVxdWVuY2llc1tpXS5mcmVxdWVuY3kpLFxuICAgICAgd29yZDogZnJlcXVlbmNpZXNbaV0ud29yZCBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbihub2RlcylcbiAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCg1KSlcbiAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKDUwMCwgMjUwKSlcbiAgICAuZm9yY2UoJ2NvbGxpc2lvbicsIGQzLmZvcmNlQ29sbGlkZSgpLnJhZGl1cyhmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZC5yYWRpdXNcbiAgICB9KSlcbiAgICAub24oJ3RpY2snLCB0aWNrZWQpXG5cbiAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc3QgdSA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgIC5kYXRhKG5vZGVzKVxuXG4gICAgdS5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ3InLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnJhZGl1c1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAvLyBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tpICUgN107IFxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAuNylcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKXtcbiAgICAgICAgY29uc29sZS5sb2coZC53b3JkKVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gdG9vbHRpcFxuICAgICAgICAgIC50ZXh0KGQud29yZClcbiAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICByZXR1cm4gdG9vbHRpcC50ZXh0KFwiXCIpXG4gICAgICAgIH0sIDcwMDApXG4gICAgICB9KVxuICAgICAgLm1lcmdlKHUpXG4gICAgICAuYXR0cignY3gnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnhcbiAgICAgIH0pXG4gICAgICAuYXR0cignY3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnlcbiAgICAgIH0pXG5cbiAgICB1LmV4aXQoKS5yZW1vdmUoKVxuICB9XG4gIFxufVxuXG5cblxuXG5cblxuXG5cbiIsInNwZWVjaGVzID0gW1xuICBgRm91ciBzY29yZSBhbmQgc2V2ZW4geWVhcnMgYWdvIG91ciBmYXRoZXJzIGJyb3VnaHQgZm9ydGggXG4gIHVwb24gdGhpcyBjb250aW5lbnQsIGEgbmV3IG5hdGlvbiwgY29uY2VpdmVkIGluIGxpYmVydHksIFxuICBhbmQgZGVkaWNhdGVkIHRvIHRoZSBwcm9wb3NpdGlvbiB0aGF0IGFsbCBtZW4gYXJlIGNyZWF0ZWQgZXF1YWwgXG4gIE5vdyB3ZSBhcmUgZW5nYWdlZCBpbiBhIGdyZWF0IGNpdmlsIHdhciwgdGVzdGluZyB3aGV0aGVyIHRoYXQgbmF0aW9uLCBcbiAgb3IgYW55IG5hdGlvbiBzbyBjb25jZWl2ZWQsIGFuZCBzbyBkZWRpY2F0ZWQsIGNhbiBsb25nIGVuZHVyZS4gV2UgYXJlIG1ldCBcbiAgb24gYSBncmVhdCBiYXR0bGUgZmllbGQgb2YgdGhhdCB3YXIuYCxcbiAgXG4gIGBJIGhhdmUgYSBkcmVhbSB0aGF0IG9uZSBkYXkgdGhpcyBuYXRpb24gd2lsbCByaXNlIHVwIGFuZCBsaXZlIG91dCBcbiAgdGhlIHRydWUgbWVhbmluZyBvZiBpdHMgY3JlZWQ6IFdlIGhvbGQgdGhlc2UgdHJ1dGhzIHRvIGJlIHNlbGYgZXZpZGVudCBcbiAgdGhhdCBhbGwgbWVuIGFyZSBjcmVhdGVkIGVxdWFsLiBJIGhhdmUgYSBkcmVhbSB0aGF0IG9uZSBkYXkgb24gdGhlIHJlZCBoaWxscyBcbiAgb2YgR2VvcmdpYSwgdGhlIHNvbnMgb2YgZm9ybWVyIHNsYXZlcyBhbmQgdGhlIHNvbnMgb2YgZm9ybWVyIHNsYXZlIG93bmVycyBcbiAgd2lsbCBiZSBhYmxlIHRvIHNpdCBkb3duIHRvZ2V0aGVyIGF0IHRoZSB0YWJsZSBvZiBicm90aGVyaG9vZC5gLFxuICBcbiAgYEFuZCBzbywgbXkgZmVsbG93IEFtZXJpY2FuczogYXNrIG5vdCB3aGF0IHlvdXIgY291bnRyeSBjYW4gZG8gZm9yIHlvdSBcbiAgYXNrIHdoYXQgeW91IGNhbiBkbyBmb3IgeW91ciBjb3VudHJ5LiBNeSBmZWxsb3cgY2l0aXplbnMgb2YgdGhlIHdvcmxkIFxuICBhc2sgbm90IHdoYXQgQW1lcmljYSB3aWxsIGRvIGZvciB5b3UsIGJ1dCB3aGF0IHRvZ2V0aGVyIHdlIGNhbiBkbyBmb3IgdGhlIGZyZWVkb20gb2YgbWFuLiBcbiAgRmluYWxseSwgd2hldGhlciB5b3UgYXJlIGNpdGl6ZW5zIG9mIEFtZXJpY2Egb3IgY2l0aXplbnMgb2YgdGhlIHdvcmxkLCBhc2sgb2YgdXMgdGhlIHNhbWUgXG4gIGhpZ2ggc3RhbmRhcmRzIG9mIHN0cmVuZ3RoIGFuZCBzYWNyaWZpY2Ugd2hpY2ggd2UgYXNrIG9mIHlvdS4gV2l0aCBhIGdvb2QgY29uc2NpZW5jZSBvdXIgXG4gIG9ubHkgc3VyZSByZXdhcmQsIHdpdGggaGlzdG9yeSB0aGUgZmluYWwganVkZ2Ugb2Ygb3VyIGRlZWRzLCBsZXQgdXMgZ28gZm9ydGggdG8gbGVhZCB0aGUgXG4gIGxhbmQgd2UgbG92ZSwgYXNraW5nIEhpcyBibGVzc2luZyBhbmQgSGlzIGhlbHAsIGJ1dCBrbm93aW5nIHRoYXQgaGVyZSBvbiBlYXJ0aCBHb2QncyB3b3JrIFxuICBtdXN0IHRydWx5IGJlIG91ciBvd24uYFxuXSIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=