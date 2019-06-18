function splitScroll(){
	const controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		duration:'200%',
		triggerElement:'.about-tit',
		triggerHook:0
	})
	.setPin('.about-tit')
	.addIndicators()
	.addTo(controller);
}

splitScroll();