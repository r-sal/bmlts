/** * Displays the site share information in a popup window. */var sm = window.mb.socialMedia,     win = window.open('', 'Social Media', 'status=1,height=600,width=500');    for (var k in sm) {    if(k == 'element' || k == 'assetTitle'){ continue; }    str = sm[k];    str = (k == 'image') ? '<img src="'+sm[k]+'" />' : str;    str = (k == 'url') ? '<a href="'+sm[k]+'" target="_blank">'+sm[k]+'</a>' : str;        $('<p><b>'+k+'</b><br>'+str+'</p>').appendTo($(win.document).find('body'));}