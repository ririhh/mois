/* 지도 넣기 */
var mapContainer = document.getElementById('map'),
mapOption = { 
    center: new kakao.maps.LatLng(36.4839382, 127.2610069),
    level: 3
};

var map = new kakao.maps.Map(mapContainer, mapOption); 

var marker = new kakao.maps.Marker();

kakao.maps.event.addListener(map, 'tilesloaded', displayMarker);

function displayMarker() {

marker.setPosition(map.getCenter()); 
marker.setMap(map); 
}

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);


/* 조선일보 뉴스 넣기 */
$(function(){
    $.ajax({
        url:"news.php",
        dataType:'xml',
        success:function(data){
            let $items=$(data).find("item");
            if($items.length > 0){
                $items=$items.slice(0,3);
                let $ulTag=$("<ul />");
                $.each($items, function(i, o){
                    let $title=$(o).find("title").text();
                    let $link=$(o).find("link").text();

                    let $aTag=$("<a />").attr({"href":$link, "target":"_blank"}).text($title);
                    let $liTag=$("<li />").append($aTag);
                    $ulTag.append($liTag);
                })
                $('.add .add_news').append($ulTag);
            }
        }
    });
});


/* 날씨 넣기 */
 $(function(){
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?id=1835848&appid=e43dea31aa2f5590ff0c507f6fc51f83&units=metric',function(data){
        //alert(data.weather[0].icon)
        let minTemp=data.main.temp_min;
        let maxTemp=data.main.temp_max;
        let temp=data.main.temp;
        let icon=data.weather[0].icon;
        let dt=data.dt;
        let d=new Date();

        $('.ctemp').append(temp).after(' ℃ ');
        $('.cmintemp').append(minTemp).after(' ℃ ');
        $('.cmaxtemp').append(maxTemp).after(' ℃ ');
        $('.cicon').append('<img src="http://openweathermap.org/img/wn/'+icon+'@2x.png" />');
    });
}); 


/* content1 타이틀 슬라이드 */
var mySwiper = new Swiper ('.swiper-container', 
	{
    speed:1000,
		direction: 'horizontal',
		navigation: 
		{
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
		pagination: 
		{
			el: ".swiper-pagination01",
      type: "fraction",
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
    loop: true,
	}); 
//재생, 정지 버튼
let num = 0;
	$("#img01").click(function () {
		if(num == 0) {
			$(this).attr("src", "./img/control_play.png");
      $(this).attr("onclick", "mySwiper.autoplay.start()");
			num = 1;
		}else {
			$(this).attr("src", "./img/control_stop.png");
      $(this).attr("onclick", "mySwiper.autoplay.stop()");
			num = 0;
		}
	});


/* content2 클릭할 때 기사들 새로 뜸 */
$('.c2_l_wrap').each(function(){
    let topDiv=$(this);
    let anchors=topDiv.find('.tab_on a');    //this 각각 받아오겠다
    let panelDivs=topDiv.find('.tab');
    let lastAnchor=null;
    let lastPanel=null;

    lastAnchor=anchors.filter('.on') //on을 찾아서 라스트앵커에 넣고 
    lastPanel=$(lastAnchor.attr('href'));
    panelDivs.hide();
    lastPanel.show();

    anchors.click(function(e){
        e.preventDefault();
        let currentAnchor=$(this);
        let currentPanel=$(currentAnchor.attr('href'));
        lastAnchor.removeClass('on') 
        currentAnchor.addClass('on') //누르면 addcalss되게

        lastPanel.hide();
        currentPanel.show(); //여기까지하면 겹쳐서 보이기 때문에 

        lastAnchor=currentAnchor; //이렇게 지정
        lastPanel=currentPanel;
    })
});


/* 사이드 뉴스 슬라이드 */
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 메뉴 */
$(function(){
  $('.menu_l>li').hover(function(){
      $(this).find('.all_menu').stop().slideDown(500); 
  },function(){
      $(this).find('.all_menu').stop().slideUp(500); 
  });
});


/* 배너 슬라이드 */
var mySwiper01 = new Swiper ('.swiper-container01', 
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
    loopFillGroupWithBlank: true,
    initialSlide: 0,
	}); 
//재생, 정지 버튼
let num1 = 0;
	$(".b_button>a>#img01").click(function () {
		if(num == 0) {
			$(this).attr("src", "./img/b4.png");
      $(this).attr("onclick", "mySwiper01.autoplay.start()");
			num = 1;
		}else {
			$(this).attr("src", "./img/b3.png");
      $(this).attr("onclick", "mySwiper01.autoplay.stop()");
			num = 0;
		}
	});
