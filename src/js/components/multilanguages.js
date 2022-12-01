import data from '../../data/data-es.json';

const multilanguages = (root, idiom2) => {
	const items = document.querySelectorAll('.dropdown-item')
	const url = document.querySelector('.no-js');
	
	for(let i = 0; i < items.length ; i++) {
		items[i].addEventListener('click', function() {
			const idiom = this.value;
			for(let i = 0; i < data.lenguajes.length ; i++) {
				if (data.lenguajes[i].text != 'en') {
					if( data.lenguajes[i].text === idiom) {
						// window.location.pathname = `${data.lenguajes[i].text}/${idiom2}`
						window.location.pathname = `fannatic-bet/${data.lenguajes[i].text}/${idiom2}`
					}
				} else {
					window.location.pathname = `fannatic-bet/${root}`;
				}
			}
		})
	}
}

export default multilanguages;
