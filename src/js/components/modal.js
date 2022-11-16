export const sign = document.querySelector('.sign');
const overlay= document.querySelector('.overlay')
const modal= document.querySelector('.modal')


const openModal = () => {
	modal.classList.add('expand');
	overlay.classList.add('expand');
}

const closeModal = () => {
	overlay.classList.remove('expand');
	modal.classList.remove('expand');
}

sign.addEventListener('click', event => {
	event.preventDefault();
	openModal();
});


overlay.addEventListener('click', event => {
	event.preventDefault();
	closeModal();
})

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
