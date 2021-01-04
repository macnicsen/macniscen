
/* function valueEmpty */
jQuery.fn.valueEmpty = function() {
    if (jQuery.trim(jQuery(this).val()).length < 1 ) {
        return true;
    } else {
        return false;
    }
};

var isShowLoading = true;
/*
$(document).ajaxStart(function() {
	if (isShowLoading) $(document.body).showLoading();

});

$(document).ajaxComplete(function() {
	$(document.body).hideLoading();
});
*/

/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////
	
	Gnb Function	

/////////////////////////////////////////////////////////////////////////////////////////////////////////// */
$(function(){
	js_gnb ();
});
function js_gnb(){
	var dtxt01 = $(".depth01").text();
	var dtxt02 = $(".depth02").text();
	var dtxt03 = $(".depth03").text();
	var dtxt04 = $("#contents .path strong").text();

	var gnb_obj = $("#nav > #gnb > ul");
		gnb_obj.intervals = "";
		gnb_obj.li = gnb_obj.find(">li"); 
		gnb_obj.li.a = gnb_obj.li.find(">a");
		gnb_obj.li.ul = gnb_obj.li.find(">ul");
		gnb_obj.li.ul.li = gnb_obj.li.ul.find(">li"); 
		gnb_obj.li.ul.li.a = gnb_obj.li.ul.li.find(">a");
		gnb_obj.li.ul.li.group = gnb_obj.li.ul.li.find("ul.group");/* 190826 */
		gnb_obj.h = $("#header #nav"); 
		gnb_obj.blind = $("#nav > #blind"); 
		
	//default
	gnb_obj.li.each(function(e){
		$(this).addClass("num"+(e+1));	
	});

	/* pc 3차메뉴 셋팅 *//* 190826 */
	gnb_obj.li.ul.li.each(function(e){
		if($(this).find('ul.group').length > 0){
			$(this).addClass("dep");
		}		
	});

	setTimeout(function(){gnb_def();},100);
	
	gnb_obj.mouseenter(function(){
		clearTimeout(gnb_obj.intervals);
	});	
	
	gnb_obj.mouseleave(function(){
		gnb_obj.intervals = setTimeout(function(){
			gnb_def(gnb_obj);
			// 191028 닫기버튼 숨기기
			//$('.mn_close').fadeOut(100);
		},300);
	});
		
	gnb_obj.li.a.on("mouseover focus",function(){
		var idx = gnb_obj.li.index($(this).parent());
		gnb_open(idx);
		// 메뉴 마우스 오버 시, 검색영역 닫기
		//$('#header .search').hide();

		// 191028 닫기버튼 보이기
		setTimeout(function(){
			//$('.mn_close').fadeIn(100);
		},200);
	});
	
	gnb_obj.li.ul.mouseenter(function(){
		gnb_obj.li.find(">a.ov").removeClass("ov");
		$(this).siblings("a").addClass("ov");
		gnb_obj.li.ul.not($(this)).removeClass("ov");
		$(this).addClass("ov");
	});
	
	gnb_obj.li.ul.li.a.on("mouseover focus",function(){
		gnb_obj.li.find(">a.ov").removeClass("ov");
		$(this).parent().parent().siblings("a").addClass("ov");
		gnb_obj.li.find(">ul.ov").removeClass("ov");
		$(this).parent().parent().addClass("ov");
	});	
	
	gnb_obj.li.eq(4).find(">ul>li").last().find(">a").on("focusout",function(){
		gnb_obj.intervals = setTimeout(function(){
			gnb_def(gnb_obj);
		},300);
	});

	/* pc 3차메뉴 추가 *//* 190826 */
	gnb_obj.li.ul.find('li.dep').click(function(e){
		//e.preventDefault();

		//191024
		if($(this).hasClass('ov')){
			gnb_obj.li.ul.li.removeClass('ov');
			gnb_obj.li.ul.find('ul.group').stop().animate({"opacity":0},130).hide();
		}else{
			gnb_obj.li.ul.li.removeClass('ov');
			gnb_obj.li.ul.find('ul.group').stop().animate({"opacity":0},130).hide();
			$(this).addClass('ov');
			$(this).find('ul.group').stop().show().animate({"opacity":1},130);
		}

		gnb_obj.maxH = 0;
		for(var i=0; i<gnb_obj.li.size(); i++){
			gnb_obj.maxH = Math.max(gnb_obj.maxH,gnb_obj.li.eq(i).find(">ul").removeAttr("style").innerHeight());
		}
		gnb_obj.li.ul.height(gnb_obj.maxH).show().stop().animate({"opacity":1},300);
		gnb_obj.maxH = gnb_obj.maxH + 50; 
		gnb_obj.h.stop().animate({"height":gnb_obj.maxH+"px"},300);
		gnb_obj.h.css('border-bottom','1px solid #ccc');
	});
	
	function gnb_def(){
		gnb_obj.li.find("a").removeClass("ov");
		if(dtxt01.length!=0){
			gnb_obj.li.a.removeClass("ov");
			gnb_obj.li.a.each(function(){
				var dt = $(this).text();
				if(dt==dtxt01){
					$(this).addClass("ov");
				}
			});
			if(dtxt02.length!=0){
				gnb_obj.li.ul.li.a.find(">strong").each(function(){
					var dt = $(this).text();
					if(dt==dtxt02){
						$(this).parent("a").addClass("ov");
					}
				});
			}
		}
		gnb_obj.li.ul.stop().animate({"opacity":0},150,function(){$(this).hide();});
		gnb_obj.h.stop().animate({"height":50+"px"},300);
		gnb_obj.h.css('border-bottom','none');
	}
	
	function gnb_open(idx){
		gnb_obj.li.find(">a").removeClass("ov");
		gnb_obj.li.eq(idx).find(">a").addClass("ov");
		gnb_obj.li.find(">ul").removeClass("ov");
		gnb_obj.li.eq(idx).find(">ul").addClass("ov");
		
		gnb_obj.maxH = 0;
		for(var i=0; i<gnb_obj.li.size(); i++){
			gnb_obj.maxH = Math.max(gnb_obj.maxH,gnb_obj.li.eq(i).find(">ul").removeAttr("style").innerHeight());
		}
		gnb_obj.li.ul.height(gnb_obj.maxH).show().stop().animate({"opacity":1},300);
		gnb_obj.maxH = gnb_obj.maxH + 50; 
		gnb_obj.h.stop().animate({"height":gnb_obj.maxH+"px"},300);
		gnb_obj.h.css('border-bottom','1px solid #ccc');
		gnb_obj.blind.stop().animate({"height":100+"%"},300);
	}
	
	
	//Slide_map
	$('<div id="slide_map"><div class="box"><strong class="title">전체메뉴</strong><div class="binds"></div><a href="#" class="close">닫기</a></div><span class="blind"></span></div>').prependTo($("#wrap"));
	gnb_obj.clone(false).appendTo($("#slide_map >.box > .binds"));
	/*$(".site_code").clone(false).appendTo($("#slide_map >.box > .binds"));*/
	
	$(".mob_btn").click(function(){
		
		$("body,html").stop().animate({"scrollTop":"0"},50,function(){ //191024 모바일메뉴 속도조절
			$("#slide_map").show().stop().animate({"opacity":1},300,function(){
				$(this).find(">.box").stop().animate({"left":0},300); 
			});
			$("#wrap").height(940);
			$("#slide_map").height($(document).height());		
			$('#slide_map .box ul li.menu1 a').focus(); //모바일 메뉴 열기시 첫번째 메뉴로 이동한다. 20200406
		});

		/* 리사이즈시, 모바일 메뉴 닫기
		$(window).resize(function(){
			if($("#slide_map").css('display')=='block'){
				$("#slide_map").find(">.box").stop().animate({"left":-100+"%"},300,function(){ 
					$(this).parent().stop().animate({"opacity":0},300,function(){
						$(this).hide();	
					});
					$("#wrap, #slide_map").removeAttr("style");
				});	
			}
		});
		 */
		return false;
	});

	$("#slide_map .box .close").click(function(){
		$("#slide_map").find(">.box").stop().animate({"left":-100+"%"},300,function(){ 
			$(this).parent().stop().animate({"opacity":0},300,function(){
				$(this).hide();	
			});
			$("#wrap, #slide_map").removeAttr("style");
			$('.policy_list a').focus(); //모바일 닫기시 상단 슬라이드 쪽으로 포커스 이동한다. 20200406
		});	
		return false;
	});

	$(window).resize(function(){
		if($("#slide_map").is(":visible")){
			$("#wrap").height(940);
			$("#slide_map").height($(document).height());
		} else {
			$("#wrap, #slide_map").removeAttr("style");	
		}
	});	
	
	//Mobile Menu
	var mob_gnb_obj = $("#slide_map"); 
		mob_gnb_obj.box = mob_gnb_obj.find(">.box"); 
		mob_gnb_obj.box.gnb = mob_gnb_obj.box.find(">.binds"); 
		mob_gnb_obj.box.gnb.ul = mob_gnb_obj.box.gnb.find(">ul");
		mob_gnb_obj.box.gnb.ul.li = mob_gnb_obj.box.gnb.ul.find(">li");
		mob_gnb_obj.box.gnb.ul.li.a = mob_gnb_obj.box.gnb.ul.li.find(">a");
		mob_gnb_obj.box.gnb.ul.li.ul = mob_gnb_obj.box.gnb.ul.li.find(">ul");
		mob_gnb_obj.box.gnb.ul.li.ul.li = mob_gnb_obj.box.gnb.ul.li.ul.find(">li");
		mob_gnb_obj.box.gnb.ul.li.ul.li.a = mob_gnb_obj.box.gnb.ul.li.ul.li.find(">a");	
		mob_gnb_obj.box.gnb.ul.li.ul.li.ul = mob_gnb_obj.box.gnb.ul.li.ul.li.find(">ul");
		mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li = mob_gnb_obj.box.gnb.ul.li.ul.li.ul.find(">li");
		mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.a = mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.find(">a");
		mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.ul = mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.find(">ul");
		mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.ul.li = mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.ul.find(">li");
		mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.ul.li.a = mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.ul.li.find(">a");
		
	//def
	mob_def();
	function mob_def(){
		mob_gnb_obj.box.find("a").removeClass("ov");
		if(dtxt01.length!=0){
			mob_gnb_obj.box.gnb.ul.li.a.removeClass("ov");
			mob_gnb_obj.box.gnb.ul.li.a.each(function(){
				var dt = $(this).text();
				if(dt==dtxt01){
					$(this).addClass("ov").siblings("ul").slideDown();
				}
			});
			if(dtxt02.length!=0){
				mob_gnb_obj.box.gnb.ul.li.ul.li.a.find(">strong").each(function(){
					var dt = $(this).text();
					if(dt==dtxt02){
						$(this).parent().addClass("ov").siblings("ul").slideDown();
					}
				});
				if(dtxt03.length!=0){
					mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.a.find(">strong").each(function(){
						var dt = $(this).text();
						if(dt==dtxt03){
							$(this).parent().addClass("ov").siblings("ul").slideDown();
						}
					});
					if(dtxt04.length!=0){
						mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.ul.li.a.find(">strong").each(function(){
							var dt = $(this).text();
							if(dt==dtxt04){
								$(this).parent().addClass("ov");
							}
						});
					}
				}
			}
		}
	}
	
	//2020-04-28 모바일 웹 접근성 관련 추가
	titleAdd();
	function titleAdd(){
		mob_gnb_obj.box.gnb.ul.li.a.each(function(){
			var dt = $(this).find("span").text();
			$(this).prop("title","축소됨");
		});

		mob_gnb_obj.box.gnb.ul.li.ul.li.a.each(function(){
			var dt = $(this).find("span").text();
			$(this).prop("title","축소됨");
		});
	}
	//2020-04-28 모바일 웹 접근성 관련 추가 여기까지

	mob_gnb_obj.box.gnb.ul.li.a.click(function(){

		//2020-04-28 모바일 웹 접근성 관련 추가
		var title = $(this).prop("title");
		var titleBak = $(this).find("span").text();

		if(mob_gnb_obj.box.gnb.ul.li.ul.is(":animated")) return false;
		if($(this).siblings("ul").size() != 0){
			mob_gnb_obj.box.gnb.ul.li.a.not(this).removeClass("ov").siblings("ul").slideUp();
			$(this).toggleClass("ov").siblings("ul").slideToggle();

			//2020-04-28 모바일 웹 접근성 관련 추가
			if($(this).attr("class") == "ov"){
				$(this).attr("title",titleBak+"(확장됨)");
			}else{
				$(this).attr("title",titleBak+"(축소됨)");
			}

			return false;	
		} else {
			return true;	
		}
	});
	
	mob_gnb_obj.box.gnb.ul.li.ul.li.a.click(function(){

		//2020-04-28 모바일 웹 접근성 관련 추가
		var title = $(this).prop("title");
		var titleBak = $(this).find("strong").text();

		if(mob_gnb_obj.box.gnb.ul.li.ul.li.ul.is(":animated")) return false;
		if($(this).siblings("ul").size() != 0){
			mob_gnb_obj.box.gnb.ul.li.ul.li.a.not(this).removeClass("ov").siblings("ul").slideUp();
			$(this).toggleClass("ov").siblings("ul").slideToggle();

			//2020-04-28 모바일 웹 접근성 관련 추가
			if($(this).attr("class") == "depth ov"){
				$(this).attr("title",titleBak+"(확장됨)");
			}else{
				$(this).attr("title",titleBak+"(축소됨)");
			}


			return false;
		} else {
			return true;	
		}
	});
	
	mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.a.click(function(){
		if(mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.ul.is(":animated")) return false;
		if($(this).siblings("ul").size() != 0){
			mob_gnb_obj.box.gnb.ul.li.ul.li.ul.li.a.not(this).removeClass("ov").siblings("ul").slideUp();
			$(this).toggleClass("ov").siblings("ul").slideToggle();

			return false;
		} else {
			return true;	
		}
	});
}
/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////

