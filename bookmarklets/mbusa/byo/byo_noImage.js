/**
 * When a feature cannot be view due to no image, this will make it possible to click those 
 * features and view the text in a popup window.
 * @author RDS
 * @version 6.28.2012
 */ 
String.prototype.trim = function()  { return this.replace(/^\s+|\s+$/g,""); }
String.prototype.toArray = function() { return this.split(" "); }

var realUrl = null;
var styles = "h1{ font-size: 1.2em; margin: 0; padding: 0; } #wrapps{ padding: 10px; max-width: 650px; margin: 0 auto; } p{margin: 0; padding: 0px; } a.close-modal{ display: none; }";

var burl = $('.options-accessories').find('.option-with-image').find('a').attr('href');
burl = burl.split('/');
burl = burl.slice(0,burl.length-1).join('/');
burl = burl + '/';
var baseurl = burl;


$('.options-accessories').find('.option').each(function(){	
	var endurl = "?modal=true&type=type8";
	
	if(!$(this).is('.option-with-image')){	
		var classes = $(this).attr('class').toArray();
		var label = $(this).find('label');
		var label_txt = label.text().trim();
		var optId = classes.slice(classes.length-1, classes.length);
		optId = optId[0].replace("option-", "optionId-");
		
		var newurl = baseurl + optId + endurl;
		var newA = $("<a></a>").attr("href", newurl).html(label_txt);
		$(this).find("label").html(newA);
		
		newA.click(function(e){
			e.preventDefault();
			var theUrl = $(this).attr('href');
			var win = window.open("", "myWindow", "status = 1, height = 300, width = 750, resizable = 0" );
			var tmp = win.document;
			tmp.write("<html><head><title>popup</title><style>"+styles+"</style></head><body>");
			tmp.write("<div id=\"wrapps\"></div>");
			tmp.write("</body></html>");
			tmp.close();
			$(tmp).find("#wrapps").load(theUrl, function(response, status, xhr) {});			

			return true;
		});
	}
});