const globalAccordion = () => {
	const btn_close = document.querySelector(".close-btn");
	const tns_accordion = () => {
		const
			d = document,
			acc = document.querySelectorAll(".tns-carousell__content");
			console.log(acc);
		for (let i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				console.log(this);
				jsonParce(this);
				this.classList.toggle("active");
				this.classList.add("tns-select");
				const contentCarosell = document.querySelector(".tns-carousell");
				let container_btnClose = document.querySelector(".container-icon-close");
				let item = document.querySelector(".tns-controls");
				contentCarosell.style.pointerEvents = "none";
				item.style.pointerEvents = "none"
				container_btnClose.style.display = "block";
				const panel = document.querySelector(".accordion-container__panel");
					if (panel.style.maxHeight) {
					panel.style.maxHeight = null;
					} else {
					panel.style.maxHeight = "100%";
					} 
			});
		}
		};

		

		const close = () => {
			const contentCarosell = document.querySelector(".tns-carousell");
			let container_btnClose = document.querySelector(".container-icon-close");
			let item = document.querySelector(".tns-controls");
			let selectItem = document.querySelector(".tns-select");
			selectItem.classList.remove("tns-select")
			container_btnClose.style.display = "none";
			const panel = document.querySelector(".accordion-container__panel");
			item.style.pointerEvents= "auto";
			contentCarosell.style.pointerEvents = "auto";
			// btns_controls.style.pointerEvents = "auto"
			panel.style.maxHeight = null;
	}

	function jsonParce(item){

		fetch("./example.json")
		.then(response => {
		return response.json();
		})
		.then(data =>  generateInfo(data,item));
		
		}

btn_close.addEventListener("click", close)

function generateInfo(data,item){
	let title= document.querySelector(".accordion-container__btn-acc");
	let description = document.querySelector(".accordion-container__panel");
    if(item){
        title.innerHTML= `
        <h3>${data.sliderBonuses[item.id].title}</h3>
        `;
        
        description.innerHTML=`
		<ul>
			<li>${data.sliderBonuses[item.id].content}</li>
		</ul>
        `;
    }
};
tns_accordion();
}

export default globalAccordion;

