$(function(){
	// 주요정책 : 200311   
	  $("#policy .policy_list").on('init', function(event, slick) {
	    $('.policy_box .control').append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
	    $('.policy_box .current').text(slick.currentSlide + 1);
	    $('.policy_box .total').text(slick.slideCount);
	  });
	  $("#policy .policy_list").slick({
			arrows:true,
			slidesToScroll:1,
			slidesToShow:1,
			slider:'p',
			accessibility:false,
			swipe:false,
			infinite:true,
			autoplay:true,
			autoplaySpeed:6000,
	    prevArrow: $('#policyPrev'),
	    nextArrow: $('#policyNext'),
	    }).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
	      $('.policy_box .current').text(nextSlide + 1);
	    }).on('afterChange', function(event, slick, currentSlide) {
	      $('.slick-initialized .slick-slide[aria-hidden="true"] a').attr('tabindex', '-1');
	      $('.slick-initialized .slick-slide[aria-hidden="false"] a').attr('tabindex', '0');
	    });
	    $('.slick-initialized .slick-slide[aria-hidden="true"] a').attr('tabindex', '-1');
	    $('.slick-initialized .slick-slide[aria-hidden="false"] a').attr('tabindex', '0');

	    // 주요정책 슬라이드 정지
	    $('#policyStop').click(function(){
	      $(this).fadeOut(100);
	      $('#policyPlay').delay(100).fadeIn(100);
	      $("#policy .policy_list").slick('slickPause');

	  });
	  
	  // 주요정책 슬라이드 재생
	  $('#policyPlay').click(function(){
	      $(this).fadeOut(100);
	      $('#policyStop').delay(100).fadeIn(100);
	      $("#policy .policy_list").slick('slickPlay');
	  });  //주요정책


		
		  // 팝업존 : 200311   
	    $("#popup .pop").on('init', function(event, slick) {
	      $('.box_popup .control').append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
	      $('.box_popup .current').text(slick.currentSlide + 1);
	      $('.box_popup .total').text(slick.slideCount);
	    });
	    $("#popup .pop").slick({
	      arrows:true,
	      slidesToScroll:1,
	      slidesToShow:1,
	      slider:'p',
	      accessibility:false,
	      swipe:false,
	      infinite:true,
	      autoplay:true,
	      autoplaySpeed:6000,
	      prevArrow: $('#popupPrev'),
	      nextArrow: $('#popupNext'),
	    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
	      $('.box_popup .current').text(nextSlide + 1);
	    }).on('afterChange', function(event, slick, currentSlide) {
	      $('.slick-initialized .slick-slide[aria-hidden="true"] a').attr('tabindex', '-1');
	      $('.slick-initialized .slick-slide[aria-hidden="false"] a').attr('tabindex', '0');
		  });
	    $('.slick-initialized .slick-slide[aria-hidden="true"] a').attr('tabindex', '-1');
	    $('.slick-initialized .slick-slide[aria-hidden="false"] a').attr('tabindex', '0');

	    // 20200429 수정 팝업존 슬라이드 정지
	    $('#popupStop').on('click', function(){
			$(this).hide();
			$('#popupPlay').show();
			$('#popupPlay').focus();
			$('#popup .pop').slick('slickPause');
	    });
	    
	    // 팝업존 슬라이드 재생
	    $('#popupPlay').on('click', function(){
			$(this).hide();
			$('#popupStop').show();
			$('#popupStop').focus();
			$('#popup .pop').slick('slickPlay');
	    });
		
		// 팝업존 슬라이드 정지
	    /*$('#popupStop').click(function(){
	      $(this).fadeOut(100);
	      $('#popupPlay').delay(100).fadeIn(100);
	      $("#popup .pop").slick('slickPause');
	    });
	    
	    // 팝업존 슬라이드 재생
	    $('#popupPlay').click(function(){
	        $(this).fadeOut(100);
	        $('#popupStop').delay(100).fadeIn(100);
	        $("#popup .pop").slick('slickPlay');
	    });*/
});


