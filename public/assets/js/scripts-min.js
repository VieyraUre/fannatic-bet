(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var sign = exports.sign = document.querySelector('.sign');
var overlay = document.querySelector('.overlay');
var modal = document.querySelector('.modal');

var openModal = function openModal() {
	modal.classList.add('expand');
	overlay.classList.add('expand');
};

var closeModal = function closeModal() {
	overlay.classList.remove('expand');
	modal.classList.remove('expand');
};

sign.addEventListener('click', function (event) {
	event.preventDefault();
	openModal();
});

overlay.addEventListener('click', function (event) {
	event.preventDefault();
	closeModal();
});

// export const sign = () => {
// 	const sign = document.querySelector('.sign');
// 	const overlay= document.querySelector('.overlay')
// 	const modal= document.querySelector('.modal')


// 	const openModal = () => {
// 		modal.classList.add('expand');
// 		overlay.classList.add('expand');
// 	}

// 	const closeModal = () => {
// 		overlay.classList.remove('expand');
// 		modal.classList.remove('expand');
// 	}

// 	sign.addEventListener('click', event => {
// 		event.preventDefault();
// 		openModal();
// 	});


// 	overlay.addEventListener('click', event => {
// 		event.preventDefault();
// 		closeModal();
// 	})

// }

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var searchFilter = exports.searchFilter = function searchFilter() {
	// get the input data
	var fnFilter = function fnFilter(inputElement, selector, selectorContainer) {
		inputElement.addEventListener('keyup', function (e) {
			if (e.key === 'Escape') e.target.value = '';
			fnCompareElements(e.target.value.toUpperCase(), selector, selectorContainer);
		});
	};
	var fnCompareElements = function fnCompareElements(filterText, selector, selectorContainer) {
		var searchElements = document.querySelectorAll(selector);
		var searchContainers = document.querySelectorAll(selectorContainer);
		searchElements.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
		searchContainers.forEach(function (el) {
			el.textContent.toUpperCase().includes(filterText) ? el.style.display = 'block' : el.style.display = 'none';
		});
	};
	fnFilter(document.getElementById('searchInput'), '.class-item__fragment', '.class-item');
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsSingle = exports.tnsSingle = function tnsSingle() {
	var slider = tns({
		container: '#tnsSingle',
		items: 1,
		slideBy: 1,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var topNav = exports.topNav = function topNav() {
	var myFunction = function myFunction() {
		var inner = document.querySelector('.hamburger-inner');
		var innerAfter = document.querySelector('.hamburger-inner::after');
		document.querySelector('.hamburger').addEventListener('click', function (e) {
			e.preventDefault();
			[].map.call(document.querySelectorAll('.hamburger'), function (el) {
				el.classList.toggle('is-active');
				if (el.className.includes('is-active')) {
					el.classList.add('white');
					inner.classList.add('red');
				} else {
					el.classList.remove('white');
					inner.classList.remove('red');
				}
			});
			[].map.call(document.querySelectorAll('.top-nav__menu'), function (el) {
				el.classList.toggle('show-top-nav');
				console.log(el);
			});
		});
	};
	myFunction();
};

},{}],5:[function(require,module,exports){
'use strict';

var _tnsSlider = require('./components/tns-slider');

var _topNav = require('./components/topNav');

var _modal = require('./components/modal');

var _searchFilter = require('./components/searchFilter');

(function () {
	(0, _topNav.topNav)();
	(0, _tnsSlider.tnsSingle)();
	(0, _modal.modal)();
	if (document.body.classList.contains('home')) {
		// functions here
	} else if (document.body.classList.contains('portfolio')) {
		// functions here
		(0, _searchFilter.searchFilter)();
	}
})();

},{"./components/modal":1,"./components/searchFilter":2,"./components/tns-slider":3,"./components/topNav":4}]},{},[5]);

//# sourceMappingURL=scripts-min.js.map
