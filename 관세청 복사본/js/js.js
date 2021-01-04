// 네비게이션
var blind = $(".blind");
var menu = $(".nav_group .menu");
var menu_Box = $(".nav_group .menu_Box")

menu.mouseover(function(){
	blind.css({"height":"389px"});
	menu_Box.css({"height":"370px","padding":"10px 0"})
});
menu.mouseout(function(){
	blind.css({"height":"0"});
	menu_Box.css({"height":"0px","padding":"0"})
});

// 주요서비스

var tit_1 = $(".main_link .tit_1");
var tit_box1 = $(".main_link .tit_box1");
var tit_2 = $(".main_link .tit_2");
var tit_box2 = $(".main_link .tit_box2");
var remove = $(".main_link div");

tit_1.click(function(e){
	e.preventDefault();
	tit_2.removeClass("current");
	tit_box2.removeClass("active");
	tit_1.addClass("current");
	tit_box1.addClass("active")
	
});

tit_2.click(function(e){
	e.preventDefault();
	tit_1.removeClass("current");
	tit_box1.removeClass("active");
	tit_2.addClass("current");
	tit_box2.addClass("active")
});

// 게시판 

var notice = $(".notice h2");

notice.click(function(e){
	e.preventDefault();
	var notice_h2 = $(this).attr("data-on");

	notice.removeClass("current");
	$(".notice div").removeClass("on");

	$(this).addClass("current");
	$(".notice ."+notice_h2).addClass("on");
});

// 정보

$(".ehgt h2").click(function(e){
	e.preventDefault();
	var data = $(this).attr("data-list");

	$(".ehgt h2").removeClass("current");
	$(".ehgt div").removeClass("on");

	$(this).addClass("current");
	$(".ehgt ."+data).addClass("on")
});

// 팝업 슬릭

$('.popup_box').slick({
	dots: true,
	autoplay: true,
	autoplaySpeed: 3000,
	arrows: false
});

//   갤러리 재생 정지 버튼
$(".play").click(function () {
	$(".popup_box").slick("slickPlay")
});
$(".pause").click(function () {
	$(".popup_box").slick("slickPause")
});
$(".prev").click(function () {
	$(".popup_box").slick("slickPrev")
});
$(".next").click(function () {
	$(".popup_box").slick("slickNext")
});

$(".popup .pause").click(function(){
	$(".popup .pause").hasClass("on");
	$(".popup .pause").removeClass("on");
	$(".popup .play").addClass("on");	
});
$(".popup .play").click(function(){
	$(".popup .play").hasClass("on");
	$(".popup .play").removeClass("on");
	$(".popup .pause").addClass("on");	
});
// 팝업 카운터
$("#popup .popup_box").on('init', function(event, slick) {
	$('.popup .control').append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
	$('.popup .current').text(slick.currentSlide + 1);
	$('.popup .total').text(slick.slideCount);
  });
  
//   모바일 열고 닫기 버튼 

$(".header_box .mob_btn ").click(function(){
		$(".mob_wrap").animate({"left":"0%"},500);
});

$(".mob_wrap .close").click(function(){
	$(".mob_wrap").animate({"left":"-100%"},500);
});