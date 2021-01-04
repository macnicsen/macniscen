
// http -> https
if(document.location.protocol == "http:" && !(document.location.host == "10.132.1.93:9210" || document.location.host == "10.132.1.208:9210") ){
			document.location.href = document.location.href.replace("http:", "https:");
}

$(document).ready(function(){
	
	// 메뉴 타이틀 체크 ( 메뉴가 없는 경우 왼쪽 메뉴 갱신 )
//	if($("#sideContent h1").children().length == 0){
	if($("#sideContent h1").length == 0){
		$('#sideContent').append("<h1>"+$('#pageTitle').text()+"</h1>");
		$('#location').html("");
	}

	$('[target*=_blank]').attr("rel", "noopener noreferrer");
});

/* function valueEmpty */
jQuery.fn.valueEmpty = function() {
    if (jQuery.trim(jQuery(this).val()).length < 1 ) {
        return true;
    } else {
        return false;
    }
};

/* function number and comma */
function numComma(data){
	if (jQuery.trim(data).length > 3 ) {
    	var returnValue = "";
        var commaValue = ""+data;
        for(idx=commaValue.length-1,chk=0;idx>=0;idx--,chk++){
        	if(chk == 3){
        		chk=0;
        		returnValue = commaValue.substr(idx,1) + "," + returnValue;
        	} else {
        		returnValue = commaValue.substr(idx,1) + returnValue;
        	}
        }
        return returnValue;
    } else {
        return data;
    }
}

$(function () {
	/* function onlyNumber */
	$(".onylNum").change(function(){
		$(this).val($(this).val().replace(/[^0-9]/g,""));
	});
})

//파일 다운로드
function mfn_fileDownload(fileKey){
	if(fileKey != "" || fileKey == null){
		location.href="/common/fileDownload.do?fileKey="+fileKey;	
	}
};

function getHead()
{
	var head = "<head><title>관세청</title>";
	$(document).find("link").filter(function(){	
		return $(this).attr("rel").toLowerCase() == "stylesheet";
	}).filter(function(){ 
		var media = $(this).attr("media") || "";
		var href  = $(this).attr("href");
		return true;
	}).each(function(){
		head += '<link type="text/css" rel="stylesheet" href="' + $(this).attr("href") + '" >';
	});

	head += "</head>";
	return head;
}



// 인쇄
$(document).on("click", ".btnPrint", function(){
	var $container = $(".subCntBody").clone();
	var $title_area = $(".title_area").clone();
	var sysId = $('#sysid').val(); 
	var $logo = $('.logo').clone();
	$container.find('.satisfaction').remove();
	$title_area.find('.snsBox').remove();
	
	var innerTitle = $title_area[0].innerHTML;
	var innerHtml = $container[0].innerHTML;
	var logoHtml = $logo[0].innerHTML;
	/*var popupWindow = window.open("", "targetTest" , "width=1000, height=900");*/
	var content = "";
	content += "<html>" ;
	content += getHead();
	content += "<body>";
	
	/*content += logoHtml;*/
	content += "<div id='cntntsView'>";
	content += "<div class='mgb20'>";
	content += "<img src='/images/web/"+sysId+"/common/logo.png' />"
	content += "</div>";
	content += "<div class='title_area'>";
	content += innerTitle;
//	content += "</div>";
	content += "<div class='mgt20'>";
	content += innerHtml;
	content += "</div>";
	content += "</div>";
	content += "</body>";
	content += "</html>";
	
	var windowId = 'instanceId_' + new Date().getTime(); 
	
	var windowPopup = window.open("", windowId, 'width=1000px height=900px');
	windowPopup.document.write(content);
	
	setTimeout(function(){
		windowPopup.document.execCommand('print', false, null) || windowPopup.print();
		windowPopup.blur();
		windowPopup.focus();
		windowPopup.close();
	}, 1000);
	
	
});


/*$(document).on("click", ".btnPrint", function(){
	var initBody = document.body.innerHTML;
	
	window.onbeforeprint = function () 
	{
		document.body.innerHTML = $('.subCntBody').html();
		document.body.innerHTML = document.getElementById("").innerHTML;
	}

	window.onafterprint = function () 
	{
		document.body.innerHTML = initBody;
	}

	window.print();
});*/

