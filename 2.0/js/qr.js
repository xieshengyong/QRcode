jQuery(function(){
	$("#btn_gen").live("click",function(){
		jQuery('#qrDiv').html("");
		jQuery('#qrDiv').qrcode({
			text	: $("#qr_website").val()	//根据辞串生成第一个二维码
		});
	});
	
	window.version_m=2.1;
	if(localStorage["version_m"]!=window.version_m){
	    chrome.tabs.create({selected:true,url:"annou.html"})
	    localStorage["version_m"]=window.version_m
	}
	
	$("#qr_a").click(function(){
		window.location.href="http://www.qq24h.com";
	});
});

chrome.tabs.getSelected(null,function(w){
jQuery('#qrDiv').qrcode({
			text	: w.url,
			width:"160",
			height:"160"
		});
		// $("#qr_webname").val(w.title);
		// $("#qr_website").val(w.url);
})