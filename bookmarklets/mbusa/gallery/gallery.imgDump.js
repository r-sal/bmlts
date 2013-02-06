/* Outputs all gallery image names to console */
$('#uxp2-gallery-container').find('ul').find('li').each(function(){
	var li = $(this);
	if(li.attr('class').length > 0){
		var src = li.find('img').attr('src').split('/');
		console.log(src[src.length-1]);
	}else{
		console.log(li.find('img').attr('alt'));
	}
});