$(function(){

	$("#f_exchange").on("click", function(){
		window.open("/kcs/ad/scs/SelfCheckPopup.do", 'Scs', 'width=730, height=768, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_Job").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010010&mi=2962", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
		});
	$("#f_corona").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010011&mi=2962", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
		});
	$("#f_rnd").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010050&mi=2962", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
		});
	$("#f_unipass").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010040&mi=2962", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
		});		
	$("#f_foreign").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010060&mi=2962", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
		});
	$("#f_info").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010061&mi=2962", 'Scs', 'width=820, height=800, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_062").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010062&mi=2962", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_063").on("click", function(){
			window.open("/kcs/insertAplcPage.do?rqstId=RQSTID_00000000010063&mi=2962", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});

	$("#f_41").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=41", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_42").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=42", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_61").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=61", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_62").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=62", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_81").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=81", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_82").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=82", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_91").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=91", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_92").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=92", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_101").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=101", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});
	$("#f_102").on("click", function(){
		window.open("/kcs/ad/exm/insertExmAplcFormPopup.do?exmSrno=102", 'Scs', 'width=820, height=900, toolbasrno, scrollbars=1, status=0');
	});

	//도움말기능 시작
	$(".adminHpcmIcon").click(function(){
		
		var obj = $(this);
		chk = obj.attr('chk');
		if (chk == null) {
			chk = 1;
		}
		
		if (chk == 1) {
			$.ajax({
				type : "get",
				url : "/apple/hc/hpcm/selectHpcm.do",
				data : {"hpcmSn" : $(this).attr("data-hp")},
				dataType : "json",
				success:function(data){
					obj.popover({
						title : data.hpcmSj,
						container : "body",
						toggle : "popover",
						placement : "right",
						trigger: 'focus',
						html : "true",
						content : data.hpcmDc
					}).popover('show');
					obj.attr('chk','0');
				},
				error : function(error) {
					alert("오류가 발생하였습니다.\n관리자에게 문의하세요.");
				}	
			});
		}else{
			obj.attr('chk','1');
		}
	})
	
	//도움말기능 시작(공통)
	$(".hpcmIcon").click(function(){
		
		var obj = $(this);
		chk = obj.attr('chk');
		if (chk == null) {
			chk = 1;
		}
		
		if (chk == 1) {
			$.ajax({
				type : "get",
				url : "/common/hc/hpcm/selectHpcm.do",
				data : {"hpcmSn" : $(this).attr("data-hp")},
				dataType : "json",
				success:function(data){
					obj.popover({
						title : data.hpcmSj,
						container : "body",
						toggle : "popover",
						placement : "right",
						trigger: 'focus',
						html : "true",
						content : data.hpcmDc
					}).popover('show');
					obj.attr('chk','0');
				},
				error : function(error) {
					alert("오류가 발생하였습니다.\n관리자에게 문의하세요.");
				}	
			});
		}else{
			obj.attr('chk','1');
		}
	})
	
	
})
//도움말기능 끝

// 메뉴 접근 권한 체크
function menuAccessCheck(mi, sysId){
	var url = "/" + sysId + "/mn/menu/menuAccess.do"
	
	$.ajax({
		type : "post",
		url : url,
		data : { 
			menuId : mi
		},
		dataType : "json",
		success : function(data) {
			var accessVal = JSON.parse(data.accessVal);
			
			if (accessVal == "Y") {
				var accessUrl = JSON.parse(data.menuUrl);
				location.href = accessUrl;
			} else {
				if(sysId == 'rcl'){
					alert('Please log in to continue.');
					location.href="/rcl/rclLoginPage.do?mi=10276";	
				}else{
					alert("접근 권한이 없습니다.");
					return false;
				}
			}
		},
		error : function(data) {
			alert("오류가 발생하였습니다.\n관리자에게 문의하세요.");
		}		
	});	
}

//팝업 쿠키 저장
function setCookie(cookieName, value){
    var exdays = 1;
    var exdate = new Date();
    var day = exdate.getDate() * 1;
    exdate.setDate(day + exdays);
//    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
    var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toUTCString()); 
    document.cookie = cookieName + "=" + cookieValue;
}

// 쿠키조회
function getCookie(cookieName) {
    cookieName = cookieName + '=';
    var cookieData = document.cookie;
    var start = cookieData.indexOf(cookieName);
    var cookieValue = '';
    if(start != -1){
        start += cookieName.length;
        var end = cookieData.indexOf(';', start);
        if(end == -1)end = cookieData.length;
        cookieValue = cookieData.substring(start, end);
    }
    return unescape(cookieValue);
}

