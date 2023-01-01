﻿
var curName = "이건우";
var curEngName = "Gunwoo Lee";
var curEmail = "abc@aply.biz";
var curNumber = "+82-10-1234-1234";
var curTitle = "CEO/CTO";

function setSign() {
	
		$("#form_name").on("keyup", function() {
				curName = $(this).val();
	  		processChange();
		});
		
		$("#form_engname").on("keyup", function() {
	    	curEngName = $(this).val();
	  		processChange();
		});
		
		$("#form_email").on("keyup", function() {
	    	curEmail = $(this).val();
	  		processChange();
		});
		
		$("#form_number").on("keyup", function() {
	    	curNumber = $(this).val();
	  		processChange();
		});
	
		$("#form_title").on("keyup", function() {
	    	curTitle = $(this).val();
	  		processChange();
		});
		
		processChange();
}


function processChange() {
	
	var sigStr = '<font style="font-size: x-small; font-family: arial, sans-serif;" color="#777"><br><font color="#ddd" size="1">____________________________________________</font><br><br><br>'
					+ '&nbsp;&nbsp;<font size="2"><strong>' + curName + ' (' + curEngName + ')</strong>&nbsp;&nbsp;<font color="#8e7cc3">|</font>&nbsp;&nbsp;' + curTitle + '</font>'
					+ '<br>&nbsp;&nbsp;<font color="#8e7cc3"><strong>M</strong></font>&nbsp;'
          			+ curNumber + '&nbsp;&nbsp;<font color="#8e7cc3">|</font>&nbsp;&nbsp<font color="#8e7cc3"><strong>E</strong></font>&nbsp;&nbsp;<a href="mailto:'
          			+ curEmail + '" target="_blank" style="color:#777">' + curEmail + '</a><br><br><br>'
					+ '&nbsp;&nbsp;ADVANCED PLATFORM TO FLY<br>'
            		+ '&nbsp;&nbsp;<strong><font size="2" color="#777">주식회사 어플라이 <font color="#8e7cc3">|</font> APLY Inc.</font></strong><br>&nbsp;&nbsp;<font color="#8e7cc3"><strong>T</strong></font>&nbsp;+82-2-6956-0801&nbsp;&nbsp;'
            		+ '<font color="#8e7cc3">|</font>&nbsp;&nbsp;<font color="#8e7cc3"><strong>H</strong></font>&nbsp;&nbsp;<a href="http://aply.biz/" target="_blank"><font color="#777">www.aply.biz</font></a><br>'
            		+ '<br>&nbsp;&nbsp;10915 <font color="#8e7cc3">|</font> 6F, 24-21,&nbsp;Geumbit-ro, Paju-si,<br>&nbsp;&nbsp;Gyeonggi-do, Republic of Korea<br><br>&nbsp;&nbsp;'
					+ '<table border="0" cellpadding="0" cellspacing="0" width="220px"><tr><td width="110px" align="left" valign="center"><a href="https://aply.biz/" target="_blank"><img src="https://home.aply.biz/assets/images/logo.png" width="96" height="30"/></a></td>'
					+ '<td width="1" bgcolor="#8e7cc3"></td>'
					+ '<td align="center" valign="center"><a href="https://aplx.aply.biz/" target="_blank"><img src="https://home.aply.biz/symbol/images/aplx_og_image.png" width="48" height="48"/></a></td>'
					+ '<td align="center" valign="center"><a href="https://aplx.aply.biz/aqr" target="_blank"><img src="https://home.aply.biz/symbol/images/aqr_squre2.png" width="48" height="48"/></a>'
					+ '</td></tr></table>'
            		+ '<br><br><font color="#ddd" size="1">____________________________________________</font></font>';
	
	//alert(sigStr);
	$("#sign_field").html(sigStr);
}