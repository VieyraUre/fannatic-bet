import globalAccordion from './components/tns-accordion';
import {tnsSingle, tnsSingleGames, tnsSinglePromotions} from './components/tns-slider';
import {paymentSlider, tnsCarousell} from './components/payment-slider';
import {topNav} from './components/topNav';
import {bottomNav} from './components/bottomNav';
import {searchFilter} from './components/searchFilter';
import tabs from './components/tabs';
import multilanguages from './components/multilanguages';
import {initAcc} from './components/accordion';


(()=>{
	topNav();
	bottomNav(),
	initAcc();
	if (document.body.classList.contains('home') || document.body.classList.contains('inicio')) {	
		tnsSingle();
		paymentSlider();
		tnsSingleGames();
		tnsSinglePromotions();
		multilanguages('index.html' , 'index.html');
		// functions here
	}else if (document.body.classList.contains('banking') || document.body.classList.contains('banca')) {
		multilanguages('banking.html' , 'banca.html');
		tabs();
		// functions here
	}else if (document.body.classList.contains('casino') || document.body.classList.contains('casino')) {
		multilanguages('casino.html' , 'casino.html');
		// functions here
	}else if (document.body.classList.contains('sports') || document.body.classList.contains('deportes')) {
		multilanguages('sports.html' , 'deportes.html');
		// functions here
	}else if (document.body.classList.contains('racebook') || document.body.classList.contains('racebook')) {
		multilanguages('racebook.html' , 'racebook.html');
		// functions here
	}else if (document.body.classList.contains('live-betting') || document.body.classList.contains('apuestas-en-vivo')) {
		multilanguages('live-betting.html' , 'apuestas-en-vivo.html');
		// functions here
	}else if (document.body.classList.contains('bonuses') || document.body.classList.contains('bonos')) {
		multilanguages('bonuses.html' , 'bonos.html');
		tnsCarousell();
		globalAccordion();
		// functions here
	} else if (document.body.classList.contains('rules') || document.body.classList.contains('reglas')) {
		multilanguages('rules.html' , 'reglas.html');
		tnsCarousell();
		globalAccordion();

	} else if (document.body.classList.contains('singup') || document.body.classList.contains('registro')) {
		multilanguages('sign-up.html' , 'registro.html');

	} else if (document.body.classList.contains('login') || document.body.classList.contains('ingresar')) {
		multilanguages('login.html' , 'ingresar.html');

	} else if (document.body.classList.contains('login') || document.body.classList.contains('iniciar-sesion')) {
		multilanguages('about-us.html' , 'sobre-nosotros.html');
	}
})();