// 팝업 닫기(쿠키설정)
$(document).on('click', '.popupCookieSet', function() {
	var popValue = $(this).attr("data-seq");
	var cookieNM = "popCookie"+popValue;
	
//	setCookie(cookieNM, "hide", "1");
	setCookie(cookieNM, "hide");
	$("#popupNormal"+popValue).parent().remove();
});

$(function () {
	//전화번호(핸드폰) 유효성 체크
	function checkTelNo(txt) {
		if ( txt == "" ) return true;
		 var reg =/^\d{2,3}[\s)-]{1,2}\d{3,4}[)-]\d{4}$/;
		 return reg.test(txt);
	}
})
function CheckEMail (emailStr) 
{  
	// 전자메일 패턴. 사용자이름@도메인 의 형식을 검사함  
	var emailPat=/^(.+)@(.+)$/;
	// 포함되지 말아야할 특수문자들 ( ) < > @ , ; : \ " . [ ]  
	var specialChars="\\(\\)<>@,;:\\\\\\\"\\.\\[\\]";  
	// 포함될 수 있는 특수문자들 (나머지)  
	var validChars="\[^\\s" + specialChars + "\]";  
	// 아래의 경우는 사용자 이름에 따옴표가 있는 경우. RFC표준사항임  
	var quotedUser="(\"[^\"]*\")"; 
	// 도메인 대신 IP를 사용할 수있음  
	// 예를 들어 laday@[210.120.253.10]은 올바른 메일 주소 "[", "]"이 반드시 필요 
	var ipDomainPat=/^\[(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\]$/;  
	// 기본적인 아토믹에 해당됨  
	var atom=validChars + '+';  
	// 사용자로 사용될 수 있는 문자를 나타냄  
	var word="(" + atom + "|" + quotedUser + ")";  
	// 사용자의 패턴을 나타냄. 위의 워드가 .단위로 여러개 올 수있음  
	var userPat=new RegExp("^" + word + "(\\." + word + ")*$");  
	// 아래의 것은 일반적인 도메인 패턴에 해당됨  
	var domainPat=new RegExp("^" + atom + "(\\." + atom +")*$");  
	// @을 기준으로 사용자와 도메인으로 나눔. 편의를 위함  
	var matchArray=emailStr.match(emailPat);  
	if (matchArray==null) 
	{    
	// 두개 이상 또는 @이 아예 없는 경우   
		alert("메일주소 형식이 잘못되어 있습니다 (공백 및 @과 .을 확인해 보세요)");    
		return false; 
	}  
	var user=matchArray[1];  
	var domain=matchArray[2];  
	// 사용자 부분이 제대로 되었는지 검사  
	if (user.match(userPat)==null) 
	{    
		alert("메일 아이디가 올바르지 않습니다");    
		return false;  
	} 
	// 도메인 부분이 IP로 되어 있는 경우 
	var IPArray=domain.match(ipDomainPat);  
	if (IPArray!=null) 
	{    
		for (var i=1;i<=4;i++) 
		{      
			if (IPArray[i]>255) 
			{        
				alert("IP 주소 형식이 올바르지 않습니다");        
				return false;      
			}    
		}    
		return true;  
	}  
	// 도메인 이름이 심볼릭 네임인 경우 올바르지 않음  
	var domainArray=domain.match(domainPat);  
	if (domainArray==null) 
	{    
		alert("도메인 형식이 올바르지 않습니다");   
		return false; 
	}  
	// 도메인 형식 검사에 통과했더라도, 마지막 세개 또는 두개의 문자(com, net, kr등등)  
	// 까지 올바른지 검사. 최상위 도메인은 반드시 세글자 아니면 두 글자임  
	var atomPat=new RegExp(atom,"g");  
	var domArr=domain.match(atomPat);  
	var len=domArr.length;  
	if (domArr[domArr.length-1].length<2 ||    domArr[domArr.length-1].length>3) 
	{    
		alert("도메인 주소의 마지막 필드는 반드시 세글자 도메인 또는 두글자 나라이어야 합니다.");    
		return false; 
	}  
	// 호스트이름이 있는지 검사  
	if (len<2) 
	{    
		alert("호스트 이름이 존재하지 않습니다. 호스트 이름은 반드시 2글자 이상이어야 합니다");    
		return false;  
	}  
	
	return true;
}

// 영문유효성체크
function engErrChk(reqForm, reqMsg)
{
	var eng_check = /^[a-zA-Z]+$/;

	if(!eng_check.test(reqForm.value) )
	{
		if(reqMsg == null ) reqMsg = "";
		alert(reqMsg+"영문만 입력할 수 있습니다.");
		
		return false;
	}
	return true;
}


/*******************************************************************************
 * Date
 ******************************************************************************/
function setDateTextBox(param, startDateTextBoxId, endDateTextBoxId){
    var startDateTextBox = $(startDateTextBoxId);
    var endDateTextBox = $(endDateTextBoxId);

    var startDateParam = {
        onClose: function(dateText, inst) {
            if (endDateTextBox.val() != '' && startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datetimepicker('setDate', testStartDate);
            }

            endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
            endDateTextBox.datetimepicker('option', 'minDateTime', startDateTextBox.datetimepicker('getDate'));
        } ,
        onSelect: function (selectedDateTime){
            endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
            endDateTextBox.datetimepicker('option', 'minDateTime', startDateTextBox.datetimepicker('getDate'));
        }
    };

    startDateTextBox.datetimepicker($.extend(true, param, startDateParam));

    var endDateParam = {
        onClose: function(dateText, inst) {
            if (startDateTextBox.val() != '' && endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datetimepicker('getDate');
                var testEndDate = endDateTextBox.datetimepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datetimepicker('setDate', testEndDate);
            }

            startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
            startDateTextBox.datetimepicker('option', 'maxDateTime', endDateTextBox.datetimepicker('getDate'));
        },
        onSelect: function (selectedDateTime){
            startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
            startDateTextBox.datetimepicker('option', 'maxDateTime', endDateTextBox.datetimepicker('getDate'));
        }
    };

    endDateTextBox.datetimepicker($.extend(true, param, endDateParam));

    endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate'));
    endDateTextBox.datetimepicker('option', 'minDateTime', startDateTextBox.datetimepicker('getDate'));

    startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate'));
    startDateTextBox.datetimepicker('option', 'maxDateTime', endDateTextBox.datetimepicker('getDate'));
}


/*******************************************************************************
 * Date 시간까지
 ******************************************************************************/
function setDateTextBox2(param, startDateTextBoxId, endDateTextBoxId){
    var startDateTextBox = $(startDateTextBoxId);
    var endDateTextBox = $(endDateTextBoxId);

    var startDateParam = {
        onClose: function(dateText, inst) {
            if (endDateTextBox.val() != '' && startDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    endDateTextBox.datepicker('setDate', testStartDate);
            }

            endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
            //endDateTextBox.datepicker('option', 'minDateTime', startDateTextBox.datepicker('getDate'));
        } ,
        onSelect: function (selectedDateTime){
            endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
            //endDateTextBox.datepicker('option', 'minDateTime', startDateTextBox.datepicker('getDate'));
        }
    };

    startDateTextBox.datepicker($.extend(true, param, startDateParam));

    var endDateParam = {
        onClose: function(dateText, inst) {
            if (startDateTextBox.val() != '' && endDateTextBox.val() != '') {
                var testStartDate = startDateTextBox.datepicker('getDate');
                var testEndDate = endDateTextBox.datepicker('getDate');
                if (testStartDate > testEndDate)
                    startDateTextBox.datepicker('setDate', testEndDate);
            }

            startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
            //startDateTextBox.datepicker('option', 'maxDateTime', endDateTextBox.datepicker('getDate'));
        },
        onSelect: function (selectedDateTime){
            startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
            //startDateTextBox.datepicker('option', 'maxDateTime', endDateTextBox.datepicker('getDate'));
        }
    };

    endDateTextBox.datepicker($.extend(true, param, endDateParam));

    //endDateTextBox.datepicker('option', 'minDate', startDateTextBox.datepicker('getDate'));
    //endDateTextBox.datepicker('option', 'minDateTime', startDateTextBox.datepicker('getDate'));

    //startDateTextBox.datepicker('option', 'maxDate', endDateTextBox.datepicker('getDate'));
    //startDateTextBox.datepicker('option', 'maxDateTime', endDateTextBox.datepicker('getDate'));
}


// 국민신고문 iframe 출력 관련 시작
function getWhich(name)
{
	if (!document.getElementById&&!document.all) {
		return;
	}

	if (document.getElementById) {
		oWhich = eval ("document.getElementById('" + name + "')");
	} else {
		oWhich = eval ("document.all." + name );
	}

	return 	oWhich;
}

function showHide(name, show){ //show = 0(hide) or 1(show)
	 oWhich = getWhich(name);

	if (!oWhich) {
		return;
	}

	if (show) {
		oWhich.style.display='';
	}
	else {
		oWhich.style.display='none';
	}
}
function multiShowHide(shows, hidies) {

	showNames = shows.split(',');
	hideNames = hidies.split(',');

	for (i=0; i<showNames.length; i++) {
		showHide(showNames[i], 1);
	}
	for (i=0; i<hideNames.length; i++) {
		showHide(hideNames[i], 0);
	}
}

// 엔터 체크	
function pressCheck() {   
	if (event.keyCode == 13) {
		return doSearch();
	}else{
		return false;
	}
}

// 검색
function doSearch() {
	var searchForm = document.search; 

	if (searchForm.query.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.query.focus();
		return false;
	}
	
	searchForm.collection.value = "ALL";
	searchForm.submit();
}

/*function openDetail(reqType, num){
	window.open("/${ctx}/ad/ftaCnvn/ftaViewTrtyFormat.do?imgNm="+reqType+"&imgCnt="+num, 'certity', 'width=730, height=768, toolbasrno, scrollbars=1, status=0');
}*/

$(function () {
	$('.ftaCnvnDown > tr > td').on("click" , function(){
		var reqType = $(this).children().attr("reqtype");
		var num = $(this).children().attr("num");
		
		if(reqType && num) {
			window.open("/ftaportalkor/ad/ftaCnvn/ftaViewTrtyFormat.do?imgNm="+reqType+"&imgCnt="+num, 'certity', 'width=730, height=768, toolbasrno, scrollbars=1, status=0');
		}
	});
});



var scale = 1;
 
function scaleIn() {
scale *= 1.03;
zoom(scale);
}
 
function scaleOut() {
scale /= 1.03;
zoom(scale);
}

function scaleInit() {
scale = 1;
zoom(scale);
}
 
function zoom(scale) {

	var wrap = document.getElementById("wrap");
	wrap.style.zoom = scale;  // IE
	wrap.style.webkitTransform = 'scale('+scale+')';  // Webkit(chrome)
	wrap.style.webkitTransformOrigin = '0 0';
	wrap.style.mozTransform = 'scale('+scale+')';  // Mozilla(firefox)
	wrap.style.mozTransformOrigin = '0 0';
	wrap.style.oTransform = 'scale('+scale+')';  // Opera
	wrap.style.oTransformOrigin = '0 0';
}

//휴대품 예상세액조회 호출
function taxOpen(){
	window.open("/kcs/ad/tax/ItemTaxCalculation.do","taxView", "directories=no, width=870, height=850, toolbar=no, scrollbars=yes, resizeable=no, target=new");
	return false;
}

//이사화물 예상세액조회 호출
function carTaxOpen(){
	window.open("/kcs/ad/tax/CarTaxCalculation.do","taxView", "directories=no, width=870, height=850, toolbar=no, scrollbars=yes, resizeable=no, target=new");
	return false;
}


//해외직구 예상세액조회 호출
function buyOpen(){
	window.open("/kcs/ad/tax/BuyTaxCalculation.do","taxView", "directories=no, width=870, height=850, toolbar=no, scrollbars=yes, resizeable=no, target=new");
	return false;
}
//국민의나라 정의로운 대한민국
/*function open_govindex(){
	window.open("/images/web/common/sub/govindex.jpg","govView", "directories=no, width=400, height=530, toolbar=no, scrollbars=yes, resizeable=no, target=new");
	return false;
}*/
function open_govindex(){
	window.open("/upload/govindex.html","govView", "directories=no, width=400, height=534, toolbar=no, scrollbars=no, resizeable=no, target=new");
	return false;
}

//메인 팝업존 공공기관 청렴도 측정결과 팝업
function cleanPop(){
    	window.open("/upload/cleanResultPop_20200101.html", "청렴도 측정결과", "width=700, height=300, top=100, left=600, scrollbars=no, menubar=no, toolbar=no, location=no, status=no");
		return false;
}

//PDF뷰어 . 이파피루스 . epapyrus. pdfviewer pdf viewer 
function viewer(url){
	var url = url;
 console.log(url);
 
 $.ajax({
    method : 'GET',
    url : url,
    dataType : 'jsonp',
    success: function(e) {
        console.log(e);
    },
    error : function(e) {
        console.log(e);
    }
	});
}

function viewCallback(data) {
	data.url;
	data.status;
	console.log(data);
	if (data.status === "SUCCESS") {
		window.open("https://www.customs.go.kr/streamdocs/view/sd;streamdocsId="+data.url);
	}
}