//배너존 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function(){		
	var param = "#mbanner";
	var obj = ".obj>li";
	var btn = param+" .control";
	var interval = 5000;
	var speed = 0;
	var viewSize = 1;
	var moreSize = 0;
	var dir = "x";
	var data = 0;
	var auto = true;
	var hover = false;
	var method = "easeInOutCubic";
	var op1 = false;
	stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1);		
});

function gobbsId(data){

	isShowLoading = true;
	function formatDate(date) { 
		var d = new Date(date), 
			month = '' + (d.getMonth() + 1), 
			day = '' + d.getDate(), 
			year = d.getFullYear(); 
		if (month.length < 2) month = '0' + month; 
		if (day.length < 2) day = '0' + day;
			return [year, month, day].join('.'); 
	}

	var form_data = {
		bbsId: data
	};
	$.ajax ({
	  type: 'post', // POST 로 전송
	  dataType: 'json', // JSON 타입이 아닐경우 제거
	  url: '/kcs/bbsId.do', // 호출 URL
	  data: form_data, 
	  success:function(data){

		var results = data.nttList;
            var str = '';
			var str2 = '';
            $.each(results , function(i){
				
				if(data.bbsId == "1362"){
					str += '<li><a href="/kcs/na/ntt/selectNttInfo.do?mi=2891&bbsId='+results[i].bbsId+'&nttSn='+results[i].nttSn+'" title="'+results[i].nttSj+'">'
				}else if(data.bbsId == "1363"){
					str += '<li><a href="/kcs/na/ntt/selectNttInfo.do?mi=2892&bbsId='+results[i].bbsId+'&nttSn='+results[i].nttSn+'" title="'+results[i].nttSj+'">'
				}else if(data.bbsId == "1366"){
					str += '<li><a href="/kcs/na/ntt/selectNttInfo.do?mi=2897&bbsId='+results[i].bbsId+'&nttSn='+results[i].nttSn+'" title="'+results[i].nttSj+'">'
				}
				
				if(results[i].newCheck == "Y"){
					str += '<img src="/images/web/kcs/main/ico_new.png" alt="새글">'+results[i].nttSj+'</a>';
				}else{
					str += ''+results[i].nttSj+'</a>';
				}
				str += '<span>'+formatDate(results[i].regDt)+'</span>';
				str += '</li>';
            });
			if(data.bbsId == "1362"){
				$("#bbsList01").html(str);
			}else if(data.bbsId == "1363"){
				$("#bbsList02").html(str);
			}else if(data.bbsId == "1366"){
				$("#bbsList03").html(str);
			}
	  },
	  error:function(e) {
		//alert(e);
	  }
	});
}

function taxOpen(){
	window.open("/kcs/ad/tax/ItemTaxCalculation.do","taxView", "directories=no, width=870, height=850, toolbar=no, scrollbars=yes, resizeable=no, target=new");
	return false;
}

/*미니리스트*/
$(function(){
	$("div.Notice > h2").on("click",(function(){
		var activeTab = $(this).attr('class');
		var activeNum = activeTab.substring(4,5);
		
		if(activeNum == "3")
			gobbsId('1362');
		else if(activeNum == "4")
			gobbsId('1363');
		else if(activeNum == "5")
			gobbsId('1366');
		
		$('div.Notice > h2').removeClass('current');
		$('div.Notice > div').removeClass('on');
		
		$(this).addClass('current');
		$('div.list_box'+activeNum).addClass('on');
		
	}))
});

/*이달의통관실적/관세환율정보*/
$(function(){
	$("div.ehgt > h2").on("click focusin",(function(){
		var activeTab = $(this).attr('class');
		var activeNum = activeTab.substring(4,5);
		
		$('div.ehgt > h2').removeClass('current');
		$('div.ehgt > div').removeClass('on');
		
		$(this).addClass('current');
		$('div.ehgt > div.list_ty'+activeNum).addClass('on');

	}))
});

/*주요서비스*/
$(function(){
	$("div.m_link > h3").on("click focusin",(function(){
		var activeTab = $(this).attr('class');
		var activeNum = activeTab.substring(4,5);
	
		$('div.m_link > h3').removeClass('current');
		$('div.m_link > div').removeClass('on');
		
		$(this).addClass('current');
		$('div.m_link > div.link_box'+activeNum).addClass('on');
	}))
});

/*

*/