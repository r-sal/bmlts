/**
 * This will make all of the popup boxes on a class page visible by placing
 * it below each tout.
 * @author RDS
 * @version 6.14.2012
 */ 
String.prototype.toArray = function() { return this.split(' '); }
String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g,""); }

var styles = {'width':'250px', 'float':'left', 'margin':'0px 5px 15px 5px', 'background-color':'#FFFFFF', 'padding':'15px 5px', 'color':'#000000'};
var cssStyles = '.insertedPopup{background-color:#99CCFF; }';
$('<style>'+cssStyles+'</style>').appendTo($('head'));

var w = parseInt($('#features-wrap li').first().width());
$('.insertedPopup').remove();

$('ul#features-wrap li').each(function(index){
	var li = $(this),
		newli = $('<li></li>'),	
		txt = $(this).find('.text'),
		copy = txt.find('p').not('.clearer').first();
		
		li.after(newli);
		
	copy.find('span').each(function(index){
		var classes = $(this).attr('class'),
			classArr = classes.trim().toArray(),
			popupId;
							
		if(classArr.length == 2){
			popupId = classes.split('feature-highlight fl-');
			var popup = $("div#" + popupId[1]),
				cont = $('<div></div>');			
					
			cont.addClass('insertedPopup')
				.css(styles)
				.html(popup.find('.highlight-cell').clone());
			
			if(jQuery.inArray("highlight", popupId[1].split('-')) != -1){
				cont.css({'background':'#bcd4e6'});
			}
			
			cont.appendTo(newli)
		}
	});
	
	autoHeight(newli.children());
});





function autoHeight(children){
	if(children.length > 0){
		var maxHeight = 0;
		children.each(function(){
			var h = parseInt($(this).css('height'));
			maxHeight = (h > maxHeight) ? h : maxHeight;
			console.log(h, maxHeight);
		});
		
		children.css({'height': maxHeight + 'px'});
	}
}
