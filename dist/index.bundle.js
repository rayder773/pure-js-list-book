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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#app {\n    max-width: 1100px;\n    margin: 0 auto;\n    padding-top: 50px;\n}\n#app details {\n    margin: 0 20px 24px;\n    border: 1px solid #f8f8f8;\n    -webkit-box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.75);\n    -moz-box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.75);\n    box-shadow: 2px 2px 6px -1px rgba(0, 0, 0, 0.75);\n}\n#app details summary {\n    outline: none;\n    display: flex;\n    align-items: center;\n    font-size: 24px;\n    padding: 18px;\n    position: relative;\n}\n#app details summary div {\n    text-decoration: underline;\n}\n#app details summary .close-btn {\n    text-decoration: underline;\n    position: absolute;\n    right: 16px;\n    cursor: pointer;\n}\n#app .book-content {\n    display: flex;\n    justify-content: space-between;\n    padding: 24px;\n}\n#app .book-content img {\n    width: 100%;\n    height: auto;\n    max-width: 450px;\n    margin: 0 16px 16px;\n    border: 1px solid;\n}\n@media screen and (max-width: 1090px) {\n    #app .book-content img {\n        width: 300px;\n    }\n}\n@media screen and (max-width: 574px) {\n    #app .book-content img {\n        width: 150px;\n    }\n}\n#app .book-description {\n    width: 50%;\n}\n#app .book-description span {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 24px;\n}\n\n.edit-btn {\n    text-decoration: underline;\n    cursor: pointer;\n}\n\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/assets/bookList.json":
/*!**********************************!*\
  !*** ./src/assets/bookList.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"title\":\"Порнократия\",\"img\":[\"https://img.yakaboo.ua/media/catalog/product/cache/1/image/546x/00c1a1eab9920e00d38dc8798e6142c9/4/3/439080_30157158.jpg\"],\"publishing_date\":\"2005\",\"authors\":[\"Катрин Брейя\"],\"genre\":[\"Публицистика\"],\"publishing_name\":\"Росмэн\",\"publishing_address\":\"127521, г. Москва, ул. Шереметьевская, д. 47, ст. м. Марьина Роща, Бутырская\",\"publishing_phone\":\"8 (800) 100-53-38\"},{\"title\":\"Nokia. Весь невероятный опыт компании в одной книге\",\"img\":[\"https://cdn.eksmo.ru/v2/ITD000000001033419/COVER/cover1__w600.jpg\",\"https://cdn.eksmo.ru/v2/ITD000000001033419/COVER/cover4__w600.jpg\"],\"publishing_date\":\"2017\",\"authors\":[\"Ив Доз\",\"Кили Уилсон\"],\"genre\":[\"Мемуары\"],\"publishing_name\":\"ЭКСМО\",\"publishing_address\":\"г. Москва, ул. Зорге, д.1.\",\"publishing_phone\":\"+7 (495) 268-08-41\"},{\"title\":\"Девушка в темной реке\",\"img\":[\"https://cdn.eksmo.ru/v2/ITD000000001078898/COVER/cover1__w600.jpg\",\"https://cdn.eksmo.ru/v2/ITD000000001078898/COVER/cover4__w600.jpg\"],\"publishing_date\":\"13 марта 2020\",\"authors\":[\"Лорет Энн Уайт\"],\"genre\":[\"Детектив\"],\"publishing_name\":\"ЭКСМО\",\"publishing_address\":\"г. Москва, ул. Зорге, д.1.\",\"publishing_phone\":\"+7 (495) 268-08-41\"}]");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/js/router.js");
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route */ "./src/js/route.js");





(function () {
    function init() {
        const router = new _router__WEBPACK_IMPORTED_MODULE_0__["Router"]([
            new _route__WEBPACK_IMPORTED_MODULE_1__["Route"]('edit', 'edit.html', true),
            new _route__WEBPACK_IMPORTED_MODULE_1__["Route"]('main', 'main.html')
        ]);
        router.goToRoute();
    }
    init();
}());


