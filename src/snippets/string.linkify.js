

function linkify(inputText, options) {   
	this.options = {linkClass: 'url', targetBlank: true, 
					styles :'background-color:yellow;', styles2:'position: relative; padding: 2px; margin: -2px; background-color: #FFDE00; box-shadow: 0 2px 2px #ccc; -moz-box-shadow: 0 2px 2px #ccc; -webkit-box-shadow: 0 2px 2px #ccc; border-radius: 5px;'};
	this.options = $.extend(this.options, options);
	inputText = inputText.replace(/\u200B/g, "");

	/* URLs starting with http://, https://, or ftp://	*/
	var replacePattern1 = /(src="|href="|">|\s>)?(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
	/* URLS starting with www and not the above */
	var replacePattern2 = /(src="|href="|">|\s>|https?:\/\/|ftp:\/\/)?www\.[-A-Z0-9+&@#\/%?=~_|!:,.;ï]*[-A-Z0-9+&@#\/%=~_|ï]/gim;
		
	var replacedText = inputText.replace(replacePattern1, function($0,$1){
			return $1 ? $0:'<span style="'+ this.options.styles2 + '">' + $0 + '</span>';
		});

	var replacedText = replacedText.replace(replacePattern2, function($0,$1){ 
			return $1 ? $0:'<span style="'+ this.options.styles2 + '">' + $0 + '</span>';
		});

	return replacedText;
}

$('div.disclaimer-content').each(function(){
	$(this).html(linkify($(this).html()));
});

console.log(linkify('www.siriusxm.com hey there http://www.siriusxm.com <a class="url" href="http://www.siriusxm.com"target="_blank">http://www.siriusxm.com</a>'));