import {tnsSingle} from './components/tns-slider';
import {topNav} from './components/topNav';
import {modal} from './components/modal';
import {searchFilter} from './components/searchFilter';
(()=>{
	topNav();
	tnsSingle();
	modal();	
	if (document.body.classList.contains('home')) {
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();

