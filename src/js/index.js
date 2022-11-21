import {tnsSingle, tnsSingleGames, tnsSinglePromotions, sliderBonuses} from './components/tns-slider';
import {paymentSlider} from './components/payment-slider';
import {topNav} from './components/topNav';
import {searchFilter} from './components/searchFilter';
import {promotions} from './components/promotions';
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
		promotions();
		sliderBonuses();
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}else if (document.body.classList.contains('banking')) {
		tabs();
		// functions here
	}
})();

