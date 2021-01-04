function stateScrollObj(param,obj,btn,interval,speed,viewSize,moreSize,dir,data,auto,hover,method,op1){
	var paramNm = param;
	var param = $(param);
	var btn = $(btn);
	var obj = param.find(obj);
	
	var elem = 0;
	var objYScale = obj.eq(elem).outerHeight(true)+moreSize;
	var objXScale = obj.eq(elem).outerWidth(true)+moreSize;
	var str;
	var returnNodes;

	var playdir = data;
	var data = data; // 0:default, 1:prev

	var play = btn.find("[rel=play]");
	var stop = btn.find("[rel=stop]");
	
	if(auto == true) play.hide(); else stop.hide(); 
	if(op1 == true) obj.not(elem).css({opacity:0}).eq(elem).css({opacity:1});
	
	function movement(){
		if(obj.parent().find(":animated").size()) return false;
		switch(data){
			case 0:
				if(dir == "x"){
					obj.parent().stop(true,true).animate({left:-objXScale},{duration:speed,easing:method,complete:
						function(){
							obj.parent().css("left",0);
							str = obj.eq(elem).detach();
							obj.parent().append(str);
							if(elem == obj.size()-1){
								elem = 0;
							}else{
								elem++;
							}
							objXScale = obj.eq(elem).outerWidth(true)+moreSize;
						}
					});
				}else{ 
					obj.parent().stop(true,true).animate({top:-objYScale},{duration:speed,easing:method,complete:
						function(){
							obj.parent().css("top",0);
							str = obj.eq(elem).detach();
							obj.parent().append(str);
							if(elem == obj.size()-1){
								elem = 0;
							}else{
								elem++;
							}
							objYScale = obj.eq(elem).outerHeight(true)+moreSize;
						}
					});
				}

				if(op1 == true){
					obj.eq(elem).stop(true,true).animate({opacity:0},{duration:speed,easing:method});
					obj.eq(elem).next().stop(true,true).animate({opacity:1},{duration:speed,easing:method});
					//obj.eq(elem).stop(true,true).fadeOut(speed);
					//obj.eq(elem).next().stop(true,true).fadeIn(speed);
					//obj.eq(elem).css({"z-index":"0"});
					//obj.eq(elem).next().css({"z-index":"1"});
				}
			break;
			
			case 1:
				if(dir == "x"){
					if(elem == 0){
						elem = obj.size()-1;
					}else{
						elem--;
					}
					objXScale = obj.eq(elem).outerWidth(true)+moreSize;
					obj.parent().css("left",-objXScale);
					str = obj.eq(elem).detach();
					obj.parent().prepend(str);
					obj.parent().stop(true,false).animate({left:0},{duration:speed,easing:method});
				}else{
					if(elem == 0){
						elem = obj.size()-1;
					}else{
						elem--;
					}
					objYScale = obj.eq(elem).outerHeight(true)+moreSize;
					obj.parent().css("top",-objYScale);
					str = obj.eq(elem).detach();
					obj.parent().prepend(str);
					obj.parent().stop(true,false).animate({top:0},{duration:speed,easing:method});
				}

				if(op1 == true){
					obj.eq(elem).stop(true,false).animate({opacity:1},{duration:speed,easing:method});
					obj.eq(elem).next().stop(true,false).animate({opacity:0},{duration:speed,easing:method});
					//obj.eq(elem).stop(true,false).fadeIn(speed);
					//obj.eq(elem).next().stop(true,false).fadeOut(speed);
					//obj.eq(elem).css({"z-index":"1"});
					//obj.eq(elem).next().css({"z-index":"0"});
				}
			break;
			
			default: alert("warning, 0:default, 1:prev, data:"+data);
		}
		// 현재 팝업 인덱스 갱신
		if(paramNm == "#popup"){
			btn.find("span strong").text(elem+1);
		}
	}
	
	function rotate(){
		clearInterval(returnNodes);
		returnNodes = setInterval(function(){
			movement();
		},interval);
	}

	if(obj.size() <= viewSize) return false;

/* 클릭시 재생 멈춤
	obj.find("a").bind("focusin",function(){
		clearInterval(returnNodes);
	});
*/
	btn.find("a[rel=play]").bind("click",function(event){
		data = playdir;
		play.hide();
		stop.show();
		rotate();
		$(".stop").focus();
		return false;
	});
	
	btn.find("a[rel=stop]").bind("click",function(event){
		clearInterval(returnNodes);
		param.find(":animated").stop();
		stop.hide();
		play.show();
		$(".play").focus();
		return false;
	});
	
	btn.find("a[rel=prev]").bind("click",function(event){
		clearInterval(returnNodes);
		data = 1;
		movement();
		// add
		stop.hide();
		play.show();
		return false;
	});
	
	btn.find("a[rel=next]").bind("click",function(event){
		clearInterval(returnNodes);
		data = 0;
		movement();
		// add
		stop.hide();
		play.show();
		return false;
	});
	
	if(hover == true){
		obj.hover(function(){
			clearInterval(returnNodes);
		},function(){
			rotate();
		});
	}
	
	if(auto == true) rotate();
}