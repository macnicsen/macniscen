var dot = $("#dot ul li");
			var cont = $("section > div");

			dot.click(function(e){
				e.preventDefault();
				var target = $(this);
				var index = target.index();
				var section = cont.eq(index);
				var offset = section.offset().top;
				$("html,body").animate({scrollTop:offset},600);
			});

			$(window).scroll(function(){
    		var wScroll = $(this).scrollTop();	
			for( var i =0; i <= 5; i++){
			if(wScroll >= cont.eq(i).offset().top){
				dot.removeClass("active");
        		dot.eq(i).addClass("active");
			}
			}		
			});