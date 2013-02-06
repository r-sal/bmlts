var disclaimerStyle = {color: "#009900", padding: "10px", border: "1px solid #336633", margin: "10px 0", width: "95%"};
var nameStyle = {color:"#000000",padding: "10px 15px",border: "1px solid #0000FF", margin:"10px 0","background-color":"#FFFFFF",bottom:"0",right:"0", position: "absolute", "font-size": "14px","line-height": "1em"};

function correctFilename(a) {
	if (a === null || a.length === 0) { return null; }
	var b = a.split("/");
	a = b[b.length - 1].split("?");
	return a[0];
}

function getModalImage() {
	if ($("p.appendedFilename").length === 0) {
		var hero = $("div.hero"),
			a = hero.find("img").attr("src"),
			alt = hero.find("img").attr("alt"),
			b = correctFilename(a);
			
		$("<p></p>")
			.html(b +'<br><span style="padding:10px 0 0;color:blue;">'+alt+'</span>')
			.addClass("appendedFilename").css(nameStyle)
			.appendTo($("div.hero").css({position:"relative"}))
	} else {
		$("p.appendedFilename").remove()
	}
}
function appendModalDisclaimer() {
	var fdisclaimer = $("#feature-disclaimer");
	
	if ($("p.appendedDisclaimer").length === 0) {
		var a = $(".highlight-overlay").find("p");
		if (a.length == 0) { return false }
				
		$("<p></p>").html(a.html())
			.addClass("appendedDisclaimer")
			.css(disclaimerStyle)
			.appendTo($(".feature-body"));
			
		fdisclaimer.hide();
		
	} else {
		$("p.appendedDisclaimer").remove();
		fdisclaimer.show();
	}
}

//window.mb.byo2.vehicleOptions['0:401']

function getThumb(){
	var id = $('.modal-container').find('.hero').attr('id').replace('feature-hero-','');
	console.log(window.mb.byo2.vehicleOptions[id]);
}


function init(){
    if($('.modal-container').length > 0){
		$("body").unbind("DOMSubtreeModified", init);
		getModalImage();
		appendModalDisclaimer();	
		getThumb();		
		$("body").bind("DOMSubtreeModified", init);		
	}
}

$("body").bind("DOMSubtreeModified", init);