/***/ }),

/***/ "./src/js/components.js":
/*!******************************!*\
  !*** ./src/js/components.js ***!
  \******************************/
/*! exports provided: renderEdit, renderMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderEdit", function() { return renderEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMain", function() { return renderMain; });
/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./db */ "./src/js/db.js");




Object(_db__WEBPACK_IMPORTED_MODULE_0__["initDb"])();

let bootNumber;
let isEdit = false;

const renderEdit = () => {
  const formElement = document.getElementById('edit');
  const bookList = JSON.parse(localStorage.getItem('bookList'));


  const mainForm = document.createElement('form');
  mainForm.innerHTML = `
     <form id="main-form"">
      <div>
        <label for="title">Name</label>
        <input id="title" name="title" required/>
      </div>
       <div>
         <label for="img">url for image</label>
         <input id="img" name="img" />
      </div>
      <div>
         <label for="authors">authors</label>
         <input id="authors" name="authors" />
      </div>
      <div>
         <label for="genre">genre</label>
         <input id="genre" name="genre" />
      </div>
       <div>
         <label for="publishing_date">publishing_date</label>
         <input id="publishing_date" name="publishing_date" />
      </div>
      <div>
         <label for="publishing_name">publishing_name</label>
         <input id="publishing_name" name="publishing_name" />
      </div>
      <div>
         <label for="publishing_address">publishing_address</label>
         <input id="publishing_address" name="publishing_address" />
      </div>
      <div>
         <label for="publishing_phone">publishing_phone</label>
         <input id="publishing_phone" name="publishing_phone" />
      </div>
      <button type="submit">Submit</button>
    </form>
  `;

  mainForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const values = {
      title: document.getElementById('title').value,
      img: document.getElementById('img').value,
      authors: document.getElementById('authors').value,
      genre: document.getElementById('genre').value,
      publishing_name: document.getElementById('publishing_name').value,
      publishing_address: document.getElementById('publishing_address').value,
      publishing_phone: document.getElementById('publishing_phone').value,
    };

    if (isEdit) {
      bookList[bootNumber] = values;
      isEdit = false;
      bootNumber = null;
    } else {
      bookList.push({
        ...values,
      });
    }

    localStorage.setItem('bookList', JSON.stringify(bookList));

    for (let item in values) {
      document.getElementById(item).value = '';
    }

    window.location.href = '#main';
  });
  formElement.append(mainForm);

  const book = bookList[bootNumber];

  for (let b in book) {
    console.log(b)
    document.getElementById(b).value = book[b];
  }

};

const renderMain = () => {
  let bookList = JSON.parse(localStorage.bookList);
  const listElement = document.getElementById('main');
  bookList.forEach((book, i) => {

    const element = document.createElement('details');
    element.innerHTML = `
      <summary>
        <div>${book.title}</div>
        <div class="close-btn" attr=${i}>X</div>
      </summary>
      <div class="book-content">
        <img src="${book.img[0]}" />
        <div class="book-description">
          <span>
            <strong>Автор:</strong> ${book.authors[0]}
          </span>
          <span>
            <strong>Дата издательства:</strong> ${book.publishing_date}
          </span>
          <span>
            <strong>Адрес издательства:</strong> ${book.publishing_address}
          </span>
          <span>
            <strong>Телефон издательства:</strong> ${book.publishing_phone}
          </span>
          <span>
            <strong class="edit-btn" attr=${i}>EDIT</strong>
          </span>
        </div>
      </div>
    `;

    listElement.append(element);
  });
  const closeButtons = Array.from(document.getElementsByClassName('close-btn')).forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const index = e.target.attributes.attr.value;
      const bookList = JSON.parse(localStorage.getItem('bookList'));
      bookList.splice(index, 1);
      localStorage.setItem('bookList', JSON.stringify(bookList));
      listElement.innerHTML = '';
      renderMain()
    })
  });

  const editBtn = Array.from(document.getElementsByClassName('edit-btn')).forEach(item => {
    item.addEventListener('click', (e) => {
      const index = e.target.attributes.attr.value;
      bootNumber = index;
      isEdit = true;
      window.location.href = '#edit';
    })
  });
};


