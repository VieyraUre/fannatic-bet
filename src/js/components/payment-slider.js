const paymentSlider = () => {
	let slider = tns({
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
				items: 3,
			},
			480: {
				items: 4,
			},
			640: {
				items: 5,
			},
			800: {
				items: 6,
			},
			960: {
				items: 6,
			},
			1120: {
				items: 6,
			},
			1280: {
				items: 6,
			},
		},
	});
};

const tnsCarousell = () =>{
	let slider = tns({
        container       : '#tnsCarousell',
        items           : 1,
        slideBy         : 1,
        swipeAngle      : false,
        speed           : 400,
        edgePadding     : 40,
        nav             : false,
        mouseDrag       : true,
        controlsText    : [ 
          '<i class="tns-carousell__prev fas fa-chevron-left"></i>',
          '<i class="tns-carousell__next fas fa-chevron-right"></i>'
        ],
        responsive: {
			0: {
				edgePadding     : 0,
                items   : 2
              },
			390: {
                items   : 3
              },
			535: {
			items   : 3
			},  
            735: {
              items     : 4
            },
			860: {
                items   : 5
              },
            1024: {
              items     : 5
			 
            },
			1930: {
				items     : 6
			  }
          }
    }); 
};

export {
	paymentSlider,
	tnsCarousell
}
