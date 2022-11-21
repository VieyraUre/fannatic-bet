import globalAccordion from './components/tns-accordion';
import {tnsSingle, tnsSingleGames, tnsSinglePromotions} from './components/tns-slider';
import {paymentSlider, tnsCarousell} from './components/payment-slider';
import {topNav} from './components/topNav';
import {searchFilter} from './components/searchFilter';
import tabs from './components/tabs';
import {initAcc} from './components/accordion';


(()=>{
	topNav();
	initAcc();
	if (document.body.classList.contains('home')) {	
		tnsSingle();
		paymentSlider();
		tnsSingleGames();
		tnsSinglePromotions();
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}else if (document.body.classList.contains('banking')) {
		tabs();
		// functions here
	} else if (document.body.classList.contains('bonuses')) {
		tnsCarousell();
		globalAccordion();
	}
})();