유틸_검색

/////////////////////////////////////////////////////////////////////////////////////////////////////////// */
$(function(){

	$('.m_search_btn').click(function(){
		$('#header .search').fadeIn(100);
		$('#header .search #query').focus(); //모바일에서 검색버튼 클릭시 입력창으로 이동
		
	});
	$('.search_close button').click(function(){
		$('#header .search').fadeOut(100);
		$('#header .mob_btn').focus();  //모바일에서 검색버튼 닫기시 모바일 메뉴 버튼으로 포커스 이동
	});
	
	function searchGo( frm ) {
								
		if( !frm.query.value ) {
			alert("검색어를 입력해주세요.");
			frm.query.focus();
			return false;
		}
		
		return true;
		
	}	


});



$(function(){

	// 상단팝업 유무에 대해
	if($('#topLayer').length > 0){
		$('#header').css('top','190px');
	}else{
		$('#header').css('top','0px');
	}


    // 상단팝업 슬라이드
    $(".top_slider").slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        responsive: [
        { /* 반응형웹*/
                breakpoint: 0, /*  기준화면사이즈 */
                settings: {slidesToShow:2 } /*  사이즈에 적용될 설정 */
            },
            { /* 반응형웹*/
                breakpoint: 768, /*  기준화면사이즈 */
                settings: {slidesToShow:1 } /*  사이즈에 적용될 설정 */
            }
        ]
    });  
    
    // 상단팝업 정지
    $('#toppopStop').click(function(){
        $(this).fadeOut(100);
        $('#toppopPlay').delay(100).fadeIn(100);
        $(".top_slider").slick('slickPause');
    });
    
    // 상단팝업 재생
    $('#toppopPlay').click(function(){
        $(this).fadeOut(100);
        $('#toppopStop').delay(100).fadeIn(100);
        $(".top_slider").slick('slickPlay');
    });  
    
    // 상단팝업 닫기
    $('#toppopClose').click(function(){
        $this = $('#topPop_toggle');
        $this.removeClass('close').addClass('open');
		$('#topLayer').slideUp();
		$('#header').animate({'top':'0px'});
    });

    // 상단팝업 header버튼 열기/닫기
    $('#topPop_toggle').click(function(){
        $this = $('#topPop_toggle');
        if( $this.hasClass('close')){
            $this.removeClass('close').addClass('open');
            $('#topLayer').stop().slideUp();
			$('#header').animate({'top':'0px'});
        }else{            
            $this.removeClass('open').addClass('close');
            $('#topLayer').stop().slideDown();
			$('#header').animate({'top':'190px'});
        }
    });  

   // 다국어리스트
    $('#eng_toggle').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open').addClass('close');
            $('.lang_list').stop().slideDown();
        }else{
            $(this).removeClass('close').addClass('open');
            $('.lang_list').stop().slideUp();
        }
    });

    /* footer 사이트 링크 */
    $('.footBtnWrap button').click(function() {
		$(this).parent().siblings('div').children('div').slideUp(300);
		$(this).siblings("div").slideToggle(300);
		
		if($(this).parent('.footBtn').hasClass('on')){
			$('.footBtn').removeClass('on');
		}else{				
			$('.footBtn').removeClass('on');
			$(this).parent('.footBtn').addClass('on');
		}

		return false;	

	});
	
	$('.footBtnWrap').mouseleave(function(){
		$('.footBtn div').each(function() {
			if ($(this).css('display') == 'block') {
				$('.footBtn div').hide();
				$('.footBtn').removeClass('on');
			}
		});
	});

    $(function(){
    		$(window).scroll(function() {
    			if($(this).scrollTop() > 300){
    				$('#moveTop').fadeIn();
    			}else{
    				$('#moveTop').fadeOut();
    			}
    		});
    		
    		$("#moveTop a").click(function() {
    			$('html, body').animate({
    				scrollTop : 0
    			}, 400);
    			return false;
    		});
    });
});


//2020-04-28 모바일 웹 접근성 탭 title 추가
$(function(){
	var tab_st1 = $("ul.tab_st1"); 

	tab_st1.children().each(function(){
		if($(this).attr("class") == "on"){
			$(this).find("a").attr("title",$(this).text()+"(선택됨)");
			
			return false;
		}
		
	});
	
	/*
	var url = $(location).attr('href');
	if (url.indexOf("/cntntsView.do") != -1 || url.indexOf("/selectNttList.do") != -1) {
	  $('#bodyContents').focus();
	  document.getElementById('bodyContents').scrollIntoView();
	}
	*/

});
