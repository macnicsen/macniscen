var nav = $("#nav ul li");
		var cont = $("#contents > div");

		nav.click(function(e){
			e.preventDefault();
			var target = $(this);
			var index = target.index();
			var section = cont.eq(index);
			var offset = section.offset().top;
			$("html,body").animate({scrollTop:offset},600);
		});

		$(window).scroll(function(){
			var wScroll = $(this).scrollTop();

			if(wScroll > 200){
				$("#nav").addClass("on");
			}else{
				$("#nav").removeClass("on");
			}
		});

		$(window).scroll(function(){
    		var wScroll = $(this).scrollTop();	
			for( var i =0; i <= 6; i++){
			if(wScroll >= cont.eq(i).offset().top){
        	nav.removeClass("active");
        	nav.eq(i).addClass("active");
			}
			}		
			});

	// animation slick
	
		$(window).scroll(function(){
			const scrollTop = $(window).scrollTop()+ $(window).height()/2 ;

			if( scrollTop >  $(".port1").offset().top ){
				$(".port1").addClass("show");
			}else
			$(".port1").removeClass("show");
			if( scrollTop >  $(".port2").offset().top ){
				$(".port2").addClass("show");
			}else
			$(".port2").removeClass("show");
			if( scrollTop >  $(".port3").offset().top ){
				$(".port3").addClass("show");
			}else
			$(".port3").removeClass("show");
			});