/***/ }),

/***/ "./src/js/db.js":
/*!**********************!*\
  !*** ./src/js/db.js ***!
  \**********************/
/*! exports provided: initDb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initDb", function() { return initDb; });
/* harmony import */ var _assets_bookList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/bookList */ "./src/assets/bookList.json");
var _assets_bookList__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/bookList */ "./src/assets/bookList.json", 1);




const initDb = () => {
  if(JSON.parse(localStorage.getItem('bookList')) !== undefined) {
    localStorage.setItem('bookList', JSON.stringify(_assets_bookList__WEBPACK_IMPORTED_MODULE_0__));
  }
};

initDb();


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./route */ "./src/js/route.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "./src/js/router.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ "./src/js/app.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components */ "./src/js/components.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);








/***/ }),

/***/ "./src/js/route.js":
/*!*************************!*\
  !*** ./src/js/route.js ***!
  \*************************/
/*! exports provided: Route */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Route", function() { return Route; });
'use stict';

function Route(name, htmlName, defaultRoute) {
    try {
        if(!name || !htmlName) {
            throw 'error: name and htmlName params are mandatories';
        }
        this.constructor(name, htmlName, defaultRoute);
    } catch (e) {
        console.error(e);
    }
}

Route.prototype = {
    name: undefined,
    htmlName: undefined,
    default: undefined,
    constructor: function (name, htmlName, defaultRoute) {
        this.name = name;
        this.htmlName = htmlName;
        this.default = defaultRoute;
    },
    isActiveRoute: function (hashedPath) {
        return hashedPath.replace('#', '') === this.name;
    }
}


/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components */ "./src/js/components.js");




