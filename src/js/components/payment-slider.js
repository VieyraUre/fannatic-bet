export const paymentSlider = () => {
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
