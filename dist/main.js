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
        console.log("".concat(word, " is not a word!"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwaV9rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3BlZWNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/ODA2NiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInN1Ym1pdEZvcm0iLCJ1c2VySW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiY2xlYXJCdXR0b24iLCJzcGVlY2hCdXR0b24iLCJtYWluQ29udGFpbmVyIiwidG9vbHRpcCIsImQzIiwic2VsZWN0IiwibW9kYWwiLCJ4YnV0dG9uIiwiZSIsInN0eWxlIiwiZGlzcGxheSIsIndpbmRvdyIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwidmFsdWUiLCJpZHgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJzcGVlY2hlcyIsIndvcmRzIiwiZnJlcXVlbmNpZXMiLCJyZWdleCIsInJlbW92ZVB1bmN0dWF0aW9uIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJmaWx0ZXIiLCJ3b3JkIiwiaW5kZXhPZiIsImZvckVhY2giLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJyZXMiLCJvYmoiLCJmcmVxdWVuY3kiLCJwZXJNaWxsaW9uIiwicHVzaCIsInJlbmRlckNpcmNsZXMiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiY2lyY2xlc0NvbnRhaW5lciIsInJhZGl1c1NjYWxlIiwic2NhbGVTcXJ0IiwiZG9tYWluIiwicmFuZ2UiLCJjb2xvcnMiLCJudW1Ob2RlcyIsImxlbmd0aCIsIm5vZGVzIiwibWFwIiwiZCIsImkiLCJyYWRpdXMiLCJzaW11bGF0aW9uIiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2UiLCJmb3JjZU1hbnlCb2R5Iiwic3RyZW5ndGgiLCJmb3JjZUNlbnRlciIsImZvcmNlQ29sbGlkZSIsIm9uIiwidGlja2VkIiwidSIsInNlbGVjdEFsbCIsImRhdGEiLCJlbnRlciIsImFwcGVuZCIsImF0dHIiLCJzZXRUaW1lb3V0IiwibWVyZ2UiLCJ4IiwieSIsImV4aXQiLCJyZW1vdmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNGQUEsTUFBTSxHQUFHLG9EQUFULEM7Ozs7Ozs7Ozs7O0FDQUFDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIs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Q0FBQyxDQUFDb0IsQ0FBVDtBQUNELEtBMUJILEVBMkJHSCxJQTNCSCxDQTJCUSxJQTNCUixFQTJCYyxVQUFTakIsQ0FBVCxFQUFZO0FBQ3RCLGFBQU9BLENBQUMsQ0FBQ3FCLENBQVQ7QUFDRCxLQTdCSDtBQStCQVQsS0FBQyxDQUFDVSxJQUFGLEdBQVNDLE1BQVQ7QUFDRDtBQUVGLEM7Ozs7Ozs7Ozs7O0FDektEN0QsUUFBUSxHQUFHLGszQ0FBWCxDOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuaW1wb3J0ICcuL3NjcmlwdHMvY2lyY2xlcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9zcGVlY2hlcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9hcGlfa2V5cyc7IiwiYXBpS2V5ID0gXCI2MTM4ZmQyOThlbXNoMTFhYWI5ZWM5MTY1OTgxcDE5MzQ3ZmpzbmE4MzU1MzA0NDBiMVwiIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpPT4ge1xuXG4gIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcbiAgY29uc3Qgc3VibWl0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtZm9ybScpO1xuICBjb25zdCB1c2VySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlci1pbnB1dCcpO1xuICBjb25zdCBjbGVhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbGVhcicpO1xuICBjb25zdCBzcGVlY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3BlZWNoJyk7XG4gIGNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250YWluZXInKTtcbiAgY29uc3QgdG9vbHRpcCA9IGQzLnNlbGVjdCgnI3dvcmQtcHJldmlldycpXG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcbiAgY29uc3QgeGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZScpO1xuICBcbiAgeGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgaWYgKGUudGFyZ2V0ID09PSBtb2RhbCkgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSk7XG5cblxuICBjbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpPT4ge1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgLy9jbGVhcnMgYWxsIGNpcmNsZXNcbiAgICAgd2hpbGUgKG1haW5Db250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgbWFpbkNvbnRhaW5lci5yZW1vdmVDaGlsZChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICAgICB9O1xuXG4gICAgIHVzZXJJbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH0pXG5cbiAgc3BlZWNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT4ge1xuICAgIFxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMyk7XG4gICAgdXNlcklucHV0LnZhbHVlID0gc3BlZWNoZXNbaWR4XTtcbiAgfSlcblxuXG4gIHN1Ym1pdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpPT57XG4gICAgXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFxuICAgIC8vaXRlcmF0ZSB0aHJvdWdoIHRoZSBzdHJpbmcgdGhhdCB1c2VyIGlucHV0c1xuICAgIGxldCB3b3JkcyA9IHVzZXJJbnB1dC52YWx1ZTtcbiAgICBsZXQgZnJlcXVlbmNpZXMgPSBbXTtcblxuICAgIC8vcmVtb3ZlIHB1bmN0dWF0aW9uXG4gICAgY29uc3QgcmVnZXggPSAvWyFcIiMkJSYnKCkqKywtLi86Ozw9Pj9AW1xcXV5fYHt8fX5dL2c7XG4gICAgZnVuY3Rpb24gcmVtb3ZlUHVuY3R1YXRpb24oc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UocmVnZXgsICcnKSBcbiAgICB9ICBcblxuICAgIC8vcmVtb3ZlIGR1cGxpY2F0ZXNcbiAgICB3b3JkcyA9IHJlbW92ZVB1bmN0dWF0aW9uKHdvcmRzKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKTtcbiAgICB3b3JkcyA9IHdvcmRzLmZpbHRlcigod29yZCxpZHgpPT57XG4gICAgICByZXR1cm4gd29yZHMuaW5kZXhPZih3b3JkKSA9PT0gaWR4XG4gICAgfSk7XG5cbiAgICB3b3Jkcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgXG4gICAgICAvL0FQSSBjYWxsXG4gICAgICBmZXRjaChgaHR0cHM6Ly93b3Jkc2FwaXYxLnAucmFwaWRhcGkuY29tL3dvcmRzLyR7d29yZH0vZnJlcXVlbmN5YCwge1xuXHRcdFx0XHRcIm1ldGhvZFwiOiBcIkdFVFwiLFxuXHRcdFx0XHRcImhlYWRlcnNcIjoge1xuXHRcdFx0XHRcdFwieC1yYXBpZGFwaS1ob3N0XCI6IFwid29yZHNhcGl2MS5wLnJhcGlkYXBpLmNvbVwiLFxuXHRcdFx0XHRcdFwieC1yYXBpZGFwaS1rZXlcIjogYXBpS2V5XG4gICAgICAgIH1cbiAgICAgIH0pXG5cdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICBvYmpbXCJmcmVxdWVuY3lcIl0gPSByZXMuZnJlcXVlbmN5LnBlck1pbGxpb247IFxuICAgICAgICBvYmpbXCJ3b3JkXCJdID0gd29yZDtcbiAgICAgICAgXG4gICAgICAgIGZyZXF1ZW5jaWVzLnB1c2gob2JqKTtcbiAgICAgIFxuICAgICAgICByZXR1cm4gZnJlcXVlbmNpZXM7IFxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfSlcbiAgICAgIC50aGVuKGZyZXF1ZW5jaWVzID0+IHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgXG4gICAgICAgIC8vcmVuZGVyIGNpcmNsZXMgaGVyZSBhZnRlciBnYXRoZXJpbmcgYW4gYXJyYXkgb2YgcmFkaWkgbGVuZ3RocyBiYXNlZCBvbiBmcmVxIG9mIHdvcmQgdXNhZ2VcbiAgICAgICAgcmVuZGVyQ2lyY2xlcyhmcmVxdWVuY2llcyk7XG4gICAgICAgIC8vcmVzZXQgcmFkaWkgbGVuZ3RocyB0byBibGFua1xuICAgICAgICBmcmVxdWVuY2llcyA9IFtdO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgfSlcblx0XHRcdC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt3b3JkfSBpcyBub3QgYSB3b3JkIWApO1xuXHRcdFx0fSk7XG4gICAgfSk7XG5cbiAgICB0b29sdGlwLnRleHQoXCJob3ZlciBvdmVyIGJ1YmJsZXMhXCIpXG4gICAgXG4gIH0pXG5cbn0pO1xuXG5mdW5jdGlvbiByZW5kZXJDaXJjbGVzKGZyZXF1ZW5jaWVzKSB7XG4gIC8vIGRlYnVnZ2VyXG4gIGNvbnN0IGNpcmNsZXNDb250YWluZXIgPSBkMy5zZWxlY3QoXCIjY2lyY2xlcy1jb250YWluZXJcIik7XG4gIGNvbnN0IHJhZGl1c1NjYWxlID0gZDMuc2NhbGVTcXJ0KCkuZG9tYWluKFsxLCAzMjAwMF0pLnJhbmdlKFs1LDEwMF0pO1xuICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KCcjd29yZC1wcmV2aWV3JylcbiAgY29uc3QgY29sb3JzID0gW1wiI0Y5NDE0NFwiLCBcIiNGMzcyMkNcIiwgXCIjRjg5NjFFXCIsIFwiI0Y5Qzc0RlwiLCBcIiM5MEJFNkRcIiwgXCIjNDNBQThCXCIsIFwiIzU3NzU5MFwiXTtcblxuICBjb25zdCBudW1Ob2RlcyA9IGZyZXF1ZW5jaWVzLmxlbmd0aDtcbiAgY29uc3Qgbm9kZXMgPSBkMy5yYW5nZShudW1Ob2RlcykubWFwKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICByZXR1cm4ge3JhZGl1czogcmFkaXVzU2NhbGUoZnJlcXVlbmNpZXNbaV0uZnJlcXVlbmN5KSxcbiAgICAgIHdvcmQ6IGZyZXF1ZW5jaWVzW2ldLndvcmQgXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHNpbXVsYXRpb24gPSBkMy5mb3JjZVNpbXVsYXRpb24obm9kZXMpXG4gICAgLmZvcmNlKCdjaGFyZ2UnLCBkMy5mb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoNSkpXG4gICAgLmZvcmNlKCdjZW50ZXInLCBkMy5mb3JjZUNlbnRlcig1MDAsIDI1MCkpXG4gICAgLmZvcmNlKCdjb2xsaXNpb24nLCBkMy5mb3JjZUNvbGxpZGUoKS5yYWRpdXMoZnVuY3Rpb24oZCkge1xuICAgICAgcmV0dXJuIGQucmFkaXVzXG4gICAgfSkpXG4gICAgLm9uKCd0aWNrJywgdGlja2VkKVxuXG4gIGZ1bmN0aW9uIHRpY2tlZCgpIHtcbiAgICAvLyBkZWJ1Z2dlclxuICAgIGNvbnN0IHUgPSBkMy5zZWxlY3QoJ3N2ZycpXG4gICAgLnNlbGVjdEFsbCgnY2lyY2xlJylcbiAgICAuZGF0YShub2RlcylcblxuICAgIHUuZW50ZXIoKVxuICAgICAgLmFwcGVuZCgnY2lyY2xlJylcbiAgICAgIC5hdHRyKCdyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC5yYWRpdXNcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbCcsIGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAgICAgLy8gbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29sb3JzLmxlbmd0aCk7XG4gICAgICAgIHJldHVybiBjb2xvcnNbaSAlIDddOyBcbiAgICAgIH0pXG4gICAgICAuYXR0cignZmlsbC1vcGFjaXR5JywgLjcpXG4gICAgICAub24oJ2NsaWNrJywgZnVuY3Rpb24oZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKGQud29yZClcbiAgICAgIH0pXG4gICAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgcmV0dXJuIHRvb2x0aXBcbiAgICAgICAgICAudGV4dChkLndvcmQpXG4gICAgICAgICAgLnN0eWxlKCd2aXNpYmlsaXR5JywgJ3Zpc2libGUnKVxuICAgICAgfSlcbiAgICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgcmV0dXJuIHRvb2x0aXAudGV4dChcIlwiKVxuICAgICAgICB9LCA3MDAwKVxuICAgICAgfSlcbiAgICAgIC5tZXJnZSh1KVxuICAgICAgLmF0dHIoJ2N4JywgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC54XG4gICAgICB9KVxuICAgICAgLmF0dHIoJ2N5JywgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZC55XG4gICAgICB9KVxuXG4gICAgdS5leGl0KCkucmVtb3ZlKClcbiAgfVxuICBcbn1cblxuXG5cblxuXG5cblxuXG4iLCJzcGVlY2hlcyA9IFtcbiAgYEZvdXIgc2NvcmUgYW5kIHNldmVuIHllYXJzIGFnbyBvdXIgZmF0aGVycyBicm91Z2h0IGZvcnRoIFxuICB1cG9uIHRoaXMgY29udGluZW50LCBhIG5ldyBuYXRpb24sIGNvbmNlaXZlZCBpbiBsaWJlcnR5LCBcbiAgYW5kIGRlZGljYXRlZCB0byB0aGUgcHJvcG9zaXRpb24gdGhhdCBhbGwgbWVuIGFyZSBjcmVhdGVkIGVxdWFsIFxuICBOb3cgd2UgYXJlIGVuZ2FnZWQgaW4gYSBncmVhdCBjaXZpbCB3YXIsIHRlc3Rpbmcgd2hldGhlciB0aGF0IG5hdGlvbiwgXG4gIG9yIGFueSBuYXRpb24gc28gY29uY2VpdmVkLCBhbmQgc28gZGVkaWNhdGVkLCBjYW4gbG9uZyBlbmR1cmUuIFdlIGFyZSBtZXQgXG4gIG9uIGEgZ3JlYXQgYmF0dGxlIGZpZWxkIG9mIHRoYXQgd2FyLmAsXG4gIFxuICBgSSBoYXZlIGEgZHJlYW0gdGhhdCBvbmUgZGF5IHRoaXMgbmF0aW9uIHdpbGwgcmlzZSB1cCBhbmQgbGl2ZSBvdXQgXG4gIHRoZSB0cnVlIG1lYW5pbmcgb2YgaXRzIGNyZWVkOiBXZSBob2xkIHRoZXNlIHRydXRocyB0byBiZSBzZWxmIGV2aWRlbnQgXG4gIHRoYXQgYWxsIG1lbiBhcmUgY3JlYXRlZCBlcXVhbC4gSSBoYXZlIGEgZHJlYW0gdGhhdCBvbmUgZGF5IG9uIHRoZSByZWQgaGlsbHMgXG4gIG9mIEdlb3JnaWEsIHRoZSBzb25zIG9mIGZvcm1lciBzbGF2ZXMgYW5kIHRoZSBzb25zIG9mIGZvcm1lciBzbGF2ZSBvd25lcnMgXG4gIHdpbGwgYmUgYWJsZSB0byBzaXQgZG93biB0b2dldGhlciBhdCB0aGUgdGFibGUgb2YgYnJvdGhlcmhvb2QuYCxcbiAgXG4gIGBBbmQgc28sIG15IGZlbGxvdyBBbWVyaWNhbnM6IGFzayBub3Qgd2hhdCB5b3VyIGNvdW50cnkgY2FuIGRvIGZvciB5b3UgXG4gIGFzayB3aGF0IHlvdSBjYW4gZG8gZm9yIHlvdXIgY291bnRyeS4gTXkgZmVsbG93IGNpdGl6ZW5zIG9mIHRoZSB3b3JsZCBcbiAgYXNrIG5vdCB3aGF0IEFtZXJpY2Egd2lsbCBkbyBmb3IgeW91LCBidXQgd2hhdCB0b2dldGhlciB3ZSBjYW4gZG8gZm9yIHRoZSBmcmVlZG9tIG9mIG1hbi4gXG4gIEZpbmFsbHksIHdoZXRoZXIgeW91IGFyZSBjaXRpemVucyBvZiBBbWVyaWNhIG9yIGNpdGl6ZW5zIG9mIHRoZSB3b3JsZCwgYXNrIG9mIHVzIHRoZSBzYW1lIFxuICBoaWdoIHN0YW5kYXJkcyBvZiBzdHJlbmd0aCBhbmQgc2FjcmlmaWNlIHdoaWNoIHdlIGFzayBvZiB5b3UuIFdpdGggYSBnb29kIGNvbnNjaWVuY2Ugb3VyIFxuICBvbmx5IHN1cmUgcmV3YXJkLCB3aXRoIGhpc3RvcnkgdGhlIGZpbmFsIGp1ZGdlIG9mIG91ciBkZWVkcywgbGV0IHVzIGdvIGZvcnRoIHRvIGxlYWQgdGhlIFxuICBsYW5kIHdlIGxvdmUsIGFza2luZyBIaXMgYmxlc3NpbmcgYW5kIEhpcyBoZWxwLCBidXQga25vd2luZyB0aGF0IGhlcmUgb24gZWFydGggR29kJ3Mgd29yayBcbiAgbXVzdCB0cnVseSBiZSBvdXIgb3duLmBcbl0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9