function Router(routes) {
  try {
    if (!routes) {
      throw 'error: routes param is mandatory';
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function (routes) {
    this.routes = routes;
    this.rootElem = document.getElementById('app');
  },
  init: function () {
    const r = this.routes;
    (function (scope, r) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged: function (scope, r) {
    if (window.location.hash.length > 0) {
      for (let i = 0, length = r.length; i < length; i++) {
        const route = r[i];
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          const test = scope.goToRoute(route.htmlName);

          setTimeout(() => {
            if (route.name === 'main') {
              Object(_components__WEBPACK_IMPORTED_MODULE_0__["renderMain"])();
            } else if (route.name === 'edit') {
              Object(_components__WEBPACK_IMPORTED_MODULE_0__["renderEdit"])();
            }
          }, 100);
        }
      }
    } else {
      for (let i = 0, length = r.length; i < length; i++) {
        const route = r[i];
        if (route.default) {
          scope.goToRoute(route.htmlName);
        }
      }
    }
  },
  goToRoute: function (htmlName) {
    (function (scope) {
      const url = 'views/' + htmlName;
      const xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;
        }
      };
      xhttp.open('GET', url, true);
      xhttp.send();
    })(this);
  },
};





/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZGIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9yb3V0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNB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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQWE7O0FBRXVDOztBQUU3QztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMsOERBQVU7QUFDeEIsYUFBYTtBQUNiLGNBQWMsOERBQVU7QUFDeEI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLEtBQUs7QUFDTCx3Q0FBd0MsWUFBWTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQSxVQUFVLG1CQUFPLENBQUMsbUpBQXdFO0FBQzFGLDBCQUEwQixtQkFBTyxDQUFDLG9IQUF1RDs7QUFFekY7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOzs7O0FBSUEsMEIiLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiI2FwcCB7XFxuICAgIG1heC13aWR0aDogMTEwMHB4O1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxufVxcbiNhcHAgZGV0YWlscyB7XFxuICAgIG1hcmdpbjogMCAyMHB4IDI0cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDJweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDJweCAycHggNnB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG4jYXBwIGRldGFpbHMgc3VtbWFyeSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4jYXBwIGRldGFpbHMgc3VtbWFyeSBkaXYge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuI2FwcCBkZXRhaWxzIHN1bW1hcnkgLmNsb3NlLWJ0biB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxNnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNhcHAgLmJvb2stY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMjRweDtcXG59XFxuI2FwcCAuYm9vay1jb250ZW50IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC13aWR0aDogNDUwcHg7XFxuICAgIG1hcmdpbjogMCAxNnB4IDE2cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDkwcHgpIHtcXG4gICAgI2FwcCAuYm9vay1jb250ZW50IGltZyB7XFxuICAgICAgICB3aWR0aDogMzAwcHg7XFxuICAgIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc0cHgpIHtcXG4gICAgI2FwcCAuYm9vay1jb250ZW50IGltZyB7XFxuICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgIH1cXG59XFxuI2FwcCAuYm9vay1kZXNjcmlwdGlvbiB7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcbiNhcHAgLmJvb2stZGVzY3JpcHRpb24gc3BhbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxufVxcblxcbi5lZGl0LWJ0biB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCIuL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGUgfSBmcm9tIFwiLi9yb3V0ZVwiO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoW1xuICAgICAgICAgICAgbmV3IFJvdXRlKCdlZGl0JywgJ2VkaXQuaHRtbCcsIHRydWUpLFxuICAgICAgICAgICAgbmV3IFJvdXRlKCdtYWluJywgJ21haW4uaHRtbCcpXG4gICAgICAgIF0pO1xuICAgICAgICByb3V0ZXIuZ29Ub1JvdXRlKCk7XG4gICAgfVxuICAgIGluaXQoKTtcbn0oKSk7XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7aW5pdERifSBmcm9tIFwiLi9kYlwiO1xuXG5pbml0RGIoKTtcblxubGV0IGJvb3ROdW1iZXI7XG5sZXQgaXNFZGl0ID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCByZW5kZXJFZGl0ID0gKCkgPT4ge1xuICBjb25zdCBmb3JtRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0Jyk7XG4gIGNvbnN0IGJvb2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va0xpc3QnKSk7XG5cblxuICBjb25zdCBtYWluRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgbWFpbkZvcm0uaW5uZXJIVE1MID0gYFxuICAgICA8Zm9ybSBpZD1cIm1haW4tZm9ybVwiXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWwgZm9yPVwidGl0bGVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwidGl0bGVcIiBuYW1lPVwidGl0bGVcIiByZXF1aXJlZC8+XG4gICAgICA8L2Rpdj5cbiAgICAgICA8ZGl2PlxuICAgICAgICAgPGxhYmVsIGZvcj1cImltZ1wiPnVybCBmb3IgaW1hZ2U8L2xhYmVsPlxuICAgICAgICAgPGlucHV0IGlkPVwiaW1nXCIgbmFtZT1cImltZ1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgICA8bGFiZWwgZm9yPVwiYXV0aG9yc1wiPmF1dGhvcnM8L2xhYmVsPlxuICAgICAgICAgPGlucHV0IGlkPVwiYXV0aG9yc1wiIG5hbWU9XCJhdXRob3JzXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgIDxsYWJlbCBmb3I9XCJnZW5yZVwiPmdlbnJlPC9sYWJlbD5cbiAgICAgICAgIDxpbnB1dCBpZD1cImdlbnJlXCIgbmFtZT1cImdlbnJlXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgIDxkaXY+XG4gICAgICAgICA8bGFiZWwgZm9yPVwicHVibGlzaGluZ19kYXRlXCI+cHVibGlzaGluZ19kYXRlPC9sYWJlbD5cbiAgICAgICAgIDxpbnB1dCBpZD1cInB1Ymxpc2hpbmdfZGF0ZVwiIG5hbWU9XCJwdWJsaXNoaW5nX2RhdGVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICAgPGxhYmVsIGZvcj1cInB1Ymxpc2hpbmdfbmFtZVwiPnB1Ymxpc2hpbmdfbmFtZTwvbGFiZWw+XG4gICAgICAgICA8aW5wdXQgaWQ9XCJwdWJsaXNoaW5nX25hbWVcIiBuYW1lPVwicHVibGlzaGluZ19uYW1lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgIDxsYWJlbCBmb3I9XCJwdWJsaXNoaW5nX2FkZHJlc3NcIj5wdWJsaXNoaW5nX2FkZHJlc3M8L2xhYmVsPlxuICAgICAgICAgPGlucHV0IGlkPVwicHVibGlzaGluZ19hZGRyZXNzXCIgbmFtZT1cInB1Ymxpc2hpbmdfYWRkcmVzc1wiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgICA8bGFiZWwgZm9yPVwicHVibGlzaGluZ19waG9uZVwiPnB1Ymxpc2hpbmdfcGhvbmU8L2xhYmVsPlxuICAgICAgICAgPGlucHV0IGlkPVwicHVibGlzaGluZ19waG9uZVwiIG5hbWU9XCJwdWJsaXNoaW5nX3Bob25lXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICBgO1xuXG4gIG1haW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdmFsdWVzID0ge1xuICAgICAgdGl0bGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlLFxuICAgICAgaW1nOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1nJykudmFsdWUsXG4gICAgICBhdXRob3JzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXV0aG9ycycpLnZhbHVlLFxuICAgICAgZ2VucmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5yZScpLnZhbHVlLFxuICAgICAgcHVibGlzaGluZ19uYW1lOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHVibGlzaGluZ19uYW1lJykudmFsdWUsXG4gICAgICBwdWJsaXNoaW5nX2FkZHJlc3M6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdWJsaXNoaW5nX2FkZHJlc3MnKS52YWx1ZSxcbiAgICAgIHB1Ymxpc2hpbmdfcGhvbmU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwdWJsaXNoaW5nX3Bob25lJykudmFsdWUsXG4gICAgfTtcblxuICAgIGlmIChpc0VkaXQpIHtcbiAgICAgIGJvb2tMaXN0W2Jvb3ROdW1iZXJdID0gdmFsdWVzO1xuICAgICAgaXNFZGl0ID0gZmFsc2U7XG4gICAgICBib290TnVtYmVyID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgYm9va0xpc3QucHVzaCh7XG4gICAgICAgIC4uLnZhbHVlcyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib29rTGlzdCcsIEpTT04uc3RyaW5naWZ5KGJvb2tMaXN0KSk7XG5cbiAgICBmb3IgKGxldCBpdGVtIGluIHZhbHVlcykge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaXRlbSkudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjbWFpbic7XG4gIH0pO1xuICBmb3JtRWxlbWVudC5hcHBlbmQobWFpbkZvcm0pO1xuXG4gIGNvbnN0IGJvb2sgPSBib29rTGlzdFtib290TnVtYmVyXTtcblxuICBmb3IgKGxldCBiIGluIGJvb2spIHtcbiAgICBjb25zb2xlLmxvZyhiKVxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGIpLnZhbHVlID0gYm9va1tiXTtcbiAgfVxuXG59O1xuXG5leHBvcnQgY29uc3QgcmVuZGVyTWFpbiA9ICgpID0+IHtcbiAgbGV0IGJvb2tMaXN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYm9va0xpc3QpO1xuICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG4gIGJvb2tMaXN0LmZvckVhY2goKGJvb2ssIGkpID0+IHtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkZXRhaWxzJyk7XG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBgXG4gICAgICA8c3VtbWFyeT5cbiAgICAgICAgPGRpdj4ke2Jvb2sudGl0bGV9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjbG9zZS1idG5cIiBhdHRyPSR7aX0+WDwvZGl2PlxuICAgICAgPC9zdW1tYXJ5PlxuICAgICAgPGRpdiBjbGFzcz1cImJvb2stY29udGVudFwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7Ym9vay5pbWdbMF19XCIgLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvb2stZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxzdHJvbmc+0JDQstGC0L7RgDo8L3N0cm9uZz4gJHtib29rLmF1dGhvcnNbMF19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz7QlNCw0YLQsCDQuNC30LTQsNGC0LXQu9GM0YHRgtCy0LA6PC9zdHJvbmc+ICR7Ym9vay5wdWJsaXNoaW5nX2RhdGV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN0cm9uZz7QkNC00YDQtdGBINC40LfQtNCw0YLQtdC70YzRgdGC0LLQsDo8L3N0cm9uZz4gJHtib29rLnB1Ymxpc2hpbmdfYWRkcmVzc31cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8c3Ryb25nPtCi0LXQu9C10YTQvtC9INC40LfQtNCw0YLQtdC70YzRgdGC0LLQsDo8L3N0cm9uZz4gJHtib29rLnB1Ymxpc2hpbmdfcGhvbmV9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPHN0cm9uZyBjbGFzcz1cImVkaXQtYnRuXCIgYXR0cj0ke2l9PkVESVQ8L3N0cm9uZz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcblxuICAgIGxpc3RFbGVtZW50LmFwcGVuZChlbGVtZW50KTtcbiAgfSk7XG4gIGNvbnN0IGNsb3NlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2xvc2UtYnRuJykpLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgaW5kZXggPSBlLnRhcmdldC5hdHRyaWJ1dGVzLmF0dHIudmFsdWU7XG4gICAgICBjb25zdCBib29rTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jvb2tMaXN0JykpO1xuICAgICAgYm9va0xpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib29rTGlzdCcsIEpTT04uc3RyaW5naWZ5KGJvb2tMaXN0KSk7XG4gICAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgICAgIHJlbmRlck1haW4oKVxuICAgIH0pXG4gIH0pO1xuXG4gIGNvbnN0IGVkaXRCdG4gPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VkaXQtYnRuJykpLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmF0dHJpYnV0ZXMuYXR0ci52YWx1ZTtcbiAgICAgIGJvb3ROdW1iZXIgPSBpbmRleDtcbiAgICAgIGlzRWRpdCA9IHRydWU7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcjZWRpdCc7XG4gICAgfSlcbiAgfSk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgYm9va0xpc3QgZnJvbSAnLi4vYXNzZXRzL2Jvb2tMaXN0JztcblxuZXhwb3J0IGNvbnN0IGluaXREYiA9ICgpID0+IHtcbiAgaWYoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYm9va0xpc3QnKSkgIT09IHVuZGVmaW5lZCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib29rTGlzdCcsIEpTT04uc3RyaW5naWZ5KGJvb2tMaXN0KSk7XG4gIH1cbn07XG5cbmluaXREYigpO1xuIiwiaW1wb3J0ICcuL3JvdXRlJztcbmltcG9ydCAnLi9yb3V0ZXInO1xuaW1wb3J0ICcuL2FwcCc7XG5pbXBvcnQgJy4vY29tcG9uZW50cyc7XG5cbmltcG9ydCAnLi4vc3R5bGVzLmNzcyc7XG4iLCIndXNlIHN0aWN0JztcblxuZXhwb3J0IGZ1bmN0aW9uIFJvdXRlKG5hbWUsIGh0bWxOYW1lLCBkZWZhdWx0Um91dGUpIHtcbiAgICB0cnkge1xuICAgICAgICBpZighbmFtZSB8fCAhaHRtbE5hbWUpIHtcbiAgICAgICAgICAgIHRocm93ICdlcnJvcjogbmFtZSBhbmQgaHRtbE5hbWUgcGFyYW1zIGFyZSBtYW5kYXRvcmllcyc7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvcihuYW1lLCBodG1sTmFtZSwgZGVmYXVsdFJvdXRlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxufVxuXG5Sb3V0ZS5wcm90b3R5cGUgPSB7XG4gICAgbmFtZTogdW5kZWZpbmVkLFxuICAgIGh0bWxOYW1lOiB1bmRlZmluZWQsXG4gICAgZGVmYXVsdDogdW5kZWZpbmVkLFxuICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAobmFtZSwgaHRtbE5hbWUsIGRlZmF1bHRSb3V0ZSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmh0bWxOYW1lID0gaHRtbE5hbWU7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IGRlZmF1bHRSb3V0ZTtcbiAgICB9LFxuICAgIGlzQWN0aXZlUm91dGU6IGZ1bmN0aW9uIChoYXNoZWRQYXRoKSB7XG4gICAgICAgIHJldHVybiBoYXNoZWRQYXRoLnJlcGxhY2UoJyMnLCAnJykgPT09IHRoaXMubmFtZTtcbiAgICB9XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB7cmVuZGVyRWRpdCwgcmVuZGVyTWFpbn0gZnJvbSBcIi4vY29tcG9uZW50c1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gUm91dGVyKHJvdXRlcykge1xuICB0cnkge1xuICAgIGlmICghcm91dGVzKSB7XG4gICAgICB0aHJvdyAnZXJyb3I6IHJvdXRlcyBwYXJhbSBpcyBtYW5kYXRvcnknO1xuICAgIH1cbiAgICB0aGlzLmNvbnN0cnVjdG9yKHJvdXRlcyk7XG4gICAgdGhpcy5pbml0KCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmVycm9yKGUpO1xuICB9XG59XG5cblJvdXRlci5wcm90b3R5cGUgPSB7XG4gIHJvdXRlczogdW5kZWZpbmVkLFxuICByb290RWxlbTogdW5kZWZpbmVkLFxuICBjb25zdHJ1Y3RvcjogZnVuY3Rpb24gKHJvdXRlcykge1xuICAgIHRoaXMucm91dGVzID0gcm91dGVzO1xuICAgIHRoaXMucm9vdEVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG4gIH0sXG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByID0gdGhpcy5yb3V0ZXM7XG4gICAgKGZ1bmN0aW9uIChzY29wZSwgcikge1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBzY29wZS5oYXNDaGFuZ2VkKHNjb3BlLCByKTtcbiAgICAgIH0pO1xuICAgIH0pKHRoaXMsIHIpO1xuICAgIHRoaXMuaGFzQ2hhbmdlZCh0aGlzLCByKTtcbiAgfSxcbiAgaGFzQ2hhbmdlZDogZnVuY3Rpb24gKHNjb3BlLCByKSB7XG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSByLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gcltpXTtcbiAgICAgICAgaWYgKHJvdXRlLmlzQWN0aXZlUm91dGUod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpKSkge1xuICAgICAgICAgIGNvbnN0IHRlc3QgPSBzY29wZS5nb1RvUm91dGUocm91dGUuaHRtbE5hbWUpO1xuXG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAocm91dGUubmFtZSA9PT0gJ21haW4nKSB7XG4gICAgICAgICAgICAgIHJlbmRlck1haW4oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocm91dGUubmFtZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICAgIHJlbmRlckVkaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW5ndGggPSByLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gcltpXTtcbiAgICAgICAgaWYgKHJvdXRlLmRlZmF1bHQpIHtcbiAgICAgICAgICBzY29wZS5nb1RvUm91dGUocm91dGUuaHRtbE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBnb1RvUm91dGU6IGZ1bmN0aW9uIChodG1sTmFtZSkge1xuICAgIChmdW5jdGlvbiAoc2NvcGUpIHtcbiAgICAgIGNvbnN0IHVybCA9ICd2aWV3cy8nICsgaHRtbE5hbWU7XG4gICAgICBjb25zdCB4aHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgeGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSA0ICYmIHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBzY29wZS5yb290RWxlbS5pbm5lckhUTUwgPSB0aGlzLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHhodHRwLm9wZW4oJ0dFVCcsIHVybCwgdHJ1ZSk7XG4gICAgICB4aHR0cC5zZW5kKCk7XG4gICAgfSkodGhpcyk7XG4gIH0sXG59O1xuXG5cblxuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7Il0sInNvdXJjZVJvb3QiOiIifQ==