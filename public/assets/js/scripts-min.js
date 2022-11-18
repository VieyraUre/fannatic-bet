(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.initAcc = initAcc;
function initAcc(elem, option) {
	document.addEventListener('click', function (e) {
		if (!e.target.matches(elem + ' .a-btn')) return;else {
			if (!e.target.parentElement.classList.contains('active')) {
				if (option == true) {
					var elementList = document.querySelectorAll(elem + ' .a-container');
					Array.prototype.forEach.call(elementList, function (e) {
						e.classList.remove('active');
					});
				}
				e.target.parentElement.classList.add('active');
			} else {
				e.target.parentElement.classList.remove('active');
			}
		}
	});
}
initAcc('.accordion.v1', true);
initAcc('.accordion.v2', false);

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var paymentSlider = exports.paymentSlider = function paymentSlider() {
	var slider = tns({
		container: "#payment-carousell",
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		autoplayButtonOutput: false,
		speed: 400,
		edgePadding: 16,
		nav: false,
		autoplay: true,
		mouseDrag: true,
		responsive: {
			320: {
				items: 3
			},
			480: {
				items: 4
			},
			640: {
				items: 5
			},
			800: {
				items: 6
			},
			960: {
				items: 6
			},
			1120: {
				items: 6
			},
			1280: {
				items: 6
			}
		}
	});
};

},{}],3:[function(require,module,exports){
// export const anchore = document.querySelectorAll(".promotions__box--anchore");
// console.log(anchore);
// const img = document.querySelector(".promotions__box--img")
// console.log(img)

// anchore.forEach(a => {
//     a.addEventListener("mouseenter", event => {
//         const target = event.target;
//         const id = target.getAttribute('id');
//         if(id === "card1") {
//             img.style.backgroundImage = "url('../../assets/img/sports_1-1.png')"
//             console.log("pase")
//         } else if(id === "card2") {
//             img.style.backgroundImage = "url('../../assets/img/free_s_1-1.png')"
//             console.log("pase")

//         } else if (id === "card3") {
//             img.style.backgroundImage = "url('../../assets/img/casino_1_1.png)"
//             console.log("pase")

//         } else {
//             img.style.backgroundImage = "url('../../assets/img/horse_1_1.png)"  
//             console.log("pase")
//         }
//     })
// })


// export const anchore = document.querySelectorAll(".promotions__box--anchore");
// console.log(anchore);
// const img = document.querySelector(".promotions__box--img")
// console.log(img)

// anchore.forEach(a => {
//     a.addEventListener("mouseenter", event => {
//         const target = event.target;
//         const id = target.getAttribute('id');
//         if(id === "card1") {
//             // anchore.style.backgroundImage= "url('../../assets/img/sports_1-1.png')";
//             img.src ="assets/img/sports_1-1.png"
//             console.log( img.src ="assets/img/sports_1-1.png")
//         } else if(id === "card2") {
//             img.src = "assets/img/free_s_1-1.png'"

//         } else if (id === "card3") {
//             img.src = "assets/img/casino_1_1.png'"
//             console.log("pase")

//         } else {
//             img.src = "assets/img/horse_1_1.png'"  
//             console.log("pase")
//         }
//     })
// })
"use strict";

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var tabs = function tabs() {
    var d = document,
        tabs = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__tab')),
        panels = Array.prototype.slice.apply(d.querySelectorAll('.tabs-container__panel'));

    d.getElementById('tabs').addEventListener('click', function (e) {
        if (e.target.classList.contains('tabs-container__tab')) {
            var i = tabs.indexOf(e.target);
            tabs.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            tabs[i].classList.add('is-active');
            panels.map(function (tab) {
                return tab.classList.remove('is-active');
            });
            panels[i].classList.add('is-active');
        }
    });
};

exports.default = tabs;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsSingle = function tnsSingle() {
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

var tnsSingleMobile = function tnsSingleMobile() {
	var slider = tns({
		container: '#tnsSingleMobile',
		items: 1,
		slideBy: 1,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

var tnsSingleGames = function tnsSingleGames() {
	var slider = tns({
		container: '#tnsSingleGames',
		items: 1,
		slideBy: 1,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

var tnsSinglePromitions = function tnsSinglePromitions() {
	var slider = tns({
		container: '#tnsSinglePromitions',
		items: 1,
		slideBy: 1,
		speed: 1000,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>']
	});
};

exports.tnsSingle = tnsSingle;
exports.tnsSingleGames = tnsSingleGames;
exports.tnsSinglePromitions = tnsSinglePromitions;
exports.tnsSingleMobile = tnsSingleMobile;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
'use strict';

var _tnsSlider = require('./components/tns-slider');

var _paymentSlider = require('./components/payment-slider');

var _topNav = require('./components/topNav');

var _searchFilter = require('./components/searchFilter');

var _promotions = require('./components/promotions');

var _tabs = require('./components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _accordion = require('./components/accordion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	(0, _topNav.topNav)();
	(0, _tnsSlider.tnsSingle)();
	// tnsSingleMobile();
	(0, _accordion.initAcc)();
	(0, _paymentSlider.paymentSlider)();
	(0, _tnsSlider.tnsSingleGames)();
	(0, _tnsSlider.tnsSinglePromitions)();
	if (document.body.classList.contains('home')) {
		(0, _promotions.promotions)();
		// functions here
	} else if (document.body.classList.contains('portfolio')) {
		// functions here
		(0, _searchFilter.searchFilter)();
	} else if (document.body.classList.contains('banking')) {
		// functions here
		(0, _tabs2.default)();
	}
})();

},{"./components/accordion":1,"./components/payment-slider":2,"./components/promotions":3,"./components/searchFilter":4,"./components/tabs":5,"./components/tns-slider":6,"./components/topNav":7}]},{},[8]);

//# sourceMappingURL=scripts-min.js.map
