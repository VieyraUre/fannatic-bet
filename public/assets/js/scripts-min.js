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
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var bottomNav = exports.bottomNav = function bottomNav() {
	var myFunction = function myFunction() {
		document.querySelector('.bottom-nav__hamburguer').addEventListener('click', function (e) {
			e.preventDefault();
			console.log(e);
			[].map.call(document.querySelectorAll('.bottom-nav__hamburguer'), function (el) {
				el.classList.toggle('is-active');
			});
			[].map.call(document.querySelectorAll('.bottom-nav__menu--ham'), function (el) {
				el.classList.toggle('show-bottom-nav');
			});
		});
	};
	myFunction();
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var paymentSlider = function paymentSlider() {
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

var tnsCarousell = function tnsCarousell() {
	var slider = tns({
		container: '#tnsCarousell',
		items: 1,
		slideBy: 1,
		swipeAngle: false,
		speed: 400,
		autoplayHoverPause: true,
		autoplayButtonOutput: false,
		// autoplay: true,
		edgePadding: 40,
		nav: false,
		mouseDrag: true,
		controlsText: ['<i class="tns-carousell__prev fas fa-chevron-left"></i>', '<i class="tns-carousell__next fas fa-chevron-right"></i>'],
		responsive: {
			0: {
				edgePadding: 0,
				items: 2
			},
			390: {
				items: 3
			},
			535: {
				items: 3
			},
			735: {
				items: 4
			},
			860: {
				items: 5
			},
			1024: {
				items: 5

			},
			1930: {
				items: 6
			}
		}
	});
};

exports.paymentSlider = paymentSlider;
exports.tnsCarousell = tnsCarousell;

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
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var globalAccordion = function globalAccordion() {
	var btn_close = document.querySelector(".close-btn");
	var tns_accordion = function tns_accordion() {
		var d = document,
		    acc = document.querySelectorAll(".tns-carousell__content");
		console.log(acc);
		for (var i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function () {
				console.log(this);
				jsonParce(this);
				this.classList.toggle("active");
				this.classList.add("tns-select");
				var contentCarosell = document.querySelector(".tns-carousell");
				var container_btnClose = document.querySelector(".container-icon-close");
				var item = document.querySelector(".tns-controls");
				contentCarosell.style.pointerEvents = "none";
				item.style.pointerEvents = "none";
				container_btnClose.style.display = "block";
				var panel = document.querySelector(".accordion-container__panel");
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
				} else {
					panel.style.maxHeight = "100%";
				}
			});
		}
	};

	var close = function close() {
		var contentCarosell = document.querySelector(".tns-carousell");
		var container_btnClose = document.querySelector(".container-icon-close");
		var item = document.querySelector(".tns-controls");
		var selectItem = document.querySelector(".tns-select");
		selectItem.classList.remove("tns-select");
		container_btnClose.style.display = "none";
		var panel = document.querySelector(".accordion-container__panel");
		item.style.pointerEvents = "auto";
		contentCarosell.style.pointerEvents = "auto";
		// btns_controls.style.pointerEvents = "auto"
		panel.style.maxHeight = null;
	};

	function jsonParce(item) {

		fetch("./example.json").then(function (response) {
			return response.json();
		}).then(function (data) {
			return generateInfo(data, item);
		});
	}

	btn_close.addEventListener("click", close);

	function generateInfo(data, item) {
		var title = document.querySelector(".accordion-container__btn-acc");
		var description = document.querySelector(".accordion-container__panel");
		if (item) {
			title.innerHTML = "\n        <h4>" + data.sliderBonuses[item.id].title + "</h4>\n        ";

			description.innerHTML = "\n\t\t<ul>\n\t\t\t<li>" + data.sliderBonuses[item.id].content + "</li>\n\t\t</ul>\n        ";
		}
	};
	tns_accordion();
};

exports.default = globalAccordion;

},{}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var tnsSingle = function tnsSingle() {
	var slider = tns({
		container: '#tnsSingle',
		items: 1,
		slideBy: 1,
		controls: false,
		autoplay: true,
		autoplayHoverPause: true,
		autoplayButtonOutput: false,
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
		nav: false,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i role="button" class="fas fa-chevron-left"></i>', '<i role="button" class="fas fa-chevron-right"></i>']
	});
};

var tnsSinglePromotions = function tnsSinglePromotions() {
	var slider = tns({
		container: '#tnsSinglePromitions',
		items: 1,
		slideBy: 1,
		speed: 1000,
		nav: false,
		mode: 'gallery',
		mouseDrag: true,
		controlsText: ['<i role="button" class="fas fa-chevron-left"></i>', '<i role="button" class="fas fa-chevron-right"></i>']
	});
};

exports.tnsSingle = tnsSingle;
exports.tnsSingleGames = tnsSingleGames;
exports.tnsSinglePromotions = tnsSinglePromotions;

},{}],8:[function(require,module,exports){
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
			console.log(e);
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
				// console.log(el)
			});
		});
	};
	myFunction();
};

},{}],9:[function(require,module,exports){
'use strict';

var _tnsAccordion = require('./components/tns-accordion');

var _tnsAccordion2 = _interopRequireDefault(_tnsAccordion);

var _tnsSlider = require('./components/tns-slider');

var _paymentSlider = require('./components/payment-slider');

var _topNav = require('./components/topNav');

var _bottomNav = require('./components/bottomNav');

var _searchFilter = require('./components/searchFilter');

var _tabs = require('./components/tabs');

var _tabs2 = _interopRequireDefault(_tabs);

var _accordion = require('./components/accordion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
	(0, _topNav.topNav)();
	(0, _bottomNav.bottomNav)(), (0, _accordion.initAcc)();
	if (document.body.classList.contains('home')) {
		(0, _tnsSlider.tnsSingle)();
		(0, _paymentSlider.paymentSlider)();
		(0, _tnsSlider.tnsSingleGames)();
		(0, _tnsSlider.tnsSinglePromotions)();
		// functions here
	} else if (document.body.classList.contains('portfolio')) {
		// functions here
		(0, _searchFilter.searchFilter)();
	} else if (document.body.classList.contains('banking')) {
		(0, _tabs2.default)();
		// functions here
	} else if (document.body.classList.contains('bonuses')) {
		(0, _paymentSlider.tnsCarousell)();
		(0, _tnsAccordion2.default)();
	}
})();

},{"./components/accordion":1,"./components/bottomNav":2,"./components/payment-slider":3,"./components/searchFilter":4,"./components/tabs":5,"./components/tns-accordion":6,"./components/tns-slider":7,"./components/topNav":8}]},{},[9]);

//# sourceMappingURL=scripts-min.js.map
