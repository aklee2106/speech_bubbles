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
  var submitButton = document.getElementById('submit'); // const submitForm = document.getElementById('submit-form');

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
  submitButton.addEventListener('click', function (e) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2FwaV9rZXlzLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NpcmNsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc3BlZWNoZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy9pbmRleC5jc3M/ODA2NiJdLCJuYW1lcyI6WyJhcGlLZXkiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdWJtaXRCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsInVzZXJJbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGVhckJ1dHRvbiIsInNwZWVjaEJ1dHRvbiIsIm1haW5Db250YWluZXIiLCJ0b29sdGlwIiwiZDMiLCJzZWxlY3QiLCJlIiwicHJldmVudERlZmF1bHQiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJ2YWx1ZSIsImlkeCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNwZWVjaGVzIiwid29yZHMiLCJmcmVxdWVuY2llcyIsInJlZ2V4IiwicmVtb3ZlUHVuY3R1YXRpb24iLCJzdHJpbmciLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJzcGxpdCIsImZpbHRlciIsIndvcmQiLCJpbmRleE9mIiwiZm9yRWFjaCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInJlcyIsIm9iaiIsImZyZXF1ZW5jeSIsInBlck1pbGxpb24iLCJwdXNoIiwicmVuZGVyQ2lyY2xlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJjaXJjbGVzQ29udGFpbmVyIiwicmFkaXVzU2NhbGUiLCJzY2FsZVNxcnQiLCJkb21haW4iLCJyYW5nZSIsImNvbG9ycyIsIm51bU5vZGVzIiwibGVuZ3RoIiwibm9kZXMiLCJtYXAiLCJkIiwiaSIsInJhZGl1cyIsInNpbXVsYXRpb24iLCJmb3JjZVNpbXVsYXRpb24iLCJmb3JjZSIsImZvcmNlTWFueUJvZHkiLCJzdHJlbmd0aCIsImZvcmNlQ2VudGVyIiwiZm9yY2VDb2xsaWRlIiwib24iLCJ0aWNrZWQiLCJ1Iiwic2VsZWN0QWxsIiwiZGF0YSIsImVudGVyIiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwic2V0VGltZW91dCIsIm1lcmdlIiwieCIsInkiLCJleGl0IiwicmVtb3ZlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDRkFBLE1BQU0sR0FBRyxvREFBVCxDOzs7Ozs7Ozs7OztBQ0FBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFLO0FBRWpELE1BQU1DLFlBQVksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQXJCLENBRmlELENBR2pEOztBQUNBLE1BQU1DLFNBQVMsR0FBR0osUUFBUSxDQUFDSyxhQUFULENBQXVCLGFBQXZCLENBQWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHTixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBcEI7QUFDQSxNQUFNSSxZQUFZLEdBQUdQLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixRQUF4QixDQUFyQjtBQUNBLE1BQU1LLGFBQWEsR0FBR1IsUUFBUSxDQUFDSyxhQUFULENBQXVCLGlCQUF2QixDQUF0QjtBQUNBLE1BQU1JLE9BQU8sR0FBR0MsRUFBRSxDQUFDQyxNQUFILENBQVUsZUFBVixDQUFoQixDQVJpRCxDQVNqRDs7QUFFQUwsYUFBVyxDQUFDTCxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFDVyxDQUFELEVBQU07QUFFMUNBLEtBQUMsQ0FBQ0MsY0FBRixHQUYwQyxDQUl6Qzs7QUFDQSxXQUFPTCxhQUFhLENBQUNNLFVBQXJCLEVBQWlDO0FBQ2hDTixtQkFBYSxDQUFDTyxXQUFkLENBQTBCUCxhQUFhLENBQUNNLFVBQXhDO0FBQ0E7O0FBQUE7QUFFRFYsYUFBUyxDQUFDWSxLQUFWLEdBQWtCLEVBQWxCO0FBQ0YsR0FWRDtBQVlBVCxjQUFZLENBQUNOLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUNXLENBQUQsRUFBTTtBQUUzQ0EsS0FBQyxDQUFDQyxjQUFGO0FBQ0EsUUFBSUksR0FBRyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLENBQTNCLENBQVY7QUFDQWhCLGFBQVMsQ0FBQ1ksS0FBVixHQUFrQkssUUFBUSxDQUFDSixHQUFELENBQTFCO0FBQ0QsR0FMRDtBQVFBZixjQUFZLENBQUNELGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUNXLENBQUQsRUFBSztBQUUxQ0EsS0FBQyxDQUFDQyxjQUFGLEdBRjBDLENBSTFDOztBQUNBLFFBQUlTLEtBQUssR0FBR2xCLFNBQVMsQ0FBQ1ksS0FBdEI7QUFDQSxRQUFJTyxXQUFXLEdBQUcsRUFBbEIsQ0FOMEMsQ0FRMUM7O0FBQ0EsUUFBTUMsS0FBSyxHQUFHLHFDQUFkOztBQUNBLGFBQVNDLGlCQUFULENBQTJCQyxNQUEzQixFQUFtQztBQUNqQyxhQUFPQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUgsS0FBZixFQUFzQixFQUF0QixDQUFQO0FBQ0QsS0FaeUMsQ0FjMUM7OztBQUNBRixTQUFLLEdBQUdHLGlCQUFpQixDQUFDSCxLQUFELENBQWpCLENBQXlCTSxXQUF6QixHQUF1Q0MsS0FBdkMsQ0FBNkMsR0FBN0MsQ0FBUjtBQUNBUCxTQUFLLEdBQUdBLEtBQUssQ0FBQ1EsTUFBTixDQUFhLFVBQUNDLElBQUQsRUFBTWQsR0FBTixFQUFZO0FBQy9CLGFBQU9LLEtBQUssQ0FBQ1UsT0FBTixDQUFjRCxJQUFkLE1BQXdCZCxHQUEvQjtBQUNELEtBRk8sQ0FBUjtBQUlBSyxTQUFLLENBQUNXLE9BQU4sQ0FBYyxVQUFBRixJQUFJLEVBQUk7QUFFcEI7QUFDQUcsV0FBSyxtREFBNENILElBQTVDLGlCQUE4RDtBQUNyRSxrQkFBVSxLQUQyRDtBQUVyRSxtQkFBVztBQUNWLDZCQUFtQiwyQkFEVDtBQUVWLDRCQUFrQmhDO0FBRlI7QUFGMEQsT0FBOUQsQ0FBTCxDQU9Gb0MsSUFQRSxDQU9HLFVBQUFDLFFBQVEsRUFBSTtBQUNiO0FBQ0EsZUFBT0EsUUFBUSxDQUFDQyxJQUFULEVBQVA7QUFDRCxPQVZELEVBV0NGLElBWEQsQ0FXTSxVQUFBRyxHQUFHLEVBQUk7QUFDWCxZQUFJQyxHQUFHLEdBQUcsRUFBVjtBQUNBQSxXQUFHLENBQUMsV0FBRCxDQUFILEdBQW1CRCxHQUFHLENBQUNFLFNBQUosQ0FBY0MsVUFBakM7QUFDQUYsV0FBRyxDQUFDLE1BQUQsQ0FBSCxHQUFjUixJQUFkO0FBRUFSLG1CQUFXLENBQUNtQixJQUFaLENBQWlCSCxHQUFqQjtBQUVBLGVBQU9oQixXQUFQLENBUFcsQ0FRWDtBQUNELE9BcEJELEVBcUJDWSxJQXJCRCxDQXFCTSxVQUFBWixXQUFXLEVBQUk7QUFDbkI7QUFFQTtBQUNBb0IscUJBQWEsQ0FBQ3BCLFdBQUQsQ0FBYixDQUptQixDQUtuQjs7QUFDQUEsbUJBQVcsR0FBRyxFQUFkLENBTm1CLENBT25CO0FBQ0QsT0E3QkQsRUE4QkZxQixLQTlCRSxDQThCSSxVQUFBQyxHQUFHLEVBQUk7QUFDVEMsZUFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQUMsZUFBTyxDQUFDQyxHQUFSLFdBQWVoQixJQUFmLHNCQUZTLENBR1Q7QUFDSixPQWxDRTtBQW1DRCxLQXRDRDtBQXdDQXRCLFdBQU8sQ0FBQ3VDLElBQVIsQ0FBYSxxQkFBYjtBQUVELEdBOUREO0FBZ0VELENBL0ZEOztBQWlHQSxTQUFTTCxhQUFULENBQXVCcEIsV0FBdkIsRUFBb0M7QUFDbEM7QUFDQSxNQUFNMEIsZ0JBQWdCLEdBQUd2QyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxvQkFBVixDQUF6QjtBQUNBLE1BQU11QyxXQUFXLEdBQUd4QyxFQUFFLENBQUN5QyxTQUFILEdBQWVDLE1BQWYsQ0FBc0IsQ0FBQyxDQUFELEVBQUksS0FBSixDQUF0QixFQUFrQ0MsS0FBbEMsQ0FBd0MsQ0FBQyxDQUFELEVBQUcsR0FBSCxDQUF4QyxDQUFwQjtBQUNBLE1BQU01QyxPQUFPLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLGVBQVYsQ0FBaEI7QUFDQSxNQUFNMkMsTUFBTSxHQUFHLENBQUMsU0FBRCxFQUFZLFNBQVosRUFBdUIsU0FBdkIsRUFBa0MsU0FBbEMsRUFBNkMsU0FBN0MsRUFBd0QsU0FBeEQsRUFBbUUsU0FBbkUsQ0FBZjtBQUVBLE1BQU1DLFFBQVEsR0FBR2hDLFdBQVcsQ0FBQ2lDLE1BQTdCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHL0MsRUFBRSxDQUFDMkMsS0FBSCxDQUFTRSxRQUFULEVBQW1CRyxHQUFuQixDQUF1QixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFBZTtBQUNsRCxXQUFPO0FBQUNDLFlBQU0sRUFBRVgsV0FBVyxDQUFDM0IsV0FBVyxDQUFDcUMsQ0FBRCxDQUFYLENBQWVwQixTQUFoQixDQUFwQjtBQUNMVCxVQUFJLEVBQUVSLFdBQVcsQ0FBQ3FDLENBQUQsQ0FBWCxDQUFlN0I7QUFEaEIsS0FBUDtBQUdELEdBSmEsQ0FBZDtBQU1BLE1BQU0rQixVQUFVLEdBQUdwRCxFQUFFLENBQUNxRCxlQUFILENBQW1CTixLQUFuQixFQUNoQk8sS0FEZ0IsQ0FDVixRQURVLEVBQ0F0RCxFQUFFLENBQUN1RCxhQUFILEdBQW1CQyxRQUFuQixDQUE0QixDQUE1QixDQURBLEVBRWhCRixLQUZnQixDQUVWLFFBRlUsRUFFQXRELEVBQUUsQ0FBQ3lELFdBQUgsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLENBRkEsRUFHaEJILEtBSGdCLENBR1YsV0FIVSxFQUdHdEQsRUFBRSxDQUFDMEQsWUFBSCxHQUFrQlAsTUFBbEIsQ0FBeUIsVUFBU0YsQ0FBVCxFQUFZO0FBQ3ZELFdBQU9BLENBQUMsQ0FBQ0UsTUFBVDtBQUNELEdBRm1CLENBSEgsRUFNaEJRLEVBTmdCLENBTWIsTUFOYSxFQU1MQyxNQU5LLENBQW5COztBQVFBLFdBQVNBLE1BQVQsR0FBa0I7QUFDaEI7QUFDQSxRQUFNQyxDQUFDLEdBQUc3RCxFQUFFLENBQUNDLE1BQUgsQ0FBVSxLQUFWLEVBQ1Q2RCxTQURTLENBQ0MsUUFERCxFQUVUQyxJQUZTLENBRUpoQixLQUZJLENBQVY7QUFJQWMsS0FBQyxDQUFDRyxLQUFGLEdBQ0dDLE1BREgsQ0FDVSxRQURWLEVBRUdDLElBRkgsQ0FFUSxHQUZSLEVBRWEsVUFBU2pCLENBQVQsRUFBWTtBQUNyQixhQUFPQSxDQUFDLENBQUNFLE1BQVQ7QUFDRCxLQUpILEVBS0dlLElBTEgsQ0FLUSxNQUxSLEVBS2dCLFVBQVNqQixDQUFULEVBQVlDLENBQVosRUFBZTtBQUMzQjtBQUNBLGFBQU9OLE1BQU0sQ0FBQ00sQ0FBQyxHQUFHLENBQUwsQ0FBYjtBQUNELEtBUkgsRUFTR2dCLElBVEgsQ0FTUSxjQVRSLEVBU3dCLEVBVHhCLEVBVUdQLEVBVkgsQ0FVTSxPQVZOLEVBVWUsVUFBU1YsQ0FBVCxFQUFXO0FBQ3RCYixhQUFPLENBQUNDLEdBQVIsQ0FBWVksQ0FBQyxDQUFDNUIsSUFBZDtBQUNELEtBWkgsRUFhR3NDLEVBYkgsQ0FhTSxXQWJOLEVBYW1CLFVBQVNWLENBQVQsRUFBWTtBQUMzQixhQUFPbEQsT0FBTyxDQUNYdUMsSUFESSxDQUNDVyxDQUFDLENBQUM1QixJQURILEVBRUo4QyxLQUZJLENBRUUsWUFGRixFQUVnQixTQUZoQixDQUFQO0FBR0QsS0FqQkgsRUFrQkdSLEVBbEJILENBa0JNLFVBbEJOLEVBa0JrQixZQUFXO0FBQ3pCUyxnQkFBVSxDQUFDLFlBQUk7QUFDYixlQUFPckUsT0FBTyxDQUFDdUMsSUFBUixDQUFhLEVBQWIsQ0FBUDtBQUNELE9BRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxLQXRCSCxFQXVCRytCLEtBdkJILENBdUJTUixDQXZCVCxFQXdCR0ssSUF4QkgsQ0F3QlEsSUF4QlIsRUF3QmMsVUFBU2pCLENBQVQsRUFBWTtBQUN0QixhQUFPQSxDQUFDLENBQUNxQixDQUFUO0FBQ0QsS0ExQkgsRUEyQkdKLElBM0JILENBMkJRLElBM0JSLEVBMkJjLFVBQVNqQixDQUFULEVBQVk7QUFDdEIsYUFBT0EsQ0FBQyxDQUFDc0IsQ0FBVDtBQUNELEtBN0JIO0FBK0JBVixLQUFDLENBQUNXLElBQUYsR0FBU0MsTUFBVDtBQUNEO0FBRUYsQzs7Ozs7Ozs7Ozs7QUMvSkQ5RCxRQUFRLEdBQUcsaXJDQUFYLEM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5pbXBvcnQgJy4vc2NyaXB0cy9jaXJjbGVzJztcbmltcG9ydCAnLi9zY3JpcHRzL3NwZWVjaGVzJztcbmltcG9ydCAnLi9zY3JpcHRzL2FwaV9rZXlzJzsiLCJhcGlLZXkgPSBcIjYxMzhmZDI5OGVtc2gxMWFhYjllYzkxNjU5ODFwMTkzNDdmanNuYTgzNTUzMDQ0MGIxXCIiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCk9PiB7XG5cbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuICAvLyBjb25zdCBzdWJtaXRGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1mb3JtJyk7XG4gIGNvbnN0IHVzZXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLWlucHV0Jyk7XG4gIGNvbnN0IGNsZWFyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsZWFyJyk7XG4gIGNvbnN0IHNwZWVjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGVlY2gnKTtcbiAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRhaW5lcicpO1xuICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KCcjd29yZC1wcmV2aWV3JylcbiAgLy8gY29uc3QgZmFrZVdvcmRzID0gW107XG5cbiAgY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKT0+IHtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgIC8vY2xlYXJzIGFsbCBjaXJjbGVzXG4gICAgIHdoaWxlIChtYWluQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgIG1haW5Db250YWluZXIucmVtb3ZlQ2hpbGQobWFpbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgICAgfTtcblxuICAgICB1c2VySW5wdXQudmFsdWUgPSBcIlwiO1xuICB9KVxuXG4gIHNwZWVjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+IHtcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMpO1xuICAgIHVzZXJJbnB1dC52YWx1ZSA9IHNwZWVjaGVzW2lkeF07XG4gIH0pXG5cblxuICBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy9pdGVyYXRlIHRocm91Z2ggdGhlIHN0cmluZyB0aGF0IHVzZXIgaW5wdXRzXG4gICAgbGV0IHdvcmRzID0gdXNlcklucHV0LnZhbHVlO1xuICAgIGxldCBmcmVxdWVuY2llcyA9IFtdO1xuXG4gICAgLy9yZW1vdmUgcHVuY3R1YXRpb25cbiAgICBjb25zdCByZWdleCA9IC9bIVwiIyQlJicoKSorLC0uLzo7PD0+P0BbXFxdXl9ge3x9fl0vZztcbiAgICBmdW5jdGlvbiByZW1vdmVQdW5jdHVhdGlvbihzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShyZWdleCwgJycpIFxuICAgIH0gIFxuXG4gICAgLy9yZW1vdmUgZHVwbGljYXRlc1xuICAgIHdvcmRzID0gcmVtb3ZlUHVuY3R1YXRpb24od29yZHMpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpO1xuICAgIHdvcmRzID0gd29yZHMuZmlsdGVyKCh3b3JkLGlkeCk9PntcbiAgICAgIHJldHVybiB3b3Jkcy5pbmRleE9mKHdvcmQpID09PSBpZHhcbiAgICB9KTtcblxuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBcbiAgICAgIC8vQVBJIGNhbGxcbiAgICAgIGZldGNoKGBodHRwczovL3dvcmRzYXBpdjEucC5yYXBpZGFwaS5jb20vd29yZHMvJHt3b3JkfS9mcmVxdWVuY3lgLCB7XG5cdFx0XHRcdFwibWV0aG9kXCI6IFwiR0VUXCIsXG5cdFx0XHRcdFwiaGVhZGVyc1wiOiB7XG5cdFx0XHRcdFx0XCJ4LXJhcGlkYXBpLWhvc3RcIjogXCJ3b3Jkc2FwaXYxLnAucmFwaWRhcGkuY29tXCIsXG5cdFx0XHRcdFx0XCJ4LXJhcGlkYXBpLWtleVwiOiBhcGlLZXlcbiAgICAgICAgfVxuICAgICAgfSlcblx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBsZXQgb2JqID0ge307XG4gICAgICAgIG9ialtcImZyZXF1ZW5jeVwiXSA9IHJlcy5mcmVxdWVuY3kucGVyTWlsbGlvbjsgXG4gICAgICAgIG9ialtcIndvcmRcIl0gPSB3b3JkO1xuICAgICAgICBcbiAgICAgICAgZnJlcXVlbmNpZXMucHVzaChvYmopO1xuICAgICAgXG4gICAgICAgIHJldHVybiBmcmVxdWVuY2llczsgXG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9KVxuICAgICAgLnRoZW4oZnJlcXVlbmNpZXMgPT4ge1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBcbiAgICAgICAgLy9yZW5kZXIgY2lyY2xlcyBoZXJlIGFmdGVyIGdhdGhlcmluZyBhbiBhcnJheSBvZiByYWRpaSBsZW5ndGhzIGJhc2VkIG9uIGZyZXEgb2Ygd29yZCB1c2FnZVxuICAgICAgICByZW5kZXJDaXJjbGVzKGZyZXF1ZW5jaWVzKTtcbiAgICAgICAgLy9yZXNldCByYWRpaSBsZW5ndGhzIHRvIGJsYW5rXG4gICAgICAgIGZyZXF1ZW5jaWVzID0gW107XG4gICAgICAgIC8vIGRlYnVnZ2VyXG4gICAgICB9KVxuXHRcdFx0LmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3dvcmR9IGlzIG5vdCBhIHdvcmQhYCk7XG4gICAgICAgIC8vIGZha2VXb3Jkcy5wdXNoKGAke3dvcmR9IGlzIG5vdCBhIHdvcmQhYCk7XG5cdFx0XHR9KTtcbiAgICB9KTtcblxuICAgIHRvb2x0aXAudGV4dChcImhvdmVyIG92ZXIgYnViYmxlcyFcIilcbiAgICBcbiAgfSlcblxufSk7XG5cbmZ1bmN0aW9uIHJlbmRlckNpcmNsZXMoZnJlcXVlbmNpZXMpIHtcbiAgLy8gZGVidWdnZXJcbiAgY29uc3QgY2lyY2xlc0NvbnRhaW5lciA9IGQzLnNlbGVjdChcIiNjaXJjbGVzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgcmFkaXVzU2NhbGUgPSBkMy5zY2FsZVNxcnQoKS5kb21haW4oWzEsIDMyMDAwXSkucmFuZ2UoWzUsMTAwXSk7XG4gIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoJyN3b3JkLXByZXZpZXcnKVxuICBjb25zdCBjb2xvcnMgPSBbXCIjRjk0MTQ0XCIsIFwiI0YzNzIyQ1wiLCBcIiNGODk2MUVcIiwgXCIjRjlDNzRGXCIsIFwiIzkwQkU2RFwiLCBcIiM0M0FBOEJcIiwgXCIjNTc3NTkwXCJdO1xuXG4gIGNvbnN0IG51bU5vZGVzID0gZnJlcXVlbmNpZXMubGVuZ3RoO1xuICBjb25zdCBub2RlcyA9IGQzLnJhbmdlKG51bU5vZGVzKS5tYXAoZnVuY3Rpb24oZCwgaSkge1xuICAgIHJldHVybiB7cmFkaXVzOiByYWRpdXNTY2FsZShmcmVxdWVuY2llc1tpXS5mcmVxdWVuY3kpLFxuICAgICAgd29yZDogZnJlcXVlbmNpZXNbaV0ud29yZCBcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qgc2ltdWxhdGlvbiA9IGQzLmZvcmNlU2ltdWxhdGlvbihub2RlcylcbiAgICAuZm9yY2UoJ2NoYXJnZScsIGQzLmZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aCg1KSlcbiAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKDUwMCwgMjUwKSlcbiAgICAuZm9yY2UoJ2NvbGxpc2lvbicsIGQzLmZvcmNlQ29sbGlkZSgpLnJhZGl1cyhmdW5jdGlvbihkKSB7XG4gICAgICByZXR1cm4gZC5yYWRpdXNcbiAgICB9KSlcbiAgICAub24oJ3RpY2snLCB0aWNrZWQpXG5cbiAgZnVuY3Rpb24gdGlja2VkKCkge1xuICAgIC8vIGRlYnVnZ2VyXG4gICAgY29uc3QgdSA9IGQzLnNlbGVjdCgnc3ZnJylcbiAgICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAgIC5kYXRhKG5vZGVzKVxuXG4gICAgdS5lbnRlcigpXG4gICAgICAuYXBwZW5kKCdjaXJjbGUnKVxuICAgICAgLmF0dHIoJ3InLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnJhZGl1c1xuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsJywgZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAvLyBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb2xvcnMubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGNvbG9yc1tpICUgN107IFxuICAgICAgfSlcbiAgICAgIC5hdHRyKCdmaWxsLW9wYWNpdHknLCAuNylcbiAgICAgIC5vbignY2xpY2snLCBmdW5jdGlvbihkKXtcbiAgICAgICAgY29uc29sZS5sb2coZC53b3JkKVxuICAgICAgfSlcbiAgICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gdG9vbHRpcFxuICAgICAgICAgIC50ZXh0KGQud29yZClcbiAgICAgICAgICAuc3R5bGUoJ3Zpc2liaWxpdHknLCAndmlzaWJsZScpXG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICByZXR1cm4gdG9vbHRpcC50ZXh0KFwiXCIpXG4gICAgICAgIH0sIDcwMDApXG4gICAgICB9KVxuICAgICAgLm1lcmdlKHUpXG4gICAgICAuYXR0cignY3gnLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnhcbiAgICAgIH0pXG4gICAgICAuYXR0cignY3knLCBmdW5jdGlvbihkKSB7XG4gICAgICAgIHJldHVybiBkLnlcbiAgICAgIH0pXG5cbiAgICB1LmV4aXQoKS5yZW1vdmUoKVxuICB9XG4gIFxufVxuXG5cblxuXG5cblxuXG5cbiIsInNwZWVjaGVzID0gW1xuICBgRm91ciBzY29yZSBhbmQgc2V2ZW4geWVhcnMgYWdvIG91ciBmYXRoZXJzIGJyb3VnaHQgZm9ydGggIFxuICB1cG9uIHRoaXMgY29udGluZW50LCBhIG5ldyBuYXRpb24sIGNvbmNlaXZlZCBpbiBsaWJlcnR5LCBcbiAgYW5kIGRlZGljYXRlZCB0byB0aGUgcHJvcG9zaXRpb24gdGhhdCBhbGwgbWVuIGFyZSBjcmVhdGVkIGVxdWFsYCxcblxuICBgSSBoYXZlIGEgZHJlYW0gdGhhdCBvbmUgZGF5IHRoaXMgbmF0aW9uIHdpbGwgcmlzZSB1cCBhbmQgbGl2ZSBvdXQgXG4gIHRoZSB0cnVlIG1lYW5pbmcgb2YgaXRzIGNyZWVkOiBXZSBob2xkIHRoZXNlIHRydXRocyB0byBiZSBzZWxmLWV2aWRlbnQsIFxuICB0aGF0IGFsbCBtZW4gYXJlIGNyZWF0ZWQgZXF1YWwuIEkgaGF2ZSBhIGRyZWFtIHRoYXQgb25lIGRheSBvbiB0aGUgcmVkIGhpbGxzIFxuICBvZiBHZW9yZ2lhLCB0aGUgc29ucyBvZiBmb3JtZXIgc2xhdmVzIGFuZCB0aGUgc29ucyBvZiBmb3JtZXIgc2xhdmUgb3duZXJzIFxuICB3aWxsIGJlIGFibGUgdG8gc2l0IGRvd24gdG9nZXRoZXIgYXQgdGhlIHRhYmxlIG9mIGJyb3RoZXJob29kLmAsXG5cbiAgYEFuZCBzbywgbXkgZmVsbG93IEFtZXJpY2FuczogYXNrIG5vdCB3aGF0IHlvdXIgY291bnRyeSBjYW4gZG8gZm9yIHlvdVxuICBhc2sgd2hhdCB5b3UgY2FuIGRvIGZvciB5b3VyIGNvdW50cnkuIE15IGZlbGxvdyBjaXRpemVucyBvZiB0aGUgd29ybGQgXG4gIGFzayBub3Qgd2hhdCBBbWVyaWNhIHdpbGwgZG8gZm9yIHlvdSwgYnV0IHdoYXQgdG9nZXRoZXIgd2UgY2FuIGRvIGZvciB0aGUgZnJlZWRvbSBvZiBtYW4uXG4gIEZpbmFsbHksIHdoZXRoZXIgeW91IGFyZSBjaXRpemVucyBvZiBBbWVyaWNhIG9yIGNpdGl6ZW5zIG9mIHRoZSB3b3JsZCwgYXNrIG9mIHVzIHRoZSBzYW1lIFxuICBoaWdoIHN0YW5kYXJkcyBvZiBzdHJlbmd0aCBhbmQgc2FjcmlmaWNlIHdoaWNoIHdlIGFzayBvZiB5b3UuIFdpdGggYSBnb29kIGNvbnNjaWVuY2Ugb3VyIFxuICBvbmx5IHN1cmUgcmV3YXJkLCB3aXRoIGhpc3RvcnkgdGhlIGZpbmFsIGp1ZGdlIG9mIG91ciBkZWVkcywgbGV0IHVzIGdvIGZvcnRoIHRvIGxlYWQgdGhlIFxuICBsYW5kIHdlIGxvdmUsIGFza2luZyBIaXMgYmxlc3NpbmcgYW5kIEhpcyBoZWxwLCBidXQga25vd2luZyB0aGF0IGhlcmUgb24gZWFydGggR29kJ3Mgd29yayBcbiAgbXVzdCB0cnVseSBiZSBvdXIgb3duLmBcbl0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9