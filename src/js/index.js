import {tnsSingle} from './components/tns-slider';
import {topNav} from './components/topNav';
import {modal} from './components/modal';
import {searchFilter} from './components/searchFilter';
import {promotions} from './components/promotions';
import {initAcc} from './components/accordion';
(()=>{
	topNav();
	tnsSingle();
	modal();
	initAcc();
	if (document.body.classList.contains('home')) {	
		promotions();
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();

