import {tnsSingle, tnsSingleMobile, tnsSingleGames, tnsSinglePromitions} from './components/tns-slider';
import {paymentSlider} from './components/payment-slider';
import {topNav} from './components/topNav';
import {searchFilter} from './components/searchFilter';
import {promotions} from './components/promotions';
import tabs from './components/tabs';
import {initAcc} from './components/accordion';
(()=>{
	topNav();
	tnsSingle();
	// tnsSingleMobile();
	initAcc();
	paymentSlider();
	tnsSingleGames();
	tnsSinglePromitions();
	if (document.body.classList.contains('home')) {	
		promotions();
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}else if (document.body.classList.contains('banking')) {
		// functions here
		tabs();
	}
})();

