// 배너
$(".banner").slick({
	infinite: true,
	slidesToShow: 3,
	slidesToScroll: 3,
	autoplay: true,
	autoplaySpeed: 3000,
	dots: true
 
});
// 탭매뉴
 $(".tab li").click(function(e){
	e.preventDefault();
	var tab_id = $(this).attr("data_tab")

	$(".tab li").removeClass("active");
	$(".tab_contents").removeClass("active");

	$(this).addClass("active");
	$("#"+tab_id).addClass("active");
 });

//  갤러리
  $(".gallery_img").slick({
	 arrows: false,
	 fade: true,
	 pauseOnHover: true,
	 infinite: true,
	 autoplay: true,
	 autoplaySpeed: 2000
  });
//   갤러리 재생 정지 버튼
  $(".play").click(function () {
	$(".gallery_img").slick("slickPlay")
});
$(".pause").click(function () {
	$(".gallery_img").slick("slickPause")
});
$(".prev").click(function () {
	$(".gallery_img").slick("slickPrev")
});
$(".next").click(function () {
	$(".gallery_img").slick("slickNext")
});