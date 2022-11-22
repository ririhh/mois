var mySwiper = new Swiper ('.swiper-container01', 
	{
    speed:1000,
		direction: 'horizontal',
		navigation: 
		{
		  nextEl: '.next01',
		  prevEl: '.prev01',
		},
		zoom: true,
		keyboard: 
		{
			enabled: true,
			onlyInViewport: false,
		},
		mousewheel: 
		{
			invert: true,
		},
    autoplay: 
    {
      delay: 2000,
      disableOnInteraction: false,
    },
	slidesPerView: "auto",
    spaceBetween: 5,
	loop: true,
    /* loopFillGroupWithBlank: true,
    initialSlide: 0, */
	}); 
//재생, 정지 버튼
let num = 0;
	$("#img01").click(function () {
		if(num == 0) {
			$(this).attr("src", "./img/b4.png");
      $(this).attr("onclick", "mySwiper.autoplay.start()");
			num = 1;
		}else {
			$(this).attr("src", "./img/b3.png");
      $(this).attr("onclick", "mySwiper.autoplay.stop()");
			num = 0;
		}
	});

/* 	var swiper = new Swiper(".mySwiper", {
		slidesPerView: "auto",
		spaceBetween: 120,
		loop: true,
		centeredSlides: true,
		loopFillGroupWithBlank: true,
		initialSlide: 0,
		navigation: {
		  nextEl: ".next01",
		  prevEl: ".prev01",
		},
	  }); */